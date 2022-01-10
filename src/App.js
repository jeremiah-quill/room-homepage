import Header from "./components/Header";
import Backdrop from "./components/Backdrop";
import useToggle from "./hooks/useToggle.js";
import SliderElement from "./components/SliderElement";

function App() {
	const [isNav, toggleIsNav] = useToggle(false);

	return (
		<div className="App">
			<Header toggleIsNav={toggleIsNav} isNav={isNav} />
			<Backdrop isBackdrop={isNav} />
			<SliderElement />
			<div className="bottom-container">
				<img
					className="about-dark"
					src="images/image-about-dark.jpg"
					alt="furniture"
				/>
				<div className="about main-content-group">
					<h3>about our furniture</h3>
					<p className="gray-text">
						Our multifunctional collection blends design and function to suit
						your individual taste. Make each room unique, or pick a cohesive
						theme that best expresses your interests and what inspires you. Find
						the furniture pieces you need, from tranditional to contemporary
						styles and anything in between. Product specialists are available to
						help you create your dream space.
					</p>
				</div>
				<img
					className="about-light"
					src="images/image-about-light.jpg"
					alt="furniture"
				/>
			</div>
		</div>
	);
}

export default App;
