const container = document.querySelector('.outer-container');
const grid = document.querySelector('.grid');
const hoverEffect = document.querySelector('.hover-effect');

var mousein = false;

/** enable hover effect when mouse enters outer container */
container.addEventListener('mouseenter', (ev) => {
    hoverEffect.style.opacity = '100%'
    mousein = true
})
/** disable hover effect when mouse exits outer container */
container.addEventListener('mouseleave', (ev) => {
    hoverEffect.style.opacity = '0%'
    mousein = false;
})
/** move hover effect with cursor position */
container.addEventListener('mousemove', (ev) => {
    if (mousein) {
        //get x and y coordinates of mouse cursor
        let x = ev.clientX;
        let y = ev.clientY;
        //get x and y coorinates for grid
        let gridX = grid.getBoundingClientRect().left;
        let gridY = grid.getBoundingClientRect().top;
        //calculate  the radius of hover effect(assuming height and width are equal)
        let hoverSize= hoverEffect.offsetHeight/2;
        //calculate x and y position for hover effect in relation to outer container and mouse position
        hoverEffect.style.transform = "translate(" + (x - gridX-hoverSize) + "px," + (y - gridY-hoverSize) + "px)";
    }
})