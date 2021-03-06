import React, { PureComponent } from 'react';
import CustomerList from './CustomerList';
import './Customer.css';
import NewCustomer from './NewCustomer';
import { getCustomers } from '../ServerCalls.js';


class Customer extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            customers: []
        }
    }

    /**
    |--------------------------------------------------
    | Call functions before rendering
    |--------------------------------------------------
    */
    componentDidMount() {
        this.getCustomers()
    }

    /**
    |--------------------------------------------------
    | Api call function to get listed customers from
    | database
    |--------------------------------------------------
    */
    getCustomers = () => {
        getCustomers()
            .then(response => {
                this.setState({
                    customers: response.data.content
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    /*
    deleteFromList = (value) => {
        const newList = this.state.customers.filter((customer) => customer.id !== value)
        this.setState({
            customers: newList
        })
    }*/


    render() {
        return (
            <div className="container customer_container">
                <div className="customer_action_container">
                    <NewCustomer getCustomers={this.getCustomers} />
                    <CustomerList
                        customers={this.state.customers}
                        getCustomers={this.getCustomers} />
                </div>
            </div>
        )
    }
}

export default Customer;