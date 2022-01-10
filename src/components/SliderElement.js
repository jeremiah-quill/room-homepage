import {useState} from "react";
import data from "../data/data";

function SliderElement(props) {
	const [currentSlide, setCurrentSlide] = useState(data.sliders[0]);
	const [previousSlide, setPreviousSlide] = useState(data.sliders[0]);
	const [slideStateCurrent, setSlideStateCurrent] = useState("");
	const [slideStatePrevious, setSlideStatePrevious] = useState("");

	const goNextSlide = () => {
		if (currentSlide.index === data.sliders.length - 1) {
			setPreviousSlide(currentSlide);
			setCurrentSlide(data.sliders[0]);
		} else {
			setPreviousSlide(currentSlide);
			setCurrentSlide(data.sliders[currentSlide.index + 1]);
		}

		setSlideStateCurrent("animate__animated animate__fadeIn");
		setSlideStatePrevious("animate__animated animate__fadeOut");
		setTimeout(() => {
			setSlideStateCurrent("");
			setSlideStatePrevious("");
		}, 500);
	};

	const goPrevSlide = () => {
		if (currentSlide.index === 0) {
			setPreviousSlide(data.sliders[0]);
			setCurrentSlide(data.sliders[data.sliders.length - 1]);
		} else {
			setPreviousSlide(currentSlide);
			setCurrentSlide(data.sliders[currentSlide.index - 1]);
		}

		setSlideStateCurrent("animate__animated animate__fadeIn");
		setSlideStatePrevious("animate__animated animate__fadeOut");
		setTimeout(() => {
			setSlideStateCurrent("");
			setSlideStatePrevious("");
		}, 500);
	};

	return (
		<div className="slider-element top-container">
			<div className="hero-image fade">
				<div style={{ position: "relative" }}>
					<img
						style={{ position: "absolute" }}
						src={currentSlide.image}
						className={slideStateCurrent}
					/>
					<img src={previousSlide.image} className={slideStatePrevious} />
				</div>
				<div className="slideshow-buttons">
					<button onClick={goPrevSlide} className="slide-left">
						<img
							src="images/icon-angle-left.svg"
							alt="navigate slideshow left"
						/>
					</button>
					<button onClick={goNextSlide} className="slide-right">
						<img
							src="images/icon-angle-right.svg"
							alt="navigate slideshow right"
						/>
					</button>
				</div>
			</div>
			<section className="main-content-group">
				<h2 className="main-content">{currentSlide.title}</h2>

				<p className="gray-text">{currentSlide.content}</p>
				<div className="shop-now-button-group">
					<button className="shop-now">shop now</button>
					<img src="images/icon-arrow.svg" alt="arrow icon" />
				</div>
			</section>
		</div>
	);
}

export default SliderElement;
