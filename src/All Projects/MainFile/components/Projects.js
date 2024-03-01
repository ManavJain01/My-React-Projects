import {Link} from 'react-router-dom'
import object from './Objects'

import styled from "styled-components";
import styles from './Projects.css'

function Projects(){

  return(
    <>
      {/* <div className="flex flex-wrap space-x-7 space-y-5"> */}
          {object.map((value, i) =>(
              <Link key={i} to={value.Link} id={value.id} className="m-5 hover:scale-110 duration-300">
                <div className="bg-white text-red-600 w-[20rem] h-[24rem] px-5 py-5 flex flex-col items-center rounded-lg shadow-2xl hover:shadow-blue-600 active:shadow-green-600">
                  <h1 className="text-6xl mb-4">Project {i+1}</h1>
                  <img src={value.Img} className={`w-[80%] object-contain`}></img>
                  <p className="flex flex-col items-center mt-2 pt-2 border-t-2 border-blue-600">
                    <span className="shadow-xl px-10 whitespace-nowrap">{value.p1}</span>
                    <span className="shadow-xl px-10 whitespace-nowrap">{value.p2}</span>
                  </p>
                </div>
              </Link>
          ))
          }
        
      {/* </div> */}
    </>
  )

}

export default Projects;

const StyledDiv = styled.div`
    #project2 div img{
      width: 100%;
    }
  
    #project3 div img{
      width: 100%;
      height: 60%;
    }

  `



/*
  <Link to={object[i].Link} className="m-5 hover:scale-110 duration-300">
    <div className="bg-white text-red-600 w-[20rem] h-[24rem] px-5 py-5 flex flex-col items-center rounded-lg shadow-2xl hover:shadow-blue-600 active:shadow-green-600">
      <h1 className="text-6xl mb-4">Project {i+1}</h1>
      <img src={DiceGame} className="w-[80%] object-contain"></img>
      <p className="flex flex-col items-center px-5 pt-2 border-t-2 border-blue-600">
        <span className="shadow-xl px-10 whitespace-nowrap">{object[i].p1}</span>
        <span className="shadow-xl px-10 whitespace-nowrap">{object[i++].p2}</span>
      </p>
    </div>
  </Link>

  <Link to={object[i].Link} className="m-5 hover:scale-110 duration-300">
  <div className="bg-white text-red-600 w-[20rem] h-[24rem] px-5 py-5 flex flex-col items-center rounded-lg shadow-2xl hover:shadow-blue-600 active:shadow-green-600">
    <h1 className="text-6xl mb-4">Project {i+1}</h1>
    <img src={foody} className="w-[100%] object-contain"></img>
    <p className="flex flex-col items-center mt-2 pt-2 border-t-2 border-blue-600">
      <span className="shadow-xl px-10 whitespace-nowrap">{object[i].p1}</span>
      <span className="shadow-xl px-10 whitespace-nowrap">{object[i++].p2}</span>
    </p>
  </div>
  </Link>

  <Link to={object[i].Link} className="m-5 hover:scale-110 duration-300">
  <div className="bg-white text-red-600 w-[20rem] h-[24rem] px-5 py-5 flex flex-col items-center rounded-lg shadow-2xl hover:shadow-blue-600 active:shadow-green-600">
    <h1 className="text-6xl mb-4">Project {i+1}</h1>
    <img src={firebase} className="w-[100%] h-[60%] object-contain"></img>
    <p className="flex flex-col items-center mt-2 pt-2 border-t-2 border-blue-600">
      <span className="shadow-xl px-10 whitespace-nowrap">{object[i].p1}</span>
      <span className="shadow-xl px-10 whitespace-nowrap">{object[i++].p2}</span>
    </p>
  </div>
  </Link>
*/