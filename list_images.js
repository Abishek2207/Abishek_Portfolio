const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const files = fs.readdirSync(publicDir);

const images = files.filter(f => f.match(/\.(jpg|jpeg|png|gif|webp)$/i));
console.log(images.join('\n'));
