// == Import : npm
import Nav from 'src/components/Header/Nav';
import './header.scss';

// == Composant
function Header() {
  return (
    <div className="header">
      logo
      searchbar
      <Nav />
    </div>
  );
}

// == Export
export default Header;
