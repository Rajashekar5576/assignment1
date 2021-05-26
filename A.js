function test(input){
var virus = input.split("/n")[0]
  var number = input.split("/n")[1]
  var blood = input.split("/n")[2].split("")
    for(k=0;k<blood.length;k++){   
  var i = 0;
    for(j=0;j<virus.length;j++){
    if(blood(k).charAt(i)==virus.charAt(j)){
      i++
    }
  } if(i == blood.length)
      console.log(`${blood[k]} is Positive`)
  else
      console.log(`${blood[k]} is negative`)
}
}


