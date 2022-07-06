// == Import : npm
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import logo from 'src/assets/img/logo/logo-v1.png';
import AppBar from '@mui/material/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Search from '@material-ui/icons/Search';
import {
  Toolbar,
  Container,
  Hidden,
  IconButton,
  InputAdornment,
  SwipeableDrawer,
  List,
  ListItem,
  TextField,
} from '@mui/material';
import { changeSearch } from 'src/actions/stations';

// Styles
import './nav.scss';
import 'src/assets/fonts/Aileron-Heavy.otf';

// == Composant
function Nav() {
  const dispatch = useDispatch();

  // Link's array
  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Stations', href: '/' },
    { name: 'Partenaires', href: '/' },
    { name: 'Contact', href: '/' },
    { name: 'Mon compte', href: '/' },
  ];

  const handleChangeSearch = (value) => {
    dispatch(changeSearch(value));
  };

  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <Toolbar className="header">
        <Container maxWidth="md" className="header">
          <div className="header-bar">
            <div className="header__logo">
              <img src={logo} alt="logo" className="header__logo--image" />
              <h1 className="header__logo--title">Spire</h1>
            </div>
            {/* Desktop Nav */}
            <div className="header__searchbar">
              <TextField
                className="header__searchbar--input"
                placeholder="Rechercher une station"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Search />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
                onChange={(event) => handleChangeSearch(event.target.value)}
              />
            </div>
            <div className="header-bar__links">
              <Hidden mdDown>
                {navLinks.map((item) => (
                  <NavLink key={item.name} to={item.href} className="gutter-links">{item.name}</NavLink>
                ))}
                {/* {isLogged && (
                  <NavLink key="ajout de Spot" to="/ajout-spot" className="gutter-links">Ajout de spot</NavLink>
                )} */}
                {/* Menu component with connexion pop-up */}
                {/* <AccountConnect handleLogout={handleLogout} /> */}
              </Hidden>
            </div>
            {/* Button of hamburger menu */}
            <Hidden mdUp>
              <IconButton onClick={() => setOpen(true)}>
                <MenuIcon className="header-bar__button" />
              </IconButton>
            </Hidden>
          </div>
        </Container>
      </Toolbar>
      {/* End of Desktop Nav */}

      {/* Mobile Nav */}
      <div className="burger">
        <SwipeableDrawer
          anchor="right"
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
        >
          {/* Close button of the burger nav */}
          <div className="burger__top-nav">
            <div className="burger__close-button">
              <IconButton onClick={() => setOpen(false)}>
                <CloseIcon />
              </IconButton>
            </div>
            {/* Links of top nav burger */}
            <List>
              {navLinks.map((item) => (
                <ListItem key={item.name} className="burger__links">
                  <NavLink
                    to={item.href}
                    onClick={() => setOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                </ListItem>
              ))}
              {/* {isLogged && (
                <ListItem key="ajout de Spot" className="burger__links">
                  <NavLink to="/ajout-spot" onClick={() => setOpen(false)}>Ajout de spot</NavLink>
                </ListItem>
              )}
              {isLogged && (
                <ListItem className="burger__links burger__account">
                  <NavLink to="/profil" onClick={() => setOpen(false)}><img className="burger__account--image" src={userLogo} alt="user logo" />Mon Compte</NavLink>
                </ListItem>
              )} */}
            </List>
          </div>
          {/* Links of bottom burger nav */}
          <List>
            <ListItem className="burger__links burger__connect">
              {/* {isLogged && (
                <NavLink
                  to="/"
                  onClick={() => {
                    setOpen(false);
                    handleLogout();
                  }}
                >
                  <img className="burger__connect--image" src={userLogo} alt="user logo" />
                  Déconnexion
                </NavLink>
              )} */}
              {/* {!isLogged && (
                <NavLink to="/connexion" onClick={() => setOpen(false)}><img className="burger__connect--image" src={userLogo} alt="user logo" />Connexion</NavLink>
              )} */}
            </ListItem>
          </List>
        </SwipeableDrawer>
      </div>
      {/* End of Mobile Nav */}
    </AppBar>
  );
}

// == Export
export default Nav;
