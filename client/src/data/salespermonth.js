import{getRequest} from"../lib/api-request.js";

let salespermonthData={};

salespermonthData.fetch = async function () {
    let data = await getRequest("orders?sales=monthsales");
    let sales = data.map(sale => [sale.month, sale.total_sales]);
    return sales;
}

export {salespermonthData};