# services

Servicos Angular compartilhados.

## Arquivos

| Arquivo | O que faz |
| --- | --- |
| `auth.ts` | Login/cadastro demo local (Cleare Redfield), perfil e logout via `localStorage`. |
| `api.ts` | Cliente HTTP residual (quartos, reservas, eventos, candidaturas) — nao usado pelo fluxo demo principal. |
| `reservation.ts` | Estado do modal de reserva e confirmacao local (sem POST). |
| `docdir.md` | Documentacao desta pasta. |

## Observacoes

- Auth e reserva nao dependem do servidor neste projeto.
- `ApiService` permanece para compatibilidade / orcamento de eventos em `/acomodacoes`.
