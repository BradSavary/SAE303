import {genericRenderer} from "../../../lib/utils.js";

const templateFile = await fetch("src/ui/orderstatus/pending/template.html");
const template = await templateFile.text();

let orderStatusPendingView = {
    render: function(data){
        let html="";
        html = genericRenderer(template, data);
        return html;

    }
};

export {orderStatusPendingView};