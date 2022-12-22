
export default function NameInfo() {



        return (
            <div id="section2" className="container-fluid jumbotron text-center font-style section-name">
                <h1>Hello!</h1>
                <h1 className="section-display">I am</h1>
                <h1 className="section-display section-color"> John Decena</h1>
                <p className="section-style" >.NET Developer</p>
                {/*                ADD RESUME DOC IN THE PUBLIC FOLDER WITH OTHER FILES AND ADD ITS NAME BELOW IN HREF AND NAME OF FILE THAT SHOULD APPEAR AFTER DOWNLOAD IN 'DOWNLOAD'*/}
                {/*         EXAMPLE: <a href="Resume.pdf" download="Myresume" className="btn">Download My Resume</a>*/}
                <a href="/Resume - John Alton Decena.pdf" download className="btn btncolor">Download My Resume</a>

            </div>
        );
}
