function clicked_1() {
    let val = "1";
    document.getElementById("text-area").value += val;
}
function clicked_2() {
    let val = 2;
    document.getElementById("text-area").value += val;
}
function clicked_3() {
    let val = 3;
    document.getElementById("text-area").value += val;
}
function clicked_4() {
    let val = 4;
    document.getElementById("text-area").value += val;
}
function clicked_5() {
    let val = 5;
    document.getElementById("text-area").value += val;
}
function clicked_6() {
    let val = 6;
    document.getElementById("text-area").value += val;
}
function clicked_7() {
    let val = 7;
    document.getElementById("text-area").value += val;
}
function clicked_8() {
    let val = 8;
    document.getElementById("text-area").value += val;
}
function clicked_9() {
    let val = 9;
    document.getElementById("text-area").value += val;
}
function clicked_0() {
    let val = 0;
    document.getElementById("text-area").value += val;
}
function clicked_bkp() {
    document.getElementById("text-area").value = null;
}
var result;
var method = null;
var num1, num2;
function clicked_plus() 
{
    var temp = document.getElementById("text-area").value
    console.log (temp)
    document.getElementById("text-area").value += "+"
    method = "+"
}
function clicked_minus() 
{
    var temp = document.getElementById("text-area").value
    console.log (temp)
    document.getElementById("text-area").value += "-"
    method = "-"
}
function clicked_product() 
{
    var temp = document.getElementById("text-area").value
    console.log (temp)
    document.getElementById("text-area").value += "X"
    method = "X"
}
function clicked_division() 
{
    var temp = document.getElementById("text-area").value
    console.log (temp)
    document.getElementById("text-area").value += "/"
    method = "/"
}
function clicked_result() {
    if (method === "+") 
    {
        let input = document.getElementById("text-area").value
        let inputarray = input.split("+")
        num1 = parseFloat(inputarray[0])
        num2 = parseFloat(inputarray[1])
        var total = num1 + num2
        document.getElementById("text-area").value = total;
    }
    if (method === "-") 
    {
        let input = document.getElementById("text-area").value
        let inputarray = input.split("-")
        num1 = parseFloat(inputarray[0])
        num2 = parseFloat(inputarray[1])
        var total = num1 - num2
        document.getElementById("text-area").value = total;
    }
    if (method === "X") 
    {
        let input = document.getElementById("text-area").value
        let inputarray = input.split("X")
        num1 = parseFloat(inputarray[0])
        num2 = parseFloat(inputarray[1])
        var total = num1 * num2
        document.getElementById("text-area").value = total;
    }
    if (method === "/") 
    {
        let input = document.getElementById("text-area").value
        let inputarray = input.split("/")
        num1 = parseFloat(inputarray[0])
        num2 = parseFloat(inputarray[1])
        var total = num1 / num2
        document.getElementById("text-area").value = total;
    }
    // document.getElementById("text-area").value = result;
}