import { NavLink } from 'react-router-dom';
import css from './Appbar.module.css';

const setActive = ({ isActive }) =>
  isActive ? { color: '#3C4ADF' } : { textDecoration: 'none', color: 'black' };

export const AppBar = () => {
  return (
    <header className={css.header}>
      <nav className={css.navigation}>
        <NavLink style={setActive} to="/">
          Home
        </NavLink>
        <NavLink style={setActive} to="/tweets">
          Tweets
        </NavLink>
      </nav>
    </header>
  );
};
