import { useState } from 'react'
import img from './assets/Image.jpeg.png'
import img1 from './assets/logo.jpeg.jfif'
import { Route, Routes } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/Home" element={<>
          <h1>React class 09</h1><br />
          <h1>Home</h1><br />
          <img src={img} width={500} alt="" />
        </>} />
        <Route path="/About" element={<>
          <h1>React class 09</h1><br />
          <h1>Home</h1><br />
          <img src={img1} width={500} alt="" />
        </>} />

      </Routes>
    </>
  )
}

export default App
