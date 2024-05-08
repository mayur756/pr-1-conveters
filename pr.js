function distance(){
    let meter=parseInt(document.getElementById('inp-meter').value);
    let feet=meter*3.28;
    document.getElementById('op-feet').innerHTML='feet is:'+feet;
}
function feet(){
    let feet=parseInt(document.getElementById('imp-feet').value);
    let meter=feet*30.48;
    document.getElementById('op-meter').innerHTML='meter is:'+meter;
}
function km(){
    let meter=parseInt(document.getElementById('imp-meter').value);
    let km=meter/1000;
    document.getElementById('op-km').innerHTML='km is:'+km;
}
function ps(){
    let km=parseInt(document.getElementById('px-km').value);
    let feet=km*3281;
    document.getElementById('py-feet').innerHTML='feet is:'+feet;
}
function china(){
    let india=parseInt(document.getElementById('py-in').value);
    let china=india*0.086;
    document.getElementById('px-china').innerHTML='china currancy:'+china;
}
function japan(){
    let india=parseInt(document.getElementById('ps-in').value);
    let japan=india*1.86;
    document.getElementById('po-jy').innerHTML='japan currancy:'+japan;
}
function np(){
    let india=parseInt(document.getElementById('ae-in').value);
    let nepal=india*1.86;
    document.getElementById('ax-np').innerHTML='nepal currancy:'+nepal;
}
function fc(){
    let fc=parseInt(document.getElementById('inp-f').value);
    let cacial=(fc-32)*5/9;
    document.getElementById('px-c').innerHTML='cesciual is:'+cacial;
}
function fy(){
    let fc=parseInt(document.getElementById('inp-c').value);
    let cacial=(fc*9/5)+32;
    document.getElementById('px-f').innerHTML='cesciual is:'+cacial;
}
function kel(){
    let fj=parseInt(document.getElementById('op-fah').value);
    let fah=((fj-273)+32)*1.8;
    document.getElementById('op-kel').innerHTML='faherthint is:'+fah;
}
function ces(){
    let fj=parseInt(document.getElementById('op-ces').value);
    let fah=fj+273;
    document.getElementById('j-kel').innerHTML='kalevin is:'+fah;
}
function mb(){
    let mb=parseInt(document.getElementById('y-mb').value);
    let gb=mb*0.01;
    document.getElementById('x-gb').innerHTML='GB is:'+gb;
}
function gb(){
    let mb=parseInt(document.getElementById('y-gb').value);
    let gb=mb*1000;
    document.getElementById('x-mb').innerHTML='MB is:'+gb;
}
function tb(){
    let mb=parseInt(document.getElementById('y-tb').value);
    let gb=mb*931.32;
    document.getElementById('op-gb').innerHTML='GB:'+gb;
}
