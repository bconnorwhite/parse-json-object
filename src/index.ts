
export type JSONObject = {
  [Key in string]?: JSONValue
};

export type JSONValue = string | number | boolean | null | JSONObject | JSONArray;

export interface JSONArray extends Array<JSONValue> {}

export function isJSONObject(object: JSONValue): object is JSONObject {
  return typeof object === "object" && !Array.isArray(object);
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
