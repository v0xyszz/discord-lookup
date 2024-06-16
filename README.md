# Discord Lookup API

Esta é uma API para buscar informações de usuários no Discord, construída com Node.js e Express. A API permite buscar dados de um usuário específico utilizando seu ID do Discord.

## Tecnologias Utilizadas

- Node.js
- Express
- Axios

## Instalação

Siga os passos abaixo para configurar e executar o projeto localmente.

1. Clone o repositório:
    ```bash
    git clone https://github.com/v0xyszz/discord-lookup.git
    cd discord-lookup
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Configure as variáveis de ambiente:
    - Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:
        ```
        PORT=3000
        DISCORD_TOKEN=SEU_DISCORD_BOT_TOKEN
        ```

4. Inicie o servidor:
    ```bash
    npm start
    ```

O servidor estará rodando em `http://localhost:3000`.

## Endpoints

### Buscar Usuário do Discord

- **Buscar Usuário**
    ```
    GET /lookup/:userId
    ```
    Busca informações de um usuário do Discord pelo ID.

    **Parâmetros:**
    - `userId`: ID do usuário do Discord a ser buscado.

    **Resposta:**
    - `200 OK`: Retorna os dados do usuário, incluindo URLs de avatar e banner (se disponíveis).
    - `404 Not Found`: Usuário não encontrado.
    - `500 Internal Server Error`: Erro no servidor.

## Exemplo de Uso

### Buscar Usuário do Discord

```bash
curl -X GET http://localhost:3000/lookup/USER_ID \
-H "Authorization: Bot SEU_DISCORD_BOT_TOKEN"
