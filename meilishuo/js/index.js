//alert("欢迎浏览首页弹窗");
/*var name="欢迎浏览"
alert("name");
document.write("name")

var bn1=true;
var bn2=0;
alert(true==1)*/

/*var a=false;
var b=1;
alert(true==1)*/
/*document.write("<table cellpadding='0' cellspacing='1' border='0'> ");
for(var m=1;m<=9;m++){
	document.write("<tr>");
	for(var n=1;n<=m;n++){
		document.write("<td style='width:80px;height:35px;border:1px solid red;'>"+m+"×"+n+"="+m*n+"</td>");
		}
		document.write("</tr>");
	}
document.write("</table>");*/

/*document.write("<table cellpadding='0' cellspacing='1' border='0'> ");
var m=1;
while(m<=10){
	document.write("<tr>");
	var n=1;
	while(n<=m){
		document.write("<td style='width:80px;height:35px;border:1px solid red;'>"+m+"×"+n+"="+m*n+"</td>")
		n++
		}
	
	m++
	document.write("</tr>");
	}
document.write("</table>");





var m=1;
do{
	var n=1;
	do{
		document.write(n+"*"+m+"="+m*n+"&nbsp;&nbsp;")
		n++
		}while(n<m)
		document.write("<br/>")
	m++
	}while(m<9)
	
*/
/*
var dt=new Date();
	document.write(dt.getFullYear()+"<br/>");//年份
	document.write((dt.getMonth()+1)+"<br/>");//月份  获取时要+1
	document.write(dt.getDate()+"<br/>");    //得到日期
	
	document.write(dt.getHours()+"<br/>");   //小时
	document.write(dt.getMinutes()+"<br/>"); //分钟

	document.write(dt.getSeconds()+"<br/>");//秒钟
*/
var dt=new Date();
datetimes=
	dt.getFullYear()+"年"
	+(dt.getMonth()+1)+"月"
	+dt.getDate()+"日"
	+dt.getHours()+":"
	+dt.getMinutes();
