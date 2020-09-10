import { isJSONObject, isJSONValue, isJSONArray, isString, JSONObject, JSONValue, JSONArray } from "types-json";

export function parse<T extends JSONValue>(text: string | undefined, isType: (value?: T) => boolean): T | undefined {
  if(text) {
    try {
      const json = JSON.parse(text);
      if(isType(json)) {
        return json as T;
      } else {
        return undefined;
      }
    } catch(e) {
      return undefined;
    }
  } else {
    return undefined;
  }
}

export function parseJSONValue<T extends JSONValue>(text?: string): T | undefined {
  return parse<T>(text, isJSONValue);
}

export function parseJSONObject<T extends JSONObject>(text?: string): T | undefined {
  return parse<T>(text, isJSONObject);
}

export function parseJSONArray<T extends JSONArray>(text?: string): T | undefined {
  return parse<T>(text, isJSONArray);
}

export function parseString<T extends string>(text?: string): T | undefined {
  return parse<T>(text, isString);
}

export * from "types-json";
