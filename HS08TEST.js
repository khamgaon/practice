var x=10, y=90;

tra = function(x,y){
  if(y-x>=0.5){
    if(x%5==0){
      console.log((y-x-0.5).toFixed(2));
    }else{
      console.log(y.toFixed(2));
    }
  }else{
    console.log(y.toFixed(2));
  }
}
tra(x,y);
