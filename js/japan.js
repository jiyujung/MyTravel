function printTime() {
    var clock = document.getElementById("clock");
    var now = new Date();
    
    clock.innerHTML = now.getFullYear() + "년 " +    //innerHTML : 요소 내에 포함 된 HTML을 가져오거나 수정
    (now.getMonth()+1) + "월 " +
    now.getDate() + "일 " +
    now.getHours() + "시 " +
    now.getMinutes() + "분 " +
    now.getSeconds() + "초";

    setTimeout("printTime()", 1000);
}

window.onload = function() {
    printTime();
};

function calNow(){
    cal.result_multiply.value = calc_multiply(cal.money.value);
}
function calc_multiply(money){
    // 곱하기
    return money * 10;
}