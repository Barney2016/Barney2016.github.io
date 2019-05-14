function say(){
var x = parseFloat(document.getElementById("input").value);
var y = 2;
if(x==y){
alert("richtig")
}
else{
alert("falsch")
};
};

function fibo(){
var x= parseInt(document.getElementById("feld1").value);
var a=0;
var b=1;
var y= 0;
for(var nr=1;nr<(x+1); nr++){
  y=a+b;
  if(nr==1)
  {
    document.write(y);
  }
  else{
    document.write(", " +y);
  };
  a=b;
  b=y;
};
};
