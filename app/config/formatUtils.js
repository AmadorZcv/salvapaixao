export function integerToReal(value) {
  const string = value.toString();
  const formatted = string.slice(0, 2) + "," + string.slice(1);
  return formatted.slice(0, 5);
}
