import { useState, useEffect } from 'react';
import axios from 'axios';
function Checkout() {

    const [amount, setAmount] = useState(0);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        document.body.appendChild(script);
    }, [])
    const handleChange = (evt) => {
        setAmount({
            amount: evt.target.value
        })
    }
    const openPayModal = (amt) => {
        var amount = amt * 100; //Razorpay consider the amount in paise
        var options = {
            "key": "rzp_test_hkegSGSTXFaiIX",
            "amount": amt, // 2000 paise = INR 20, amount in paisa
            "name": "",
            "description": "",
            'order_id': "",
            "handler": function (response) {
                console.log(response);
                var values = {
                    razorpay_signature: response.razorpay_signature,
                    razorpay_order_id: response.razorpay_order_id,
                    transactionid: response.razorpay_payment_id,
                    transactionamount: amount,
                }
                axios.post('http://localhost:8089/payment', values)
                    .then(res => { alert("Success") })
                    .catch(e => console.log(e))
            },
            "prefill": {
                "name": 'Sanjana Kumari',
                "email": 'sanjana@gmail.com',
                "contact": '1234567890',
            },
            "notes": {
                "address": "Hello World"
            },
            "theme": {
                "color": "#528ff0"
            }
        };
        axios.post('http://localhost:8089/order', { amount: amount })
            .then(res => {
                options.order_id = res.data.id;
                options.amount = res.data.amount;
                console.log(options)
                var rzp1 = new window.Razorpay(options);
                rzp1.open();
            })
            .catch(e => console.log(e))

    };

    return (
        <div>
            {openPayModal(parseInt(localStorage.getItem("finalAmount")))}
        </div>
    );

}
export default Checkout;