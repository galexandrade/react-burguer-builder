import React, { Component } from 'react';
import classes from './ContactData.css';
import Button from '../../../components/UI/Button/Button';

class ContactData extends Component{
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    }

    render(){
        console.log('AKII');
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                <form>
                    <input type="text" className={classes.Input} name="name" placeholder="Your name" />
                    <input type="email" className={classes.Input} name="email" placeholder="Your email" />
                    <input type="text" className={classes.Input} name="street" placeholder="Your street" />
                    <input type="text" className={classes.Input} name="postal" placeholder="Your postal code" />
                    <Button btnType="Success">ORDER</Button>
                </form>
            </div>
        );
    }
}

export default ContactData;