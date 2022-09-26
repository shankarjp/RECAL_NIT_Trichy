import React, { useEffect, useState } from 'react';
import axios from 'axios'

//  axios.get('http://localhost:8080/api/previewData').then((res) => console.log(res.data));

function Previews() {

    axios.get("http://localhost:8080/api/previewData").then((res)=> console.log(res.data));

    var Data=res.data;

    return (
        <h1>Previews</h1>
        
    );
}

export default Previews;
