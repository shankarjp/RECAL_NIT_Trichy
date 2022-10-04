import React, { useState, useEffect } from 'react';

function Home() {
    console.log("HOme");
    let [message, setMessage] = useState(null);
    useEffect(() => {
        fetch("http://localhost:8080/api/")
        .then(response => response.json())
        .then(data => setMessage(data.data))
    }, []);
    return (
        <div>
            {/* Navbar */}
            <nav className="navbar navbar-custom">
                <a className="navbar-brand" href="http://recal.nitt.edu/">
                    <img src="data:image/png;base64,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" classNameName="d-inline-block align-top" alt="" />
                </a>
                <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav">
                        <li className="nav-item"><a className="nav-link active" href="/">Home <span className="sr-only">(current)</span></a></li>
                        <li className="nav-item"><a className="nav-link" href="/accomodation">Response</a></li>
                        <li className="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Reports</a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="/previews">Previews</a>
                            <a class="dropdown-item" href="/report/balance">Balance</a>
                            <a class="dropdown-item" href="/report/participation">Participation</a>
                            <a class="dropdown-item" href="/report/paymentstatus">Payment Status</a>
                            <a class="dropdown-item" href="/report/registered">Registered</a>
                            <a class="dropdown-item" href="/report/summary">Summary</a>
                            <a class="dropdown-item" href="/report/totalcost">Total Cost</a>
                            <a class="dropdown-item" href="/report/tshirt">Tshirt</a>
                        </div>
                        </li>
                        <li className="nav-item"><a className="nav-link" href="/login">Login</a></li>
                    </ul>
                </div>
            </nav>
            <h1 className="text-heading">About</h1>
            <div className="text-body">
                <p>
                The National Institute of Technology formely Regional Engineering College's Alumni Association (RECAL) was formed with the objective of having a forum for past students of Regional Engineering College / National Institute of Technology, Trichy. Over the years, RECAL has associated itself with the institute in every possible event and been a part of the activity.
                The objectives of the association are,
                <ul>
                    <li>Re-establish full-fledged contact with the past students of REC/NIT, Trichy</li>
                    <li>To establish a regular line of communication with the Alumni</li>
                    <li>To conduct several programmes under the banner of the association for the benefit of the students.</li>
                    <li>To promote and support various activities, both curricular and extracurricular, of the institute</li>
                    <li>To plan and implement several small projects to commemorate RECAL"s presence in REC/NIT, Trichy.</li>
                </ul>
                </p>
            </div>
            
            {/* Corousel */}
            <div id="carouselExampleIndicators" className="carousel slide carousel-custom" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img className="d-block w-100" src="https://alumni.nitt.edu/wp-content/uploads/2019/01/1993-1997-batch-silver-jubilee-friendship-reunion-1.jpg" alt="First slide" />
                <div class="carousel-caption d-none d-md-block">
                    <h5>First Slide Label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>
                </div>
                <div className="carousel-item">
                <img className="d-block w-100" src="https://alumni.nitt.edu/wp-content/uploads/2018/07/silver-jublee-reunion-1993-batch.png" alt="Second slide" />
                <div class="carousel-caption d-none d-md-block">
                    <h5>Second Slide Label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                </div>
                <div className="carousel-item">
                <img className="d-block w-100" src="https://alumni.nitt.edu/wp-content/uploads/2018/11/17-768x432.jpeg" alt="Third slide" />
                <div class="carousel-caption d-none d-md-block">
                    <h5>Third Slide Label</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
            </div>
        
        {/* Footer */}
        <footer>
            {/* <div className="container">
                <section class="mb-4">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
                    repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
                    eum harum corrupti dicta, aliquam sequi voluptate quas.
                </p>
                </section>
            </div> */}
            <div className="text-center p-3">
                <p>(c) 2022 WebTeam Technical Council</p>
                <p>National Institute of Technology, Tiruchirappalli</p>
            </div>
        </footer>
        </div>
    );
}

function NotFound() {
    return (
        <h1>NotFound</h1>
    );
}

export default Home;
export {
    NotFound
};
