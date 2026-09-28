# Mikhalateia Hotel

Site de apresentação e reservas de um hotel fictício em Varginha/MG. Feito em Angular, com identidade visual de hotelaria (creme e terracota) e fluxo de reserva no próprio navegador.

Demo: https://site-hotel-pi.vercel.app/

## Features

- **Home** — hero em tela cheia com zoom contínuo no fundo, contatos no topo, galeria de ambientes que se abre ao passar o mouse e chamada para reservar.
- **Navegação fixa** — menu no topo em todas as páginas, com destaque da rota atual e menu recolhível no celular.
- **Sobre** — texto institucional, lista de comodidades (wifi, restaurante, serviço de quarto, academia, piscina, lavanderia, garagem e salas de reunião) e mapa da Nave Espacial de Varginha.
- **Acomodações** — seis categorias de quarto (Express Duplo, Express Triplo, Luxo Casal, Luxo Família, Flat e Master), preço promocional em reais conforme o número de adultos e botão para incluir o quarto na reserva.
- **Eventos** — formulário de orçamento para cerimônia ou reunião (salas, pessoas, data e alimentação) sobre um carrossel das salas.
- **Reserva** — barra fixa com check-in, check-out, adultos e crianças; modal para dados do hóspede, até 3 tipos de quarto, políticas de cancelamento e total calculado pelas noites.
- **Login e cadastro** — abas de entrada e cadastro, com validação de senha e fundo aleatório a cada visita (demonstração, sem servidor).
- **Trabalhe conosco** — candidatura por área (Recepção, Administrativo, Governança, Restaurante, Serviços Gerais, TI) e envio de currículo.
- **Layout compartilhado** — faixa de separação após o título, rodapé com links, redes e contatos, e barra de reserva em todas as páginas menos o login.

## Stack

Angular 22, TypeScript, CSS e Angular Router. Sem backend: formulários e reservas ficam só na sessão do navegador.

## Como rodar

```bash
npm install
npm start
```

Abre em `http://localhost:4200/`.

```bash
npm run build
```

Gera `dist/garbage-hotel/browser` para o deploy (Vercel).
