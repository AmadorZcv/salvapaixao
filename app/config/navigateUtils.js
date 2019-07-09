export function navigateFromId(id) {
  switch (id) {
    case "10000":
    case "10001":
    case "10100":
      return "SalvaPiso";
    case "11000":
      return "SalvaPisoEspeciais";
    case "12000":
      return "SalvaPisoResistente";
    case "14000":
    case "14001":
    case "14002":
    case "14003":
      return "SalvaPisoPintura";
    case "16000":
      return "SalvaMetais";
    case "17000":
    case "17001":
    case "17002":
    case "17003":
      return "SalvaBancada";
    case "13000":
    case "13100":
    case "13200":
    case "13300":
      return "SalvaPisoLimpeza";
    case "19000":
    case "19001":
    case "19100":
    case "19101":
    case "19102":
    case "19103":
    case "19104":
    case "19105":
    case "19200":
    case "19201":
    case "19300":
      return "Materiais";
    default:
      return null;
  }
}
