import { Routes, Route  } from "react-router-dom";
import Layout from "./Layout";
import Home from '../routes/components/Home/Home';
import About from '../routes/components/About/About'
import Ww1AndRusRev from '../routes/components/Ww1AndRusRev/Ww1AndRusRev';

const App = () => {
  return (
    <>
      <Routes>
      <Route path="/" element={<Layout />}>
      <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="Ww1AndRusRev" element={<Ww1AndRusRev />} />
          </Route>
      </Routes>
    </>
  )
}

export default App;