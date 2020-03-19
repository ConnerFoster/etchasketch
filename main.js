const grid = document.getElementById('grid');
for (i=0; i<256; i++){
    let square = document.createElement('div');
    square.classList.add('squares');
    grid.appendChild(square);
}
