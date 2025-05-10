import React from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router";


const Destination = () => {
    
    const { id } = useParams();
    const data = useLoaderData();
  console.log(id);
  const singleData = data.find((dt) => dt.id == id);
  console.log(singleData);

  return (
    <>
      <Helmet>
        <title>Travel | Destination</title>
      </Helmet>
      <div className="text-2xl font-bold text-white"></div>
    </>
  );
};

export default Destination;
