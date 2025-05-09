import React from 'react'

function Fotter() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container text-center">
        <p className="mb-1">&copy; {new Date().getFullYear()} YourShop. All rights reserved.</p>
        <p className="mb-0">
          Made by <a href="https://www.linkedin.com/in/themanishachoudhary/" className="text-light text-decoration-underline">Manisha Choudhary</a>
        </p>
      </div>
    </footer>
  )
}

export default Fotter
