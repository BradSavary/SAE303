import {salespermonthData} from "../../data/salespermonth.js";

import anychart from 'anychart';

let salespermonthView = {
    render: async function(){
        
    anychart.onDocumentReady(async function () {
        // set chart theme
    anychart.theme('lightGlamour');
          // create line chart
          var chart = anychart.line();
    
          chart.yScale().minimum(0);
    
          // create line series
          var series = chart.line(await getData());
    
          series.normal().stroke('#999999', 5, null, 'round', 'round');
          series.normal().risingStroke('#66BB6A', 5, null, 'round', 'round');
          series.normal().fallingStroke('#FF7043', 5, null, 'round', 'round');
    
          chart.title('Ventes des 6 derniers moi');
          // set container id for the chart
          chart.container('salespermonth');
    
          chart.animation(true);
          // initiate chart drawing
          chart.draw();
        });
    
        // return data for chart
        async function getData(){
            let data = await salespermonthData.fetch();
            return data;
        }
    }
};

export {salespermonthView};