import { createGlobalStyle } from "styled-components"

import Header from './Header'
import Main from './Main'
import './Main.css';

const GlobalStyle = createGlobalStyle`
 *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
 }

`

function Body(){
  return(
    <>
      <div id="mainDiv" className="overflow-x-hidden">
        <Header />
        <Main />
      </div>
    </>
  )
}

export default Body;