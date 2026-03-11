import { isJSONArray, isJSONObject, isJSONValue, isString, type JSONValue } from "types-json";
import type { ZodSchema } from "zod";
import { validate } from "is-zod";

export type ValidateFunction<T extends JSONValue> = (value: JSONValue) => value is T;

export function parse<T extends JSONValue>(
  text: string | undefined,
  validator: ValidateFunction<T> | ZodSchema<T>
): T | undefined {
  if(text) {
    try {
      const json: JSONValue = JSON.parse(text);
      if(typeof validator === "function") {
        return validator(json) ? json : undefined;
      } else {
        return validate(validator)(json) ? json : undefined;
      }
    } catch{
      return undefined;
    }
  } else {
    return undefined;
  }
}

export function parseJSONValue(text?: string) {
  return parse(text, isJSONValue);
}

export function parseJSONObject(text?: string) {
  return parse(text, isJSONObject);
}

export function parseJSONArray(text?: string) {
  return parse(text, isJSONArray);
}

export function parseString(text?: string) {
  return parse(text, isString);
}

export type { JSONArray, JSONObject, JSONValue } from "types-json";
