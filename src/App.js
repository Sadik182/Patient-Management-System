import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import View from './components/View/View';
import Search from './components/Search/Search'
import Report from './components/Report/Report'
import AddPatient from './components/AddPatient/AddPatient';
import Update from './components/Update/Update';

function App() {
  return (
    <div className="App">
     <Header></Header> 
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/view' element={<View></View>}></Route>
      <Route path='/insert' element={<AddPatient></AddPatient>}></Route>
      <Route path='/search' element={<Search></Search>}></Route>
      <Route path='/report' element={<Report></Report>}></Route>
      <Route path='/update/:id' element={<Update></Update>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
