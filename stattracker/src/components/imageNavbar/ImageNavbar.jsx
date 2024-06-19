import { NavLink } from "react-router-dom";
import Slider from 'react-slick'
import './ImageNavbar.css'

export function ImageNavbar({ agents }) {
  var settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 24,
    slidesToScroll: 0,
    className: 'mx-4',
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 5
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 8,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 10,
          slidesToScroll: 10,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 12,
          slidesToScroll: 12,
          infinite: false,
          dots: true
        }
      }
    ]
  };

  return (
    <nav className='mt-4'>
      <Slider {...settings}>
        {agents.map((agent, index) => {
            if (!agent.displayName || !agent.displayIcon) 
              return
            
            return (
                <NavLink
                  className={({ isActive }) => `agents-navbar-item${isActive ? " active" : ""}`}
                  to={agent.displayName.toLowerCase().replace("/", "")}
                  key={index}
                >
                  <img
                    src={agent.displayIcon}
                    alt={agent.displayName}
                  />
                </NavLink>
              )
          })
        }
      </Slider>
    </nav>
  );
}

//relative flex hover:scale-[140%] bg-gradient-to-b to-gray-600 from-red-800 transition z-10 hover:z-50 duration-200 scale ease-in-out [clip-path:_polygon(20%_0,_100%_0,_100%_80%,_80%_100%,0_100%,_0_20%)]
