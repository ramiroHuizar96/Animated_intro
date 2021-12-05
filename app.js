let tl= gsap.timeline({
    scrollTrigger : {
        trigger: ".front-page",
        start: "top",
        end:"100%",
        scrub: true,
        pin: true,
    },
});

tl.fromTo(".front-page", {clipPath: 'circle(8%)'}, {clipPath: 'circle(75%)', duration: 3});

tl.fromTo('.icon', {scale: 0.8}, {scale: 0, opacity:0, duration: 1}, "-=3");

tl.fromTo('.title', {opacity: 0}, {opacity: 1, duration: 1});
tl.fromTo('.sub-title', {opacity: 0}, {opacity: 1, duration: 1});
