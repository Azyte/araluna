// Build Script to assemble and compile ARALUNA Detective Mystery Visual Novel
const fs = require('fs');
const path = require('path');

console.log('--- STEP 1: Reading Engine Modules ---');
const dataPath = path.join(__dirname, 'engine_data.js');
const storyPath = path.join(__dirname, 'engine_story.js');
const corePath = path.join(__dirname, 'engine_core.js');

let dataCode = fs.readFileSync(dataPath, 'utf8');
let storyCode = fs.readFileSync(storyPath, 'utf8');
let coreCode = fs.readFileSync(corePath, 'utf8');

// Strip module.exports for browser consumption
dataCode = dataCode.replace(/module\.exports\s*=\s*\{[\s\S]*?\};?/g, '');
storyCode = storyCode.replace(/module\.exports\s*=\s*\{[\s\S]*?\};?/g, '');

const placeholder = 'const CASE_DATA = /* __CASE_DATA_PLACEHOLDER__ */ [];';

const combinedScript = `
    // ==========================================
    // CASE DATABASE (INJECTED FROM JSON)
    // ==========================================
    ${placeholder}

    // ==========================================
    // SECTION 1: MASTER I18N & DATABASE
    // ==========================================
    ${dataCode}

    // ==========================================
    // SECTION 2: STORY GRAPH & DIALOGUES
    // ==========================================
    ${storyCode}

    // ==========================================
    // SECTION 3: ENGINE CORE, AUDIO, PUZZLES, SAVES
    // ==========================================
    ${coreCode}
`;

const masterScriptPath = path.join(__dirname, 'master_game.js');
fs.writeFileSync(masterScriptPath, combinedScript, 'utf8');
console.log('Generated master_game.js');

console.log('--- STEP 2: Checking Syntax of master_game.js ---');
try {
  new Function(combinedScript);
  console.log('master_game.js JavaScript syntax is VALID and ERROR-FREE!');
} catch (err) {
  console.error('Syntax error in master_game.js:', err);
  process.exit(1);
}

console.log('--- STEP 3: Updating template.html with master_game.js ---');
const templatePath = path.join(__dirname, 'template.html');
let templateHtml = fs.readFileSync(templatePath, 'utf8');

const scriptStart = templateHtml.indexOf('<script>');
const scriptEnd = templateHtml.lastIndexOf('</script>');

if (scriptStart === -1 || scriptEnd === -1) {
  console.error('Could not find <script> or </script> in template.html');
  process.exit(1);
}

const beforeScript = templateHtml.substring(0, scriptStart + '<script>'.length);
const afterScript = templateHtml.substring(scriptEnd);

const updatedTemplate = beforeScript + '\n' + combinedScript + '\n  ' + afterScript;
fs.writeFileSync(templatePath, updatedTemplate, 'utf8');
console.log('Successfully updated template.html!');

console.log('--- STEP 4: Compiling Standalone index.html with 102 Cases ---');
const compileScriptPath = path.join(__dirname, 'compile.cjs');
require(compileScriptPath);

console.log('--- ALL BUILD STEPS COMPLETED SUCCESSFULLY! ---');
