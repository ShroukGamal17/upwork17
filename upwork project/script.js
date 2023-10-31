
    const carousal = document.querySelector(".SecSixCarousel");
    const leftBtn = document.querySelector(".LeftArrow");
    const rightBtn = document.querySelector(
        ".RightArrow"
    );
    const list = document.querySelector(".reviews");

    const onClickRight = () => {
        carousal.scrollTo(list.scrollWidth, 0);
        rightBtn.style.opacity = 0;
        leftBtn.style.opacity = 1;
    };

    const onClickLeft = () => {
        carousal.scrollTo(-list.scrollWidth, 0);
        rightBtn.style.opacity = 1;
        leftBtn.style.opacity = 0;
    };
