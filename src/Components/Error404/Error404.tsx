import { Navigate, useParams } from "react-router-dom";
import "./Error404.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import type IProduct from "../../@Types/product";

// interface ProductPageProps {}

function Error404() {
  return <section className="error-404">404</section>;
}

export default Error404;
