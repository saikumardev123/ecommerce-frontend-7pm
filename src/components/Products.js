import { useState, useEffect } from 'react';
import axios from 'axios';
function Products() {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        richDescription: '',
        image: '',
        brand: '',
        price: 0,
        countInStock: 0,
        rating: 0
    });
    const updateValues = (event) => {
        var value = event.target.value;
        var name = event.target.name;
        setProduct({ ...product, [name]: value })
    }
    const addProduct = (event) => {
        event.preventDefault();
        console.log("product", product);

        axios.post("http://localhost:8089/api/v1.0.0/product/add", product).then(
            response => {
                if (response.status) {
                    alert("Product added successfully!");
                    showProducts();
                }
            },
            error => {

            }
        )
    }
    useEffect(() => {
        showProducts();
    }, [])

    const showProducts = () => {

        axios.get("http://localhost:8089/api/v1.0.0/product/list").then(
            response => {
                if (response.status) {
                    console.log("Response", response);
                }

            }
        )

    }

    return (
        <ul>

            <div>
                <h2 style={{ textAlign: "center" }}>Add Product</h2>

                <hr></hr>
                <br></br><br></br>
                <div className="row">
                    <div className="col">
                        <input type="text" onChange={updateValues} className="form-control" placeholder="Enter name" name="name" />
                    </div>
                    <div className="col">
                        <input type="text" onChange={updateValues} className="form-control" placeholder="Enter description" name="description" />
                    </div>

                </div>  <br></br>

                <div className="row">
                    <div className="col">
                        <input type="text" onChange={updateValues} className="form-control" placeholder="Enter richDescription" name="richDescription" />
                    </div>

                    <div className="col">
                        <input type="text" onChange={updateValues} className="form-control" placeholder="Enter image url" name="image" />
                    </div>
                </div>  <br></br>

                <div className="row">
                    <div className="col">
                        <input type="text" onChange={updateValues} className="form-control" placeholder="Enter brand" name="brand" />
                    </div>

                    <div className="col">
                        <input type="number" onChange={updateValues} className="form-control" placeholder="Enter price" name="price" />
                    </div>
                </div> <br></br>

                <div className="row">
                    <div className="col">
                        <input type="number" onChange={updateValues} className="form-control" placeholder="Enter count" name="countInStock" />
                    </div>

                    <div className="col">
                        <input type="number" onChange={updateValues} className="form-control" placeholder="Enter rating" name="rating" />
                    </div>
                </div> <br></br> <br></br>

                <div className="row">
                    <div className="col">
                        <center><button onClick={addProduct} className="btn btn-primary">Add Product</button></center>
                    </div>


                </div>

            </div>


        </ul>
    )

}
export default Products;

