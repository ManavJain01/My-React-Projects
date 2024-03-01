import {Link} from 'react-router-dom'
import object from './Objects'
import DiceGame from '../Images/DiceGame.png';

function Projects(){
  let i=1;

  return(
    <>
      <div className="flex flex-wrap space-x-7 space-y-5">
          <Link to={object[0].Link} className="m-5 hover:scale-110 duration-300">
            <div className="bg-white text-red-600 w-[20rem] h-[24rem] px-5 py-5 flex flex-col items-center rounded-lg shadow-2xl hover:shadow-blue-600 active:shadow-green-600">
              <h1 className="text-6xl mb-4">Project {i++}</h1>
              <img src={DiceGame} className="w-[80%] object-contain"></img>
              <p className="flex flex-col items-center px-5 pt-2 border-t-2 border-blue-600">
                <span className="shadow-xl px-10 whitespace-nowrap">{object[0].p1}</span>
                <span className="shadow-xl px-10 whitespace-nowrap">{object[0].p2}</span>
              </p>
            </div>
          </Link>
        
      </div>
    </>
  )
}

export default Projects;