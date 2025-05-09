
import React, { useEffect, useState } from 'react';

const Cart = () => {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartdata")) || [];
    setCartData(storedCart);
  }, []);

  const removeFromCart = (id)=>{
    const updatedCart = cartData.filter(item => item.id !== id )
    setCartData(updatedCart);
    localStorage.setItem("cartdata", JSON.stringify(updatedCart))
  }
 let cartcount = cartData.length;
 useEffect(()=>{
  localStorage.setItem("cartcount", cartcount)

 },[cartcount,cartData])
  return (
    <div className="container mt-4">
      <h2>Your Cart Items</h2>{cartcount}
      <div className="row">
        {cartData.map((item, index) => (
          <div className="col-sm-4 mb-4" key={index}>
            <div className="card" style={{ width: "18rem" }}>
              <img src={item.image} className="card-img-top" alt="Product" />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text"><strong>Price:</strong> ${item.price}</p> 
                <button href="#" class="btn btn-primary" onClick={()=>removeFromCart(item.id)}> Remove from Cart </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;



// JSON.stringify() to store data and to send the data JSON.parse() is used
































// import React, { useEffect } from "react";
// import { useState } from "react";
// import axios from "axios";



// function AddToCart() {
//   const productfetched = async () => {
//     const productdata = await axios.get(
//       "https://fakestoreapi.com/products?_limit=10"
//     );
//     console.log(productdata.data);
//     setProductlist(productdata);
//   };
//   useEffect(() => {
//     productfetched();
//   }, []);
//   const [productlist, setProductlist] = useState(null);
//   return <div>data: {productlist.data}</div>;
// }

// export default AddToCart;

// function ProductCardList() {
//   const navigate = useNavigate()
//   const [productList, setProductList] = useState([])
//   const [cartData, setCartData] = useState([])
// const fetchCardList = async () => {
//   const cardList = await axios.get("https://fakestoreapi.com/products?_limit=10")
//   setProductList(cardList.data)
// }
//   useEffect(() => {
//     fetchCardList()
//   }, [])

//   const getCardDetails = (cardID) => {
//     navigate(/getCard/${cardID})
//   }

//   // hadle cart data
//   const handleCart = (item) => {
//     const updatedCart = [...cartData, item]
//     setCartData(updatedCart)
//     localStorage.setItem("cartData", JSON.stringify(updatedCart))
//   }

//   console.log(cartData, "singleproduct data")
//   // navigate(/addToCard/, {
//   //   state: { cartData: cartData },
//   // });
//   // useEffect(() => {
//   //   if (cartData.length > 0) {
//   //     navigate('/addToCard', {
//   //       state: { cartData }
//   //     });
//   //   }
//   //   // sessionStorage.setItem("cartData", JSON.stringify(cartData))
//   //   // setCartData(savedCart);
//   // }, []);

//   return (
//     <div className="d-flex flex-wrap justify-content-around">
//       {
//         productList.map(item => (
//           <div className="card col-sm-3 p-2 m-2 " style={{ width: "18rem" }}>
//             <img src={item.image} className="card-img-top" alt="..." style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
//             <div className="card-body">
//               <h5 className="card-title">{item.title}</h5>
//               <p> Price: {item.price}</p>
//               <p className="card-text">{item.description.slice(0, 50)}</p>
//               <button onClick={() => getCardDetails(item.id)} className="btn btn-primary">more details</button>
//               <button onClick={() => handleCart(item)} className="btn btn-primary m-2">add to cart</button>
//             </div>
//           </div>
//         ))
//       }
//     </div>
//   )
// }

// export default ProductCardList

// localStorage.get(value) // to fetch the data from local storage
// and to remove if any id is getting matched with anything then don't don't return this value.
