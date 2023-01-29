import { test, expect } from "@jest/globals";
import { isJSONArray } from "types-json";
import z from "zod";
import { parse, parseJSONValue, parseJSONObject, parseJSONArray, parseString } from "../source/index.js";

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

test("zod success", () => {
  const schema = z.object({
    a: z.string(),
    b: z.number()
  });
  expect(parse('{"a":"ok","b":1}', schema)).toEqual({ a: "ok", b: 1 });
});

test("zod fail", () => {
  const schema = z.object({
    a: z.string(),
    b: z.string()
  });
  expect(parse('{"a":"ok","b":1}', schema)).toEqual(undefined);
});
