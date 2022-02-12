var div = document.getElementById('div');
var dadeDiv = document.getElementsByClassName('d-1')[0];
var childe = document.getElementsByClassName('childeOfDade');


div.onmousemove = (e) => {
    div.style.transform = 
    `translate(${e.layerX}px, ${e.layerY}px)`
    console.log('lala');
}
div.onmouseout = () => {
    div.style.transform = `translate(0, 0)`;
}
var x = []
for (let i = 0; i< Object.keys(childe).length; i++) {
    x.push(dadeDiv.children[i])
}

x.map((i) => {
    i.onmousemove()
})