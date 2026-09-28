# services

Servicos Angular compartilhados (estado e regras de negocio no cliente).

## Arquivos

| Arquivo | O que faz |
| --- | --- |
| `reservation.ts` | Estado da reserva: datas, hospede, quartos selecionados, total e abertura do modal. |
| `docdir.md` | Documentacao desta pasta. |

## Observacoes

- `ReservationService` e `providedIn: 'root'` e usado pela barra, pelo modal e pelas paginas.
- Nao envia dados a um servidor; tudo fica na sessao do navegador.
