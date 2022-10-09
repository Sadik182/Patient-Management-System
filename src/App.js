import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import View from './components/View/View';
import AddPatient from './components/AddPatient/AddPatient';
import Update from './components/Update/Update';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
     <Header></Header> 
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/view' element={<RequireAuth><View></View></RequireAuth>}></Route>
      <Route path='/insert' element={<AddPatient></AddPatient>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
      <Route path='/update/:id' element={<Update></Update>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
