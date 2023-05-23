import "./slider.css";
import img1 from "../../../assets/kanj.jpeg";
export default function Slider() {
  return (
    <div>
      <div className="slider">
        <div className="slide-track">
          <div className="slide">
            <img src={img1} height="100" width="250" alt="" />
          </div>
          <div className="slide">
            <img src={img1} height="100" width="250" alt="" />
          </div>
          <div className="slide">
            <img src={img1} height="100" width="250" alt="" />
          </div>
          <div className="slide">
            <img src={img1} height="100" width="250" alt="" />
          </div>

       
        </div>
      </div>
    </div>
  );
}
