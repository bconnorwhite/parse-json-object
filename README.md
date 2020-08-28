# parse-json-object
![dependencies](https://img.shields.io/david/bconnorwhite/parse-json-object)
![typescript](https://img.shields.io/github/languages/top/bconnorwhite/parse-json-object)
![npm](https://img.shields.io/npm/v/parse-json-object)

Parse a typed JSON object.

- Returns undefined if unable to parse
- Returns typed JSON object if successful

```
yarn add parse-json-object
```

## API
```ts
import parse, { isJSONObject, JSONObject, JSONValue, JSONArray } from "parse-json-object";

parse(json?: string) => JSONObject | undefined;

isJSONObject(json?: JSONValue) => boolean;

```

### Types
```ts
type JSONObject = {
  [key in string]?: JSONValue
};

type JSONValue = string | number | boolean | null | JSONObject | JSONArray;

interface JSONArray extends Array<JSONValue> {};
```

