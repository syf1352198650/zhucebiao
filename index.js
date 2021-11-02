var c=0,limit=3;
function doCheck(obj) { 
    obj.checked?c++:c--; 
    if(c>limit){
	    obj.checked=false;
	    swal("最多选3个");
	    c--; 
    }
}