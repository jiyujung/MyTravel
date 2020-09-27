function getWorldTime(tzOffset) { // 24시간제
    var now = new Date();
    var tz = now.getTime() + (now.getTimezoneOffset() * 60000) + (tzOffset * 3600000);
    now.setTime(tz);
   
    var s =
      leadingZeros(now.getFullYear(), 4) + '년 ' +   //숫자 앞에 0 넣기
      leadingZeros(now.getMonth() + 1, 2) + '월 ' +
      leadingZeros(now.getDate(), 2) + '일 ' +
   
      leadingZeros(now.getHours(), 2) + '시 ' +
      leadingZeros(now.getMinutes(), 2) + '분 ' +
      leadingZeros(now.getSeconds(), 2) + '초';
   
    return s;
  }
   
  function leadingZeros(n, digits) {
    var zero = '';
    n = n.toString();
   
    if (n.length < digits) {
      for (i = 0; i < digits - n.length; i++)
        zero += '0';
    }
    return zero + n;
  }