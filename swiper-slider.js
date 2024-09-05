    // new Swiper('[js-card-slider]', {
    //     loop: true;
    //     slidesPerView: 4,
    //     spaceBetween: 40,
    // });
    var swiper = new Swiper(".swiper-container", {
        slidesPerView: 4,
        centeredSlides: false,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
  
    //   var appendNumber = 4;
    //   var prependNumber = 1;
    //   document
    //     .querySelector(".prepend-2-slides")
    //     .addEventListener("click", function (e) {
    //       e.preventDefault();
    //       swiper.prependSlide([
    //         '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
    //         '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
    //       ]);
    //     });
    //   document
    //     .querySelector(".prepend-slide")
    //     .addEventListener("click", function (e) {
    //       e.preventDefault();
    //       swiper.prependSlide(
    //         '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
    //       );
    //     });
    //   document
    //     .querySelector(".append-slide")
    //     .addEventListener("click", function (e) {
    //       e.preventDefault();
    //       swiper.appendSlide(
    //         '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
    //       );
    //     });
    //   document
    //     .querySelector(".append-2-slides")
    //     .addEventListener("click", function (e) {
    //       e.preventDefault();
    //       swiper.appendSlide([
    //         '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
    //         '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
    //       ]);
    //     });
    