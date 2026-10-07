// Tạo dự án Android (Trusted Web Activity) cho VietPickleball từ twa-manifest.json
const { TwaManifest, TwaGenerator, ConsoleLog } = require('@bubblewrap/core');
const fs = require('fs');
(async () => {
  const cfg = JSON.parse(fs.readFileSync(process.argv[2] || 'twa-manifest.json', 'utf8'));
  if (process.env.ICON_BASE) { cfg.iconUrl = process.env.ICON_BASE + '/icon-512.png'; cfg.maskableIconUrl = process.env.ICON_BASE + '/icon-512.png'; }
  const m = new TwaManifest(cfg);
  const errs = m.validate && m.validate(); if (errs) { console.error('Lỗi cấu hình:', errs); process.exit(1); }
  const out = process.argv[3] || 'app';
  await new TwaGenerator().createTwaProject(out, m, new ConsoleLog('twa'));
  fs.writeFileSync(out + '/twa-manifest.json', JSON.stringify(m.toJson(), null, 2));
  console.log('Đã tạo dự án ở', out);
})().catch(e => { console.error(e); process.exit(1); });
