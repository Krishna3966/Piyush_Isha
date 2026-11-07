
TypeScript is a language that is built on top of JavaScript with the purpose of helping us avoid the common pitfalls and bugs that arise in JavaScript.

TypeScript seeks to improve the experience of writing JavaScript, and the way that it does that is by adding types.

TS -> JS + Some Additional features

#################
Static checking
#################

TypeScript detects errors in our code without even running it. This is called static checking

TypeScript is only there for development purposes. It means at runtime there is no TypeScript language.
You have to compile your TypeScript code back to JavaScript, and at runtime, you are actually running JavaScript only.

This is the official website for TS - https://www.typescriptlang.org/

TypeScript is a superset of JavaScript. It adds some extra features to JavaScript.

TypeScript cannot be run directly in the browser or in a Node.js environment.
It first needs to be compiled into plain JavaScript. 

TS      ----->      JS

Typescript compiler(TSC)

Write your code in TypeScript -> Compile to JavaScript -> Run the JavaScript code. 

There is no type safety in JavaScript.

Type safety means the language checks if we are using the right kind of value for each variable.

let age = 25
age = "Hello"

JavaScript is dynamically typed. 
You can assign any type of value to a variable, even by mistake. 
It doesn't stop you from doing things that might break your code.

This can lead to bugs later in your code if you try to do math with age, thinking it is still a number.

console.log(age + 3)

In the case of TypeScript, as soon as you make a mistake, you get an error immediately while you are writing the code, so TypeScript helps you catch mistakes early and keeps your code more reliable.
Because of type safety in TypeScript, we can easily catch the errors at compile time rather than waiting until runtime. 

While, in contrast, when you are writing plain JavaScript, you typically only discover the errors while the code is running, and not while you are writing or compiling it. JavaScript doesn't give you early warnings about potential issues.

Setting up TypeScript
To begin with TypeScript, you will need these tools:
1. Node.js. This lets you run the TypeScript compiler.
2. TypeScript compiler, or TSC. It is a tool that converts TypeScript code into JavaScript.
3. VS Code, which is a free code editor that works great with TypeScript

How to install TS

You can install it globally using npm.
npm install -g typescript
sudo npm install -g typescript          <--- Only for Mac machines. 

After installing the TypeScript compiler, this is how you can compile your TypeScript code to JavaScript. 

Just run this command. 
tsc <fileName.ts>

Example - 
tsc tsdemo.ts

TypeScript executor(tsx)
It is another modern tool that acts like a TypeScript executor, and it lets you run your TypeScript file directly without compiling them manually.

This is how you can install TSX.
npm install -g tsx
sudo npm install -g tsx      <--- Only for Mac machines.

After installation, you can run your TypeScript file directly by running this command. 
tsx tsdemo.ts

"code-runner.executorMap": {
    "typescript": "npx tsx"
}
