import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Router>
        <nav>
          <Link></Link>
        </nav>
        <Routes>
          <Route></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
