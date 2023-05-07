import './App.css';
import LandingPage from '././landingPage/LandingPage.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import SecondBlogPage from './landingPage/SecondBlogPage';
function App() {
  const [headerBlogId , setheaderBlogId] = useState({});
  const [data, setData] = useState([]);
  const fetchInfo = () => { 
    return fetch('https://61791a83aa7f3400174047a6.mockapi.io/v1/GetBLogs/') 
            .then((res) => res.json()) 
            .then((d) => 
            {
              console.log(d);
              setData(d);
              setheaderBlogId(d[0]);
            }) 
    };
    useEffect(() => {
      fetchInfo();
    },[])
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage setheaderBlogId={setheaderBlogId} headerBlogId={headerBlogId} data={data} />}/>
        <Route path="/second" element={<SecondBlogPage  headerBlogId={headerBlogId}/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;