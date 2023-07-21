import './App.scss';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Component/HomeComponent/Home';
// import AppContext from  "./utils/Context"
import Headercomponent from "./Component/HeaderComponent/Headercomponent.jsx"
import Newsletter from './Component/FooterComponent/Newsletters/Newsletter';
import Footer from './Component/FooterComponent/Footer';
import CategoryComponent from './Component/CategoryComponent/CategoryComponent';
import SingleProduct from './Component/SingleProduct/SingleProduct';


function App() {
  return (
    <BrowserRouter>
      {/* <AppContext> */}
        < Headercomponent />
        <Routes>
          <Route path='/' element = { <Home />}> </Route>
          <Route path='/category/:id' element = { <CategoryComponent />}> </Route>
          <Route path='/product/:id' element = { <SingleProduct /> }> </Route>
        </Routes>
        <Newsletter />
        <Footer />
      {/* </AppContext> */}
    </BrowserRouter>
  );
}

export default App;
