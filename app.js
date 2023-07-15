var a="";
function get_input(value){
    a += value;
    document.getElementById("top").innerHTML = a;
}
function submit(){
    var expr=a;
    var out =eval(expr);
    document.getElementById("top").innerHTML = out;
    a=out;
}
function clr(){
    a="0";
    document.getElementById("top").innerHTML = a;
    a= "";
}