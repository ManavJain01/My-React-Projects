import bg from '../Images/bg.png'
import egg from '../Images/egg.png'
import burger from '../Images/burger.png'
import cake from '../Images/cake.png'
import chicken from '../Images/chicken.png'
import pancake from '../Images/pancake.png'
import ramen from '../Images/ramen.png'

function Main(){
  return(
    <>
      <div id="parentDiv" className="h-[80vh] text-white flex flex-wrap justify-center items-center space-x-8 space-y-8">
        <div className="mt-7 ml-9 flex w-[25rem] h-[12rem] min-w-[25rem] border-2 border-white rounded-3xl">
          <section className="py-2">
            <img src={egg} className="w-[28rem] min-w-[11rem]"></img>
          </section>

          <section className="relative py-3 px-2">
            <h1 className="font-bold text-xl">Boiled Eggs</h1>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est.</p>

            <p className="absolute bottom-3 right-8 px-3 py-1 rounded-lg bg-red-600">$10.00</p>
          </section>
        </div>

        <div className="flex w-[25rem] h-[12rem] min-w-[25rem] border-2 border-white rounded-3xl">
          <section className="py-2">
            <img src={ramen} className="w-[28rem] min-w-[11rem]"></img>
          </section>

          <section className="relative py-3 px-2">
            <h1 className="font-bold text-xl">RAMEN</h1>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est.</p>

            <p className="absolute bottom-3 right-8 px-3 py-1 rounded-lg bg-red-600">$25.00</p>
          </section>
        </div>

        <div className="flex w-[25rem] h-[12rem] min-w-[25rem] border-2 border-white rounded-3xl">
          <section className="py-2">
            <img src={chicken} className="w-[28rem] min-w-[11rem]"></img>
          </section>

          <section className="relative py-3 px-2">
            <h1 className="font-bold text-xl">GRILLED CHICKEN</h1>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est.</p>

            <p className="absolute bottom-3 right-8 px-3 py-1 rounded-lg bg-red-600">$45.00</p>
          </section>
        </div>

        <div className="flex w-[25rem] h-[12rem] min-w-[25rem] border-2 border-white rounded-3xl">
          <section className="py-2">
            <img src={cake} className="w-[28rem] min-w-[11rem]"></img>
          </section>

          <section className="relative py-3 px-2">
            <h1 className="font-bold text-xl">CAKE</h1>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est.</p>

            <p className="absolute bottom-3 right-8 px-3 py-1 rounded-lg bg-red-600">$18.00</p>
          </section>
        </div>

        <div className="flex w-[25rem] h-[12rem] min-w-[25rem] border-2 border-white rounded-3xl">
          <section className="py-2">
            <img src={burger} className="w-[28rem] min-w-[11rem]"></img>
          </section>

          <section className="relative py-3 px-2">
            <h1 className="font-bold text-xl">BURGER</h1>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est.</p>

            <p className="absolute bottom-3 right-8 px-3 py-1 rounded-lg bg-red-600">$23.00</p>
          </section>
        </div>

        <div className="flex w-[25rem] h-[12rem] min-w-[25rem] border-2 border-white rounded-3xl">
          <section className="py-2">
            <img src={pancake} className="w-[28rem] min-w-[11rem]"></img>
          </section>

          <section className="relative py-3 px-2">
            <h1 className="font-bold text-xl">PANCAKE</h1>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est.</p>

            <p className="absolute bottom-3 right-8 px-3 py-1 rounded-lg bg-red-600">$25.00</p>
          </section>
        </div>
      </div>
    </>
  )
}

export default Main;