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
    if (symmctr == 1) result += "антисимметричная ";
    else result += "симметричная ";

    //Транзитивность
    

    //Вывод
    document.getElementById("output").innerHTML = result;
}