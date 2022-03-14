function visit(e){
    var link = e.innerHTML;
    window.open(link, '_blank');
    e.className="visitedbutton";
}
function copy(e){
    var copy = e.parentElement.firstChild;
    navigator.clipboard.writeText(copy.innerHTML);
}
var fs =require("fs");