import './product-details.css';
import { useLocation, useNavigate } from 'react-router-dom';
function ProductDetails() {

    const navigate = useNavigate();
    const location = useLocation();
    console.log("location", location);
    var product = location.state;

    return (
        <div>
            <div className="container">
                <div className="card">
                    <div className="container-fliud">
                        <div className="wrapper row">
                            <div className="preview col-md-6">

                                <div className="preview-pic tab-content">
                                    <div className="tab-pane active" id="pic-1"><img style={{ height: "500px", width: "300px" }} src={product.image} /></div>

                                </div>


                            </div>
                            <div className="details col-md-6">
                                <h3 className="product-title">{product.name}</h3>
                                <div className="rating">
                                    <div className="stars">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                    <span className="review-no">Rating: {product.rating}</span>
                                </div>
                                <p className="product-description">{product.richDescription}</p>
                                <h4 className="price">current price: <span>$ {product.price}</span></h4>


                                <br></br><br></br><br></br>
                                <div className="action">
                                    <button onClick={() => navigate("/login", { state: { message: "Please login to continue" } })} className="add-to-cart btn btn-default" type="button">add to cart</button>  &nbsp;&nbsp;&nbsp;
                                    <button onClick={() => navigate("/")} className="add-to-cart btn btn-default" type="button">back</button>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ProductDetails;