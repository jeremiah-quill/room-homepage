import { useState } from "react";

const useSlideshow = (initialVal = 0, slides = []) => {
	const [currentSlide, setCurrentSlide] = useState(initialVal);

	const nextSlide = () => {
		if (currentSlide === slides.length - 1) {
			setCurrentSlide(0);
		} else {
			setCurrentSlide(currentSlide + 1);
		}
	};

    const previousSlide = () => {
		if (currentSlide === 0) {
			setCurrentSlide(slides.length - 1);
		} else {
			setCurrentSlide(currentSlide - 1);
		}
    }

	return [currentSlide, nextSlide, previousSlide];
};

export default useSlideshow;