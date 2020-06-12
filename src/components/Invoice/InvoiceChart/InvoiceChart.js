import React from 'react';
import {Bar as BarChart} from 'react-chartjs';

const InvoiceChart = props => {
    let chartData = {labels: [], datasets:[]};
    const service_providers = props.service_providers.map(sp => sp.name);
    let all_invoice_dates = props.invoices.map(invoice => invoice.month)
    console.log(all_invoice_dates);
    let all_invoice_years = all_invoice_dates.map(date => (new Date(date).getMonth() + 1).toString() +
                                     "/" + new Date(date).getFullYear().toString());
    let months = [...new Set(all_invoice_years.flat(1))].sort();
    
    let values = []
    const colors = ["rgb(238, 199, 199)",
                    "rgb(221, 240, 169)",
                    "rgb(154, 188, 240)",
                    "rgb(240, 170, 236)",
                    "rgb(227, 157, 241)"];
            chartData.labels = service_providers;
   let month = "";
   console.log("labels : " + chartData.labels);
    for(const key in months){
        
        props.invoices.map(invoice => {
            month = (new Date(invoice.month).getMonth() + 1).toString() + 
                    "/" + new Date(invoice.month).getFullYear().toString();
            console.log(month, months[key]);
            if(month.includes(months[key])){
                values.push(invoice.amount)
            }
        });
        console.log(values);
        chartData.datasets.push({
            label: months[key],
                fillColor: "rgba(220,220,220,1)", //colors[key],
                strokeColor: "rgba(220,220,220,1)", //colors[key],
                highlightFill: "rgba(220,220,220,0.75)",
                highlightStroke: "rgba(220,220,220,1)",
                data: values
        })
        values = [];
    }    
    console.log(chartData.datasets);
    return(
        <div className="col-md-4"> 
         <BarChart data={chartData} height="300" width="600"/> 
         </div>
        
    )
}

export default InvoiceChart;