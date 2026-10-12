const formatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export function formatCurrency(value: number): string {
  // Intl usa espaço não separável entre "R$" e o número; trocamos por espaço comum.
  return formatter.format(value).replace(/ /g, ' ');
}

/** Preço "de": o JSON não traz valor antigo, então simulamos +7% (ver README). */
export function getOldPrice(price: number): number {
  return Math.round(price * 1.07 * 100) / 100;
}

/** Valor de cada parcela em 2x sem juros. */
export function getInstallment(price: number): number {
  return Math.round((price / 2) * 100) / 100;
}
