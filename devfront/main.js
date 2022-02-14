var toggleBtn = document.getElementsByClassName('toggle-btn')[0];
var navContent = document.getElementsByClassName('nav-content')[0];

toggleBtn.addEventListener('click', () => {
    navContent.classList.toggle('active');
});

var div = document.getElementById('div');
var developers = document.getElementsByClassName('developers')[0];
var dev = document.getElementsByClassName('dev');

console.log(`x=${window.innerWidth}, y=${window.innerHeight}`)


var x = []
for (let i = 0; i< Object.keys(dev).length; i++) {
    x.push(developers.children[i])
}

x.map((i) => {
    i.onmousemove = (e) => {
        i.style.transform= `translate(${e.layerX}px, ${e.layerY}px)`;
        console.log(e.layerY)
    }
    // i.onmouseout = () => {
    //     i.style.transform = `translate(0, 0)`;
    // }
})