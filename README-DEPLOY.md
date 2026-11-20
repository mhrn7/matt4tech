# Matt4Tech — deploy and email form

## Vercel configuration

- Framework Preset: Next.js
- Root Directory: `./`
- Build Command: automatic
- Output Directory: automatic
- Install Command: automatic

## Required environment variable

In Vercel, open **Settings → Environment Variables** and add:

```text
RESEND_API_KEY=your_current_resend_key
```

Apply it to Production, Preview and Development, then redeploy without build cache.

## Resend domain

The domain `matt4tech.site` must be verified in Resend because the form sends from `contact@matt4tech.site`.
The request is delivered to both:

- `contact@matt4tech.site`
- `contact.elevaimkt@gmail.com`

Never commit a Resend key to GitHub.
