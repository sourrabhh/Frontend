// import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Component/HomeComponent/Home';
import AppContext from  "./utils/Context"
import Headercomponent from "./Component/HeaderComponent/Headercomponent.jsx"
function App() {
  return (
    <BrowserRouter>
      <AppContext>
        < Headercomponent />
        <Routes>
          <Route path='/' element = {<Home />}> </Route>
        </Routes>
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
