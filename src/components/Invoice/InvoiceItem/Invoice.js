import React from 'react';
import Card from 'react-bootstrap/Card';

const Invoice = props => {
    return(
        <Card className="card">                
            <Card.Body>
                <Card.Title>
                    {props.invoice.service_provider.toUpperCase()} - 
                    {props.invoice.invoice_no}
                </Card.Title>
                <div className="flexSpace">
                    <div>{props.invoice.month} - {props.invoice.amount}</div>
                    <div className={props.invoice.status === "paid" ? "green" : "red"}>
                        {props.invoice.status.toUpperCase()}
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}

export default Invoice;

