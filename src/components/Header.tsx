import logo from '../assets/logo.png';
import { CartIcon, HeartIcon, OrdersIcon, SearchIcon, UserIcon } from './Icons';
import '../styles/components/Header.scss';

const ACTIONS = [
  { id: 'orders', label: 'Meus pedidos', icon: <OrdersIcon size={32} /> },
  { id: 'favorites', label: 'Favoritos', icon: <HeartIcon size={32} /> },
  { id: 'account', label: 'Minha conta', icon: <UserIcon size={32} /> },
  { id: 'cart', label: 'Carrinho', icon: <CartIcon size={32} /> },
];

function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <a className="header__logo" href="/" aria-label="Econverse - página inicial">
          <img src={logo} alt="Econverse" width={139} height={42} />
        </a>

        <form className="header__search" role="search" onSubmit={(e) => e.preventDefault()}>
          <label className="visually-hidden" htmlFor="header-search">
            Buscar produtos
          </label>
          <input
            id="header-search"
            className="header__search-input"
            type="search"
            placeholder="O que você está buscando?"
          />
          <button className="header__search-button" type="submit" aria-label="Buscar">
            <SearchIcon size={26} />
          </button>
        </form>

        <ul className="header__actions">
          {ACTIONS.map(({ id, label, icon }) => (
            <li key={id}>
              <button className="header__action" type="button" aria-label={label} title={label}>
                {icon}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;
