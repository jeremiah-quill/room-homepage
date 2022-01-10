function Header(props) {
	const { toggleIsNav, isNav } = props;

	return (
		<header>
			<button onClick={toggleIsNav} className="hamburger-menu">
				<img src="images/icon-hamburger.svg" alt="hamburger menu" />
			</button>

			<h1 className="title">room</h1>
			<nav className={isNav ? "main-nav nav-open" : "main-nav"}>
				<button onClick={toggleIsNav} className="close-nav">
					<img src="images/icon-close.svg" alt="close menu icon" />
				</button>

				<ul>
					<li>
						<a href="#">home</a>
					</li>
					<li>
						<a href="#">shop</a>
					</li>
					<li>
						<a href="#">about</a>
					</li>
					<li>
						<a href="#">contact</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
