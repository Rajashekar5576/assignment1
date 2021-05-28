const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`Enter the virus varient: `, (str) => {

    rl.question(`Enter the number of people: `, (n) => {

        rl.question(`Enter the names of people: `, (ppl) => {
      
        var arr = ppl.split(' ');

        function test(str,n,arr){
        var virus = str
        var blood = arr
        for(k=0;k<blood.length;k++){   
        var i = 0;
            for(j=0;j<virus.length;j++){
                if(blood[k].charAt(i)==virus.charAt(j)){
                i++
                }
            } 
            if(i == blood[k].length)
            console.log(`${blood[k]} is Positive`)
            else
            console.log(`${blood[k]} is negative`)
        }
    }
      test(str,n,arr);

        rl.close();
    });
      
});
});



