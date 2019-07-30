export function productName(id) {
  switch (id) {
    case "10000":
    case "10001":
    case "10100":
      return "Tradicional";
    case "11000":
      return "Madeira";
    case "12000":
      return "Extra Resistente";
    case "13000":
    case "13100":
    case "13200":
    case "13300":
      return "Limpeza";
    case "14000":
    case "14001":
    case "14002":
    case "14003":
      return "Salva Pintura";
    case "15000":
      return "Salva Quina";
    case "16000":
      return "Salva Metais";
    case "17000":
    case "17001":
    case "17002":
    case "17003":
      return "Salva Bancada";
    case "18000":
    case "18001":
      return "Salva Ralo";
    case "19000":
    case "19001":
      return "Papelão Ondulado";
    case "19100":
    case "19101":
    case "19102":
    case "19103":
    case "19104":
    case "19105":
      return "Lona Plástica Preta";
    case "19200":
    case "19201":
      return "Fita Crepe";
    case "19300":
      return "Fita Crepe Premium";
  }
}
export function productAmount(id) {
  switch (id) {
    case "10000":
      return "Papel + Bolha (1m)";
    case "10001":
      return "Papel + Bolha (0.5m)";
    case "10100":
      return "Papel + Bolha + Fita Adesiva (1m)";
    case "11000":
      return "Papel + Bolha + TNT (1m)";
    case "12000":
      return "Papel+Manta Expandida (1,2m)";
    case "13000":
      return "Pós Obra";
    case "13100":
      return "Limpeza Diária";
    case "13200":
      return "Limpa Pedras";
    case "13300":
      return "Limpa Rejunte";
    case "14000":
      return "Proteção Pintura (0,45m)";
    case "14001":
      return "Proteção Pintura (0,9m)";
    case "14002":
      return "Proteção Pintura (1,5m)";
    case "14003":
      return "Proteção Pintura (2,4m)";
    case "15000":
      return "Proteção para Quinas e Batentes";
    case "16000":
      return "Filme para Envolvimento";
    case "17000":
      return "Adesivo para Proteção (0,45m)";
    case "17001":
      return "Adesivo para Proteção (0,60m)";
    case "17002":
      return "Adesivo para Proteção (0,40m)";
    case "17003":
      return "Adesivo para Proteção (0,60m)";
    case "18000":
      return "Tampão para Ralos (10cm)";
    case "18001":
      return "Tampão para Ralos (15cm)";
    case "19000":
      return "Comprimento: 25m";
    case "19001":
      return "Comprimento: 50m";
    case "19100":
      return "Largura: 6m Comprimento: 5m";
    case "19101":
      return "Largura: 5m Comprimento: 4m";
    case "19102":
      return "Largura: 4m Comprimento: 5m";
    case "19103":
      return "Largura: 4m Comprimento: 3m";
    case "19104":
      return "Largura: 3m Comprimento: 3m";
    case "19105":
      return "Largura: 3m Comprimento: 2m";
    case "19200":
      return "Altura: 1,8cm";
    case "19201":
      return "Altura: 4,8cm";
    case "19300":
      return "Altura: 4,8cm";
  }
}