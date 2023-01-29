<!--BEGIN HEADER-->
<div id="top" align="center">
  <h1>parse-json-object</h1>
  <a href="https://npmjs.com/package/parse-json-object">
    <img alt="NPM" src="https://img.shields.io/npm/v/parse-json-object.svg">
  </a>
  <a href="https://github.com/bconnorwhite/parse-json-object">
    <img alt="TypeScript" src="https://img.shields.io/github/languages/top/bconnorwhite/parse-json-object.svg">
  </a>
  <a href="https://coveralls.io/github/bconnorwhite/parse-json-object?branch=master">
    <img alt="Coverage Status" src="https://img.shields.io/coveralls/github/bconnorwhite/parse-json-object.svg?branch=master">
  </a>
</div>

<br />

<blockquote align="center">Parse a typed JSON object.</blockquote>

<br />

_If I should maintain this repo, please ⭐️_
<a href="https://github.com/bconnorwhite/parse-json-object">
  <img align="right" alt="GitHub stars" src="https://img.shields.io/github/stars/bconnorwhite/parse-json-object?label=%E2%AD%90%EF%B8%8F&style=social">
</a>

_DM me on [Twitter](https://twitter.com/bconnorwhite) if you have questions or suggestions._
<a href="https://twitter.com/bconnorwhite">
  <img align="right" alt="Twitter" src="https://img.shields.io/twitter/url?label=%40bconnorwhite&style=social&url=https%3A%2F%2Ftwitter.com%2Fbconnorwhite">
</a>

---
<!--END HEADER-->
- Returns `undefined` if unable to parse
- Returns value if successful

## Installation

```sh
yarn add parse-json-object
```

```sh
npm install parse-json-object
```

```sh
pnpm add parse-json-object
```

## Usage

### Types
```ts
import {
  parseJSONValue,
  parseJSONObject,
  parseJSONArray,
  parseString
} from "parse-json-object";

parseJSONValue("1"); // 1
parseJSONValue("not valid json"); // undefined

parseJSONObject('{"a": 1}'); // { a: 1 }
parseJSONArray("[1, 2, 3]"); // [1, 2, 3]
parseString('"hello"'); // "hello"
```

Additionally, a `parse` function is provided, which takes a function to validate the parsed value. This can be easily used with [zod](https://github.com/colinhacks/zod) to validate more complex types:
```ts
import { parse } from "parse-json-object";
import z from "zod";

const schema = z.object({
  a: z.number(),
  b: z.string()
});

parse('{ a: 1, b: "hello" }', schema); // { a: 1, b: 'hello' }

```

A custom typeguard can also be used:

```ts
import { parse } from "parse-json-object";

function isNumber(value: unknown): value is number {
  return typeof value === "number";
}

parse("1", isNumber); // 1
parse("not a number", isNumber); // undefined
```

<!--BEGIN FOOTER-->

<br />

<h2 id="dependencies">Dependencies<a href="https://www.npmjs.com/package/parse-json-object?activeTab=dependencies"><img align="right" alt="dependencies" src="https://img.shields.io/librariesio/release/npm/parse-json-object.svg"></a></h2>

- [is-zod](https://www.npmjs.com/package/is-zod): Typeguard to check if a value matches a zod schema
- [types-json](https://www.npmjs.com/package/types-json): Type checking for JSON values


<br />

<h3>Dev Dependencies</h3>

- [autorepo](https://www.npmjs.com/package/autorepo): Autorepo abstracts away your dev dependencies, providing a single command to run all of your scripts.
- [zod](https://www.npmjs.com/package/zod): TypeScript-first schema declaration and validation library with static type inference


<br />

<h2 id="license">License <a href="https://opensource.org/licenses/MIT"><img align="right" alt="license" src="https://img.shields.io/npm/l/parse-json-object.svg"></a></h2>

[MIT](https://opensource.org/licenses/MIT)
<!--END FOOTER-->

<br />

## Related Packages:

- [stringify-json-object](https://www.npmjs.com/package/stringify-json-object): Stringify and format a JSON object
- [types-json](https://www.npmjs.com/package/types-json): Type checking for JSON objects
