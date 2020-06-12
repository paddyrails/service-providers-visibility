import React, { Component } from 'react';
import './InvoicePage.css';
import Select from '../components/Select/Select';
import Invoice from '../components/Invoice/InvoiceItem/Invoice';

class InvoicePage extends Component{
    state = {
        invoices : [],
        filtered_invoices: [],
        service_providers: [],
        years: [],
        
    }

    componentDidMount(){
        let invoices = require('../invoices.json');
        let all_service_providers = invoices.map(invoice => invoice.service_provider)
        let unique_service_providers = [...new Set(all_service_providers.flat(1))];
        unique_service_providers.unshift("");
        let all_invoice_dates = invoices.map(invoice => invoice.month)
        let all_invoice_years = all_invoice_dates.map(date => new Date(date).getFullYear())
        let years = [...new Set(all_invoice_years.flat(1))].sort().reverse();
        years.unshift("");
        this.setState({
                invoices:invoices, 
                filtered_invoices: invoices, 
                service_providers:unique_service_providers,
                years: years
            })

    }

    filterValues = {
        service_provider: "",
        year: ""
    }

    onChangeHandler = (e, type) => {
        
        if(type === "service_provider"){
            this.filterValues.service_provider = e.target.value;
        }else if(type === "year"){
            this.filterValues.year = e.target.value;
        }
        let filtered_invoices = [...this.state.invoices];

        let invoice_year = "";
        let filterVals = this.filterValues;
        filtered_invoices = filtered_invoices.filter(function(invoice) {
            if(!invoice.service_provider.toString().includes(filterVals.service_provider)){
                return false;
            }
            if(filterVals.year != ""){
                invoice_year = new Date(invoice.month).getFullYear();
                if(!filterVals.year.includes(invoice_year)){
                    return false;
                }
            }            
            
            return true;
        });
            
        this.setState({filtered_invoices: filtered_invoices});
        
    }

    render(){
        const content = this.state.filtered_invoices.map(invoice => 
            <Invoice invoice={invoice} key={invoice._id} />
            )
        
        const select_year = <Select 
                         propertyName="year" 
                         property={this.state.years}
                         changeHandler={this.onChangeHandler} />
        const select_service_provider = <Select 
                        propertyName="service_provider" 
                        property={this.state.service_providers}
                        changeHandler={this.onChangeHandler}/>
        
        return(
            <React.Fragment>
            <h2 className="header">Invoices</h2> 
            <div className="flexBox">  
                {select_year}                              
                {select_service_provider}
            </div>
            {content}
            </React.Fragment>
        )
    }
}

export default InvoicePage;