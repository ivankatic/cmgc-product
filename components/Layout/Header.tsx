import classes from './Header.module.css';

const Header = () => {
    return <header className={classes.header}>
        <div className={classes.logo}>Logo</div>
        <nav className={classes.nav}>
            <a href="#">Products</a>
        </nav>
    </header>
}

export default Header;