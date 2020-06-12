import React from 'react';

import './App.css';
import Container from 'react-bootstrap/Container';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap';
import Button from 'react-bootstrap/Button';
import { MemoryRouter, Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import InvoicePage from './Pages/InvoicePage';

function App() {
  return (
    <MemoryRouter>
      <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">Service Providers Visibility</Navbar.Brand>    
        <ButtonToolbar className="custom-btn-toolbar" className="right">
          <LinkContainer to="/home" className="lcBox">
            <Button>Home</Button>
          </LinkContainer>            
          <LinkContainer to="/invoices" className="lcBox">
            <Button>Invoices</Button>
          </LinkContainer>
        </ButtonToolbar>
      </Navbar>
      <Container className="p-3">
        <Switch>
              <Redirect from="/" to="/home" exact />
              <Route path="/invoices">
                <InvoicePage />
              </Route>
              <Route path="/home">
                <HomePage />
              </Route>
            </Switch>
      </Container>
    </MemoryRouter>
  );
}

export default App;
