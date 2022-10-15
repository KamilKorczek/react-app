import styles from './NavBar.module.scss';
import 'font-awesome/css/font-awesome.min.css';

const NavBar = () => {

  return (
    <nav className={styles.navBar}>
        <div className={styles.navBarWrapper}>
          <div>
            <a href='/'>
              <span className='fa fa-th-list'></span>
            </a> 
          </div>

          <div>
            <a href='/'>Home</a>
            <a href='/favorite'>Favorite</a>
            <a href='/about'>About</a>
          </div>
        </div>
    </nav>
  );
}

export default NavBar;