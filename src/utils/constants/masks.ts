const isoDate = (e: string) => {
  return e ? new Date(e).toLocaleString() : new Date().toLocaleString();
};

const onlyDate = (e: string) => {
  return e ? new Date(e).toLocaleDateString() : new Date().toLocaleDateString();
};

const dateMask = (e: string) =>
  e
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{4})(\d{1,2})/, "$1/$2");

const phoneMask = (e: string) => {
  let result = e.replace(/\D/g, "");

  if (result?.length === 13 || result?.length === 12) {
    result = result.slice(2, result?.length);
  }

  return parseInt(result.replace(/\D/g, ""), 10)
    .toString()
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d{1})/, "($1) $2")
    .replace(/(\d{5})(\d{1})/, "$1-$2")
    .replace(/(\d{4})/, "$1");
};

const CPFMask = (e: string) =>
  e
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");

const validateCPF = (cpf: string) => {
  cpf = cpf.replace(/[^\d]+/g, "");
  if (cpf === "") return false;
  if (
    cpf.length !== 11 ||
    cpf === "00000000000" ||
    cpf === "11111111111" ||
    cpf === "22222222222" ||
    cpf === "33333333333" ||
    cpf === "44444444444" ||
    cpf === "55555555555" ||
    cpf === "66666666666" ||
    cpf === "77777777777" ||
    cpf === "88888888888" ||
    cpf === "99999999999"
  )
    return false;
  let add = 0;
  for (let i = 0; i < 9; i++) add += parseInt(cpf.charAt(i), 10) * (10 - i);
  let rev = 11 - (add % 11);
  if (rev === 10 || rev === 11) rev = 0;
  if (rev !== parseInt(cpf.charAt(9), 10)) return false;
  add = 0;
  for (let i = 0; i < 10; i++) add += parseInt(cpf.charAt(i), 10) * (11 - i);
  rev = 11 - (add % 11);
  if (rev === 10 || rev === 11) rev = 0;
  if (rev !== parseInt(cpf.charAt(10), 10)) return false;
  return true;
};

export { isoDate, onlyDate, CPFMask, phoneMask, dateMask, validateCPF };
