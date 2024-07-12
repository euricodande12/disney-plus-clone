import { productionHouseList } from "../data/data"

const ProductionHouse = () => {
  return (
    <section className="flex gap-2 md:gap-5 py-2 px-4 md:px-16">
      {productionHouseList.map((item) => (
        <div key={item.id} className="border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer shadow-xl shadow-gray-800">
            <video src={item.video} autoPlay loop className="absolute top-0 rounded-md z-0 opacity-0 hover:opacity-50 " />
            <img src={item.image} alt="Movie" className="w-full z-[1]" />
        </div>
      ))}
    </section>
  )
}

export default ProductionHouse
