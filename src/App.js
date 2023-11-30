import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import Header from "./layout/Header";
import Home from "./layout/Home";
import Footer from "./layout/Footer";
import Side from "./layout/Side";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
function App() {
  const[msg,msgSet]=useState("")
  useEffect(() => {
    axios.get("http://localhost/",{
      params:{

      }
    }).then(response=>{
      msgSet(response.data)
    })

  }, []);
  return (
   <Router>


            <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
            data-sidebar-position="fixed" data-header-position="fixed">
                <Side/>
                <div className="body-wrapper">
                <Header/>

        <Routes>
        <Route exact path={"/"} element={<Home/>}></Route>
       </Routes>
         </div>
                </div>
   </Router>
  );
}

export default App;
