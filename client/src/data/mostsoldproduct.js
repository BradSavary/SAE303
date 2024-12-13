import{getRequest} from"../lib/api-request.js";

let mostsoldproductData={};

mostsoldproductData.fetch = async function () {
    let data = await getRequest("products?product=mostsold");
    let products = data.map(product => ({ name: product.product_name, total: product.total_sales }));
    return products;
}

export {mostsoldproductData};