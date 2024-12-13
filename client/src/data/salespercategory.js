import{getRequest} from"../lib/api-request.js";

let salespercategoryData={};

salespercategoryData.fetch= async function () {
    let allSales = [];
    let data = await getRequest("orders?sales=categorysales");
    for (let j = 0; j < 6; j++) {
        let sales = [data[j*5].month];
        for (let i = 0; i < 5; i++) {
            sales.push(parseFloat(data[i+j*5].sales_amount));
        }
        allSales.push(sales);
    }
    return allSales;
};

salespercategoryData.fetchCategory=async function(){
    let data = await getRequest("orders?sales=categorysales");
    let category = [];
    for(let i=0; i<5;i++){
        category.push(data[i+1*5].category)
    }
    return category
}


export {salespercategoryData};