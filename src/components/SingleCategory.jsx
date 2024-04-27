import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductService from "../services/product.service";

const SingleCategory = () => {
  const { id } = useParams();

  useEffect(() => {
    const getCategory = async () => {
        const response = await ProductService.getSingleCategory(id)
        console.log(response)
    };

    getCategory()
  }, []);

  return <div>SingleCategory</div>;
};

export default SingleCategory;
