
export default function  Work() {


        return (
            <div id="work" className="container-fluid  text-center " style={{ backgroundColor: "white", paddingBottom: "3%" }}>
                <div className="row" style={{ marginBottom: "5%" }}>
                    <h3 className="heading" style={{ margin: "5%" }}>Store React Application</h3>
                    <div className="container" style={{ margin: "6%" }}>
                        <p align="justify">Store Application is react application that displays product list. It can add/remove products to the cart and displays the sum of the cart.</p>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 colmargin">
                        <img src="product.png" className="zoom img-fluid " alt="mypic" />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 colmargin">
                        <img src="cart.png" className="zoom img-fluid " alt="mypic" />

                    </div>
                </div>
            </div>
        );
}
