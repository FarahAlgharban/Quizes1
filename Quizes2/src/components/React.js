// 4. Create a react application, which connects to the API created in Question 3, and has at least 3 components for each of the above API end points. i.e.

// A component to display all the data (MUST DISPLAY THEM WITH PROPER USE OF CSS)
// A component to display specific object searched by name! (or id or a unique attribute that identifies it)
// A component to display details of the random object
// Some important requirements for the front end application are:

// The application must be a SPA, with navigation and simple routing.
// At least one of the above three components must be class based components.
// Use life cycle methods and hooks as required (or neccessary)
// Do not use inline-Stylin


import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
export default function React() {
  const params = useParams();
  const name = params.name;
  const [data, setData] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await fetch("/data");
      const data = await response.json();
      const info = data.find((user) => user.Id === sessionStorage.getItem("id"));
      setData(oneInfo.data);
    })();
  }, []);
  return(
      <>
       {data &&
              data.map((elem) => {
                console.log(name);
              });