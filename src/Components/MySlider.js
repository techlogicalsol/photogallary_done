import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function MySlider(props){

  const {suggestion} = props
  let setting = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,

    // responsive:[
    //   {
    //     breakpoint: 960,
    //     setting:{
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //     }
    //     },
   // 563492ad6f917000010000012ca599504ebe41049e30d189b7401240
   //https://www.pexels.com/api/documentation/

    //     {
    //       breakpoint:480,
    //       setting:{
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //       }
    //     }
      
    // ]
}

    return(
        <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
              <div className="col-md-10 mx-auto">
              
          <Slider {...setting}>
            {suggestion.map(item=>(
              
                <div className="card" key={item.id}>
                  <img src={`https://source.unsplash.com/random/${item.id}`}
                  className="myImg" />
                </div>
              
            ))}
          </Slider>
          </div>
          </div>
          </div>
          </div>
          </div>
        </>
    )
}

export default MySlider