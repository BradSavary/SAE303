import {lessstockproductData} from "../../data/lessstockproduct.js";

import anychart from 'anychart';

let lessstockProductView = {
    render: async function(){
        anychart.onDocumentReady(async function() {
            // set chart theme
        
            // set the data
        var data = await lessstockproductData.fetch();
        
            // create the chart
            var chart = anychart.column();
        
            // add data
            chart.data(data);

            // set the chart animation
            chart.animation(true);

            //set th chart color

            chart.palette(["#F00000"]);
            
            // set the chart title
            chart.title('Les 10 produits avec le moins de stock');

                        //set the chart selection mode

                        chart.interactivity().selectionMode("none");
        
            // draw
            chart.container('lessstockproduct');
            chart.draw();
          });
    }
};

export {lessstockProductView};