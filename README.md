# Site da Set Tecnologia

https://www.settecnologia.app.br — Astro (páginas geradas em HTML), sem framework de interface.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera dist/
```

- Dados da empresa e das cidades: `src/data/empresa.ts`
- Páginas: `src/pages/` (as páginas de cidade saem de `atendimento/[cidade].astro`)
- Prints do sistema: `src/assets/telas/` (convertidos para WebP no build)
- Google, Perfil da Empresa e Search Console: `docs/SEO-LOCAL.md`

Hospedagem na Vercel (framework Astro, saída `dist`). `vercel.json` liga URLs sem `.html`.
