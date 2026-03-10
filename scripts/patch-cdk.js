/**
 * Postinstall patch for @angular/cdk 21 compatibility with @nebular/theme 17.
 * Nebular 17 references _VIEW_REPEATER_STRATEGY which was removed in CDK 21.
 * This script re-adds the InjectionToken to the CDK collections entry point.
 */
const fs = require('fs');
const path = require('path');

const chunkFile = path.join(__dirname, '..', 'node_modules', '@angular', 'cdk', 'fesm2022', '_recycle-view-repeater-strategy-chunk.mjs');
const collectionsFile = path.join(__dirname, '..', 'node_modules', '@angular', 'cdk', 'fesm2022', 'collections.mjs');

if (!fs.existsSync(chunkFile)) {
  console.log('CDK chunk file not found, skipping patch.');
  process.exit(0);
}

// Patch the chunk file to add _VIEW_REPEATER_STRATEGY InjectionToken
let chunkContent = fs.readFileSync(chunkFile, 'utf8');
if (!chunkContent.includes('_VIEW_REPEATER_STRATEGY')) {
  const exportRegex = /export \{ ArrayDataSource, _RecycleViewRepeaterStrategy, _ViewRepeaterOperation \}/;
  if (!exportRegex.test(chunkContent)) {
    console.warn('WARNING: Could not find expected export statement in chunk file. CDK patch skipped.');
  } else {
    const patchCode = `import { InjectionToken } from '@angular/core';\nconst _VIEW_REPEATER_STRATEGY = new InjectionToken('_ViewRepeater');\n`;
    chunkContent = patchCode + chunkContent;
    chunkContent = chunkContent.replace(
      exportRegex,
      'export { ArrayDataSource, _RecycleViewRepeaterStrategy, _ViewRepeaterOperation, _VIEW_REPEATER_STRATEGY }'
    );
    fs.writeFileSync(chunkFile, chunkContent);
    console.log('Patched _recycle-view-repeater-strategy-chunk.mjs');
  }
}

// Patch the collections entry point to re-export _VIEW_REPEATER_STRATEGY
if (!fs.existsSync(collectionsFile)) {
  console.log('CDK collections file not found, skipping collections patch.');
  process.exit(0);
}
let collectionsContent = fs.readFileSync(collectionsFile, 'utf8');
if (!collectionsContent.includes('_VIEW_REPEATER_STRATEGY')) {
  const collectionsRegex = /export \{ ArrayDataSource, _RecycleViewRepeaterStrategy, _ViewRepeaterOperation \} from '.\/\_recycle-view-repeater-strategy-chunk.mjs';/;
  if (!collectionsRegex.test(collectionsContent)) {
    console.warn('WARNING: Could not find expected export statement in collections file. Collections patch skipped.');
  } else {
    collectionsContent = collectionsContent.replace(
      collectionsRegex,
      "export { ArrayDataSource, _RecycleViewRepeaterStrategy, _ViewRepeaterOperation, _VIEW_REPEATER_STRATEGY } from './_recycle-view-repeater-strategy-chunk.mjs';"
    );
    fs.writeFileSync(collectionsFile, collectionsContent);
    console.log('Patched collections.mjs');
  }
}

console.log('CDK patch complete.');
