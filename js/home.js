$(function () {
    $('#demoButton').on('click', function () {
        $('#demoText').text('jQuery is working!');
    });
});
const accordionItems =
    document.querySelectorAll(
        '.footer-accordion-item'
    );
accordionItems.forEach(item => {
    const header =
        item.querySelector(
            '.footer-accordion-header'
        );
    header.addEventListener('click', () => {
        accordionItems.forEach(otherItem => {

            if (otherItem !== item) {

                otherItem.classList.remove('active');
            }
        });
        item.classList.toggle('active');
    });

});
//AUTO SCROLL CARD SLIDER
const cardSlider =
    document.querySelector(
        '.modern-card-grid'
    );

let cardScrollAmount = 0;
function autoScrollCards() {
    if (window.innerWidth <= 1200) {
        cardScrollAmount += 320;
        if (
            cardScrollAmount >=
            cardSlider.scrollWidth -
            cardSlider.clientWidth
        ) {
            cardScrollAmount = 0;
        }
        cardSlider.scrollTo({
            left: cardScrollAmount,
            behavior: 'smooth'
        });
    }

}
setInterval(autoScrollCards, 3000);

const productSlider = document.querySelector('.products-slider');
if (window.innerWidth < 992) {
    let autoScroll;
    const startAutoScroll = () => {
        autoScroll = setInterval(() => {
            const cardWidth =
                productSlider.querySelector('.product-card').offsetWidth + 18;
            if (
                productSlider.scrollLeft + productSlider.clientWidth
                >=
                productSlider.scrollWidth - 5
            ) {

                productSlider.scrollTo({
                    left: 0,
                    behavior: 'smooth'
                });

            } else {
                productSlider.scrollBy({
                    left: cardWidth,
                    behavior: 'smooth'
                });
            }
        }, 3000);

    };
    startAutoScroll();
    productSlider.addEventListener('touchstart', () => {
        clearInterval(autoScroll);
    });
    productSlider.addEventListener('touchend', () => {
        clearInterval(autoScroll);
        startAutoScroll();
    });
}
