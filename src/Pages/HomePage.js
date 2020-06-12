import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import HomeControl from '../components/HomeControl/HomeControl';
import InvoiceChart from '../components/Invoice/InvoiceChart/InvoiceChart';
import './HomePage.css';

class HomePage extends Component{
    state = {
        service_providers : [],
        invoices : [],
        outputType : 'list'
    }

    componentDidMount(){
        let sps = require('../service-providers.json');
        let invoices = require('../invoices.json');
        this.setState({service_providers: sps, invoices: invoices})        
    }

    outputTypeChangeHandler = (type) => {
        if(type === 'list'){
            this.setState({outputType : 'list'})
            
        }else if(type === 'chart'){
            this.setState({outputType : 'chart'})
        }
        console.log(this.state.outputType)
    }

    render(){
        return(
            <React.Fragment>
                <h2 className="header">Service Providers</h2> 
                <HomeControl 
                    outputType={this.state.outputType} 
                    changeHandler={this.outputTypeChangeHandler}/>
                {this.state.outputType === 'list' ? <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Provider Type</th>
                        <th>Account Id</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.service_providers.map(sp => (
                            <tr key={sp._id}>
                                <td>{sp._id}</td>
                                <td>{sp.name}</td>
                                <td>{sp.providerType}</td>
                                <td>{sp.accountId}</td>
                            </tr>
                        ))}                        
                    </tbody>
                    </Table> : 
                    <div className="chartBox">
                        <InvoiceChart 
                            service_providers={this.state.service_providers} 
                            invoices={this.state.invoices} /> 
                    </div>
                    }
                    
                </React.Fragment>
        )
    }
}

export default HomePage;