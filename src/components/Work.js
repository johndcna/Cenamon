
export default function  Work() {


        return (
            <div id="work" className="container-fluid  text-center " style={{ backgroundColor: "#d5af8e9e", paddingBottom: "3%" }}>
                <div className="row">
                    <h3 className="heading" >React Store Application</h3>
                    <div style={{ marginTop: "2%" }}>
                        <p className="info">Store is react application that displays a product list. It can add/remove products to the cart and indicate the cart's sum.</p>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 colmargin">
                        <img src="/Cenamon/product.PNG" className="zoom img-fluid " alt="mypic" />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 colmargin">
                        <img src="/Cenamon/cart.PNG" className="zoom img-fluid " alt="mypic" />

                    </div>
                </div>
            </div>
        );
}
