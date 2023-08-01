import Plugin from 'src/plugin-system/plugin.class';

export default class ictthemeScrollSection extends Plugin {
    init() {
        this._ictThemeScroll();
    }

    _ictThemeScroll(){
        console.log('test');
        const anchorLinks = document.getElementById('ict-down-arrow');

        // anchorLinks.forEach(function(link)
        // {
        anchorLinks.addEventListener('click', function(event) {
                event.preventDefault();
                // const target = document.querySelector(anchorLinks.getAttribute('href'));

                // if (target) {
                    const targetTop = anchorLinks.getBoundingClientRect().top;
                    const startingY = window.pageYOffset;
                    const duration = 500;
                    let startTime = null;

                    function scrollAnimation(currentTime) {
                        if (!startTime) startTime = currentTime;
                        const timeElapsed = currentTime - startTime;
                        const progress = Math.min(timeElapsed / duration, 1);
                        const easeFunction = function(t) {
                            return t * (2 - t);
                        };
                        const easedProgress = easeFunction(progress);
                        const distance = targetTop - startingY;
                        window.scrollTo(0, startingY + distance * easedProgress);

                        if (timeElapsed < duration) {
                            requestAnimationFrame(scrollAnimation);
                        }
                    }

                    requestAnimationFrame(scrollAnimation);
                // }
            });
        // });
    }

}