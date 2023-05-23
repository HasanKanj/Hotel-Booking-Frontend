import "../Banner1/Banner.css";
import SearchHeader from "../SearchHeader/SearchHeader";
export default function Banner() {
  return (
    <div>
      <section className="hero" id="home">
        <div className="container">
          <h2 className="bodi hero-title">
            Discover Lebanon Through Our Booking Platform
          </h2>

          <p className="hero-text">
            Explore the best that Lebanon has to offer with our easy-to-use
            booking platform .
          </p>

          <div className="btn-group">
            {/* <button className="btn btn-primary">Book now</button> */}
          </div>
        </div>
      </section>
      <SearchHeader/>
    </div>
  );
}
