// == Import : npm
import Nav from 'src/components/Header/Nav';
import './header.scss';

// == Composant
function Header() {
  return (
    <div className="header">
      {/* insert searchbar here */}
      <Nav />
    </div>
  );
}

// == Export
export default Header;
