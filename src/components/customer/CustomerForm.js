import React from 'react';
import { saveCustomer } from '../ServerCalls.js';
import './Customer.css';

class CustomerForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            street: '',
            city: '',
            postcode: ''
        }
    }
    /**
    |--------------------------------------------------
    | Set state by given input data
    |--------------------------------------------------
    */
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    /**
    |--------------------------------------------------
    | On submit saves new listed customer
    |--------------------------------------------------
    */
    handeSubmit = (event) => {
        event.preventDefault()
        /**
        |--------------------------------------------------
        | Creates new customer object
        |--------------------------------------------------
        */
        const newCustomer = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            streetaddress: this.state.street,
            postcode: this.state.postcode,
            city: this.state.city,
            email: this.state.email,
            phone: this.state.phone
        }
        /**
        |--------------------------------------------------
        | Post api call to save new customers and 
        | callbacks get customer api to get updated customers
        | and closes customer from window
        |--------------------------------------------------
        */
        saveCustomer(newCustomer)
            .then(response => {
                this.props.getCustomers()
                this.props.setModal()
            })
            .catch(err => {
                console.log(err)
            })

    }
    render() {
        return (
            <div>
                <form onSubmit={this.handeSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputFirstname">Firstname: </label>
                            <input type="text" className="form-control" id="inputFirstname" placeholder="Firstname"
                                value={this.state.firstname} name="firstname" onChange={this.handleChange} />
                        </div>

                        <div className="form-group col-md-6">
                            <label htmlFor="inputLastname">Lastname: </label>
                            <input type="text" className="form-control" id="inputLastname" placeholder="Lastname"
                                value={this.state.lastname} name="lastname" onChange={this.handleChange} />
                        </div>

                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail">Email: </label>
                            <input type="text" className="form-control" id="inputEmail" placeholder="Email"
                                value={this.state.email} name="email" onChange={this.handleChange} />
                        </div>

                        <div className="form-group col-md-4">
                            <label htmlFor="inputPhone">Phone: </label>
                            <input type="text" className="form-control" id="inputPhone" placeholder="Phone"
                                value={this.state.phone} name="phone" onChange={this.handleChange} />
                        </div>

                        <div className="form-group col-md-6">
                            <label htmlFor="inputStreetAddress">Streetaddress: </label>
                            <input type="text" className="form-control" id="inputStreetAddress" placeholder="Streetaddress"
                                value={this.state.street} name="street" onChange={this.handleChange} />
                        </div>

                        <div className="form-group col-md-4">
                            <label htmlFor="inputCity">City: </label>
                            <input type="text" className="form-control" id="inputCity" placeholder="City"
                                value={this.state.city} name="city" onChange={this.handleChange} />
                        </div>

                        <div className="form-group col-md-2">
                            <label htmlFor="inputPostcode">Postcode: </label>
                            <input type="text" className="form-control" id="inputPostcode" placeholder="Postcode"
                                value={this.state.postcode} name="postcode" onChange={this.handleChange} />
                        </div>

                    </div>
                    <input type="submit" className="btn create_Customer_Button" value="Create new customer" />
                </form>
            </div>
        )
    }
}

export default CustomerForm;