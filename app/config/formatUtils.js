export function integerToReal(value) {
  const string = value.toString();
  const formatted =
    string.slice(0, string.length - 2) +
    "," +
    string.slice(string.length - 2, string.length);
  return formatted;
}
