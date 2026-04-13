import { BannerImg } from "../../image";

const Banner = () => {
  return (
    <div className="bg-white dark:bg-gray-900 py-10 md:py-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* left side */}
          <div className="bg-purple-300 dark:bg-gray-900 py-10 md:py-16 space-y-4 text-center lg:text-left order-2 lg:order-1">
            <span className="section-btn ">Limited Time Offer</span>
            <h1 className="text-3xl lg:text-5xl font-bold mt-5">Summer Sale <span className="text-yellow-300"> Up to 50% Off </span> </h1>
            <p>
              Grab your favorite styles before they're gone. Premium quality
              fashion at unbeatable prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 ">
              <button className="primary-btn">shop now</button>
              <button className="secondary-btn">view collection</button>
            </div>
          </div>
          {/* Right side */}
          <div className="relative order-1 lg:order-2">
            <div className="bg-white dark:bg-gray-800 p-4 lg:p-6 rounded-2xl shadow-xl">
              <img src={BannerImg} alt="collection" className="w-full max-h-[280px] lg:max-h-[400px] object-fit hover:scale-105 mx-auto duration-100 dark:text-white text-sm lf:text-base" />
              <div className="bg-primary h-12 w-12 lg:h-18 lg:w-18 flex justify-center items-center rounded-full absolute -top-2 -right-2 text-center lg:right-0 text-xs lg:text-sm font-semibold shadow-xl">
                50% <br /> off
              </div>
         </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
