const fs = require('node:fs');
const path = require('node:path');

const workspaceRoot = path.resolve(__dirname, '../../..');
const outputRoot = path.join(workspaceRoot, 'dist/vercel-docsite');
const docsites = [
  ['react', 'apps/react-docsite/dist/react'],
  ['charts', 'apps/chart-docsite/dist/storybook'],
  ['web-components', 'packages/web-components/dist/storybook'],
];

fs.rmSync(outputRoot, { recursive: true, force: true });
fs.mkdirSync(outputRoot, { recursive: true });

for (const [route, source] of docsites) {
  const sourcePath = path.join(workspaceRoot, source);
  const indexPath = path.join(sourcePath, 'index.html');

  if (!fs.existsSync(indexPath)) {
    throw new Error(`Missing docsite build output: ${indexPath}`);
  }

  fs.cpSync(sourcePath, path.join(outputRoot, route), { recursive: true });
}

fs.writeFileSync(
  path.join(outputRoot, 'index.html'),
  '<!doctype html><html><head><meta charset="utf-8"><meta http-equiv="refresh" content="0; url=/react/"><link rel="canonical" href="/react/"><title>Iqvizyon UI</title></head><body><a href="/react/">Open Iqvizyon UI documentation</a></body></html>',
);
