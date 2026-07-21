const fs = require('fs');
const path = require('path');
const simpleIcons = require('simple-icons');

const techList = [
  { name: 'Python', icon: 'python' },
  { name: 'TensorFlow', icon: 'tensorflow' },
  { name: 'React', icon: 'react' },
  { name: 'Nextjs', icon: 'nextdotjs' },
  { name: 'Docker', icon: 'docker' },
  { name: 'GitHub', icon: 'github' },
  { name: 'Git', icon: 'git' },
  { name: 'FastAPI', icon: 'fastapi' },
  { name: 'PostgreSQL', icon: 'postgresql' },
  { name: 'MySQL', icon: 'mysql' },
  { name: 'SQLite', icon: 'sqlite' },
  { name: 'NumPy', icon: 'numpy' },
  { name: 'Pandas', icon: 'pandas' },
  { name: 'ScikitLearn', icon: 'scikitlearn' },
  { name: 'Tailwind', icon: 'tailwindcss' },
  { name: 'Java', icon: 'openjdk' }, 
  { name: 'C', icon: 'c' },
  { name: 'Figma', icon: 'figma' },
  { name: 'VSCode', icon: 'visualstudiocode' },
  { name: 'GoogleColab', icon: 'googlecolab' }
];

let output = '';

techList.forEach(tech => {
  let iconObj = simpleIcons['si' + tech.icon.charAt(0).toUpperCase() + tech.icon.slice(1)];
  
  if (!iconObj) {
      const allKeys = Object.keys(simpleIcons);
      const match = allKeys.find(k => k.toLowerCase() === 'si' + tech.icon.toLowerCase());
      if (match) {
          iconObj = simpleIcons[match];
      }
  }

  if (iconObj) {
    const svgPath = iconObj.path;
    const hex = iconObj.hex;
    output += `const ${tech.name.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()}Svg = \`<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><path d="${svgPath}" fill="#${hex}"/></svg>\`;\n\n`;
  } else {
    output += `// Not found: ${tech.name}\n\n`;
  }
});

fs.writeFileSync('svgs.txt', output);
console.log('Done');
