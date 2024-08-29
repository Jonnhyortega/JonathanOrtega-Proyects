import {BrowserRouter,Routes,Route} from "react-router-dom";
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';
import { NoPage } from './pages/NoPage'
import { Home } from './pages/Home'
import './App.css'
import Layout from "./components/Layout";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='projects' element={<Projects/>}></Route>
          <Route path='*' element={<NoPage/>}/>
        </Route>
      </Routes>
   </BrowserRouter>
   
  )
}

export default App
