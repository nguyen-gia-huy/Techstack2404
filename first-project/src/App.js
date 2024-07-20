import Header from "./component/Header";
import Navigation from "./component/Navigation";
import Sidebar from "./component/Sidebar";
import Footer from "./component/Footer";
const App = () => {

  const tagH1 = <h1> Fisrt project</h1>
  const number = 10;


  const testFn = () => {
    return 'testfn'
  }

  const cssInLine = {
    color: 'red',
    fontSize: '54px'
  }

  return( <>
    <Header></Header>
    <Navigation></Navigation>
    <Sidebar></Sidebar>
    <h1 style={{
      color: 'red',
      fontSize: '54px'
    }} className="heading">heading</h1>
    <h2> ther h2</h2>

    <Footer></Footer>
  </>
  );
};

export default App;
