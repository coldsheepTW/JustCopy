window.onload = timeConvert();

function timeConvert() {
  
  var post_times = document.getElementsByClassName("post-time");

  for ( var i = 0; i < post_times.length; i++ ) {
    var timeString = post_times[i].innerHTML;
    var timeStamp = getDateTimeStamp(timeString);
    var result = getDateDiff(timeStamp);
    post_times[i].innerHTML = result;
  }
}

function getDateTimeStamp(dateStr){
 return Date.parse(dateStr.replace(/-/gi,"/"));
}

function getDateDiff(dateTimeStamp){
    var minute = 1000 * 60;
    var hour = minute * 60;
    var day = hour * 24;
    var halfamonth = day * 15;
    var month = day * 30;
    var now = new Date().getTime();
    var diffValue = now - dateTimeStamp;
    if(diffValue < 0){return;}
    var monthC =diffValue/month;
    var weekC =diffValue/(7*day);
    var dayC =diffValue/day;
    var hourC =diffValue/hour;
    var minC =diffValue/minute;
    if(monthC>=1){
        result="" + parseInt(monthC) + "月前";
    }
    else if(weekC>=1){
        result="" + parseInt(weekC) + "週前";
    }
    else if(dayC>=1){
        result=""+ parseInt(dayC) +"天前";
    }
    else if(hourC>=1){
        result=""+ parseInt(hourC) +"小時前";
    }
    else if(minC>=1){
        result=""+ parseInt(minC) +"分鐘前";
    }else
    result="剛剛";
    return result;
}
