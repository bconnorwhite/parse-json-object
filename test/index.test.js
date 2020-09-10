const { parseJSONValue, parseJSONObject, parseJSONArray, parseString } = require("../build");

test("parseJSONValue object", () => {
  expect(parseJSONValue('{"ok":true}').ok).toBe(true);
});

test("parseJSONValue array", () => {
  expect(parseJSONValue('[{"ok":true}]')[0].ok).toBe(true);
});

test("parseJSONValue string", () => {
  expect(parseJSONValue('"ok"')).toBe("ok");
});

test("parseJSONObject", () => {
  expect(parseJSONObject('{"ok":true}').ok).toBe(true);
});

test("parseJSONArray", () => {
  expect(parseJSONArray('[{"ok":true}]')[0].ok).toBe(true);
});

test("parseString", () => {
  expect(parseString('"ok"')).toBe("ok");
});
