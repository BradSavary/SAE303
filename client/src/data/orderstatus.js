import{getRequest} from"../lib/api-request.js";

let orderstatusData={};

orderstatusData.fetchStatus = async function (status){
    let data = await getRequest("orders?orderstatus="+status)
    return data;
}

export {orderstatusData};