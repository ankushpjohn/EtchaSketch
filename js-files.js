const grid = document.querySelector('.grid');
let n = 32;
createGrid(n);

function createGrid(n) {
    for (let i = 0; i < n; i++) {
        row = document.createElement('div');
        row.classList.add('row');
        grid.appendChild(row);
        for (let j = 0; j < n; j++) {
            let elem = document.createElement('div');
            elem.classList.add('elem');

            elem.addEventListener('mouseover', () => {
                elem.classList.add('hov');
            });
            row.appendChild(elem);
        }
    }
}

const reset = document.querySelector('.reset');
reset.addEventListener('click', () => document.querySelectorAll('.hov').forEach((e) => e.classList.remove('hov')));

resize = document.querySelector('input');
resize.addEventListener('input', (e) => {
    n = e.target.value;
    while (grid.hasChildNodes()) {
        grid.removeChild(grid.firstChild);
    }
    createGrid(n);
});