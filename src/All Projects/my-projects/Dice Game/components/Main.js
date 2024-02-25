import FrontPage from './FrontPage';
import Playarea from './Playarea';
import ShowRules from './ShowRules';
import Page404 from './Page404';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'

function Main(){
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/My-React-Projects" element={<FrontPage />}></Route>
          <Route path="/Playarea" element={<Playarea />}></Route>
          <Route path="/Playarea/ShowRules" element={<ShowRules />}></Route>
          <Route path="/*" element={<Page404 />}></Route>
        </Routes>

      </BrowserRouter>


    </>
  )
}

export default Main;