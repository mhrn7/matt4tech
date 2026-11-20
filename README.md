# Matt4Tech

Projeto Next.js pronto para deploy em um projeto novo da Vercel.

## Deploy
1. Crie um repositório GitHub novo e vazio.
2. Envie todos os arquivos desta pasta para a raiz do repositório.
3. Na Vercel, importe esse repositório como um projeto novo.
4. Use Framework Preset: Next.js e Root Directory: ./
5. Não configure Build Command manualmente. A Vercel deve usar `pnpm build`/`next build` automaticamente.
6. Adicione `RESEND_API_KEY` em Environment Variables apenas para ativar o envio do formulário.
7. Faça o primeiro deploy e teste o endereço `.vercel.app` antes de mover o domínio.
