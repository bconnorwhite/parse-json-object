<!--BEGIN HEADER-->
<div id="top" align="center">
  <h1>parse-json-object</h1>
  <a href="https://npmjs.com/package/parse-json-object">
    <img alt="NPM" src="https://img.shields.io/npm/v/parse-json-object.svg">
  </a>
  <a href="https://github.com/bconnorwhite/parse-json-object">
    <img alt="TypeScript" src="https://img.shields.io/github/languages/top/bconnorwhite/parse-json-object.svg">
  </a>
</div>

<br />

<blockquote align="center">Parse a typed JSON object.</blockquote>

---
<!--END HEADER-->

<!-- BEGIN INSTALLATION -->
## Installation

<details open>
  <summary>
    <a href="https://www.npmjs.com/package/parse-json-object">
      <img src="https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=white" alt="NPM" />
    </a>
  </summary>

```sh
npm install parse-json-object
```

</details>

<details>
  <summary>
    <a href="https://yarnpkg.com/package/parse-json-object">
      <img src="https://img.shields.io/badge/yarn-2C8EBB?logo=yarn&logoColor=white" alt="Yarn" />
    </a>
  </summary>

```sh
yarn add parse-json-object
```

</details>

<details>
  <summary>
    <img src="https://img.shields.io/badge/pnpm-F69220?logo=pnpm&logoColor=white" alt="PNPM" />
  </summary>

```sh
pnpm add parse-json-object
```

</details>

<details>
  <summary>
    <img src="https://img.shields.io/badge/bun-EE81C3?logo=bun&logoColor=white" alt="Bun" />
  </summary>

```sh
bun add parse-json-object
```

</details>
<!-- END INSTALLATION -->

- Returns `undefined` if unable to parse
- Returns value if successful

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

<br />

## Related Packages:

- [stringify-json-object](https://www.npmjs.com/package/stringify-json-object): Stringify and format a JSON object
- [types-json](https://www.npmjs.com/package/types-json): Type checking for JSON objects

<!--BEGIN FOOTER-->
<h2 id="dependencies">Dependencies<a href="https://www.npmjs.com/package/parse-json-object?activeTab=dependencies"><img align="right" alt="dependencies" src="https://img.shields.io/librariesio/release/npm/parse-json-object.svg"></a></h2>

- [is-zod](https://www.npmjs.com/package/is-zod): Typeguard to check if a value matches a zod schema
- [types-json](https://www.npmjs.com/package/types-json): Type checking for JSON values

<h2 id="license">License <a href="https://opensource.org/licenses/MIT"><img align="right" alt="license" src="https://img.shields.io/npm/l/parse-json-object.svg"></a></h2>

[MIT](https://opensource.org/licenses/MIT) - _MIT License_
<!--END FOOTER-->
