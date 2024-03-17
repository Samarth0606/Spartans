import React, { useEffect, useState } from "react";

import axios from "axios";

function Bulao() {
  let [apiData, setApiData] = useState([]);
  //   fetch("https://api.tvmaze.com/search/shows?q=girls")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((finaldata) => {
  //       console.log(finaldata, "api");
  //       setApiData(finaldata);
  //     });
  //   -----axios------
  //   axios.get("https://api.tvmaze.com/search/shows?q=girls").then((res) => {
  //     console.log(res, "final");
  //     setApiData(res);
  //   });
  //   ------useEffect-1-------
  //   useEffect(() => {
  //     axios.get("https://api.tvmaze.com/search/shows?q=girls").then((res) => {
  //       console.log(res, "final");
  //       setApiData(res);
  //     });
  //   }, []);

  //   -------useEffect-2- wronng---
  //   useEffect(async () => {
  //     let res = await axios.get("https://api.tvmaze.com/search/shows?q=girls");
  //     setApiData(res);
  //   }, []);

  //   -------useEffect-2- right---
  //   useEffect(() => {
  //     async function apicall() {
  //       let res = await axios.get("https://api.tvmaze.com/search/shows?q=girls");
  //       console.log(res, "final");
  //       setApiData(res);
  //     }
  //     apicall();
  //   }, []);

  return (
    <div>
      <h1>BULAO</h1>
    </div>
  );
}

// https://api.tvmaze.com/search/shows?q=girls

export default Bulao;
