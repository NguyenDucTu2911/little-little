const formatVND = (price: number) => {
    return new Intl.NumberFormat("it-IT", {
        style: "currency",
        currency: "VND",
    }).format(price);
}

export default formatVND;

