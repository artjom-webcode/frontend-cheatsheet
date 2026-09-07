const scrollers = document.querySelectorAll('.scroller');


/* только для дублирования */
function addAmination() {
    scrollers.forEach(scroller => {
        scroller.setAttribute('data-animated', true);

        const scrollerInner = scroller.querySelector('.scroller__inner');
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach(item => {
            const duplicatedItem = item.cloneNode(true);
            scrollerInner.appendChild(duplicatedItem)
        })
    });
};
addAmination();


