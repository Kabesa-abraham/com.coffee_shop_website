import About from "./components/about/About";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Menu from "./components/menu/Menu";
import Product from "./components/prdduct/Product";

function App() {
  return (
    <div className='bg-[#f5cfb38f]' >
      <Header/>
      <Home/>
      <Menu/>
      <About/>
      <Product/>
    </div>
  )
}

export default App;