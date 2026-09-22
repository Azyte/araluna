const fs = require('fs');
const path = require('path');

const templatePath = path.join(__dirname, 'template.html');
const casesPath = path.join(__dirname, 'cases_data.json');
const outputPath = path.join(__dirname, 'index.html');

console.log('Reading files...');
const template = fs.readFileSync(templatePath, 'utf8');
const casesRaw = fs.readFileSync(casesPath, 'utf8');
const cases = JSON.parse(casesRaw);

console.log(`Loaded ${cases.length} cases.`);

const placeholder = 'const CASE_DATA = /* __CASE_DATA_PLACEHOLDER__ */ [];';
const replacement = 'const CASE_DATA = ' + JSON.stringify(cases, null, 2) + ';';

if (!template.includes(placeholder)) {
  console.error('Placeholder not found in template!');
  process.exit(1);
}

const finalHtml = template.replace(placeholder, replacement);
fs.writeFileSync(outputPath, finalHtml, 'utf8');

const stat = fs.statSync(outputPath);
console.log(`SUCCESS! Generated standalone ${outputPath}`);
console.log(`File size: ${(stat.size / 1024).toFixed(2)} KB`);
