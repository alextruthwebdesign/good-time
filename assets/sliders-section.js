const slidersSection = document?.querySelectorAll(".sliders-section");

const handleTagsSlider = (slider) => {
  let mouseDown = false;
  let startX, scrollLeft;

  const startDragging = (e) => {
    mouseDown = true;
    startX = e.pageX - slider?.offsetLeft;
    scrollLeft = slider?.scrollLeft;
  };

  const stopDragging = (e) => {
    mouseDown = false;
  };

  const move = (e) => {
    e.preventDefault();
    if (!mouseDown) {
      document
        ?.querySelectorAll("a")
        ?.forEach((item) => (item.style.pointerEvents = "auto"));
      return;
    }
    document
      ?.querySelectorAll("a")
      ?.forEach((item) => (item.style.pointerEvents = "none"));
    const x = e?.pageX - slider?.offsetLeft;
    const scroll = x - startX;
    slider.scrollLeft = scrollLeft - scroll;
  };

  slider.addEventListener("mousemove", move, false);
  slider.addEventListener("mousedown", startDragging, false);
  slider.addEventListener("mouseup", stopDragging, false);
  slider.addEventListener("mouseleave", stopDragging, false);
};

const handleImageSlider = (sliderElement) => {
  const sliderEl = sliderElement;

  const slider = new KeenSlider(sliderEl, {
    breakpoints: {
      "(min-width: 430px)": {
        slides: { perView: 1.8 },
      },
      "(min-width: 745px)": {
        slides: { perView: 2.8 },
      },
      "(min-width: 865px)": {
        slides: { perView: 3.3 },
      },
      "(min-width: 1145px)": {
        slides: { perView: 4.6 },
      },
    },
    slides: { perView: 2.2 },
  });
};

slidersSection?.forEach((item) => {
  const topTagsSlider = item?.querySelector(".text-top-slide");
  const topBottomSlider = item?.querySelector(".text-bottom-slide");
  const topImageSlider = item?.querySelector(".top-image-slider");
  const bottomImageSlider = item?.querySelector(".bottom-image-slider");
  handleTagsSlider(topTagsSlider);
  handleTagsSlider(topBottomSlider);
  handleImageSlider(topImageSlider);
  handleImageSlider(bottomImageSlider);
});
