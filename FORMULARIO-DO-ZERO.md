# Formulário Matt4Tech — configuração do zero

## 1. Segurança
A chave que foi enviada em conversa deve ser revogada. Gere uma chave nova no Resend.

## 2. Resend
1. Abra Domains no Resend.
2. Adicione `matt4tech.site`.
3. Copie exatamente os registros DNS fornecidos pelo Resend para o provedor que controla o DNS.
4. Aguarde o status `Verified`.
5. Crie uma API key nova com permissão de envio.

O código envia de `Matt4Tech Website <contact@matt4tech.site>` para:
- contact@matt4tech.site
- contact.elevaimkt@gmail.com

## 3. Vercel
1. Abra o projeto `matt4tech-new`.
2. Abra Settings > Environment Variables.
3. Adicione `RESEND_API_KEY` para Production, Preview e Development.
4. Cole a chave nova.
5. Salve.
6. Crie um novo deployment depois de salvar a variável.

## 4. Diagnóstico
Abra no navegador:

`https://SEU-DOMINIO/api/contact`

O JSON deve mostrar:

`"apiKeyConfigured": true`

Se aparecer false, a variável não entrou no deployment atual.

## 5. Teste
Envie o formulário com dados reais. Em caso de erro, a página agora mostra a mensagem exata devolvida pelo Resend e um Request ID. O mesmo Request ID aparece nos Runtime Logs da Vercel.
