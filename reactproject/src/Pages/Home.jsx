import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import About from "./About";
// import './App.css'


function Home() {
  const navigate = useNavigate()  // to render data from one page to another we use use navigate
  const [productData, setProductData] = useState(null);  // to strore data we use usestate
  const [cartdata, setcartdata] = useState(()=>{
    let predata = localStorage.getItem("cartdata");
    if(predata){
      return JSON.parse(predata);
    } else {
      return [];
    }

  }
  );
  const fetchProductData = async () => {
    let responceData = await axios.get("https://fakestoreapi.com/products");
    setProductData(responceData.data);
  };
  
  useEffect(() => {
    fetchProductData();
  }, []);

  // console.log(productData);

  const handleproductdetails = (pid)=>{
    navigate(`/productDetail/${pid}`)
  }
  const handleCartDetails = (item)=>{
    // console.log(item, "item data");

    const isItemInCart = cartdata.find(cartItem => cartItem.id === item.id); // can use some method also which have atleast one element in the array and find method finds first element

  if (isItemInCart) {
    // If item exists, you can show a message (optional)
    alert("Item is already in cart!");
    return; // Exit without adding
  }
  // If item does not exist, add it to cart

    const cartitems = [...cartdata, item]
    setcartdata(cartitems)
    localStorage.setItem("cartdata", JSON.stringify(cartitems)) //to receive
  }
  // console.log(productData, "productData")

  return (
    <div className="container">
      <div className="row justify-content-between">
        {productData?.slice(0,10).map((item, index) => {
          return (
            <div className="col-sm-5">
              <div class="card" style={{width:"400px"}}>
                <img class="card-img-top" style={{height:'350px'}} src={item.image} alt="Card image" />
                <div class="card-body">
                  <h4 class="card-title">{item.title}</h4>
                  <p class="card-text">Some example text.</p>
                  <button href="#" class="btn btn-primary me-5" onClick={()=>handleproductdetails(item.id)}>
                    View Details
                  </button>
                  <button href="#" class="btn btn-primary" onClick={()=>handleCartDetails(item)}> Add to Cart </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* <ProductDetail/> */}
      <About />
    </div>
  );
}

export default Home;
