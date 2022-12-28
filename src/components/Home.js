import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Home() {

    const [products, setProducts] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        getProducts();
    }, [])

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
                        <button onClick={() => navigate('/login', { state: { message: 'please login to continue' } })} class="btn btn-dark my-2" href="#" role="button">Add to Cart</button>
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
export default Home;