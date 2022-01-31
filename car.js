window.onload = function () {
    // The debounce function receives our function as a parameter
    const debounce = (fn) => {

        // This holds the requestAnimationFrame reference, so we can cancel it if we wish
        let frame;

        // The debounce function returns a new function that can receive a variable number of arguments
        return (...params) => {

            // If the frame variable has been defined, clear it now, and queue for next frame
            if (frame) {
                cancelAnimationFrame(frame);
            }

            // Queue our function call for the next frame
            frame = requestAnimationFrame(() => {

                // Call our function and pass any params we received
                fn(...params);
            });

        }
    };


    // Reads out the scroll position and stores it in the data attribute
    // so we can use it in our stylesheets
    const storeScroll = () => {
        let perc = 1 + Math.ceil(window.scrollY / (document.body.clientHeight - window.innerHeight) * 100) / 10;
        if (perc > 1) {
            // document.getElementById("pages__first").style.display = "block";
            document.documentElement.setAttribute('style', `--scrollpos: ${perc}`);
        } if (perc >= 4) {
            // document.documentElement.setAttribute('style', `--opendoor: 1`);
            // document.getElementById("pages__first").style.display = "none";
        }
    }

    // Listen for new scroll events, here we debounce our `storeScroll` function
    document.addEventListener('scroll', debounce(storeScroll), { passive: true });

    // Update scroll position for first time
    storeScroll();





    // scaleToGarage()

    // anime.js
    function scaleToGarage() {
        anime({
            targets: '.pages__first',
            scale: 3,

            duration: 4000,
            delay: 5000,
            easing: 'easeOutElastic(1, .8)',
            loop: false
        });
        // anime({
        //     targets: '.pages__first',
        //     easing: 'easeInOutQuad'
        // });
    }
}
