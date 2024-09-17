const productTags = document?.querySelectorAll(".products-slider");

productTags?.forEach((item) => {
  let mouseDown = false;
  let startX, scrollLeft;
  const slider = item.querySelector(".tags");

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
});

const productSliders = document?.querySelectorAll(".products-slider");
productSliders?.forEach((item) => {
  const sliderEl = item?.querySelector(".keen-slider");

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
        slides: { perView: 3.91 },
      },
    },
    slides: { perView: 1.45 },
  });
});
