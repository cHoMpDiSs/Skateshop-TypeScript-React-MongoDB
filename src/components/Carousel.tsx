import React, { Component } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Swipe from "react-easy-swipe";

interface CarouselState {
  currentSlide: number;
  paused: boolean;
}

const images: string[] = [
  "https://susaf.s3.us-west-1.amazonaws.com/static/pants/bb-black-mint.jpg",
  "https://susaf.s3.us-west-1.amazonaws.com/static/skateboards/baker.jpg",
  "https://susaf.s3.us-west-1.amazonaws.com/static/shirts/carpet-dino.jpg",
  "https://susaf.s3.us-west-1.amazonaws.com/static/pants/bb-blue.jpg",
  "https://susaf.s3.us-west-1.amazonaws.com/static/skateboards/frog-1.jpg",
  "https://susaf.s3.us-west-1.amazonaws.com/static/shirts/carpet-classic.jpg",
  "https://susaf.s3.us-west-1.amazonaws.com/static/skateboards/quasi-puzzle.jpg",
];

class Carousel extends Component<{}, CarouselState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      currentSlide: 0,
      paused: false,
    };
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.paused === false) {
        let newSlide =
          this.state.currentSlide === images.length - 1
            ? 0
            : this.state.currentSlide + 1;
        this.setState({ currentSlide: newSlide });
      }
    }, 3000);
  }

  nextSlide = () => {
    let newSlide =
      this.state.currentSlide === images.length - 1
        ? 0
        : this.state.currentSlide + 1;
    this.setState({ currentSlide: newSlide });
  };

  prevSlide = () => {
    let newSlide =
      this.state.currentSlide === 0
        ? images.length - 1
        : this.state.currentSlide - 1;
    this.setState({ currentSlide: newSlide });
  };

  setCurrentSlide = (index: number) => {
    this.setState({ currentSlide: index });
  };

  render() {
    return (
      <div className="mt-28 h-auto pt-mb-">
        <div className="max-w-lg h-100% w-100% flex overflow-hidden relative justify-center">
          <AiOutlineLeft
            onClick={this.prevSlide}
            className="absolute left-0 text-3xl inset-y-1/2 text-black cursor-pointer"
          />
          <Swipe onSwipeLeft={this.nextSlide} onSwipeRight={this.prevSlide}>
            {images.map((slide, index) => {
              return (
                <img
                  src={slide}
                  alt="This is a carousel slide"
                  key={index}
                  className={
                    index === this.state.currentSlide
                      ? "block w-100% h-auto"
                      : "hidden" 
                  }
                  onMouseEnter={() => {
                    this.setState({ paused: true });
                  }}
                  onMouseLeave={() => {
                    this.setState({ paused: false });
                  }}
                />
              );
            })}
          </Swipe>
          <div className="absolute w-full flex justify-center bottom-0">
            {images.map((element, index) => {
              return (
                <div
                  className={
                    index === this.state.currentSlide
                      ? "h-2 w-2 bg-blue-700 rounded-full mx-2 mb-2 cursor-pointer"
                      : "h-2 w-2 bg-white rounded-full mx-2 mb-2 cursor-pointer"
                  }
                  key={index}
                  onClick={() => {
                    this.setCurrentSlide(index);
                  }}
                ></div>
              );
            })}
          </div>
          <AiOutlineRight
            onClick={this.nextSlide}
            className="absolute right-0 text-3xl inset-y-1/2 text-black cursor-pointer"
          />
        </div>
      </div>
    );
  }
}

export default Carousel;
