const bg = document.querySelector('.card');
const copyBtn = document.querySelector('#copy');
const output = document.querySelector('#output-text');
const outputColor1 = document.querySelector('.color1');
const outputColor2 = document.querySelector('.color2');
const outputp1 = document.querySelector('#color1');
const outputp2 = document.querySelector('#color2');
const picker = document.querySelector('#Pick');
const pickerbg = document.querySelector('.picker');
const copyEvent = document.querySelector('#copyEvent')



const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
}
let firstColor = randomColor();
let secondColor = randomColor();

outputColor1.style.backgroundColor = firstColor;
outputColor2.style.backgroundColor = secondColor;
outputp1.textContent = firstColor;
outputp2.textContent = secondColor;



const grad = `(253deg,${firstColor},${secondColor})`;
 let copier = `linear-gradient${grad}`
bg.style.backgroundImage =`linear-gradient${grad}`;
output.textContent = `${copier}`


copyBtn.addEventListener('click',()=>{
   
    navigator.clipboard.writeText(copier)
    copyBtn.textContent = 'Copied';
    copyEvent.textContent = copier;
})

picker.addEventListener('click',()=>{
    const eyeDropper = new EyeDropper();
    eyeDropper
    .open()
    .then((result) => {
     navigator.clipboard.writeText(result.sRGBHex)
      picker.style.backgroundColor = result.sRGBHex;
    })
    .catch((e) => {
      console.log(e)
    });
})