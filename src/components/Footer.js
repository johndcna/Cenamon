

export default function Footer() {



   
        return (
            // <div classNameName="container-fluid  text-center footer" >
            //     <a href="https://github.com/johndcna">  <p>© 2022 All rights reserved. – John Decena</p></a>
            // </div>
            <div id="contact" className="container-fluid  text-center footer footer-distributed" >

			<div className="footer-left">

				<h3>John<span>Decena</span></h3>
               <p className="footer-company-name">© 2022 Created – John Decena</p>
	<div className="footer-icons">

					<a href="#"><i className="fa fa-facebook"></i></a>
					<a href="#"><i className="fa fa-twitter"></i></a>
					<a href="https://www.linkedin.com/in/john-alton-decena-113959207"  target="_blank"><i className="fa fa-linkedin"></i></a>
					<a href="https://github.com/johndcna" target="_blank"><i className="fa fa-github"></i></a>

				</div>


			</div>

			<div className="footer-center">

				<div>
					<i className="fa fa-map-marker"></i>
					<p><span>Verano II Compound Banawa Guadalupe</span> Cebu, Philippines</p>
				</div>

				<div>
					<i className="fa fa-phone"></i>
					<p>+63 945 745 2987</p>
				</div>

				<div>
					<i className="fa fa-envelope"></i>
					<p><a href="mailto:decenajac@gmail.com">decenajac@gmail.com</a></p>
				</div>
                

			</div>

			<div className="footer-right">
			<p className="footer-company-about">
				<span>About the website</span>
                This website is used for my portfolio and embedding my projects. Currently, the react store application is only on the project list.
				</p>
			
			</div>
            <a href="#name-info" className="topButton"><span className="material-icons" >arrow_upward</span></a>
        </div>
        );
}
