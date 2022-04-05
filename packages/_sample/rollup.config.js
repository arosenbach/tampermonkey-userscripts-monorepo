
import fs from "fs";
import * as path from 'path';

const getUrl = (githubRepoUrl) => {
    const repo = githubRepoUrl.split('/').slice(3,5).join('/').split('#')[0];
    return `https://raw.githubusercontent.com/${repo}/master/packages/${path.basename(path.resolve())}/dist/index.js`;
}

const getUserScriptMeta = () => {
    const packageJson = JSON.parse(fs.readFileSync("./package.json", "utf-8"));
    const meta = fs.readFileSync("./src/meta.js", "utf-8")
                        .split('\n')
                        .map(line => line.trim())
                        .filter(line => !line.match(/==(\/)?UserScript==/))
                        .filter(line => line.startsWith('//'))
                        .join('\n');

    const url = getUrl(packageJson.homepage);
                        
    return `// ==UserScript==
// @name         ${packageJson.name}
// @version      ${packageJson.version}
// @description  ${packageJson.description}
// @author       ${packageJson.author}
// @downloadURL  ${url}
// @updateURL    ${url}
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