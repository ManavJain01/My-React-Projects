import search from '../Images/search.png'
import contact from '../Images/contact.png'

function Main(){
  return(
    <>
      <div className="mt-3 w-[45vw] h-[6vh] min-w-[17rem] max-w-[20rem]">
        <section className="flex flex-col relative">
          <img src={search} className="w-6 object-contain absolute top-2 left-2"></img>
          <input type="text" placeholder="Search Contact" className="bg-transparent pl-10 py-1 border-2 border-white rounded-lg"></input>
        </section>

        <section className="hidden bg-white fixed top-28 sm:top-36 flex flex-col p-5">
          <label htmlFor="Name" className="my-1">Name</label>
          <input type="text" id="Name" className="h-8 border-2 border-black"></input>
          <label htmlFor="Email" className="my-2">Email</label>
          <input type="text" id="Email" className="h-8 border-2 border-black"></input>
          <button className="text-end bg-yellow-400 border-2 border-black rounded-lg ml-[10rem] mt-4 px-3 py-1">Add Contact</button>
        </section>

        <section className="h-[70vh] flex justify-center items-center text-white">
          <img src={contact}></img>
          <h1 className="font-bold text-xl ml-4">No Contact Found</h1>
        </section>
      </div>
    </>
  )
}

export default Main