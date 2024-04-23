function estPalindrome(str: string): boolean {
   
    str = str.toLowerCase();
    
   
    str = str.replace(/[^a-z]/g, '');
    
   
    return str === str.split('').reverse().join('');
}

console.log(estPalindrome("radar")); 


function estPalindrome2(str) {

    str = str.toLowerCase();
    
    str = str.replace(/\s/g, '');
    

    let debut = 0;
    let fin = str.length - 1;

  
    while (debut < fin) {
      
        if (str[debut] !== str[fin]) {
            return false;
        }
        debut++;
        fin--;
    }

    
    return true;
}

console.log(estPalindrome("hello")) 
