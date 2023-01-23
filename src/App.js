import './App.css';


import Navbar from './components/Navbar';
import TxtArea from './components/TxtArea';


function App() {


  return(
    <div className="App" >
      <Navbar />  
      <div className="container">
      <TxtArea heading="Enter Here" />  
      </div>
   
    </div>
  );
  
}

export default App;
