// Placeholder: satisfy Cursor command hooks (stdin JSON in, JSON with permission out).
import fs from 'node:fs';

void fs.readFileSync(0, 'utf8');
console.log(JSON.stringify({ permission: 'allow' }));
process.exit(0);
