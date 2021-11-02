function palindrome(str) {
  var Str=str.replace(/[^A-Za-z0-9]/g,'')
  
  console.log(Str)
  console.log(Array.from(Str).reverse().join('') ===Str)
 
  return Array.from(Str).reverse().join('') === Str
 
}



palindrome("A man, a plan, a canal. Panama");
