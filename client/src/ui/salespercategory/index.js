import {salespercategoryData} from "../../data/salespercategory.js";

import anychart from 'anychart';

let salespercategoryView = {
    render: async function(){
        
    
        anychart.onDocumentReady(async function () {
            // set chart theme
        anychart.theme('lightGlamour');
              var dataSet =  anychart.data.set(await salespercategoryData.fetch());
        
                let seriesData = [];
                for (let i = 1; i <= 5; i++) {
                  seriesData.push(dataSet.mapAs({ x: 0, value: i }));
                }
        
              // create bar chart
              var chart = anychart.column();
        
              // turn on chart animation
              chart.animation(true);
        
              // force chart to stack values by Y scale.
              chart.yScale().stackMode('value');
        
              // set chart title text settings
              chart.title('Ventes des 6 derniers mois par catégorie');
              chart.title().padding([0, 0, 5, 0]);
        
              // helper function to setup label settings for all series
              var setupSeriesLabels = function (series, name) {
                series.name(name).stroke('3 #fff 1');
                series.hovered().stroke('3 #fff 1');
              };
        
              // temp variable to store series instance
              var series;
        
                const seriesNames = await salespercategoryData.fetchCategory();
                for (let i = 0; i < seriesData.length; i++) {
                series = chart.column(seriesData[i]);
                setupSeriesLabels(series, seriesNames[i]);
                }
        
              // turn on legend
              chart.legend().enabled(true).fontSize(13).padding([0, 0, 20, 0]);
              // set yAxis labels formatter
              chart.yAxis().labels().format('{%Value}{groupsSeparator: }');
        
              // set titles for axes
              chart.xAxis().title('Mois');
              chart.yAxis().title('Revenues');
        
              // set interactivity hover
              chart.interactivity().hoverMode('by-x');
        
              chart.tooltip().valuePrefix('$').displayMode('union');
        
              // set container id for the chart
              chart.container('salespercategory');
        
              // initiate chart drawing
              chart.draw();
            });
    }
};

export {salespercategoryView};