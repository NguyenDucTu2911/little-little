const formatVND = (price: number): string => {
    return new Intl.NumberFormat("it-IT", {
        style: "currency",
        currency: "VND",
    }).format(price);
}

export default formatVND;

