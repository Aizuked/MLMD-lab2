function mainjsfunc() {

    var n = document.getElementById("arr").value.split("\n").length;
    var arr = document.getElementById("arr").value.split("\n");
    var matrix = new Array(n);
    for (let i = 0; i <= n; i++) {
        matrix[i] = new Array(n);
    }
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j < n; j++) {
            matrix[i][j] = new Array(n);
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            matrix[i][j] = Number(arr[i].split(" ")[j]);
        }
    }
    console.log(matrix);

    var result = "";
    //Рефлексивность
    var refctr = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] > 0 && i == j) refctr++;
        }
    }
    if (refctr == n) result += "рефлективная ";
    else result += "антирефлексивная ";

    //Симметричность
    var symmctr = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (i != j && ((matrix[i][j] > 0 && !(matrix[n - 1 - i][n - 1 - j] > 0)) || (!(matrix[i][j] > 0) && matrix[n - 1 - i][n - 1 - j] > 0))) {
                symmctr++;
                break;
            }
        }
    }
    if (symmctr > 0) result += "кососимметричная ";
    else result += "симметричная ";

    //Транзитивность
    var trans = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (matrix[i][j] > 0 && i != j) {
                for (let jj = i + 2; jj < n; jj++) {
                    if (matrix[j][jj] > 0 && matrix[i][jj] > 0) trans = 1;
                    if (matrix[j][jj] > 0 && !(matrix[i][jj] > 0)) {
                        trans = -1;
                        break;
                    }
                }
            }
        }
    }
    for (let i = n - 1; i >= 0; i--) {
        for (let j = i - 1; j >= 0; j--) {
            if (matrix[i][j] > 0 && i != j) {
                for (let jj = i - 2; jj >= 0; jj--) {
                    if (matrix[j][jj] > 0 && matrix[i][jj] > 0) trans = 1;
                    if (matrix[j][jj] > 0 && !(matrix[i][jj] > 0)) {
                        trans = -1;
                        break;
                    }
                }
            }
        }
    }
    if (trans > 0) result += "транзитивная"
    else result += "антитранзитивная"

    console.log(matrix);
    //Вывод
    document.getElementById("output").innerHTML = result;
}