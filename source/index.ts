import { isJSONObject, JSONObject, JSONValue, JSONArray } from "types-json";

export default function parse<T extends JSONObject>(text?: string): T | undefined {
  if(text) {
    try {
      const json = JSON.parse(text);
      if(isJSONObject(json)) {
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

export {
  isJSONObject,
  JSONObject,
  JSONValue,
  JSONArray
}
