# Portpage

Portfólio React + Vite com backend minimo para envio de formulario de contato.

## Requisitos

- Node.js 18+
- Conta de e-mail SMTP (exemplo: Gmail com senha de app)

## Configuracao

1. Crie o arquivo .env na raiz com base em .env.example.
2. Preencha as variaveis SMTP e os e-mails de destino/remetente.

Variaveis principais:

- VITE_API_URL: URL publica da API de contato.
- PORT: porta do backend local.
- ALLOWED_ORIGIN: origem permitida para CORS (frontend).
- SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS: acesso SMTP.
- CONTACT_TO_EMAIL: e-mail que recebe as mensagens.
- CONTACT_FROM_EMAIL: e-mail remetente.

## Rodando localmente

Terminal 1 (frontend):

npm run dev:client

Terminal 2 (backend):

npm run dev:server

Healthcheck da API:

GET http://localhost:8787/api/health

## Publicacao

Como seu frontend esta em hosting estatico, publique o backend separadamente (Render, Railway, Fly.io ou outro).

Depois disso:

1. Defina VITE_API_URL para a URL publica da API (exemplo: https://sua-api.onrender.com).
2. Faça novo build/deploy do frontend.

## Endpoint

- POST /api/contact

Payload JSON:

{
"name": "Seu nome",
"email": "voce@email.com",
"message": "Mensagem"
}
