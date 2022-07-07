// == Import: npm
import Header from 'src/components/Header';
import Slider from 'src/components/Slider';
// Styles
import './spire.scss';
import '@fontsource/aileron';

// == Composant
function Spire() {
  return (
    <div className="spire">
      <Header />
      <Slider />
      <h1>Newsletter bandeau</h1>
      <h1>Footer</h1>
    </div>
  );
}

// == Export
export default Spire;
