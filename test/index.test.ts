import { test, expect } from "@jest/globals";
import { parse, parseJSONValue, parseJSONObject, parseJSONArray, parseString, isJSONArray } from "../source";

test("parse invalid", () => {
  expect(parse('{"ok":true}', isJSONArray)).toBe(undefined);
});

test("parseJSONValue object", () => {
  expect(parseJSONValue('{"ok":true}')).toEqual({ ok: true });
});

test("parseJSONValue array", () => {
  expect(parseJSONValue('[{"ok":true}]')).toEqual([{ ok: true }]);
});

test("parseJSONValue string", () => {
  expect(parseJSONValue('"ok"')).toBe("ok");
});

test("parseJSONValue undefined", () => {
  expect(parseJSONValue(undefined)).toBe(undefined);
});

test("parseJSONValue invalid", () => {
  expect(parseJSONValue("ok")).toBe(undefined);
});

test("parseJSONObject", () => {
  expect(parseJSONObject('{"ok":true}')).toEqual({ ok: true });
});

test("parseJSONArray", () => {
  expect(parseJSONArray('[{"ok":true}]')).toEqual([{ ok: true }]);
});

test("parseString", () => {
  expect(parseString('"ok"')).toBe("ok");
});
