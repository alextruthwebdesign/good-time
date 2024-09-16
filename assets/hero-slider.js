const heroSliders = document?.querySelectorAll(".hero");
heroSliders?.forEach((item) => {
  const sliderEl = item?.querySelector(".keen-slider");
  const prevBtn = item?.querySelector(".slider-btns .prev");
  const nextBtn = item?.querySelector(".slider-btns .next");
  const slider = new KeenSlider(sliderEl, {}, [
    (slider) => {
      let timeout;
      let mouseOver = false;
      function clearNextTimeout() {
        clearTimeout(timeout);
      }
      function nextTimeout() {
        clearTimeout(timeout);
        if (mouseOver) return;
        timeout = setTimeout(() => {
          slider.next();
        }, 2000);
      }
      slider.on("slideChanged", (e) => {
        const dots = [...item?.querySelectorAll(".dots .dot")];
        const slide = slider?.track?.details?.rel;

        dots?.forEach((dot, idx) => {
          dot?.classList?.remove("active");
          if (idx === slide) {
            dot?.classList?.add("active");
          }
        });
      });
      slider.on("created", (e) => {
        const dots = item?.querySelector(".dots");
        const slides = e?.slides;
        slides?.forEach((el, idx) => {
          const dot = document?.createElement("div");
          dot.classList.add("dot");
          if (idx === 0) {
            dot.classList.add("active");
          }
          dot.addEventListener("click", () => slider.moveToIdx(idx));
          dots.appendChild(dot);
        });

        // slider.container.addEventListener("mouseover", () => {
        //   mouseOver = true;
        //   clearNextTimeout();
        // });
        // slider.container.addEventListener("mouseout", () => {
        //   mouseOver = false;
        //   nextTimeout();
        // });
        // nextTimeout();
      });
      //   slider.on("dragStarted", clearNextTimeout);
      //   slider.on("animationEnded", nextTimeout);
      //   slider.on("updated", nextTimeout);
    },
  ]);
  nextBtn?.addEventListener("click", function () {
    slider?.next();
  });
  prevBtn?.addEventListener("click", function () {
    slider?.prev();
  });
});
