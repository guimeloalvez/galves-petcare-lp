# Backend Galves Petcare

Routes → Controllers → Services → Repositories → Knex/PostgreSQL.

Execute `npm install` para instalar o Knex e atualizar o package-lock.json.
Copie `.env.example` para `.env` ou reutilize seu `.env` original.
Execute `npm run dev` para iniciar a API na porta 3000.
Execute `npm run build` para verificar a compilação.

As rotas existentes e seus formatos de resposta foram mantidos, exceto a remoção do hash da senha nas respostas de funcionários. A estrutura não cria tabelas nem adiciona rotas CRUD que não existiam. O tipo Estoque foi reconstruído a partir das consultas originais; confirme os tipos com o banco. O middleware existente foi mantido, sem introduzir novas exigências de autenticação nas rotas. Antes de produção, revise a proteção dos endpoints.
