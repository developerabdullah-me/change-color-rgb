window.onload =() =>{
 main();

};

function main() {
    const root=document.getElementById('root')
    const btn=document.getElementById('change')
    btn.addEventListener('click',function(){
        const c=changeRgb();
        root.style.backgroundColor=c;
    })
};

 function changeRgb(){
    const red=Math.floor(Math.random() * 255);
    const blue=Math.floor(Math.random() * 255);
    const yllow=Math.floor(Math.random() * 255);
   return `rgb(${red},${blue},${yllow})`

};
