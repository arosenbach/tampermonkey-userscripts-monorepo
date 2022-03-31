
import fs from "fs";

const getBannerText = () => {
    const packageJson = JSON.parse(fs.readFileSync("./package.json", "utf-8"));
    return `// ==UserScript==
// @name         ${packageJson.name}
// @namespace    http://tampermonkey.net/
// @version      ${packageJson.version}
// @description  ${packageJson.description}
// @author       You
// @match        https://duckduckgo.com/?q=tes&atb=v314-7&ia=web
// @icon         https://www.google.com/s2/favicons?sz=64&domain=duckduckgo.com
// @grant        none
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
        banner: getBannerText,
    },
    // plugins: [headerInjecter()]
}