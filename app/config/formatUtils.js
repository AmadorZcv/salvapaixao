import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
export function integerToReal(value) {
  const string = value.toString();
  if (string.length == 1) {
    const formatted = "0,0" + string;
    return formatted;
  }
  else if (string.length == 2) {
    const formatted = "0," + string;
    return formatted;
  }
  else if (string.length > 5) {
    const formatted =
      string.slice(0, string.length - 5) +
      "." +
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
export function fontSizeAdjust(value) {
  const string = value.toString();
  if (string.length < 6){
    const size = wp(5)
    return size;
  }
  else if (string.length == 6) {
    const size = wp(4.5)
    return size;
  }
  else if (string.length == 7) {
    const size = wp(4)
    return size;
  }
  else if (string.length > 7) {
    const size = wp(3.5)
    return size;
  }
}
