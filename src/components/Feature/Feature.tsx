import { AboutFeatures } from "../../constant/Feature";

const Feature = () => {
  return (
    <div className="bg-white dark:bg-gray-900 py-10 md:py-14">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {AboutFeatures.map((feature) => (
            <div
              key={feature.id}
              className="group bg-white dark:bg-gray-700 p-4 md:p-6 rounded-xl
                    border border-gray-100 dark:border-gray-800 hover:border-primary duration-500"
            >
              <div
                className="bg-primary/10 h-12 w-12 md:h-16 md:w-16 rounded-xl
                         flex justify-center items-center group-hover:bg-primary mb-3 md:mb-6
                           dark:group-hover:text-white duration-500 text-primary"
              >
                <feature.icon />
              </div>
              <h3
                className="dark:text-white font-semibold text-xs md:text-base 
                         group-hover:text-primary duration-300"
              >
                {feature.text}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;
