import Slider from "react-slick";
import { carrouselPics } from "../../../assets/carroselPics";
import { carrouselConfiguration } from "../../../store/carrousel-config";
import classes from "./headerCarrousel.module.css";
const HeaderCarrousel = () => {
  return (
    <div className={classes.Header}>
      <Slider {...carrouselConfiguration}>
        {carrouselPics.map((item, index) => (
          <div key={item} className={classes.HeaderItem}>
            <img src={item} alt={item} className={classes.imgResponsive} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeaderCarrousel;
