var container = document.getElementById('container');
var wrongCount = 0;
 
window.onload = function () {
    container.textContent = add_new_chars(3);
};
 
function add_new_chars(x, exact = false) {
    var n = exact ? x : Math.floor(Math.random() * x) + 1;
    var str = "";
    for (let i = 0; i < n; i++) {
        str += String.fromCharCode(97 + Math.floor(Math.random() * 26));
    }
    return str;
}
 
window.addEventListener("keyup", function (e) {
    var firstChar = container.textContent.charAt(0);
 
    if (e.key === firstChar) {
        container.textContent = container.textContent.substring(1);
        wrongCount = 0;
        container.textContent += add_new_chars(3); // 正確：加 1～3
    } else {
        wrongCount++;
        container.textContent += add_new_chars(3); // 錯誤：加 1～3
        if (wrongCount >= 3) {
            container.textContent += add_new_chars(6, true); // 第三次錯誤：固定加 6
            wrongCount = 0;
        }
    }
});