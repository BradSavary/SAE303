import {genericRenderer} from "../../../lib/utils.js";

const templateFile = await fetch("src/ui/orderstatus/delivered/template.html");
const template = await templateFile.text();


let orderStatusDeliveredView = {
    render: function(data){
        let html="";
        html = genericRenderer(template, data);
        return html;

    }
};

export {orderStatusDeliveredView};