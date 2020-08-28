import { isJSONObject, JSONObject, JSONValue, JSONArray } from "@bconnorwhite/json-types";

export {
  isJSONObject,
  JSONObject,
  JSONValue,
  JSONArray
}

export default function parse(text?: string) {
  if(text) {
    try {
      const json = JSON.parse(text);
      if(isJSONObject(json)) {
        return json;
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
