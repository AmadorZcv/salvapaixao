export function productName(id) {
  switch (id) {
    case "10000":
    case "10001":
    case "10002":
    case "10003":
    case "10004":
    case "10005":
      return "Tradicional";
    case "10100":
    case "10101":
    case "10102":
      return "Tradicional Com Fita";
    case "11000":
    case "11001":
      return "Pisos Especiais";
    case "11100":
      return "Fora do Padrão";
    case "11200":
      return "Personalizado";
    case "12000":
      return "Extra Resistente";
    case "13000":
      return "Pós Obra";
    case "13100":
      return "Porcelanato";
    case "13200":
      return "Limpa Pedras";
    case "13300":
      return "Limpa Rejunte";
    case "14000":
    case "14001":
    case "14002":
    case "14003":
      return "Salva Pintura";
    case "15000":
      return "Salva Quina";
    case "16000":
      return "Salva Metal";
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
    case "19002":
    case "19003":
    case "19004":
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
    case "19400":
    case "19401":
    case "19402":
    case "19403":
      return "Lona Bolha";
    case "20000":
    case "20001":
      return "Kraft";

  }
}
export function productAmount(id) {
  switch (id) {
    case "10000":
      return `Protetor de piso
1,00m x 25mts`;
    case "10001":
      return `Protetor de piso
0,50m x 25mts`;
    case "10002":
      `Protetor de piso
1,00m x 15mts`;
    case "10003":
      `Protetor de piso
0,50m x 15mts`;
    case "10004":
      `Protetor de piso
1,00m x 10mts`;
    case "10005":
      `Protetor de piso
0,50m x 10mts`;
    case "10100":
      return `Protetor de piso com fita
        1,00m x 25mts`;
    case "10101":
      return `Protetor de piso com fita
1,00m x 15mts`;
    case "10102":
      return `Protetor de piso com fita
1,00m x 10mts`;
    case "11000":
      return `Protetor de pisos de madeira
1,00m x 25mts`;
    case "11001":
      return `Protetor de pisos de madeira
1,00m x 15mts`;
    case "11100":
    case "11200":
      return `Protetor de piso
1,00m x 25mts`;
    case "12000":
      return `Manta protetora de piso extra resistente
1,20m x 25mts`;
    case "13000":
    case "13100":
    case "13200":
      return `Produto químico para limpeza
1L Caixa c/ 6 unidades`;
    case "13300":
      return `Produto químico para limpeza
0,5L Caixa c/ 6 unidades`;
    case "14000":
      return `Mascaramento para pintura
20m x 0,45mts`;
    case "14001":
      return `Mascaramento para pintura
20m x 0,90mts`;
    case "14002":
      return `Mascaramento para pintura
20m x 1,50mts`;
    case "14003":
      return `Mascaramento para pintura
20m x 2,40mts`;
    case "15000":
      return `Proteção para quinas e batentes
0,05m x 0,05m x 1,8m
Pacote c/ 6 unidades`;
    case "16000":
      return `Proteção para metais e maçanetas
0,10m x 75mts Caixa c/ 6 unidades`;
    case "17000":
      return `Proteção para louça sanitária
0,40m x 25mts`;
    case "17001":
      return `Proteção para bancadas
0,60m x 25mts`;
    case "17002":
      return `Proteção para louça sanitária
0,40m x 50mts`;
    case "17003":
      return `Proteção para bancadas
0,60m x 50mts`;
    case "18000":
      return `Tampão para Ralos
0,10m Ø Caixa c/ 6 unidades`;
    case "18001":
      return `Tampão para Ralos
0,15m Ø Caixa c/ 6 unidades`;
    case "19000":
      return `Papelão ondulado tipo B
1,20m x 25mts`;
    case "19001":
      return `Papelão ondulado tipo B
1,20m x 50mts`;
    case "19002":
      return `Papelão ondulado tipo B
1,20m x 5mts`;
    case "19003":
      return `Papelão ondulado tipo B
1,20m x 10mts`;
    case "19100":
      return `Lona plástica preta
6m x 5mts`;
    case "19101":
      return `Lona plástica preta
5m x 4mts`;
    case "19102":
      return `Lona plástica preta
4m x 4mts`;
    case "19103":
      return `Lona plástica preta
4m x 3mts`;
    case "19104":
      return `Lona plástica preta
3m x 3mts`;
    case "19105":
      return `Lona plástica preta
3m x 2mts`;
    case "19200":
      return `Fita crepe
1,8cm x 50mts`;
    case "19201":
      return `Fita crepe
4,8cm x 50mts`;
    case "19300":
      return `Fita crepe premium para construção civil
4,8cm x 50mts`;
    case "19400":
      return `Plástico lona bolha preto
1,20m x 25mts`;
    case "19401":
      return `Plástico lona bolha preto
1,20m x 10mts`;
    case "19402":
      return `Plástico lona bolha preto
0,60m x 25mts`;
    case "19403":
      return `Plástico lona bolha preto
0,60m x 10mts`;
    case "20000":
      return `Papel kraft pardo
1,00m x 25mts`;
    case "20001":
      return `Papel kraft pardo
1,00m x 50mts`;
  }
}
