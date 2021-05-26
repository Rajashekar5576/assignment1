// If input is passed as string, number and array.


function test(str,n,arr){
var virus = str
  var blood = arr
    for(k=0;k<blood.length;k++){   
  var i = 0;
    for(j=0;j<virus.length;j++){
    if(blood[k].charAt(i)==virus.charAt(j)){
      i++
    }
  } if(i == blood[k].length)
      console.log(`${blood[k]} is Positive`)
  else
      console.log(`${blood[k]} is negative`)
}
}
