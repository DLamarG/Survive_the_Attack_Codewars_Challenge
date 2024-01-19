function hasSurvived(attackers, defenders){
    let survOfDef = 0;
     let survOfAtt = 0;
     let sumAtt = 0;
     let sumDef = 0;
   
      for (let i = 0; i < attackers.length; i++) {
        sumAtt += attackers[i];
      }
   
      for (let i = 0; i < defenders.length; i++) {
        sumDef += defenders[i];
     }
     let lengthToUse = attackers.length > defenders.length ? attackers.length : defenders.length
   
     for (let i = 0; i < lengthToUse; i++) {
       if (attackers[i] > defenders[i] || defenders[i] === undefined) {
         survOfAtt += 1;
       }
       else if (attackers[i] < defenders[i] || attackers[i] === undefined) {
         survOfDef += 1;
       }
     }
   
     if (survOfDef > survOfAtt) {
       return true
     } else if (survOfAtt > survOfDef) {
       return false
     } else if (survOfAtt === survOfDef) {
       if (sumAtt > sumDef) {
         return false
       } else {
         return true
       }
     }
   }

   

console.log(hasSurvived([2, 9, 9, 7], [1, 1, 3, 8])) // --> false
console.log(hasSurvived([1, 3, 5, 7], [2, 4, 6, 8])) // --> true
console.log(hasSurvived([10, 10, 1, 1], [4, 4, 7, 7])) // --> true