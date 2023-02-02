import './App.css';
import { useState, useEffect } from "react"

function App() {

  const [currentUser, setCurrentUser] = useState(null)
  const [cookies, setCookies] = useState([])

  useEffect(() => {
    fetch('/cookies')
    .then(res => res.json())
    .then(data => console.log(data))
  }, [])


  return (
    <div className="App">
    </div>
  );
}

export default App;
