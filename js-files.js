const grid = document.querySelector('.grid');
let n = 32;

for(let i = 0; i<n; i++) {
    row = document.createElement('div');
    row.classList.add('row');
    grid.appendChild(row);
    for(let j = 0; j<n; j++) {
        let elem = document.createElement('div');
        elem.classList.add('elem');

        elem.addEventListener('mouseover', () => {
            elem.classList.add('hov');
        });
        row.appendChild(elem);
    }
}

reset = document.querySelector('.reset');
reset.addEventListener('click', () => {
    document.querySelectorAll('.hov').forEach((e) => e.classList.remove('hov'));
});

