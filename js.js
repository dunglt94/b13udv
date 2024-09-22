let a = [];
let n = "";
let str = " Tôi là Pepega!!!"
a = str.split('');
console.log(a);
function typeTextarea () {
    let t = document.getElementById("textarea").value;
    let j = t.length;
    if (j > 0) {
        for (let i = 1; i <= j; i++) {
            n+= a[i];
            if (i == 16) {
                t = "";
                n = "";
            }
        }
    }
    document.getElementById("textarea").value = n;
    n = "";
    setTimeout(typeTextarea, 1);
}