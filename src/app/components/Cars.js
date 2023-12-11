'use client'
import Brands from "./Brands"
import CarSlider from "./CarSlider"

const Cars = () => {
  return (
    <section className="  xl:h-[116vh] h-screen flex justify-center items-center" id="cars">

      <div className="container mx-auto">
      <Brands />
      <CarSlider />
      </div>

    </section>
  )
}

export default Cars