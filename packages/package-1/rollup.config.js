
import fs from "fs";

const getUserScriptMeta = () => {
    const packageJson = JSON.parse(fs.readFileSync("./package.json", "utf-8"));
    const meta = fs.readFileSync("./src/meta.js", "utf-8")
                        .split('\n')
                        .map(line => line.trim())
                        .filter(line => !line.match(/==(\/)?UserScript==/))
                        .filter(line => line.startsWith('//'))
                        .join('\n');
                        
    return `// ==UserScript==
// @name         ${packageJson.name}
// @version      ${packageJson.version}
// @description  ${packageJson.description}
// @author       ${packageJson.author}
${meta}
// ==/UserScript== 
`;
}

function headerInjecter (){
    const header =`
// HEADER1
// HEDAER2
`;
    return {
        name: 'header-injecter',
        transform: async function(code, id){
            console.log(id);
            return {
                code: `
                ${header}
                ${code}
                `,
                map: { mappings: ''}
            }
        }
    }
}

export default {
    input: 'src/index.js',
    output: {
        dir: 'dist',
        format: "iife",
        sourcemap: false,
        banner: getUserScriptMeta,
    },
    // plugins: [headerInjecter()]
}