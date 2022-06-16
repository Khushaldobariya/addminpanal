import axios from "axios";
import React, { useEffect, useState } from "react";

function Home(props) {
  const [Data, SetData] = useState([]);
  const [ApiData , SetApiData] = useState();


  useEffect(() => {
    axios
      .get(" https://reqres.in/api/user")
      .then((res) => {
        SetData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(Data.data);
  
  return (
  
    { 
      
      Data?.data?.map((NewData) => {
        return(
      <div>
      console.log(NewData.id)
     <table class="table table-hover table-dark  table-responsive">
  <thead class="thead-light">
    <tr>
      <th scope="col"></th>
      <th scope="col">ID</th>
      <th scope="col">NAME</th>
      <th scope="col">YEAR</th>
      <th scope="col">COLOR</th>
      <th scope="col">PANTONE_VALUE</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>{}</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
    </table>   
    
    </div>
    )
  })
  
}


      <div>
        <center>
          <h1 className="font-monospace">HOME</h1>
          <div className="container">
          </div>
        </center>
      </div>
  );
}

export default Home;
