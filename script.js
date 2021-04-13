function mainjsfunc() {
    const digitcheck = /^\d+$/;
    let n = document.getElementById("n").value;
    let flag = document.getElementById("selector").value;
    if (digitcheck.test(n) == 0) {
        alert("Неверный ввод!");
        return;
    }
    
}