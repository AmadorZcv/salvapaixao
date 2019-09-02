import { PermissionsAndroid } from "react-native";
import RNFetchBlob from "rn-fetch-blob";
import Api from "./api";
import RNHTMLtoPDF from "react-native-html-to-pdf";
const android = RNFetchBlob.android;
let dirs = RNFetchBlob.fs.dirs;
let DownloadDir = RNFetchBlob.fs.dirs.DownloadDir;
let options = {
  addAndroidDownloads: {
    useDownloadManager: true, //uses the device's native download manager.
    notification: true,
    title: "Notification Title", // Title of download notification.
    path: DownloadDir + "/me_" + "." + "pdf", // this is the path where your download file will be in
    description: "Downloading file."
  }
};
export async function requestDownloadPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: "Permissão para download",
        message: "Precisamos de permissão para salvar o PDF ",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.warn(err);
    return false;
  }
}
export async function createPDF(html, callback, title) {
  let options = {
    html: html,
    fileName: title,
    directory: DownloadDir,
    width: 595,
    height: 842
  };
  let file = await RNHTMLtoPDF.convert(options);
  callback();
  android.actionViewIntent(file.filePath, "application/pdf");
}
export function donwload(orcamento, callback) {
  Api.post("/api/pdf", {
    orcamento
  }).then(response => createPDF(response.data, callback));
}
