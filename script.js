function mainjsfunc() {
    var result = "";
    //Создание и заполнение матрицы чекбоксов
    var matrix = new Array(6);
    for (let i = 0; i < 6; i++) matrix[i] = new Array(6);
    for (let i = 1; i < 7; i++) {
        for (let j = 1; j < 7; j++) {
            matrix[i - 1][j - 1] = document.getElementById("cb" + i + j);
        }
    }

    //Рефлексивность
    var refctr = 0;
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
            if (matrix[i][j].checked && i == j) refctr++;
        }
    }
    if (refctr == 6) result += "рефлективная ";
    else result += "антирефлективная ";

    //Симметричность
    var symmctr = 0;
    for (let i = 0; i < 6; i++) {
        for (let j = i + 1; j < 6; j++) {
            if (i != j && ((matrix[i][j].checked && !matrix[5 - i][5 - j].checked) || (!matrix[i][j].checked && matrix[5 - i][5 - j].checked))) {
                symmctr++;
                break;
            }
        }
    }
    if (symmctr > 0) result += "антисимметричная ";
    else result += "симметричная ";

    //Транзитивность
    var trans = 0;
    for (let i = 0; i < 6; i++) {
        for (let j = i + 1; j < 6; j++) {
            if (matrix[i][j].checked && i != j) {
                for (let jj = i + 2; jj < 6; jj++) {
                    if (matrix[j][jj].checked && matrix[i][jj].checked) trans = 1;
                    if (matrix[j][jj].checked && !matrix[i][jj].checked) {
                        trans = -1;
                        break;
                    }
                }
            }
        }
    }
    for (let i = 5; i >= 0; i--) {
        for (let j = i - 1; j >= 0; j--) {
            if (matrix[i][j].checked && i != j) {
                for (let jj = i - 2; jj >= 0; jj--) {
                    if (matrix[j][jj].checked && matrix[i][jj].checked) trans = 1;
                    if (matrix[j][jj].checked && !matrix[i][jj].checked) {
                        trans = -1;
                        break;
                    }
                }
            }
        }
    }
    if (trans > 0) result += "транзитивная"
    else result += "антитранзитивная"

    //Вывод
    document.getElementById("output").innerHTML = result;
}