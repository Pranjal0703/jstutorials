let btn = document.querySelector('button');
btn.addEventListener("click", function(){
    let heading = document.querySelector('h1');
    heading.innerText = getRandomColor();
    console.log(" color updated");

    let colorBlock = document.querySelector('.box');
    colorBlock.style.backgroundColor = getRandomColor();
});


function getRandomColor(){
    let red = Math.floor(Math.random() *255);
    let green = Math.floor(Math.random() *255);
    let blue = Math.floor(Math.random() *255);

    let color = `rgb(${red}, ${green}, ${blue} )`;
    return color;

}