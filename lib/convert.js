const convert = (valor, quantidade) => {
  return valor * quantidade;
};

const toMoney = (valor) => {
  return parseFloat(valor).toFixed(2);
};

module.exports = {
  convert,
  toMoney,
};