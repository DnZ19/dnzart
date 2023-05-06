const formatPrice = (amount) => {
	return new Intl.NumberFormat("nl-EUR" {
        style: "currency",
        currency: "EUR",
    }).format(amount/100);
};
