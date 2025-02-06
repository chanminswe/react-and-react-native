import React from "react";
import { useParams } from "react-router-dom";

export default function Product() {
  const { productName } = useParams();
  return <div>product : {productName}</div>;
}
