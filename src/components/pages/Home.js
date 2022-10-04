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
            {/* Body */}
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
