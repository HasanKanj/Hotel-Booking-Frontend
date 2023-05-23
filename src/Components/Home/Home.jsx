import "../Home/Home.css";
import Featured from "../../Components/Home/Featured/Featured";
// import FeaturedProperties from "../Home/featuredProperties/FeaturedProperties";
import PropertyList from "../Home/propertyList/PropertyList";
import Steps from "../Home/Steps/Steps";
import Banner from "./Banner1/Banner";
import Why from "./whychooseus/why";
import Cards from "./cards/Cards";
export default function Home() {
  return (
    <div>
      <Banner />
      <div>
        <div className="homeContainer">
          <p className="section-subtitle">Uncover place</p>
          <h2 className="h2 section-title">Popular destination</h2>
          <p className="section-text">
            Discover the allure of Lebanons popular destinations, where rich
            history and breathtaking landscapes converge to create unforgettable
            experiences.
          </p>
          <Featured />
          <button className="btn btn-primary">More destintionS</button>
        </div>
        <div className="homeContainers">
          <p className="section-subtitle2">Explore by types of stays</p>
          <h2 className="h2 section-title">CHECKOUT OUR PROPERTY TYPES</h2>
          <p className="section-text">
            Discover the allure of Lebanons popular destinations, where rich
            history and breathtaking landscapes converge to create unforgettable
            experiences.
          </p>
          <PropertyList />
        </div>
        <Steps />
        <div className="homeContainers">
          <p className="section-subtitle3">TOP GUESTS LOVE</p>
          <h2 className="h2 section-title">CHECKOUT OUR TOP HOTELS</h2>
          <p className="section-text">
            Discover the allure of Lebanons popular destinations, where rich
            history and breathtaking landscapes converge to create unforgettable
            experiences.
          </p>
          <Cards/>
        </div>
        <div className="homeContainer">
          <Why />
        </div>
      </div>
    </div>
  );
}
