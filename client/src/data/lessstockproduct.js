import{getRequest} from"../lib/api-request.js";

let lessstockproductData={};

lessstockproductData.fetch = async function () {
    let data = await getRequest("products?product=lessstock");
    let products = data.map(product => ({ name: [product.product_name], total: [product.stock] }));
    return products;
}

export {lessstockproductData};