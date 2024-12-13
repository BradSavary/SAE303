import {salesevolutionData} from "../../data/salesevolution";

import anychart from 'anychart';

let salesevolutionView = {
    render: async function(id){
   let productName = await salesevolutionData.fetchName(id);     
   let data= await salesevolutionData.fetch(id)
      anychart.onDocumentReady(async function () {

        // create a data set on our data
        var dataSet = await anychart.data.set(data);
      
        // map data for the first series,
        // take x from the zero column and value from the first column
        var firstSeriesData = dataSet.mapAs({ x: 0, value: 1 });
      
        // create a line chart
        var chart = anychart.line();
      
        // turn on the line chart animation
        chart.animation(true);
      
        // configure the chart title text settings
        chart.title('Evolution des ventes de '+productName);
      
        // set the y axis title
        chart.yAxis().title('Nombre de commande');

        // set the x axis title
        chart.xAxis().title('Mois');
      
        // turn on the crosshair
        chart.crosshair().enabled(true).yLabel(false).yStroke(null);
      
        // create the first series with the mapped data
        var firstSeries = chart.line(firstSeriesData);
        firstSeries
          .name(productName)
          .stroke('3 #f49595')
          .tooltip()
          .format(productName+ ",id du produit: "+id);
      
        // turn the legend on
        chart.legend().enabled(true);
      
        // set the container id for the line chart
        chart.container('salesevolution');
      
        // draw the line chart
        chart.draw();
      
      });

    }
    
};

export {salesevolutionView};

import { genericRenderer } from "../../lib/utils";

const templateFile = await fetch("src/ui/salesevolution/template.html");
const template = await templateFile.text();

let salesOptionView = {

    render: function(data){
        let html = "";
        for(let obj of data){
            html += genericRenderer(template, obj);
        }
        return html;
    },

}


export {salesOptionView};