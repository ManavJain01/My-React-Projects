import Dice from "../Images/dices.png";
import Button from './Button';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

function FrontPage(){
  return(
    <>
      <div className="mt-5 sm:mt-32 flex justify-center items-center">
        <img src={Dice} className="hidden sm:inline-block object-contain w-1/2"></img>
        <div className="relative">
          <h1 className="font-bold text-6xl">DICE GAME</h1>
          <div className="pt-3 absolute top-16 right-0">
          <Link to="/Playarea">
            <Button text={'Play Now'} className="hover:text-black hover:bg-white hover:border-y-2 hover:border-slate-400 active:bg-gray-200" />
          </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default FrontPage;