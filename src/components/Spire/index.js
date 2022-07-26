// == Import: npm
import Header from 'src/components/Header';
import FindStation from 'src/components/FindStation';
import HowItWorks from 'src/components/HowItWorks';
// Styles
import './spire.scss';
import '@fontsource/aileron';

// == Composant
function Spire() {
  return (
    <div className="spire">
      <Header />
      <FindStation />
      <HowItWorks />
      <h1>Newsletter bandeau</h1>
      <h1>Footer</h1>
    </div>
  );
}

// == Export
export default Spire;
