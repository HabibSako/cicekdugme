function pozisyon(Uzerine_Gelinen,Gorunmesi_Istenen,Yol,arti_eksi)
{
  document.getElementById(Gorunmesi_Istenen).style.display="block";
  document.getElementById(Gorunmesi_Istenen).src=Yol;
  Uzerine_Gelinen.style.position="absolute";
  
if(navigator.appName.toLowerCase().indexOf("microsoft") != -1)
{
   getMouseLoc();
   if(arti_eksi=="+")document.getElementById(Gorunmesi_Istenen).style.posLeft=mouseLocation.x + 15; else document.getElementById(Gorunmesi_Istenen).style.posLeft=mouseLocation.x - 145;
   document.getElementById(Gorunmesi_Istenen).style.posTop=Uzerine_Gelinen.offsetTop + 18;
}
else
{
   getMouseLoc;
   if(arti_eksi=="+")document.getElementById(Gorunmesi_Istenen).style.left=String(Uzerine_Gelinen.offsetLeft+130)+"px"; else document.getElementById(Gorunmesi_Istenen).style.left=String(Uzerine_Gelinen.offsetLeft-130)+"px"
   document.getElementById(Gorunmesi_Istenen).style.top=Uzerine_Gelinen.offsetTop + 18 +"px";
}  
Uzerine_Gelinen.style.position="static";
}
function Point(x,y) {  this.x = x; this.y = y; }
mouseLocation = new Point(-500,-500);
function getMouseLoc(e)
{
  if(!document.all)  //NS
  {
    mouseLocation.x = e.pageX;
    mouseLocation.y = e.pageY;
  }
  else               //IE
  {
    mouseLocation.x = event.x + document.body.scrollLeft;
    mouseLocation.y = event.y + document.body.scrollTop;
  }
  return true;
}
//NS init:
if(document.layers){
 document.captureEvents(Event.MOUSEMOVE); document.onMouseMove = getMouseLoc; 
}
