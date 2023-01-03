import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';



function Dashboard(props) {
    console.log("lc", localStorage.getItem("cart"));
    if (localStorage.getItem("cart") == null) {
        localStorage.setItem('cart', "[]");
    }

    const [products, setProducts] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        getProducts();
    }, [])

    const addToCart = (product) => {
        console.log("product", product);

        var cart = JSON.parse(localStorage.getItem("cart"));
        cart.push(product);
        console.log("cart", cart);
        localStorage.setItem('cart', JSON.stringify(cart));

    }

    const showProduct = (product) => {
        console.log("product", product);
        navigate('/productdetails', { state: product });

    }

    const getProducts = () => {

        axios.get("http://localhost:8089/api/v1.0.0/product/list").then(
            response => {
                if (response.status) {
                    console.log("Response", response);
                    setProducts(response.data.products);
                }

            }
        )
    }

    const generateProductCards = () => {
        console.log("products", products);

        let list = products.map((product) => {

            return <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 mt-4">
                <div class="card shadow">
                    <div class="card-body text-center">
                        <h3 class="text-warning">{product.brand}</h3>
                        <a href="#">
                            <img class="card-img-top" style={{ width: "200px", height: "300px" }} src={product.image} alt="" />
                        </a>
                        <div class="text-warning">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                        </div>
                        <h3 onClick={() => showProduct(product)} style={{ cursor: "pointer", textDecoration: "underline" }}>{product.name}</h3>
                        <h6>{product.price}</h6>

                        <button class="btn btn-dark my-2" href="#" onClick={() => addToCart(product)} role="button">Add to Cart</button>

                    </div>
                </div>
            </div>

        })

        return list;
    }


    return (
        <>
            <div class="container mb-4">
                <div class="row">

                    {generateProductCards()}

                </div>

            </div>

        </>
    )
}
function mapStateToProps(appState) {

    console.log("appState", appState);
    return { token: appState.accessToken };
}

export default connect(mapStateToProps, null)(Dashboard);


/*


1. User role based authentication ( customer, admin) -  Sai /majeed

2. proper navigation between login and logout (swamy) / datta

3. form validations - Veeru / Niha







*/