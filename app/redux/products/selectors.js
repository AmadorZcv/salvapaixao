export function selectProducts(state) {
  const { isConsumidor } = state.products;
  if (isConsumidor) {
    return state.products.consumidor;
  }
  return state.products.revenda;
}
