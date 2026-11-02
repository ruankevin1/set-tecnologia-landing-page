// Renderiza a impressora (render.html, nesta pasta) no Edge sem janela e grava o PNG e os pontos.
// Uso: node docs/impressora-3d/renderizar.mjs src/assets/impressora/impressora-termica.png "w=1300&h=1200&esc=0.0195&aa=3"
// Imprime os pontos da boca, da luz e do corpo em pixels da foto: eles vão para "foto" em EduardaAoVivo.astro.
import { spawn } from 'node:child_process';
import { writeFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
const [saida, query = ''] = process.argv.slice(2);
const pagina = pathToFileURL(new URL('./render.html', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1')).href + (query ? '?' + query : '');
const edge = spawn('C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', ['--headless=new', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--remote-debugging-port=9371', '--user-data-dir=' + process.env.TEMP + '/render-impressora-perfil', 'about:blank']);
const espera = (ms) => new Promise((r) => setTimeout(r, ms));
await espera(2500);
const ws = new WebSocket((await (await fetch('http://127.0.0.1:9371/json')).json()).find((t) => t.type === 'page').webSocketDebuggerUrl);
await new Promise((r) => (ws.onopen = r));
let id = 0; const pend = {};
ws.onmessage = (m) => { const d = JSON.parse(m.data); if (pend[d.id]) { pend[d.id](d); delete pend[d.id]; } };
const cdp = (method, params = {}) => new Promise((r) => { pend[++id] = r; ws.send(JSON.stringify({ id, method, params })); });
await cdp('Page.navigate', { url: pagina }); await espera(1500);
const t0 = Date.now();
const r = await cdp('Runtime.evaluate', { expression: 'render()', awaitPromise: true, returnByValue: true, timeout: 590000 });
const v = r.result?.result?.value;
if (!v || v.erro) { console.log('ERRO', JSON.stringify(r).slice(0, 2000)); edge.kill(); process.exit(1); }
writeFileSync(saida, Buffer.from(v.png.split(',')[1], 'base64'));
delete v.png;
console.log(((Date.now() - t0) / 1000).toFixed(1) + 's', JSON.stringify(v));
edge.kill(); process.exit(0);
