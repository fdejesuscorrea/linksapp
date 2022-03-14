function visit(e){
    var link = e.innerHTML;
    window.open(link, '_blank');
    e.className="visitedbutton";
}
function copy(e){
    var copy = e.parentElement.firstChild;
    navigator.clipboard.writeText(copy.innerHTML);
}
let input=document.querySelector('#file');

input.addEventListener('change',()=>{
    let files =input.files;
    if(files.length==0) return;
    const file = files[0];
    let reader= new FileReader();
    reader.onload=(e)=>{
        const file = e.target.result;
        const lines = file.split(/\r\n|\n/);
        console.log(lines.join('\n'));
    }
    reader.onerror =(e)=>alert(e.target.error.name);
    reader.readAsText(file);
}

);
