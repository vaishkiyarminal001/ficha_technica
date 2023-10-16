
import { ToastContainer } from 'react-toastify';
import './App.css';
import Allroute from './Component/Allroutes/Allroute';
import Navbar from './Component/Navbar/Navbar';
import Gallery from './Component/Pages/Gallery';
import { Footer } from './Component/Footer/Footer';
// import Singleproduct from './Component/Pages/Singleproduct';



function App() {
  return (
    <div className="App"> 
      <Navbar/>
      <ToastContainer />
      <Allroute/>
      <Footer/>
     
    </div>
  );
}

export default App;
