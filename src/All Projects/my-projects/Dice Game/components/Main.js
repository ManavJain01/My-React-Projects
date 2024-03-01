<<<<<<< HEAD
// import FrontPage from './FrontPage';
// import Playarea from './Playarea';
// import ShowRules from './ShowRules';
// import Page404 from './Page404';
// import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'

function Main(){
  return(
    <>
        {/* <Routes>
          <Route path="/My-React-Projects/Main" element={<FrontPage />}></Route>
          <Route path="/My-React-Projects/FrontPage" element={<FrontPage />}></Route>
          <Route path="/My-React-Projects/DiceGame" element={<FrontPage />}></Route>
          <Route path="/My-React-Projects/Playarea" element={<Playarea />}></Route>
          <Route path="/My-React-Projects/Playarea/ShowRules" element={<ShowRules />}></Route>
          <Route path="/*" element={<Page404 />}></Route>
        </Routes> */}
    </>
  )
}

=======
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
          <Route path="/My-React-Projects/Main" element={<FrontPage />}></Route>
          <Route path="/Playarea" element={<Playarea />}></Route>
          <Route path="/Playarea/ShowRules" element={<ShowRules />}></Route>
          <Route path="/*" element={<Page404 />}></Route>
        </Routes>

      </BrowserRouter>


    </>
  )
}

>>>>>>> a0a7b3fb40d39ad0594530e0f4372e8a669bc056
export default Main;