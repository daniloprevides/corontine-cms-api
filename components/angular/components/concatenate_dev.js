const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
const files = [
'./dist/components/runtime.js',
'./dist/components/polyfills.js',
'./dist/components/main.js',
'./dist/components/vendor.js',
]
await fs.ensureDir('../../../views/public')
await concat(files, '../../../views/public/angularcomponents.js');
})()
