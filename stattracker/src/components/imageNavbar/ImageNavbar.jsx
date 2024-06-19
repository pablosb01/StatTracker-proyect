import { NavLink } from "react-router-dom";
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function ImageNavbar(object) {
  var settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 24,
    slidesToScroll: 0,
    className: 'z-10 py-2',
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 12,
          slidesToScroll: 12,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 10,
          slidesToScroll: 10,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 8,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 6,
          arrows: false,
          slidesToScroll: 5,
        }
      }
    ]
  };
  return (
    <nav className='w-inherit z-10'>
      <Slider {...settings}>
        {Object.values(object).map((arr) =>
          arr.map((agent, index) => {
            if (agent.displayName && agent.displayIcon) {
              return (
                <div key={index}>
                  <NavLink
                    className={({ isActive }) =>
                      `relative flex hover:scale-[140%] bg-gradient-to-b to-gray-600 from-red-800 transition z-20 hover:z-50 duration-200 scale ease-in-out [clip-path:_polygon(20%_0,_100%_0,_100%_80%,_80%_100%,0_100%,_0_20%)] ${
                        isActive
                          ? "bg-gradient-to-b to-gray-600 from-green-800 border border-white-600 border-2"
                          : "hover:bg-stone-800 bg-gradient-to-b to-gray-600 from-green-800 text-white"
                      }`
                    }
                    to={agent.displayName.toLowerCase().replace("/", "")}
                  >
                    <img
                      className="z-10"
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
