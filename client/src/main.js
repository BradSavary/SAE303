import { orderstatusData } from "./data/orderstatus.js";
import {orderStatusDeliveredView} from "./ui/orderstatus/delivered/index.js";
import {orderStatusPendingView} from "./ui/orderstatus/pending/index.js";
import {orderStatusShippingView} from "./ui/orderstatus/shipping/index.js";
import {mostSoldProductView} from "./ui/mostsoldproduct/index.js";
import { salespermonthView } from "./ui/salespermonth/index.js";
import { salespercategoryView } from "./ui/salespercategory/index.js";
import { lessstockProductView } from "./ui/lessstockproduct/index.js";
import {salesevolutionView} from "./ui/salesevolution/index.js"
import { salesevolutionData } from "./data/salesevolution.js";
import { salesOptionView } from "./ui/salesevolution/index.js";
import { customerorderView } from "./ui/customerorder/index.js";
import{customerOptionView} from "./ui/customerorder/index.js";
import { customerorderData } from "./data/customerorder.js";

// import './index.css';

import anychart from 'anychart';


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
    mostsoldproduct: document.querySelector("#mostsoldproduct"),
    salesevolution: document.querySelector("#salesevolution"),
    salesoption: document.querySelector("#product_name"),
    customerorder: document.querySelector("#customerorder"),
    customeroption: document.querySelector("#customer_name")
};

V.init = function(){
    V.renderOrderStatus();
    V.renderMostSoldProduct();
    V.renderSalesPerMonth();
    V.renderSalesPerCategory();
    V.renderLessStockProduct();
    V.renderSalesEvolutionOption();
    V.renderCustomerOrder();
    V.renderCustomerOrderOption();
    V.customerorder.innerHTML = "";

    C.setupEventListeners();
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


V.renderMostSoldProduct = function(){
   mostSoldProductView.render();
}

V.renderSalesPerMonth = function(){
    salespermonthView.render();
}

V.renderSalesPerCategory = function(){
    salespercategoryView.render();
}

V.renderLessStockProduct = function(){
    lessstockProductView.render();
};

V.renderSalesEvolutionOption = async function(){
    let data = await salesevolutionData.fetchOption();
    let html = salesOptionView.render(data);
    V.salesoption.innerHTML = html;
}

V.renderCustomerOrder = async function(){
    let data = await customerorderData.fetch();
    let html = customerorderView.render(data);
    V.customerorder.innerHTML = "";
    V.customerorder.innerHTML = html;
};

V.renderCustomerOrderOption = async function(){
    let data = await customerorderData.fetchOption();
    let html = customerOptionView.render(data);
    V.customeroption.innerHTML = html;
};

C.setupEventListeners = function(){
    document.querySelector("#salesevolution_id").addEventListener("input", function(event){
        let value = parseInt(event.target.value);
        V.salesevolution.innerHTML = "";
        salesevolutionView.render(value);
    });
    document.querySelector("#product_name").addEventListener("change", function(event){
        let value = event.target.value;
        V.salesevolution.innerHTML = "";
        salesevolutionView.render(value);
    });

    document.querySelector("#customer_name").addEventListener("change", function(event){
        let value = event.target.value;
        V.customerorder.innerHTML = "";
        customerorderView.render(value);
    })
}


C.init();