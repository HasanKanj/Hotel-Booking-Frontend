import img1 from "../../../assets/beirut.jpg";
import img2 from "../../../assets/faraya.jpg";
import img3 from "../../../assets/Tyre.jpg";
import './Newcards.css'
export default function Newcards() {
  return (
    <div>
          <section className="popular" id="destination">
        <div className="containersss">

          <p className="section-subtitle">Uncover place</p>

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

              <p className="card-text">
                Fusce hic augue velit wisi ips quibusdam pariatur.
              </p>
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

              <p className="card-text">
                Fusce hic augue velit wisi ips quibusdam pariatur, iusto.
              </p>
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
                <a href="#">Japan</a>
              </p>

              <h3 className="h3 card-title">
                <a href="#">Kyoto temple</a>
              </h3>

              <p className="card-text">
                Fusce hic augue velit wisi ips quibusdam pariatur, .
              </p>
            </div>
          </div>
        </li>
      </ul>

</div>
</section>
    </div>
  );
}
