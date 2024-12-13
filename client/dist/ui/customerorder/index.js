import {customerorderData} from "../../data/customerorder.js";

import anychart from 'anychart';

let customerorderView = {
    render: async function(id){
    //   let products = await customerorderData.fetchProduct();
    //   let customerid = await customerorderData.fetchCustomerCategoryWithProductQuantities(id);
    //   console.log("rows",customerid);
    //   console.log("header",products.map(product => product.product_name));
    //   anychart.onDocumentReady(async function () {
    //     // create polar chart
    //     var chart = anychart.polar();

    //     var chartData = {
    //       title: 'Produits commandés par les clients, par catégorie',
    //       header: ["#", products.map(product => product.product_name),],
    //       rows: [customerid]
    //     };
      
    //     // sort data by X
    //     chart
    //       .sortPointsByX(true)
    //       // set series type
    //       .defaultSeriesType('column')
    //       // disable y-axis
    //       .yAxis(false)
    //       // set x-scale
    //       .xScale('ordinal');
      
    //     // set chart data
    //     chart.data(chartData);
      
    //     // set title margin
    //     chart.title().margin().bottom(20);
      
    //     // set stack mod
    //     chart.yScale().stackMode('value');
      
    //     // set tooltip settings
    //     // chart.tooltip().valuePrefix('$').displayMode('union');

    //     chart.title("Produits commandés par les clients, par catégorie");
      
    //     // set chart container id
    //     chart.container('customerorder');
    //     // initiate chart drawing
    //     chart.draw();
    //   });
      var dataSet = await customerorderData.fetchCloud(id);
      var colors = anychart.scales
        .ordinalColor()
        .colors(['#FFD700', '#FF8C00', '#FF69B4', '#DC143C', '#006400']);

      // create tag cloud
      var chart = anychart.tagCloud();

      //set the chart selection mode

       chart.interactivity().selectionMode("none");

      // set chart title
      await chart
        .title('Ensemble des produits commandés par les clients')
        // set data with settings
        .data(dataSet)
        // set color scale
        .colorScale(colors)
        // set array of angles, by which words will be placed
        .angles([-90,-45, 0,45, 90]);

      // get the color range
      var colorRange = chart.colorRange();
      // enabled color range
      colorRange
        .enabled(true)
        // sets color line size
        .colorLineSize(10);
        

      // set container id for the chart
      chart.container('customerorder');

      // initiate chart drawing
      chart.draw();
      

      // save normal fill function to variable
      var normalFillFunction = chart.normal().fill();
      // save hover fill function to variable
      var hoveredFillFunction = chart.hovered("").fill();

      // create custom interactivity to hover colorRange
      chart.listen('pointsHover', function (e) {
        if (e.actualTarget === colorRange) {
          // if points exist
          if (e.points.length) {
            // set settings for normal state
            chart.normal({
              fill: 'black 0.1'
            });
            // set settings for hovered state
            chart.hovered({
              // get fill color ratio by its number and set fill to hovered state
              fill: chart
                .colorScale()
                .valueToColor(e.point.get('category'))
            });
          } else {
            // set function for normal state
            chart.normal({
              fill: normalFillFunction
            });
            // set function for hovered state
            chart.hovered({
              fill: hoveredFillFunction
            });
          }
        }
      });
    }    
}

 

export {customerorderView};

import { genericRenderer } from "../../lib/utils";

const templateFile = await fetch("src/ui/customerorder/template.html");
const template = await templateFile.text();

let customerOptionView = {

    render: function(data){
        let html = "";
        for(let obj of data){
            html += genericRenderer(template, obj);
        }
        return html;
    },

}


export {customerOptionView};