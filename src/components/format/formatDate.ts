import moment from "moment";

const formatDate = (date: Date) => {
    return moment().format("DD/MM/YYYY");
}

export default formatDate;
