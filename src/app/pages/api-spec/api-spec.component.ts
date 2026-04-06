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

export interface ApiAuthentication {
  required: boolean;
  type: string;
  header: string;
  notes: string;
}

export interface RateDataNotes {
  dataSources?: string;
  weekendsAndHolidays?: string;
  precision?: string;
  crossRates?: string;
}

export interface ApiDocs {
  title: string;
  baseUrl: string;
  version: string;
  description: string;
  authentication: ApiAuthentication;
  endpoints: ApiEndpoint[];
  rateDataNotes?: RateDataNotes;
}

/** Maps endpoint ids to groups for the sidebar navigation. */
const ENDPOINT_GROUPS = [
  {
    label: 'Rates',
    icon: 'trending_up',
    ids: ['latest', 'history'],
  },
  {
    label: 'Conversion',
    icon: 'currency_exchange',
    ids: ['convert', 'convert-multiple'],
  },
  {
    label: 'Reference Data',
    icon: 'dataset',
    ids: ['currencies', 'supported-currencies', 'base-currencies'],
  },
  {
    label: 'System',
    icon: 'settings',
    ids: ['metadata', 'docs', 'healthcheck'],
  },
];

export type Section = 'introduction' | 'quickstart' | 'authentication' | 'important' | 'endpoint';
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
  activeSection = signal<Section>('introduction');
  activeEndpointId = signal<string>('latest');
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

  /** Public alias for use in template (private methods aren't accessible from template). */
  resolveUrlPublic(ep: ApiEndpoint): string {
    return this.resolveUrl(ep);
  }

  /** Code sample for the Authentication section showing how to set the Bearer header. */
  authCodeSample(lang: CodeLang): string {
    const base = this.docs()?.baseUrl ?? 'https://uapi.fetchxrates.com/api';
    const url = base.replace(/\/api.*$/, '') + '/api/latest?base=USD';
    const token = 'YOUR_JWT_TOKEN';
    switch (lang) {
      case 'curl':
        return `curl -X GET \\\n  "${url}" \\\n  -H "Authorization: Bearer ${token}"`;
      case 'javascript':
        return `const response = await fetch(\n  "${url}",\n  {\n    headers: {\n      "Authorization": "Bearer ${token}"\n    }\n  }\n);\nconst data = await response.json();\nconsole.log(data);`;
      case 'python':
        return `import requests\n\nresponse = requests.get(\n    "${url}",\n    headers={"Authorization": "Bearer ${token}"}\n)\ndata = response.json()\nprint(data)`;
      case 'php':
        return `<?php\n$ch = curl_init();\ncurl_setopt($ch, CURLOPT_URL, "${url}");\ncurl_setopt($ch, CURLOPT_HTTPHEADER, [\n    "Authorization: Bearer ${token}"\n]);\ncurl_setopt($ch, CURLOPT_RETURNTRANSFER, true);\n$response = curl_exec($ch);\ncurl_close($ch);\n$data = json_decode($response, true);\nprint_r($data);\n?>`;
    }
  }

  /** Code sample for the alternate (with-date) sample request variant. */
  generateCodeSampleAlt(ep: ApiEndpoint, lang: CodeLang): string {
    if (!ep.sampleRequestWithDate) return '';
    const altEp = { ...ep, sampleRequest: ep.sampleRequestWithDate };
    return this.generateCodeSample(altEp as ApiEndpoint, lang);
  }

  /** Builds the absolute URL for a given endpoint's sample request. */
  private resolveUrl(ep: ApiEndpoint): string {
    const raw = ep.sampleRequest?.url ?? ep.path;
    // raw may be "GET /api/latest?base=AUD" — strip the method verb if present
    const pathPart = raw.includes(' ') ? raw.split(' ').slice(1).join(' ') : raw;
    // base domain = everything up to (but not including) the first /api path segment
    const base = this.docs()?.baseUrl ?? '';
    const domain = base.replace(/\/api.*$/, '');
    return domain + pathPart;
  }

  generateCodeSample(ep: ApiEndpoint, lang: CodeLang): string {
    const url = this.resolveUrl(ep);
    const method = ep.method;
    const body = ep.sampleRequest?.body;
    const token = 'YOUR_JWT_TOKEN';

    switch (lang) {
      case 'curl': {
        const lines: string[] = [
          `curl -X ${method} \\`,
          `  "${url}" \\`,
          `  -H "Authorization: Bearer ${token}"`,
        ];
        if (body) {
          lines[lines.length - 1] += ' \\';
          lines.push(`  -H "Content-Type: application/json" \\`);
          lines.push(`  -d '${JSON.stringify(body)}'`);
        }
        return lines.join('\n');
      }

      case 'javascript': {
        const hdrs = [`    "Authorization": "Bearer ${token}"`];
        if (body) hdrs.push(`    "Content-Type": "application/json"`);
        const opts: string[] = [];
        if (method !== 'GET') opts.push(`    method: "${method}"`);
        opts.push(`    headers: {\n${hdrs.join(',\n')}\n    }`);
        if (body) {
          const bodyStr = JSON.stringify(body, null, 2).split('\n').join('\n    ');
          opts.push(`    body: JSON.stringify(${bodyStr})`);
        }
        return [
          `const response = await fetch(`,
          `  "${url}",`,
          `  {`,
          opts.map(o => '  ' + o).join(',\n'),
          `  }`,
          `);`,
          `const data = await response.json();`,
          `console.log(data);`,
        ].join('\n');
      }

      case 'python': {
        const [base, qs] = url.split('?');
        const params: Record<string, string> = {};
        if (qs) {
          qs.split('&').forEach(p => {
            const [k, v] = p.split('=');
            if (k) params[k] = decodeURIComponent(v ?? '');
          });
        }
        const lines: string[] = ['import requests', ''];
        const verb = method.toLowerCase();
        lines.push(`response = requests.${verb}(`);
        lines.push(`    "${base}",`);
        if (body) {
          lines.push(`    headers={`);
          lines.push(`        "Authorization": "Bearer ${token}",`);
          lines.push(`        "Content-Type": "application/json"`);
          lines.push(`    },`);
          lines.push(`    json=${JSON.stringify(body, null, 4).split('\n').join('\n    ')}`);
        } else {
          const hasParams = Object.keys(params).length > 0;
          lines.push(`    headers={"Authorization": "Bearer ${token}"}${hasParams ? ',' : ''}`);
          if (hasParams) lines.push(`    params=${JSON.stringify(params)}`);
        }
        lines.push(')');
        lines.push('data = response.json()');
        lines.push('print(data)');
        return lines.join('\n');
      }

      case 'php': {
        const hdrs = [`    "Authorization: Bearer ${token}"`];
        if (body) hdrs.push(`    "Content-Type: application/json"`);
        const lines: string[] = [
          '<?php',
          '$ch = curl_init();',
          `curl_setopt($ch, CURLOPT_URL, "${url}");`,
        ];
        if (method !== 'GET') {
          lines.push(`curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "${method}");`);
        }
        lines.push(`curl_setopt($ch, CURLOPT_HTTPHEADER, [\n${hdrs.join(',\n')}\n]);`);
        if (body) {
          lines.push(`curl_setopt($ch, CURLOPT_POSTFIELDS, '${JSON.stringify(body)}');`);
        }
        lines.push('curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);');
        lines.push('$response = curl_exec($ch);');
        lines.push('curl_close($ch);');
        lines.push('$data = json_decode($response, true);');
        lines.push('print_r($data);');
        lines.push('?>');
        return lines.join('\n');
      }
    }
  }
}
