import Navbar from './Navbar';
import Navmenu from './Navmenu';

function Main(){
  return(
    <>
      <header className="bg-black md:bg-gradient-to-r md:from-indigo-500 md:from-10% md:via-sky-500 md:via-30% md:to-emerald-500 md:to-90% h-20 md:h-36">
        <Navbar />
        <div>
          <h1 className="text-6xl font-bold flex justify-center mt-48">Building...</h1>
          <h1 className="text-6xl font-bold flex justify-center mt-10">Come Later To Find out</h1>
        </div>
      </header>
    </>
  )
}

export default Main;