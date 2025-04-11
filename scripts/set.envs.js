
const { writeFileSync, mkdirSync }  = require('fs');

require('dotenv').config();

const targetPath = './src/environments/environment.ts';
const targetPathDev = './src/environments/environment.development.ts';

const baseUrl = process.env['BASE_URL'];

console.log( baseUrl );

const envFileContent =`

export const environment = {

    baseUrl: "${baseUrl}"

};

`;

mkdirSync('./src/environments', { recursive: true });
writeFileSync( targetPath, envFileContent );
writeFileSync( targetPathDev, envFileContent );

