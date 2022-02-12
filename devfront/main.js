var div = document.getElementById('div');
var body = document.body;


div.onclick = (e) => {
    div.style.transform = `translate(100px, 100px)`
    console.log('lala');
}
div.onmouseout = () => {
    div.style.transform = `translate(0, 0)`;
}

