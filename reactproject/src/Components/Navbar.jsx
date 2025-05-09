import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Navbar() {

  const [categories, setcategories] = useState(null) // for fetching all categories within a dropdown menubar
  const fetchcategoriesData = async () => {
    let responceData = await axios.get("https://fakestoreapi.com/products/categories");
    setcategories(responceData.data);
  };
  useEffect(()=>{
    fetchcategoriesData();
  },[]) // here data is showing staticaly we don't need to update it so didn't passed dependency it if we want to perform any changes later thna we do so 
  
  // console.log(categories, "responceData")
  const [cartnumbers, setcartnumbers] = useState(()=>{
   const cc =  localStorage.getItem("cartcount")
   if(cc) {
    return cc;
   } else{
    return 0;
   }
  })
  const navigate = useNavigate()

 const electronics = (items)=>{
  navigate(`/categoryData/${items}`);
 }

  

  // console.log(cartnumbers, ":cartnumbers")
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-light">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/addToCart">
              Add to cart <sup>{cartnumbers}</sup></Link>
            </li>
            <li className="nav-item">
            <div className="dropdown">
  <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
    Dropdown button
  </button>
  <ul className="dropdown-menu">
    {categories?.map((items, index)=>
      (
        <li key={index}><a className="dropdown-item" href="#" onClick={()=>electronics(items)}>{items}</a></li>
      )
    )}
   
  </ul>
</div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

/* when if want any value which is in another page want to access it from the another page 
then use localStorage first save to that and then retrieve ImageTrack.*/