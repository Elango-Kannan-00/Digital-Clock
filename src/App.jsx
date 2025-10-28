import React, { useState, useEffect } from "react";

const App = () => {
  const [currentTime, setCurrentTime] = useState(Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(Date.now())
    }) 
  })

}

  return (
    <div>
      
    </div>
  )

export default App