import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import AllSection from "./components/AllSection/AllSection";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Headers from "./components/Headers/Headers";
import Layout from "./components/Layout/Layout";
import Portfolio from "./components/Portfolio/Portfolio";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div>
      <Headers></Headers>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<AllSection></AllSection>}></Route>
        </Route>
        <Route element={<Layout></Layout>}>
          <Route path="/home" element={<AllSection></AllSection>}></Route>
        </Route>
        <Route element={<Layout></Layout>}>
          <Route path="/about" element={<About></About>}></Route>
        </Route>
        <Route element={<Layout></Layout>}>
          <Route path="/skills" element={<Skills></Skills>}></Route>
        </Route>
        <Route element={<Layout></Layout>}>
          <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
        </Route>
        <Route element={<Layout></Layout>}>
          <Route path="/contact" element={<Contact></Contact>}></Route>
        </Route>
        <Route element={<Layout></Layout>}>
          <Route path="/blog" element={<Blog></Blog>}></Route>
        </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
