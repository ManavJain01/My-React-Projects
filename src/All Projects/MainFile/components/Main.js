import {Link} from 'react-router-dom'

import Projects from './Projects'

function Main() {

  return (
    <>
      <div className="min-h-[60vh] bg-[beige] flex justify-start py-20 sm:px-9">
        <div className="flex flex-wrap space-x-7 space-y-5">
          <Projects />

          <Link className="m-5 hover:scale-110 duration-300 active:translate-x-4">
            <div className="bg-white text-red-600 w-[20rem] h-[24rem] px-5 py-5 flex flex-col items-center justify-between rounded-lg shadow-2xl active:shadow-red-600">
              <h1 className="text-6xl mb-4">Project 4</h1>
              <p className="text-3xl whitespace-nowrap hover:translate-y-2 active:translate-y-4">Work in progress</p>
              <p className="flex flex-col items-center mt-2 pt-2 border-t-2 border-blue-600">
                <span className="shadow-xl px-10 whitespace-nowrap">Project Name</span>
                <span className="shadow-xl px-10 whitespace-nowrap">Topic Name</span>
              </p>
            </div>
          </Link>
        </div>
        
      </div>
    </>
  )
}

export default Main;