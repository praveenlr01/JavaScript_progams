/*to generate a random numbers start(*end) */
let num = Math.floor(Math.random() * 10)+1;
console.log(num);


/*to get random character from a string */
let myName="praveen";
console.log(myName.charAt(Math.floor(Math.random * myName.length)));


/*to get user name from email address */
function getNameFromEmail(email) {
  r = email.slice(0, email.indexOf("@"));
  res = "";
  for (let i = 0; i < r.length; i++) {
    if ((Number(r[i]) % 2)!=(1 || 0) && r[i]!=0) {
      res += r[i];
    }
  }
  return res;
}
console.log(getNameFromEmail("praveenkumar1055@gmail.com"));


/*to create a capitalize() function using arrow function */
const toCapitalize = (_name) => {
  return _name[0].toUpperCase() + _name.slice(1).toUpperCase();
};
console.log(toCapitalize("praveen"));
