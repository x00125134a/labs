function add(val1, val2){
    return(val1+val2);
}

function checkNums(num1, num2){
    if(num1 > num2){
        return false;
    }else if(num2 > num1){
        return true
    }else{
        return "Values are equal"
    }
}

function wordList(word1, word2, word3, word4){
    return word1+", " +word2+", " +word3+", " +word4
}

function convertMinsToHours(mins){
    var hours;
    hours = mins/60;
    return hours;
}

function areaAndPer(radius){
    var area;
    var per;
    area = Math.PI * (Math.pow(radius, 2));
    per = 2 * Math.PI * radius;
    return "Area is: "+area+ " and per is: " +per;
}

function convertMiles(distance, unit){
    if(unit == "miles"){
        return distance * 1.609344;
    }else{
        return distance * 0.62137;
    }
}

function bmi(kg,m){
    var bmi = (kg/m)/m
    return "BMI is: " + bmi
}

function dayAndMonth(date){
    var d = new Date(date);
    return d
}

function checkPalindrom(str) {
    var word = str.length;
    for(var i = 0; i < 1 / 2; i++){
        if (str.charAt(i) !== str.charAt(word - 1 - i)) {
            return false;
        }
    }
    return true;
}


function calc(val1, op, val2){
    if (op == "+"){
        return val1 + val2;
    }else if(op == "-"){
        return val1 - val2;
    }else if (op == "*"){
        return val1 * val2;
    }else if (op == "/"){
        return val1 / val2;
    }else{
        return "invalid operator"
    }
}
