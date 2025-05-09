import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductDetail() {
    const param = useParams()
    const [singleproductData, setsingleproductData] = useState(null);
    const fetchSingleProductData = async () => {
      let responceData = await axios.get(`https://fakestoreapi.com/products/${param.id}`);
      setsingleproductData(responceData.data);
    };
    useEffect(() => {
      fetchSingleProductData();
    }, []);
    console.log(singleproductData, "singleproductData")
  return (
    <div>
     title : {singleproductData?.title} <br />
     price : {singleproductData?.price} <br />
     Description : {singleproductData?.description} <br />
    <img src={singleproductData?.image}  style={{height:'300px', width:'200px'}}></img>
     {/* height='300' width='300' */}
    </div>
  )
} 

export default ProductDetail
