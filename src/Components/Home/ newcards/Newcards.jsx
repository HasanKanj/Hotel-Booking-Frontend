import img1 from "../../../assets/beirut.jpg";
import img2 from "../../../assets/faraya.jpg";
import img3 from "../../../assets/Tyre.jpg";
import "./Newcards.css";
import useFetch from "../../../hooks/useFetch";

export default function Newcards() {
  const { data, loading } = useFetch(
    `http://localhost:5000/api/hotels/countByCity?cities=Madrid,Beirut`
  );

  return (
    <div> {loading ? (
      "Loading please wait"
    ) : (
      <>
      <section className="popular" id="destination">
        <div className="containersss">

          <h2 className="h2 section-title">Popular destination</h2>

          <ul className="popular-list">
            <li>
              <div className="popular-card">
                <figure className="card-img">
                  <img src={img1} alt="San miguel, italy" loading="lazy" />
                </figure>

                <div className="card-content">
                  <div className="card-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>

                  <p className="card-subtitle">
                    <a href="#">Beirut</a>
                  </p>

                  <h3 className="h3 card-title">
                    <a href="#">Sahat al shohada</a>
                  </h3>

                  <p className="card-text">{data[0]} Properties </p>
                </div>
              </div>
            </li>

            <li>
              <div className="popular-card">
                <figure className="card-img">
                  <img src={img2} alt="Burj khalifa, Faraya" loading="lazy" />
                </figure>

                <div className="card-content">
                  <div className="card-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>

                  <p className="card-subtitle">
                    <a href="#">Faraya</a>
                  </p>

                  <h3 className="h3 card-title">
                    <a href="#">Burj khalifa</a>
                  </h3>

                  <p className="card-text"> {data[1]} Properties</p>
                </div>
              </div>
            </li>

            <li>
              <div className="popular-card">
                <figure className="card-img">
                  <img src={img3} alt="Kyoto temple, japan" loading="lazy" />
                </figure>

                <div className="card-content">
                  <div className="card-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>

                  <p className="card-subtitle">
                    <a href="#">Tyre</a>
                  </p>

                  <h3 className="h3 card-title">
                    <a href="#">Kyoto temple</a>
                  </h3>

                  <p className="card-text"> {data[2]} Properties</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      </>
      )}
    </div>
  );
}
