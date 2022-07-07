// == Import : npm
import './slider.scss';
import picto from 'src/assets/img/images/cercle-fleche-complet.png';

// == Composant
function Slider() {
  return (
    <div className="slider">
      <button type="button" className="slider__button">Trouvez votre station</button>
      <img alt="go-down-logo" className="slider__picto" src={picto} />
    </div>
  );
}

// == Export
export default Slider;
