import React from 'react'

function card({username, btnText="visit me"}) {  // this is default value
    console.log(username);
  return (
    <div>
      <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
  <div>
    <img className="size-48 shadow-xl rounded-md" alt="" src="https://images.pexels.com/photos/31887348/pexels-photo-31887348/free-photo-of-elegant-spring-white-flowers-in-bloom.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
  </div>
  <div className="flex items-center md:items-start">
    <span className="text-2xl font-medium">{username}</span>
    <span className="font-medium text-sky-500">The Anti-Patterns</span>
    <button>{btnText}</button>  
    {/* can pass default value also here like btnText || "visit me" */}
    <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
      <span>No. 4</span>
      <span>·</span>
      <span>2025</span>
    </span>
  </div>
</div>
    </div>
  )
}

export default card
