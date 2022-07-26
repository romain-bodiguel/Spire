// == Import : npm
import './findStation.scss';
import picto from 'src/assets/img/images/cercle-fleche-complet.png';

// == Composant
function FindStation() {
  return (
    <div className="findStation">
      <button type="button" href="/" className="findStation__button">Trouvez votre station</button>
      <img alt="go-down-logo" className="findStation__picto" src={picto} />
    </div>
  );
}

// == Export
export default FindStation;
