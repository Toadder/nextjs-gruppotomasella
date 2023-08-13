export const getFormattedPrice = (
	price: number,
	currency: 'RUB' | 'EUR'
): string => {
	const formattedPrice = new Intl.NumberFormat('ru-RU', {
		style: 'currency',
		currency,
		maximumFractionDigits: 0
	}).format(price);

	return formattedPrice;
};
