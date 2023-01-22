import './App.css';

 //this is single default import
// import Header from './components/Header'; 
// import Footer from './components/Footer';

//single import
//import {Header} from "./Header"

// import {Header,Footer} from './Header';  //this is multiple import

import Student from './components/Student';


function App() {


  return(
    <div className="App">
    <Student name="subash" age={20} />
    </div>
  );
  
}

export default App;
