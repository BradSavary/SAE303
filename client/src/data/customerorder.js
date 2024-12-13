import{getRequest} from"../lib/api-request.js";

let customerorderData={};

// faire en sorte de vérifier le nom des produits de la function fetchProduct avec ceux de la function fetch afin de faire correspondre les noms des produits avec les quantités, si un produit n'a pas été commandé par le client, mettre 0, l'ordre doit être respecté

customerorderData.fetchProduct = async function () {
    //faire l'api pour récup juste les noms des produits
    let data = await getRequest(`products?product=product`);
    if (!Array.isArray(data)) {
        return [];
    }
    return data;
}

// customerorderData.fetch = async function (id) {
//     let data = await getRequest(`customers?id=${id}`);
//     if (!Array.isArray(data)) {
//         return [];
//     }
//     let uniqueCategories = [];
//     let categoryMap = new Map();

//     data.forEach(customer => {
//         if (categoryMap.has(customer.product_name)) {
//             categoryMap.set(customer.product_name, [...categoryMap.get(customer.product_name), customer.total_quantity]);
//         } else {
//             categoryMap.set(customer.product_name, [customer.total_quantity]);
//         }
//     });

//     categoryMap.forEach((total_quantities, product_name) => {
//         uniqueCategories.push([product_name, ...total_quantities]);
//     });
//     return uniqueCategories;
// };

// customerorderData.fetchProductQuantities = async function (id) {
//     let products = await customerorderData.fetchProduct();
//     let customerOrders = await customerorderData.fetch(id);

//     let productQuantities = products.map(product => {
//         let productOrder = customerOrders.find(order => order[0] === product.product_name);
//         return [
//             product.product_name,
//             productOrder ? productOrder.slice(1).reduce((acc, qty) => acc + Number(qty), 0) : 0
//         ];
//     });

//     return productQuantities;
// };

// customerorderData.fetchCustomerCategoryWithProductQuantities = async function (id) {
//     let customerData = await getRequest(`customers?id=${id}`);
//     if (!Array.isArray(customerData) || customerData.length === 0) {
//         return [];
//     }
//     let customerCategories = customerData.map(customer => customer.category);
//     let productQuantities = await customerorderData.fetchProductQuantities(id);

//     let uniqueCategories = [...new Set(customerCategories)];
//     let result = uniqueCategories.map(category => {
//         let categoryProducts = customerData.filter(customer => customer.category === category);
//         let quantities = productQuantities.map(product => {
//             let productOrder = categoryProducts.find(customer => customer.product_name === product[0]);
//             return productOrder ? productOrder.total_quantity : 0;
//         });

//         let resultat = [];
//         resultat.push(category);
//         quantities = quantities.map(qty => Number(qty));
//         resultat.push(...quantities);

//         return resultat;
//     });

//     return result;
// };

customerorderData.fetchCloud = async function (id) {
    let data = await getRequest(`customers?id=${id}`);
    if (!Array.isArray(data)) {
        return [];
    }
    let result = data.map(customer => ({
        x: customer.product_name,
        value: customer.total_quantity,
        category: customer.category
    }));
    return result;
};



customerorderData.fetchOption = async function(){
    let data = await getRequest(`customers?customer=all`);
    return data
}


export {customerorderData};