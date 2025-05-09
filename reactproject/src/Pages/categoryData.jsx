import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function categoryData() {
    const param = useParams();
    console.log(param, "category");
    const [categoryData, setcategoryData] = useState();
    const fetchCategoryData = async () => {
        let responceData = await axios.get("https://fakestoreapi.com/products");
        setcategoryData(responceData.data);
      };
useEffect(()=>{
    fetchCategoryData();
},[])
console.log(categoryData, "categoryData")

  return (

    <div>
       title : {categoryData?.title} <br />
    </div>
  )
}

export default categoryData
