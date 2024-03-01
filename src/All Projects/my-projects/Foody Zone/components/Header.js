function Header(){
  return(
    <>
      <div className="bg-gray-800 text-white h-48 flex flex-col justify-center space-y-12 px-[8%]">
        <section className="flex flex-wrap space-y-4 justify-between items-center">
          <h1 className="text-2xl font-bold whitespace-nowrap">F<span className="text-red-600">oo</span>dy Z<span className="text-red-600">o</span>ne</h1>
          <input type="text" placeholder="Search Food...." className="py-1 px-5 w-[20rem] border-2 border-red-600 rounded-md bg-transparent"></input>
        </section>

        <section className="text-center flex justify-center space-x-2">
          <button className="bg-red-600 px-2 py-1 rounded-md">All</button>
          <button className="bg-red-600 px-2 py-1 rounded-md">Breakfast</button>
          <button className="bg-red-600 px-2 py-1 rounded-md">Lunch</button>
          <button className="bg-red-600 px-2 py-1 rounded-md">Dinner</button>
        </section>

      </div>
    </>
  )
}

export default Header;