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
export async function requestDownloadPermission(orcamento, callback) {
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
      donwload(orcamento, callback);
    } else {
      console.log("Camera permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
}
async function createPDF(html, callback) {
  let options = {
    html: html,
    fileName: "Orçamento",
    directory: DownloadDir,
    width: 595,
    height: 842
  };
  callback();
  let file = await RNHTMLtoPDF.convert(options);

  android.actionViewIntent(file.filePath, "application/pdf");
}
export function donwload(orcamento, callback) {
  console.log("orçamento é", orcamento);
  Api.post("/api/pdf", {
    orcamento
  }).then(response => createPDF(response.data, callback));
}
