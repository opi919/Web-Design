
function clock(){
    const  d= new Date()
    const c=d.toLocaleTimeString();
    document.querySelector('#hours').textContent=c;
}
clock();
setInterval(clock,1000);