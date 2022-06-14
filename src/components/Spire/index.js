// == Import: npm
import Header from 'src/components/Header';
// Styles
import './spire.scss';
import '@fontsource/aileron';

// == Composant
function Spire() {
  return (
    <div className="spire">
      <Header />
      <h1>Main</h1>
      <h1>Newsletter bandeau</h1>
      <h1>Footer</h1>
    </div>
  );
}

// == Export
export default Spire;
