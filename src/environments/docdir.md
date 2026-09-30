# environments

Configuracao por ambiente (URL base da API).

## Arquivos

| Arquivo | O que faz |
| --- | --- |
| `environment.ts` | Dev: `apiUrl` relativo `/api/v1`. |
| `environment.prod.ts` | Prod: `apiUrl` apontando para `localhost:8080` (placeholder). |
| `docdir.md` | Documentacao desta pasta. |

## Observacoes

- O fluxo demo de auth/reserva nao usa esses endpoints.
