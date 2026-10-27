// No dependencies. The fragment is the only source of the prototype UI.
const fs = require('node:fs');
const path = require('node:path');
const fragment = fs.readFileSync(path.join(__dirname, 'eatwhat-flow.fragment.html'), 'utf8').replace(/^\uFEFF/, '');
const html = `<!doctype html>
<html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline'; img-src data:; form-action 'none'; base-uri 'none'">
<title>EatWhat · 两页交互原型</title><style>body{margin:0;background:#f7f8f9}button,select,textarea{touch-action:manipulation}</style></head><body>
${fragment}
</body></html>
`;
fs.writeFileSync(path.join(__dirname, 'index.html'), html, 'utf8');
console.log('Exported index.html from eatwhat-flow.fragment.html');
