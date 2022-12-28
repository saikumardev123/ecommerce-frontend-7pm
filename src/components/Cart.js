
function Cart() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-xs-8">
                        <div className="panel panel-info">
                            <div className="panel-heading">
                                <div className="panel-title">
                                    <div className="row">
                                        <div className="col-xs-6">
                                            <h5><span className="glyphicon glyphicon-shopping-cart"></span> Shopping Cart</h5>
                                        </div>
                                        <div className="col-xs-6">
                                            <button type="button" className="btn btn-primary btn-sm btn-block">
                                                <span className="glyphicon glyphicon-share-alt"></span> Continue shopping
								</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-xs-2"><img className="img-responsive" src="http://placehold.it/100x70" />
                                    </div>
                                    <div className="col-xs-4">
                                        <h4 className="product-name"><strong>Product name</strong></h4><h4><small>Product description</small></h4>
                                    </div>
                                    <div className="col-xs-6">
                                        <div className="col-xs-6 text-right">
                                            <h6><strong>25.00 <span className="text-muted">x</span></strong></h6>
                                        </div>
                                        <div className="col-xs-4">
                                            <input type="text" className="form-control input-sm" value="1" />
                                        </div>
                                        <div className="col-xs-2">
                                            <button type="button" className="btn btn-link btn-xs">
                                                <span className="glyphicon glyphicon-trash"> </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="row">
                                    <div className="col-xs-2"><img className="img-responsive" src="http://placehold.it/100x70" />
                                    </div>
                                    <div className="col-xs-4">
                                        <h4 className="product-name"><strong>Product name</strong></h4><h4><small>Product description</small></h4>
                                    </div>
                                    <div className="col-xs-6">
                                        <div className="col-xs-6 text-right">
                                            <h6><strong>25.00 <span className="text-muted">x</span></strong></h6>
                                        </div>
                                        <div className="col-xs-4">
                                            <input type="text" className="form-control input-sm" value="1" />
                                        </div>
                                        <div className="col-xs-2">
                                            <button type="button" className="btn btn-link btn-xs">
                                                <span className="glyphicon glyphicon-trash"> </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="row">
                                    <div className="text-center">
                                        <div className="col-xs-9">
                                            <h6 className="text-right">Added items?</h6>
                                        </div>
                                        <div className="col-xs-3">
                                            <button type="button" className="btn btn-default btn-sm btn-block">
                                                Update cart
								</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="panel-footer">
                                <div className="row text-center">
                                    <div className="col-xs-9">
                                        <h4 className="text-right">Total <strong>$50.00</strong></h4>
                                    </div>
                                    <div className="col-xs-3">
                                        <button type="button" className="btn btn-success btn-block">
                                            Checkout
							</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Cart;