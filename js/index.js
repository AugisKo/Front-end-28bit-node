console.log('It works!!!!');

 /*A hero is on his way to the castle to complete his mission. 
 However, he's been told that the castle is surrounded with a couple of powerful dragons! 
 each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. 
 Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

Return True if yes, False otherwise :) 

*/
function getDrinkByProfession(param){
    var paramText = param.toLowerCase();
    var capWords = paramText.split(" ");
    for (let i = 0; i < capWords.length; i++) {
        capWords[i] = capWords[i][0].toUpperCase() + capWords[i].substr(1);
    }    
    var coctail = capWords.join(" ");

    if (coctail === 'Jabroni') {
        return "Patron Tequila";
    };
    if (coctail === 'School Counselor') {
        return "Anything with alcohol";
    };
    if (coctail === 'Programmer') {
        return "Hipster Craft Beer";
    };
    if (coctail === 'Bike Gang Member') {
        return "Moonshine";
    };
    if (coctail === 'Rapper') {
        return "Cristal";
    };
    if (coctail === 'Politician') {
        return "Your tax dollars";
    };
    return "Beer";
}

console.log(getDrinkByProfession("jabrOni"), '->', "Patron Tequila");
console.log(getDrinkByProfession("scHOOl counselor"), '->',  "Anything with Alcohol");
console.log(getDrinkByProfession("prOgramMer"), '->',  "Hipster Craft Beer");
console.log(getDrinkByProfession("bike ganG member"), '->',  "Moonshine");
console.log(getDrinkByProfession("poLiTiCian"), '->',  "Your tax dollars");
console.log(getDrinkByProfession("rapper"), '->',  "Cristal");
console.log(getDrinkByProfession("pundit"), '->',  "Beer");
console.log(getDrinkByProfession("Pug"), '->',  "Beer");