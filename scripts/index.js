window.onload=function(){

	  var row=10;
  var div,div1;
  var sense=document.getElementById("sense");
  for(var i=0;i<row;i++){
  	
  	div=document.createElement("div");
    div1=document.createElement("div");
  	div.style.width="600px";
  	div.style.height="1px";
  	div.style.position="absolute";
  	div.style.top=(600/row)/2+(600/row)*i+"px";
  	// div.style.left="0px";
  	div.style.background="rgb(34, 34, 34)";
  	div.style.zIndex="1";
  	sense.appendChild(div);
  	div1.style.height="600px";
  	div1.style.width="1px";
  	div1.style.position="absolute";
  	div1.style.left=(600/row)/2+(600/row)*i+"px";
  	// div1.style.top="0px";
  	div1.style.background="rgb(34, 34, 34)";
  	div1.style.zIndex="1";
  	sense.appendChild(div1);

  } 
    var timeid1;
    var minute=document.getElementById("minute");
    var miao=document.getElementById("miao");
     var minute1=document.getElementById("minute1");
    var miao1=document.getElementById("miao1");
    var ss,hh;
    var shijian=function(x,y){        
        clearInterval(timeid1);
        if(ss!=undefined&&hh!==undefined){
          console.log(ss.innerHTML);
            ss.innerHTML="00";
              console.log(ss.innerHTML);
            hh.innerHTML="01";
        }
        var aa=Number(x.innerHTML);
        var bb=Number(y.innerHTML);
        timeid1=setInterval(function(){
             ss=x,hh=y;
             aa--;
             if(aa<0){
                    bb--;
                    if(bb<0){
                        clearInterval(timeid1);
                        if(x.id=="miao1"){
                              alert("白方赢了");
                              location.reload();
                        }else{
                              alert("黑方赢了") ;
                              location.reload();
                        }              
                    }
                    y.innerHTML="0"+bb;
                    x.innerHTML=59;
                    aa=x.innerHTML;
              }else if(aa<10){
                     x.innerHTML="0"+aa;
              }else{
                     x.innerHTML=aa;
              }  

      },1000)    
    }
   // shijian(miao,minute);
  var sds=function(row){
 
  var el=document.getElementById("sense");
  
  for(var i=0;i<row;i++){
  	for(var j=0;j<row;j++){
     var ss=document.createElement("div");

  ss.setAttribute("class","block");
   ss.setAttribute("id",i+"-"+j);
  ss.style.width=Math.floor((600-row)/row)+"px";
  ss.style.height=Math.floor((600-row)/row)+"px";
  el.appendChild(ss);
  }
}  
}
 sds(row);
 var kaiguan=true;
 var zidian1={};
 var zidian2={};
 var t;
 var timeid;
 var blocks=document.getElementsByClassName("block");
 var pic1=document.getElementById("pic1");
 var pic2=document.getElementById("pic2");
 
   var panduan=function(id,dic){
   	var x=Number(id.split("-")[0]);
   	var y=Number(id.split("-")[1]);
   	var hang=1;
   	var tx, ty;
   	tx=x,ty=y;
   	while(dic[tx+"-"+(ty+1)]){hang++;ty++;}
   	tx=x;ty=y;
   	while(dic[tx+"-"+(ty-1)]){hang++;ty--;}
   	if(hang==5) return true;
   	
   	var lie=1;
   	var tx, ty;
   	tx=x,ty=y;
   	while(dic[(tx+1)+"-"+ty]){lie++;tx++;}
   	tx=x;ty=y;
   	while(dic[(tx-1)+"-"+ty]){lie++;tx--;}
   
   if(lie==5) return true;

   var zx=1;
   	var tx, ty;
   	tx=x,ty=y;
   	while(dic[(tx-1)+"-"+(ty+1)]){zx++;tx--;ty++;}
   	tx=x;ty=y;
   	while(dic[(tx+1)+"-"+(ty-1)]){zx++;tx++;ty--;}
   
   if(zx==5) return true;

     var yx=1;
   	var tx, ty;
   	tx=x,ty=y;
   	while(dic[(tx-1)+"-"+(ty-1)]){yx++;tx--;ty--;}
   	tx=x;ty=y;
   	while(dic[(tx+1)+"-"+(ty+1)]){yx++;tx++;ty++;}
   
   if(yx==5) return true;

    return false;
   }
 for(var i=0;i<blocks.length;i++){
	 blocks[i].onclick=function(){
	 	if(this.hasAttribute("aa")){return ;}
	 	// this.style.position="relative";
	 	this.style.boxShadow="0 3px 10px black";
	 	// this.style.zIndex="333";
	 		if(kaiguan){
          shijian(miao1,minute1);
	 		this.style.background="white";kaiguan=false;
	 		
	 		var id=this.getAttribute("id");
	 		zidian1[id]=true;
	 		if(panduan(id,zidian1)){alert("白色赢了")};
           
            }else{
               shijian(miao,minute);   
            	this.style  .background="black";kaiguan=true;
             
            	var id=this.getAttribute("id");
            	zidian2[id]=true;
            	if(panduan(id,zidian2)){alert("黑色赢了");}
            
            	
	 	   
	 	}
        this.setAttribute("aa","true");
	 	
	      // console.log(this.getAttribute("id"));
	 
 }

}
}