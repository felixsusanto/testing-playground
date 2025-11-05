const { writeFileSync, mkdirSync, existsSync } = require('fs');
const { join } = require('path');

const out = join(__dirname, '..', 'dist', 'public');
try {
  if (!existsSync(out)) {
    mkdirSync(out, { recursive: true });
  }
  writeFileSync(join(out, '.nojekyll'), '');
  console.log('Created', join(out, '.nojekyll'));
} catch (e) {
  console.error('Could not create .nojekyll', e);
  process.exit(1);
}
