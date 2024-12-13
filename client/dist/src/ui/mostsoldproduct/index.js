import {mostsoldproductData} from "../../data/mostsoldproduct.js";

import anychart from 'anychart';

let mostSoldProductView = {
    render: async function(){
        anychart.onDocumentReady(async function() {
            // set chart theme
        anychart.theme('lightGlamour');
        
            // set the data
        var data = await mostsoldproductData.fetch();
        
            // create the chart
            var chart = anychart.column();
        
            // add data
            chart.data(data);

            chart.animation(true);

            //set the chart color

            chart.palette(["#008000"]);

            //set the chart selection mode

            chart.interactivity().selectionMode("none");
            
            // set the chart title
            chart.title('Les produits les plus vendu des 2 derniers mois');
        
            // draw
            chart.container('mostsoldproduct');
            chart.draw();
          });
    }
};

export {mostSoldProductView};