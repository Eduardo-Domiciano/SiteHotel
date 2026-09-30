# rooms

Pagina de acomodacoes: lista de quartos com preco por ocupacao e formulario de eventos.

## Arquivos

| Arquivo | O que faz |
| --- | --- |
| `rooms.ts` | Logica dos quartos, carrossel de salas e pedido de orcamento via `ApiService`. |
| `rooms.html` | Cards dos quartos e formulario sobre o slider de reunioes. |
| `rooms.css` | Estilos da grade de suites e da secao de eventos. |
| `docdir.md` | Documentacao desta pasta. |

## Observacoes

- Rota: `/acomodacoes`
- O botao Selecionar abre o modal via `ReservationService` (confirmacao local).
- Orcamento de evento ainda chama a API HTTP; sem backend a mensagem de erro aparece.
