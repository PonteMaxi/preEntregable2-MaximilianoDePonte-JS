let show = document.querySelector('.num');

let increment = 0;

document.addEventListener('click', e => {
    // aumenta y resta el valor
    if (e.target.matches('.increase')) {
        increment++;
        show.innerHTML = increment;
    } else if (e.target.matches('.decrease')) {
        increment--;
        show.innerHTML = increment;
    } else if (e.target.matches('.reset')) {
        increment = 0;
        show.innerHTML = increment;
    }

    if (increment < 0) {
        show.style.color = 'red';
    } else {
        show.style.color = 'green';
    }

    if (increment == 0) show.style.color = "black"
})

