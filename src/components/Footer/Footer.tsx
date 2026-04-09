import { Categories, SocialLinks } from "../../constant/Footer";
import { NavLink } from "../../constant/Navlink";
import { Logo } from "../../image";

const Footer = () => {
  return (
    <div className="py-12 bg-gray-700">
    <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {/* social link */}

        <div className="space-y-5 col-span-2 lg:text-left text-center">
          <img src={Logo} alt="image" className="w-20 mx-auto" />
          <p className="text-gray-400">
            Your one-stop destination for trendy fashion. Quality meets style.
          </p>

          <div className="flex justify-start gap-3 text-gray-400">
            {SocialLinks.map((social) => (
              <a
                href="#"
                key={social.id}
                className="h-8 w-8 bg-gray-800 text-white flex justify-center items-center
              rounded-xl hover:bg-primary"
              >
               
                <social.icon />
              </a>
            ))}
          </div>
        </div>

        {/* qiock link */}
        <div className="text-white">
          
          <h1 className="font-bold text-lg lg:text-left text-center ">quick links</h1>

              <ul className="space-y-2 mt-5 lg:text-left text-center ">
                {NavLink.map((quick)=>(
                  <li key={quick.id}>
                    <a href={quick.path}>{quick.name}</a>
                  </li>
                ))}
              </ul>

        </div>
        {/* contact */}
        <div className="text-gray-400 lg:text-left text-center ">
          <h1 className="font-bold text-lg lg:text-left text-center ">Categories</h1>
          <ul className="space-y-2 mt-5 ">
            {Categories.map((categories)=>(
<li key={categories.id}> {categories.name}</li>
            ))}
          </ul>
        </div>
        {/* contact info */}
        <div className="text-gray-400">Contact Info</div>
      </div>
    </div>
    </div>
  );
};

export default Footer;
