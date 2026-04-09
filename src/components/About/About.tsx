import { aboutImage } from "../../image"

const About = () => {
    return (

        <div className="bg-white dark:bg-gray-900 py-10 md:py-16">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
                    {/* left side */}

                    <div className="bg-white-300 dark:bg-gray-900 py-10 md:py-16 space-y-4 text-center lg:text-left order-2 lg:order-1">

                        <button className="section-btn">Why choose us</button>

                        <div>
                            <h1 className="text-3xl lg:text-5xl font-bold mt-5"> Your Trusted  <span className="text-primary">Fashion Partner</span>
                            </h1>
                        </div>
                        <div className="relative">
                            <div className="bg-white dark:bg-gray-800 p-4 lg:p-6 rounded-2xl shadow-xl">
                                <img src={aboutImage} alt="collection-Image" className="w-full max-h-[280px] lg:max-h-[400px] object-fit hover:scale-105 mx-auto duration-100 dark:text-white text-sm lf:text-base" />
                            </div>
                            <div className="bg-gray-800 h-15 w-15 lg:h-25 lg:w-25 flex items-center rounded-md absolute -bottom-2 -right-2 text-center lg:right-0 text-xs lg:text-sm font-semibold shadow-xl border-2">
                                <div> <span> <button className="section-btn h-12 w-12 lg:h-14 lg:w-14 justify-center items-center mr-4 rounded-xl"> +5 </button>  </span>
                                    <div> <p className="font-bold"> Years </p>
                                        <p> <span className="text-white text-base">Experience </span>
                                         </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* right side */}
                    <div className="relative order-1 lg:order-2">
                        <div className="bg-white dark:bg-gray-800 p-4 lg:p-6 rounded-2xl shadow-xl mt-8 text-center lg:text-start">
                            <h1 className="text-3xl text-white font-bold gap-y-1">
                                Quality Fashion for Everyone
                            </h1>
                            <p className="dark:text-white">
                                Fashion Partner We Bring you the latest trends in fashion at unbeatable price. From casual everyday wear to elegant party outfits, discover a wide range of clothing and accesories foar every occasion.
                            </p>
                            <p className="dark:text-gray-600">
                                Fashion Partner We Bring you the latest trends in fashion at unbeatable price. From casual everyday wear to elegant party outfits, discover a wide range of clothing and accesories foar every occasion.
                            </p>
                            <div>
                                <button className="primary-btn mx-1.5">Explore store</button>
                                <button className="secondary-btn">Contact Us</button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default About;