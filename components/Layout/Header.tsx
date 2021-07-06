import classes from './Header.module.scss';

const Header = () => {
	return (
		<header className={classes.header}>
			<div className={classes.logo}>Logo</div>
			<nav className={classes.nav}>
				<ul>
					<li>Home</li>
					<li>Products</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
