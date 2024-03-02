import Header from './Header'
import Main from './Main'

import {styled} from 'styled-components'

function Body(){
  return(
    <>
    <BodyStyle className="bg-[gray] w-[100vw] h-[100vh] min-w-[20rem]">
        <div className="flex flex-col items-center bg-gray-700 min-w-[18rem] w-[50vw] h-[90vh] max-w-[25rem]">
          <Header />
          <Main />
        </div>
    </BodyStyle>
    </>
  )
}

export default Body;

const BodyStyle = styled.div`
  margin: 0;
  padding: 0;
  border-box: box-sizing;
  display: flex;
  justify-content: center;
`