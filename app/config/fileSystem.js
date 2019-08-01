import { PermissionsAndroid } from "react-native";
import RNFetchBlob from "rn-fetch-blob";
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
export function donwload() {
  RNFetchBlob.config({ path: DownloadDir + "/me_" + "." + "pdf" })
    .fetch(
      "POST",
      "http://192.168.11.103:4000/api/pdf",
      {
        "Content-Type": "application/json"
      },
      JSON.stringify({
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
      })
    )
    .then(res => {
      console.log("The file saved to ", res.path());
    })
    // Something went wrong:
    .catch((errorMessage, statusCode) => {
      console.log("erro é", errorMessage, "status", statusCode);
      // error handling
    });
}
