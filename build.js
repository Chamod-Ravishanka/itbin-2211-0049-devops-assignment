const fs = require('fs');
const path = require('path');

const root = __dirname;
const srcDir = path.join(root, 'src');
const distDir = path.join(root, 'dist');

function copyDir(source, target) {
  fs.mkdirSync(target, { recursive: true });
  const entries = fs.readdirSync(source, { withFileTypes: true });

  for (const entry of entries) {
    const sourcePath = path.join(source, entry.name);
    const targetPath = path.join(target, entry.name);

    if (entry.isDirectory()) {
      copyDir(sourcePath, targetPath);
    } else {
      fs.copyFileSync(sourcePath, targetPath);
    }
  }
}

fs.rmSync(distDir, { recursive: true, force: true });
copyDir(srcDir, distDir);
console.log('Build complete: dist/ generated');
