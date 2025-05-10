import logo from './logo.svg';
import './App.css';
import LayoutDefault from './LayoutDefault';
import AllRoute from './AllRoute/index';
import ScrollToTop from './LayoutDefault/Details/ScrollToTop';
// import ProductManager from './Admin/ProductManager';


function App() {
  return (
    <>
      <ScrollToTop />
      <AllRoute />
    </>
  );
}

export default App;
