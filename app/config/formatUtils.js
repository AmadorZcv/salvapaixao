export function integerToReal(value) {
  const string = value.toString();
  if (string.length > 5) {
    const formatted =
      string.slice(0, string.length - 5) +
      " " +
      string.slice(string.length - 5, string.length - 2) +
      "," +
      string.slice(string.length - 2, string.length);
    return formatted;
  } else {
    const formatted =
      string.slice(0, string.length - 2) +
      "," +
      string.slice(string.length - 2, string.length);
    return formatted;
  }
}
