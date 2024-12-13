import{getRequest} from"../lib/api-request.js";

let salesevolutionData={};

salesevolutionData.fetch= async function (id) {
    let data = await getRequest(`products?salesevolution=${id}`);
    let products = data.map(product => [product.month, product.sales_volume]);
    return products;
};

salesevolutionData.fetchName = async function(id){
    let data = await getRequest(`products?salesevolution=${id}`);
    return data[0].product_name;
}

salesevolutionData.fetchOption = async function(){
    let data = await getRequest(`products?product=name`);
    return data
}


export {salesevolutionData};