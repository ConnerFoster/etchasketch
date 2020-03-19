const grid = document.getElementById('grid');
const resetButton = document.querySelector("#reset");
const resButton = document.querySelector("#resolution");
let size = 32;
createSquare(size);

function createSquare(size) {
for (i=0; i<(size*size); i++){
    let square = document.createElement('div');
    square.classList.add('squares');
    grid.appendChild(square);

}
const divs = document.querySelectorAll(".squares")
divs.forEach(square => {
    square.addEventListener('mouseenter', ()=> {
        square.style.backgroundColor = "black";
    })
});


}




resetButton.addEventListener("click", reset);
function reset(){
    location.reload();
}

function changeRes() {

}








