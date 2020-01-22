
function isPalindromes(s) {
    console.log("string input");
    console.log(s);

    var count = Math.round(s.length/2);
    for(let i=0;i < count;i++) {
        if(s[i] !== s[s.length-1-i]) return false;
    }
    return true;

}
document.getElementById("b").addEventListener("click",function(){ 
    var source = document.getElementById("text_id").value;
    console.log("source value is");
    console.log(source);
    var result = source.split(' ').join('');
    console.log("result value is");
    console.log(result);
    var lowValue = result.toLowerCase();
    var upperValue = result.toUpperCase();
 
    console.log("upper value is");
    console.log(upperValue);
    var res = "";
    for(var i=0; i<lowValue.length;i++){
        if(lowValue[i] != upperValue[i])
            res += lowValue[i];
    }
    console.log("res value is");
    console.log(res);
    if(isPalindromes(res)) {
        console.log("This is palindrom");
    } else {
        console.log("This is not palindrom");
    }
 })