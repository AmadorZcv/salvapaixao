export const ADD_ORCAMENTO = "ADD_ORCAMENTO";
export const IS_SAVING = "IS_SAVING";

export const isSavingOrcamento = bool => ({
  type: IS_SAVING,
  payload: bool
});

export const add_orcamento = orcamento => ({
  type: ADD_ORCAMENTO,
  payload: orcamento
});
