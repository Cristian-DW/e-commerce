import Image from "next/image"

const HomeBanner = () => {
   return (
      <header className="relative bg-gradient-to-r from-indigo-400 to-indigo-700 mb-8 ">
         <section className="mx-auto px-8 pyu-12 flex flex-col gap-2 md:flex-row items-center justify-evenly">
            <div className="mb-8 md:mb-0 text-center">
               <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Summer Sales</h1>
               <p className="text-lg md:text-xl text-white mb-2">Enjoy  discounts on selected items</p>
               <p className="text-2xl md:text-5xl text-yellow-500 font-bold">GET 50% OFF</p>
            </div>
            <div className="w-1/3 relative aspect-video">
               <Image src="/banner-image.png"  alt="banner" fill className="object-contain" />
            </div>
         </section>
      </header>
   )
}

export default HomeBanner;