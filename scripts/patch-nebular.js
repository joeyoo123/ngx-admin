/**
 * Patches @nebular/theme to work with @angular/cdk v21 which removed _VIEW_REPEATER_STRATEGY.
 * This script is run as a postinstall hook.
 */
const fs = require('fs');
const path = require('path');

const nebularPath = path.join(__dirname, '..', 'node_modules', '@nebular', 'theme', 'fesm2022', 'nebular-theme.mjs');

if (!fs.existsSync(nebularPath)) {
  console.log('Nebular theme not found, skipping patch.');
  process.exit(0);
}

let content = fs.readFileSync(nebularPath, 'utf8');

const oldImport = "import { _VIEW_REPEATER_STRATEGY, _DisposeViewRepeaterStrategy } from '@angular/cdk/collections';";
const newImport = "import { _DisposeViewRepeaterStrategy } from '@angular/cdk/collections';\nconst _VIEW_REPEATER_STRATEGY = new InjectionToken('_VIEW_REPEATER_STRATEGY');";

if (content.includes(oldImport)) {
  content = content.replace(oldImport, newImport);
  fs.writeFileSync(nebularPath, content);
  console.log('Patched @nebular/theme: replaced _VIEW_REPEATER_STRATEGY CDK import with local InjectionToken.');
} else {
  console.log('Nebular theme already patched or import not found.');
}
