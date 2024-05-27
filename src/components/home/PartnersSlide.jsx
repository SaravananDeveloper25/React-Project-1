import React from 'react';
// import { Card } from 'react-bootstrap';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick-theme.css';
// import 'slick-carousel/slick/slick.css';
import ar from '../../images/16717151_2002.i039.010_chatbot_messenger_ai_isometric_set-09.jpg'



const PartnersSlide = () => {


  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500, // Adjusted speed to a more standard value
  //   slidesToShow: 6, // Showing 3 slides at once
  //   slidesToScroll: 1,
  //   autoplay: true, // Autoplay enabled
  //   autoplaySpeed: 1000, // Adjust autoplay speed (milliseconds)
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // };

  return (
    <>
      <section></section>

      <div >
        {/* <Slider  {...settings} >
        {ar.map((val,index) => (
          <div key={index} style={{transition:'2s all ease-in',}}> 
            <Card style={{border:'none',backgroundColor:'#a5a8f141',borderRadius:0}}>
              <Card.Body style={{padding:20}}>
                <div style={{display:'flex',justifyContent:'center'}}>
                 <img src={val.image} height={50} width={100} />
                </div>
               
              </Card.Body>
            </Card>
          </div>
        ))}
      </Slider> */}
        <div className='logos'>
          <div className="logo-slide">
            <img src={ar} alt="" />
            <img src={ar} alt="" />
            <img src={ar} alt="" />
            <img src={ar} alt="" />
            <img src={ar} alt="" />
            <img src={ar} alt="" />
            <img src={ar} alt="" />
            <img src={ar} alt="" />
            <img src={ar} alt="" />
            <img src={ar} alt="" />
            <img src={ar} alt="" />
          </div>
          <div className="logo-slide">
            <img src={ar} alt="" />
            <img src={ar} alt="" />
            <img src={ar} alt="" />
            <img src={ar} alt="" />
            <img src={ar} alt="" />
            <img src={ar} alt="" />
            <img src={ar} alt="" />
            <img src={ar} alt="" />
            <img src={ar} alt="" />
            <img src={ar} alt="" />
            <img src={ar} alt="" />
          </div>
        </div>

      </div>


    </>

  )
}

export default PartnersSlide