import { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider1 from '../../assets/images/slider1.jpg';
import Slider2 from '../../assets/images/slider2.jpg';
import Slider3 from '../../assets/images/slider3.jpg';
import AppURL from "../../api/AppURL";
import axios from "axios";

const HomeSlider = () => {
    const [sliderData, setSliderData] = useState([]);
    const [sliderSettings, setSliderSettings] = useState({
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
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
    });

    useEffect(() => {
        axios.get(AppURL.AllSlider).then(response => {
            setSliderData(response.data);
        }).catch(error => {
            console.log(error)
        });
    }, []);

    const MyView = sliderData.map((SliderList,i)=>{
        return  <div key={i.toString()}>
            <img className="slider-img" src={SliderList.slider_image} />
        </div>
    })

    return (
        <div>
            <Slider {...sliderSettings}>
                {MyView}
            </Slider>
        </div>
    );
}

export default HomeSlider;
