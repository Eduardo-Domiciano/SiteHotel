# interceptors

Interceptadores HTTP.

## Arquivos

| Arquivo | O que faz |
| --- | --- |
| `auth.interceptor.ts` | Anexa Bearer token local se existir; sem refresh HTTP. |
| `docdir.md` | Documentacao desta pasta. |

## Observacoes

- Em modo demo o token e ficticio; o interceptor so prepara headers se houver chamada HTTP.
