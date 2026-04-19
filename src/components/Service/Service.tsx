import { Services } from "../../constant/Service"

const Service = () => {
  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white py-10 lg:py-14">
    <div className="container">
      <div>
        <span className="section-btn gap-y-4">Our Categories</span>
        <h1 className="text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">Shop By <span className="text-primary">Category</span></h1>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4  gap-3 lg:gap-8">
        {Services.map((item)=>(
          <div key={item.id}
          className="group bg-white dark:bg-black  rounded-xl lg:rounded-2xl p-4 lg:p-8
          hover:bg-primary dark:text-white duration-300 space-y-4 border border-gray-100
          dark:border-gray-800 shadow-2xl hover:border-primary dark:hover:bg-black ">
            
            <div className="h-12 w-12 lg:h-16 lg:w-16 bg-primary/10 flex justify-center items-center rounded-xl lg:rounded-2xl
            group-hover:bg-primary"><item.icon/></div>
            <h3 className="lg:text-xl font-bold text-sm">{item.title}</h3>

            <div className="">
              <span className="text-xl lg:text-3xl font-bold text-primary">{item.price}</span>
              <span className="text-gray-500 text-xs lg:text-sm">{item.duration}</span>
            </div>

           <ul className="space-y-2">
            {item.description.map((des , index)=>(
              <li key={index}>
                <span>{des}</span>
              </li>
            ))}
           </ul>
           <button className="primary-btn">shop now</button>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Service
