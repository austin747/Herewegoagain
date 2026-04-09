import { HeroImage } from "../../image";

const HeroSection = () => {
  return (
    <div className="relative h-[500px] md:h-[600px]">
      <div>
        <img
          src={HeroImage}
          alt=""
          className="w-full h-full object-cover absolute"
        />
        <div className="absolute dark:bg-black/50 h-full w-full">
          <div className="container h-full flex items-center">
           <div className=" space-y-5">
             <div className="">
              <span className="section-btn">New Arrivals 2026</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Discover Your Perfect Style
            </h1>
            <p className="text-sm md:text-md text-gray-300">
              explore our latest collection of trendy fashion. Quality meets
              affordability.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 ">
              <button className="primary-btn">shop now</button>
              <button className="secondary-btn">view collection</button>
            </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
