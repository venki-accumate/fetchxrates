import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

export interface ApiParameter {
  name: string;
  in: string;
  required: boolean;
  type: string;
  format?: string;
  default?: string;
  description: string;
}

export interface RequestBodyField {
  type: string;
  required: boolean;
  description: string;
  format?: string;
}

export interface RequestBody {
  contentType: string;
  schema: Record<string, RequestBodyField>;
}

export interface SampleRequest {
  url: string;
  body?: Record<string, any>;
}

export interface SampleResponse {
  status: number;
  body: any;
}

export interface ErrorResponse {
  status: number;
  description: string;
}

export interface ApiEndpoint {
  id: string;
  method: string;
  path: string;
  summary: string;
  description: string;
  parameters?: ApiParameter[];
  requestBody?: RequestBody;
  sampleRequest?: SampleRequest;
  sampleRequestWithDate?: SampleRequest;
  sampleResponse?: SampleResponse;
  errorResponses?: ErrorResponse[];
}

export interface ApiDocs {
  title: string;
  baseUrl: string;
  version: string;
  description: string;
  authentication: {
    required: boolean;
    type: string;
    headers: Record<string, string>;
    notes: string;
  };
  dateFormat: string;
  dateParameters: {
    description: string;
    options: { params: string; description: string }[];
  };
  endpoints: ApiEndpoint[];
  rateDataNotes?: {
    dataSources?: string;
    weekendsAndHolidays?: string;
    precision?: string;
    crossRates?: string;
  };
}

interface CurlCommand {
  id: string;
  name: string;
  curl: string;
}

interface CurlCollection {
  description: string;
  baseUrl: string;
  commands: CurlCommand[];
}

const ENDPOINT_GROUPS = [
  { label: 'Rates', icon: 'trending_up', ids: ['publication', 'rates', 'statistics'] },
  { label: 'Conversion', icon: 'currency_exchange', ids: ['convert', 'convert-multiple'] },
  { label: 'Reference Data', icon: 'dataset', ids: ['currencies', 'base-currencies'] },
  { label: 'System', icon: 'settings', ids: ['metadata', 'docs', 'healthcheck'] },
];

export type Section = 'introduction' | 'quickstart' | 'authentication' | 'dates' | 'rate-limits' | 'important' | 'endpoint';
export type CodeLang = 'curl' | 'javascript' | 'python' | 'php';

@Component({
  selector: 'app-api-spec',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './api-spec.component.html',
  styleUrl: './api-spec.component.scss',
})
export class ApiSpecComponent implements OnInit {
  docs = signal<ApiDocs | null>(null);
  curlCommands = signal<CurlCommand[]>([]);
  activeSection = signal<Section>('introduction');
  activeEndpointId = signal<string>('rates');
  activeCodeLang = signal<CodeLang>('curl');
  copiedId = signal<string | null>(null);

  readonly groups = ENDPOINT_GROUPS;
  readonly codeLangs: CodeLang[] = ['curl', 'javascript', 'python', 'php'];
  readonly codeLangLabels: Record<CodeLang, string> = {
    curl: 'cURL',
    javascript: 'JavaScript',
    python: 'Python',
    php: 'PHP',
  };

  activeEndpoint = computed(() => {
    const d = this.docs();
    if (!d) return null;
    return d.endpoints.find(e => e.id === this.activeEndpointId()) ?? null;
  });

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<ApiDocs>('assets/rate-api-docs.json').subscribe({
      next: data => this.docs.set(data),
      error: err => console.error('[ApiSpec] Failed to load docs JSON', err),
    });
    this.http.get<CurlCollection>('assets/curl-commands.json').subscribe({
      next: data => this.curlCommands.set(data.commands ?? []),
      error: err => console.error('[ApiSpec] Failed to load curl commands', err),
    });
  }

  selectSection(section: Section): void {
    this.activeSection.set(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  selectEndpoint(id: string): void {
    this.activeEndpointId.set(id);
    this.activeSection.set('endpoint');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  setCodeLang(lang: CodeLang): void {
    this.activeCodeLang.set(lang);
  }

  getEndpointsForGroup(group: typeof ENDPOINT_GROUPS[number]): ApiEndpoint[] {
    const d = this.docs();
    if (!d) return [];
    return d.endpoints.filter(e => group.ids.includes(e.id));
  }

  methodColor(method: string): string {
    return method === 'GET' ? 'method-get' : 'method-post';
  }

  statusColor(status: number): string {
    if (status >= 200 && status < 300) return 'status-2xx';
    if (status >= 400 && status < 500) return 'status-4xx';
    return 'status-5xx';
  }

  formatJson(value: any): string {
    return JSON.stringify(value, null, 2);
  }

  copyToClipboard(text: string, key: string): void {
    navigator.clipboard.writeText(text).then(() => {
      this.copiedId.set(key);
      setTimeout(() => this.copiedId.set(null), 2000);
    });
  }

  schemaEntries(schema: Record<string, RequestBodyField>): [string, RequestBodyField][] {
    return Object.entries(schema);
  }

  resolveUrlPublic(ep: ApiEndpoint): string {
    return this.resolveUrl(ep);
  }

  downloadAsset(assetPath: string, filename: string): void {
    this.http.get(assetPath, { responseType: 'blob' }).subscribe({
      next: blob => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
        URL.revokeObjectURL(url);
      },
    });
  }

  getCurlForEndpoint(epId: string): string | null {
    const cmds = this.curlCommands();
    const match = cmds.find(c => c.id === epId || c.id.startsWith(epId));
    return match?.curl ?? null;
  }

  authCodeSample(lang: CodeLang): string {
    const url = `${this.docs()?.baseUrl ?? 'https://api.fetchxrates.com/api'}/rates?from=AUD&to=USD`;
    switch (lang) {
      case 'curl':
        return `curl -X GET \\\n  "${url}" \\\n  -H "x-api-key: YOUR_API_KEY" \\\n  -H "x-email: you@example.com"`;
      case 'javascript':
        return `const response = await fetch("${url}", {\n  headers: {\n    "x-api-key": "YOUR_API_KEY",\n    "x-email": "you@example.com"\n  }\n});\nconst data = await response.json();\nconsole.log(data);`;
      case 'python':
        return `import requests\n\nresponse = requests.get(\n    "${url}",\n    headers={\n        "x-api-key": "YOUR_API_KEY",\n        "x-email": "you@example.com"\n    }\n)\ndata = response.json()\nprint(data)`;
      case 'php':
        return `<?php\n$ch = curl_init();\ncurl_setopt($ch, CURLOPT_URL, "${url}");\ncurl_setopt($ch, CURLOPT_HTTPHEADER, [\n    "x-api-key: YOUR_API_KEY",\n    "x-email: you@example.com"\n]);\ncurl_setopt($ch, CURLOPT_RETURNTRANSFER, true);\n$response = curl_exec($ch);\ncurl_close($ch);\n$data = json_decode($response, true);\nprint_r($data);\n?>`;
    }
  }

  generateCodeSampleAlt(ep: ApiEndpoint, lang: CodeLang): string {
    if (!ep.sampleRequestWithDate) return '';
    const altEp = { ...ep, sampleRequest: ep.sampleRequestWithDate };
    return this.generateCodeSample(altEp as ApiEndpoint, lang);
  }

  private resolveUrl(ep: ApiEndpoint): string {
    const raw = ep.sampleRequest?.url ?? ep.path;
    const pathPart = raw.includes(' ') ? raw.split(' ').slice(1).join(' ') : raw;
    const base = this.docs()?.baseUrl ?? '';
    const domain = base.replace(/\/api.*$/, '');
    return domain + pathPart;
  }

  generateCodeSample(ep: ApiEndpoint, lang: CodeLang): string {
    if (lang === 'curl') {
      const realCurl = this.getCurlForEndpoint(ep.id);
      if (realCurl) return realCurl;
    }

    const url = this.resolveUrl(ep);
    const method = ep.method;
    const body = ep.sampleRequest?.body;
    const isPublic = ep.id === 'docs' || ep.id === 'healthcheck';

    switch (lang) {
      case 'curl': {
        const lines: string[] = [`curl -X ${method} \\`, `  "${url}"`];
        if (!isPublic) {
          lines[lines.length - 1] += ' \\';
          lines.push(`  -H "x-api-key: YOUR_API_KEY" \\`);
          lines.push(`  -H "x-email: you@example.com"`);
        }
        if (body) {
          lines[lines.length - 1] += ' \\';
          lines.push(`  -H "Content-Type: application/json" \\`);
          lines.push(`  -d '${JSON.stringify(body)}'`);
        }
        return lines.join('\n');
      }

      case 'javascript': {
        const hdrs: string[] = [];
        if (!isPublic) {
          hdrs.push(`    "x-api-key": "YOUR_API_KEY"`);
          hdrs.push(`    "x-email": "you@example.com"`);
        }
        if (body) hdrs.push(`    "Content-Type": "application/json"`);
        const opts: string[] = [];
        if (method !== 'GET') opts.push(`  method: "${method}",`);
        if (hdrs.length) opts.push(`  headers: {\n${hdrs.join(',\n')}\n  }`);
        if (body) opts.push(`  body: JSON.stringify(${JSON.stringify(body, null, 2).split('\n').join('\n  ')})`);
        const optsStr = opts.length ? `, {\n${opts.join(',\n')}\n}` : '';
        return `const response = await fetch("${url}"${optsStr});\nconst data = await response.json();\nconsole.log(data);`;
      }

      case 'python': {
        const [base, qs] = url.split('?');
        const params: Record<string, string> = {};
        if (qs) qs.split('&').forEach(p => { const [k, v] = p.split('='); if (k) params[k] = decodeURIComponent(v ?? ''); });
        const lines: string[] = ['import requests', ''];
        lines.push(`response = requests.${method.toLowerCase()}(`);
        lines.push(`    "${base}",`);
        if (body) {
          if (!isPublic) {
            lines.push(`    headers={`);
            lines.push(`        "x-api-key": "YOUR_API_KEY",`);
            lines.push(`        "x-email": "you@example.com",`);
            lines.push(`        "Content-Type": "application/json"`);
            lines.push(`    },`);
          }
          lines.push(`    json=${JSON.stringify(body, null, 4).split('\n').join('\n    ')}`);
        } else {
          const hasParams = Object.keys(params).length > 0;
          if (!isPublic) {
            lines.push(`    headers={`);
            lines.push(`        "x-api-key": "YOUR_API_KEY",`);
            lines.push(`        "x-email": "you@example.com"`);
            lines.push(`    }${hasParams ? ',' : ''}`);
          }
          if (hasParams) lines.push(`    params=${JSON.stringify(params)}`);
        }
        lines.push(')');
        lines.push('data = response.json()');
        lines.push('print(data)');
        return lines.join('\n');
      }

      case 'php': {
        const hdrs: string[] = [];
        if (!isPublic) {
          hdrs.push(`    "x-api-key: YOUR_API_KEY"`);
          hdrs.push(`    "x-email: you@example.com"`);
        }
        if (body) hdrs.push(`    "Content-Type: application/json"`);
        const lines: string[] = ['<?php', '$ch = curl_init();', `curl_setopt($ch, CURLOPT_URL, "${url}");`];
        if (method !== 'GET') lines.push(`curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "${method}");`);
        if (hdrs.length) lines.push(`curl_setopt($ch, CURLOPT_HTTPHEADER, [\n${hdrs.join(',\n')}\n]);`);
        if (body) lines.push(`curl_setopt($ch, CURLOPT_POSTFIELDS, '${JSON.stringify(body)}');`);
        lines.push('curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);', '$response = curl_exec($ch);', 'curl_close($ch);', '$data = json_decode($response, true);', 'print_r($data);', '?>');
        return lines.join('\n');
      }
    }
  }
}

