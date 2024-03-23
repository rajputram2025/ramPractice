// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// Input: strs = ["eat","tea","tan","ate","nat","bat","bike"]
// Output: [["bat"],["bike"],["nat","tan"],["ate","eat","tea"]]


var strs = ["eat","tea","tan","ate","nat","bat","bike"];

function anagrams(strs){
    var resultKey = [];
var result = [];
 
for(let i =0;i< strs.length;i++){
    var tmp = strs[i].split("");
    
    var newtmp = tmp.sort(function(a,b){
        return a + b;
    });

    

    var tmp1 = newtmp.join("");

    console.log("hello i am there",newtmp);

    let findKey = resultKey.find(function(a){
          if(a == tmp1){
             return true;
          } else {
            return false;
          }
    });

    if(findKey == false){
        resultKey.push(tmp1);
        if(!result[tmp1]){
            result[tmp1] = strs[i];
        } else {
            result[tmp1]  = [...strs[i]]
        }
         
    }
}

return result;
}


console.log(anagrams(strs));