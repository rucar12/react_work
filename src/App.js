
import styles from './App.module.scss';

import {Header, Footer} from "./components";
import {Route, Routes} from "react-router-dom";
import {Contact, Home, Investor, Jobs, Product} from "./pages";

function App() {

  return (
    <div className={styles.app}>
        <Header/>
        <div className={styles.body}>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/product"} element={<Product/>}/>
                <Route path={"/investor"} element={<Investor/>}/>
                <Route path={"/jobs"} element={<Jobs/>}/>
                <Route path={"/contact"} element={<Contact/>}/>
            </Routes>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
