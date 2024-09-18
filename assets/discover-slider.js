const discoverSliders = document?.querySelectorAll(".discover-section");

discoverSliders?.forEach((item) => {
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
        slides: { perView: 3.85, spacing: 10 },
      },
    },
    slides: { perView: 1.52 },
  });
});
