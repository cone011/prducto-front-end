import Slider from "react-slick";
import { carrouselPics } from "../../../assets/carroselPics";
import { carrouselConfiguration } from "../../../store/carrousel-config";

const HeaderCarrousel = () => {
  return (
    <div className="relative flex justify-center w-full">
      <Slider {...carrouselConfiguration} className="w-full">
        {carrouselPics.map((item) => (
          <div key={item} className="flex justify-center">
            <img src={item} width="1600px" className="m-auto" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeaderCarrousel;
