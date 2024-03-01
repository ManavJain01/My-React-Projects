import {Route, Routes} from 'react-router-dom'

//      * Main Page *
import Body from './Body';

//      * Dice Game *
import FrontPage from '../../my-projects/Dice Game/components/FrontPage'
import Playarea from '../../my-projects/Dice Game/components/Playarea'
import ShowRules from '../../my-projects/Dice Game/components/ShowRules'
import Page404 from '../../my-projects/Dice Game/components/Page404'

//      * Foody Zone *
import FoodyZone from '../../my-projects/Foody Zone/components/Body'

function Index(){
  return(
    <>
      <div>

        <Routes>
          <Route path="/Body" element={<Body />}></Route>
 
          {/* Dice Game */}
          <Route path="/FrontPage" element={<FrontPage />}></Route>
          <Route path="/Playarea" element={<Playarea />}></Route>
          <Route path="/Playarea/ShowRules" element={<ShowRules />}></Route>
          <Route path="/*" element={<Page404 />}></Route>

          {/* Foody Zone */}
          <Route path="/FoodyZone" element={<FoodyZone />}></Route>
        </Routes>

      </div>
    </>
  )
}

export default Index;