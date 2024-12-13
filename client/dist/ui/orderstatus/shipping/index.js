import {genericRenderer} from "../../../lib/utils.js";

const templateFile = await fetch("src/ui/orderstatus/shipping/template.html");
const template = await templateFile.text();


let orderStatusShippingView = {
   render: function(data){
        let html="";
        html = genericRenderer(template, data);
        return html;
    }
};

export {orderStatusShippingView};