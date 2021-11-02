function checkAll(){
    var x = document.getElementById("name").value;
    if (x==null || x=="")
    {
      
     swal("姓名必须填写");
      return false;
    }
    else
    {
        console.log(x);
    }
    var a=document.getElementById("num").value
    if (a==null || a=="")
    {
      
     swal("学号必须填写")
      return false;
    }
    else
    {
        console.log(a);
    }
    var s=document.getElementById("xueyuan").value
    if (s==null || s=="")
    {
      
     swal("请填写学院")
      return false;
    }
    else
    {
        console.log(s);
    }  
    var b=document.getElementById("zhuanye").value
    if (b==null || b=="")
    {
      
     swal("请填写专业")
      return false;
    }
    else
    {
        console.log(b);
    }
    var aFlag=false;
    var aFlag=document.getElementsByClassName('gender');
    for (var i = 0; i < aFlag.length; i++) {
      
        if (aFlag[i].checked) {
        aFlag = true;
            if(i==0){
                console.log("男");
            }
            else{
                console.log("女");
            }
        break;
        }
}
if (aFlag == false) {
    swal('性别不能为空，请选择！')
    document.getElementsByClassName('gender').focus();
    return false;
    }
    var e=document.getElementById("changhao").value
    if (e==null || e=="")
    {
      
     swal("请填写长号")
      return false;
    }
    else
    {
        console.log(e);
    }
    var w=document.getElementById("email").value
    if (w==null || w=="")
    {
      
     swal("请填写短号")
      return false;
    }
    else
    {
        console.log(w);
    }
    var r=document.getElementById("QQ").value
    if (r==null || r=="")
    {
      
     swal("请填写QQ")
      return false;
    }
    else
    {
        console.log(r);
    }
}
