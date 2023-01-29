import { isJSONObject, isJSONValue, isJSONArray, isString, JSONValue } from "types-json";
import z from "zod";
import { validate } from "is-zod";

export type ValidateFunction<T extends JSONValue> = (value: JSONValue) => value is T;

export function parse<T extends JSONValue>(text: string | undefined, validator: ValidateFunction<T> | z.ZodSchema<T>): T | undefined {
  if(text) {
    try {
      const json = JSON.parse(text);
      if(typeof validator === "function") {
        return validator(json) ? json as T : undefined;
      } else {
        return validate(validator)(json) ? json as T : undefined;
      }
    } catch(err) {
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
