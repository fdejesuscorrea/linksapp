function visit(e){
    var link = e.getAttribute("link");
    window.open(link, '_blank');
    var last = document.querySelector(".lastvisitedbutton");
    if(last) last.className="visitedbutton";
    e.className="lastvisitedbutton";
}   
function copy(e){
    var copy = e.parentElement.firstChild;
    navigator.clipboard.writeText(copy.innerHTML);
}