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
      donwload();
    } else {
      console.log("Camera permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
}
async function createPDF(html) {
  let options = {
    html: html,
    fileName: "test22.pdf",
    directory: DownloadDir
  };

  let file = await RNHTMLtoPDF.convert(options);
  console.log(file.filePath);
  android.actionViewIntent(file.filePath, "application/pdf");
}
export function donwload() {
  Api.post("/api/pdf", {
    orcamento: {
      criacao: "01/08/2019",
      validade: "30/08/2019",
      condicao: "23",
      telefone: "(91) 988935643",
      cidade: "Belém",
      nome: "Lucas Amador",
      nome_completo: "Lucas Amadoe de Oliveira",
      uf: "PA",
      cpf: "026.810.342-99",
      email: "a@a.com",
      ramo: "Desenvolvimento",
      carrinho: [
        {
          id: "10000",
          qtd: 20
        },
        {
          id: "13100",
          qtd: 3
        },
        {
          id: "14001",
          qtd: 7
        },
        {
          id: "17000",
          qtd: 15
        }
      ]
    }
  }).then(response => createPDF(response.data));
}
