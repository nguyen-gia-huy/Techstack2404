import DefaultLayout from "./layouts/DefaultLayout"
import Home from "./pages/Home";
import './App.css';
import About from "./pages/About";
import SamplePost from "./pages/SamplePost";
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import Description from "./pages/Profile/Desription";
import Courses from "./pages/Profile/Courses";
import Setting from "./pages/Profile/Setting";
const App = ()=>{
  return <DefaultLayout>

    {/* <Home/> */}
    {/* <About/> */}
    {/* <SamplePost/> */}
    {/* <Contact/> */}
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/sample-post/:idPost" element={<SamplePost/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/profile" element={<Profile/>}>
        <Route path="" element={<Description/>}/>
        <Route path="courses" element={<Courses/>}/>
        <Route path="settings" element={<Setting/>}/>
    </Route>
    </Routes>
  </DefaultLayout>
}
export default App;