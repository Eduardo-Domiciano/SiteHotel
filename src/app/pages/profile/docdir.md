# profile

Pagina do usuario autenticado: editar perfil, trocar senha e ver reserva demo.

## Arquivos

| Arquivo | O que faz |
| --- | --- |
| `profile.ts` | Carrega perfil local, salva no `localStorage` e lista `DEMO_RESERVATIONS`. |
| `profile.html` | Formularios de perfil/senha e lista de reservas. |
| `profile.css` | Estilos do perfil e do botao Sair. |
| `docdir.md` | Documentacao desta pasta. |

## Observacoes

- Rota: `/perfil` (protegida por `authGuard`).
- Reserva de exemplo com check-in em 29/09/2026.
