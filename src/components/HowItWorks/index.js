// == Import : npm
import { Carousel } from 'react-responsive-carousel';
import './howItWorks.scss';
import navigate from 'src/assets/img/images/animation-1-resize.png';
import choose from 'src/assets/img/images/icon-snowpark-resize.png';
import book from 'src/assets/img/images/icon-materiel-resize.png';

// == Composant
function HowItWorks() {
  return (
    <div className="howItWorks">
      <h1>Comment ça marche ?</h1>
      <Carousel
        // autoPlay
        centerMode
        centerSlidePercentage={100}
        infiniteLoop
        showArrows={false}
        showIndicators
        showStatus={false}
        swipeable
        showThumbs={false}
      >
        <div>
          <h2>1</h2>
          <img src={navigate} alt="naviguate-on-website" />
          <p className="legend">Naviguez sur notre carte, entrez vos critères et découvrez les stations qui vous correspondent.</p>
        </div>
        <div>
          <h2>2</h2>
          <img src={choose} alt="choose-a-station" />
          <p className="legend">Découvrez virtuellement la station qui vous correspond, puis réservez vos activités.</p>
        </div>
        <div>
          <h2>3</h2>
          <img src={book} alt="book-your-trip" />
          <p className="legend">Tout est prêt, vous n'avez plus qu'à réserver et profiter de la montagne !</p>
        </div>
      </Carousel>
    </div>
  );
}

// == Export
export default HowItWorks;
