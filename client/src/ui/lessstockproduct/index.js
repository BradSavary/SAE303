import {lessstockproductData} from "../../data/lessstockproduct.js";

import anychart from 'anychart';

let lessstockProductView = {
    render: async function(){
        anychart.onDocumentReady(async function() {
            // set chart theme
        anychart.theme('wines');
        
            // set the data
        var data = await lessstockproductData.fetch();
        
            // create the chart
            var chart = anychart.column();
        
            // add data
            chart.data(data);
            
            chart.animation(true);
            
            // set the chart title
            chart.title('Les 10 produits avec le moins de stock');
        
            // draw
            chart.container('lessstockproduct');
            chart.draw();
          });
    }
};

export {lessstockProductView};