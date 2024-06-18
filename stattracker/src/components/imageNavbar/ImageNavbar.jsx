import { NavLink } from "react-router-dom";
import Slider from 'react-slick'

export function ImageNavbar(object) {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <nav className="w-screen flex sticky justify-between bg-stone-800 px-2 gap-1 top-0 pt-3">
      <Slider {...settings}>
        {Object.values(object).map((arr) =>
          arr.map((agent, index) => {
            if (agent.displayName && agent.displayIcon) {
              return (
                <div key={index}>
                  <NavLink
                    className={({ isActive }) =>
                      `relative flex hover:scale-[140%] bg-gradient-to-b to-gray-600 from-red-800 transition z-10 hover:z-50 duration-200 scale ease-in-out [clip-path:_polygon(20%_0,_100%_0,_100%_80%,_80%_100%,0_100%,_0_20%)] ${
                        isActive
                          ? "bg-gradient-to-b to-gray-600 from-green-800 border border-white-600 border-2"
                          : "hover:bg-stone-800 bg-gradient-to-b to-gray-600 from-green-800 text-white"
                      }`
                    }
                    to={agent.displayName.toLowerCase().replace("/", "")}
                  >
                    <img
                      className=""
                      src={agent.displayIcon}
                      alt={agent.displayName}
                    />
                  </NavLink>
                </div>
              );
            }
          })
        )}
      </Slider>
    </nav>
  );
}

//relative flex hover:scale-[140%] bg-gradient-to-b to-gray-600 from-red-800 transition z-10 hover:z-50 duration-200 scale ease-in-out [clip-path:_polygon(20%_0,_100%_0,_100%_80%,_80%_100%,0_100%,_0_20%)]
