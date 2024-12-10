import { orderstatusData } from "./data/orderstatus.js";
import {orderStatusDeliveredView} from "./ui/orderstatus/delivered/index.js";
import {orderStatusPendingView} from "./ui/orderstatus/pending/index.js";
import {orderStatusShippingView} from "./ui/orderstatus/shipping/index.js";


// import './index.css';


let C = { };

C.init = async function(){
    V.init();
}

let V = {
    header: document.querySelector("#header"),
    orderstatus: document.querySelector("#orderstatus"),
    orderstatus_pending: document.querySelector("#orderstatus_pending"),
    orderstatus_delivered: document.querySelector("#orderstatus_delivered"),
    orderstatus_shipping: document.querySelector("#orderstatus_shipping"),
};

V.init = function(){
    V.renderOrderStatus();
}

V.renderPendingOrderStatus = async function(){
    let data = await orderstatusData.fetchStatus("pending");
    let html = orderStatusPendingView.render(data);
   V.orderstatus_pending.innerHTML = html;
};

V.renderDeliveredOrderStatus = async function(){
    let data = await orderstatusData.fetchStatus("delivered");
    let html = orderStatusDeliveredView.render(data);
   V.orderstatus_delivered.innerHTML = html;
};

V.renderShippingOrderStatus = async function(){
    let data = await orderstatusData.fetchStatus("shipped");
    let html = orderStatusShippingView.render(data);
   V.orderstatus_shipping.innerHTML = html;
};

V.renderOrderStatus= function(){
    V.renderPendingOrderStatus();
    V.renderDeliveredOrderStatus();
    V.renderShippingOrderStatus();
};


C.init();