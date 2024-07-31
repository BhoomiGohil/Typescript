via npm
TypeScript is available as a package on the npm registry available as "typescript".

You will need a copy of Node.js as an environment to run the package. Then you use a dependency manager like npm, yarn or pnpm to download TypeScript into your project.

npm install typescript --save-dev

npm yarn pnpm
All of these dependency managers support lockfiles, ensuring that everyone on your team is using the same version of the language. You can then run the TypeScript compiler using one of the following commands:

npx tsc

Once working I found that the resolveFullPaths option fixed the issue OP described.

Install tsc-alias

yarn add -D -E tsc-alias
Configure tsconfig.js

{
"compilerOptions": {
...
},
"tsc-alias": {
"resolveFullPaths": true,
"verbose": false
}
}
Update your build/compile script to call tsc-alias after tsc

"scripts": {
"compile": "tsc && tsc-alias"
}
