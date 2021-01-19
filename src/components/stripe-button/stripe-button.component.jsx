import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IBJVzB2eE17DQ5K0Hbt9bOFoaXGKb49dbayl9uKnBHW756ucS4lEx9oLDY1hbEIdr60DzIdF5Zs1Cj25Ypvgamc00Lkr4hAwz';

    const onToken = (token) => {
        console.log(token);
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name = 'CRW clothing LTD'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel = 'Pay Now'
            token={onToken}
            stripeKey = {publishableKey}
        />
    );
};

export default StripeCheckoutButton;
