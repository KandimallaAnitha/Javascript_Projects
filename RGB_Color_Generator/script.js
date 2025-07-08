const redslider = document.getElementById("redslider");
const greenslider = document.getElementById("greenslider");
const blueslider = document.getElementById("blueslider");

const redvaluespan = document.getElementById("redvalue");
const greenvaluespan = document.getElementById("greenvalue");
const bluevaluespan = document.getElementById("bluevalue");

const colorbox = document.getElementById("color-box");
const copybutton = document.getElementById("copybutton");
const inputtype = document.getElementById("inputtype");


redslider.addEventListener("input",updateColor);
greenslider.addEventListener("input",updateColor);
blueslider.addEventListener("input",updateColor);
copybutton.addEventListener("click",copyRGBValue);


function updateColor(){

    const redvalue = redslider.value;
    const greenvalue = greenslider.value;
    const bluevalue  = blueslider.value;



    const rgbColor = `rgb(${redvalue},${greenvalue},${bluevalue})`;
    //console.log(rgbColor);

    colorbox.style.backgroundColor = rgbColor;

    redvaluespan.textContent = redvalue;
    greenvalue.textContent = greenvalue;
    bluevalue.textContent = bluevalue;

    inputtypergbvalue.textContent = rgbColor;



}

updateColor()







function copyRGBValue(){

    const redvalue = redslider.value;
    const greenvalue = greenslider.value;
    const bluevalue  = blueslider.value;

    const rgbColor = `rgb(${redvalue},${greenvalue},${bluevalue})`;

    navigator.clipboard.writeText(rgbColor)
       .then(()=>{
         alert("RGB Color value copied to clipbord:" +rgbColor);
       })
       .catch((error)=>{
        console.error("Failed to copy RGB Values",error)
       });

}