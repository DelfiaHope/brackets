module.exports = function check(str, bracketsConfig) {
  const OPEN_BRACKETS = ['(', '{' , '['];
  const allBrackets = ['(', '{' , '[', ')', '}', ']']
  const BRACKETS_PAIR = {
    [')']: '(',
    ['}']: '{',
    [']']: '[',
  }

  function checkArray(bracketsConfig){
 
    let stack = [];
    for (let i = 0; i < bracketsConfig.length; i ++) {
      let newStr = bracketsConfig[i].join('')
      for (let j = 0; j < newStr.length; j ++) {
        let currentSymbol = newStr[j];
        console.log(currentSymbol)
         if(allBrackets.includes(currentSymbol)){
            if (OPEN_BRACKETS.includes(currentSymbol)) {
              stack.push(currentSymbol);
            } else {
              if (stack.length === 0) {
                return false;
              } 
      
              let topElement = stack[stack.length - 1];
      
              if (BRACKETS_PAIR[currentSymbol] === topElement) {
                stack.pop();
              } else {
                return false;
              }
             }
      }else{ j++}
      }
    }
    return stack.length === 0
    
  }
   function checkStr(str){
    let stack = [];
       for (let j = 0; j < str.length; j ++) {
            let currentSymbol = str[j];
            console.log(currentSymbol)
            if(allBrackets.includes(currentSymbol)){
                if (OPEN_BRACKETS.includes(currentSymbol)) {
                  stack.push(currentSymbol);
                } else {
                  if (stack.length === 0) {
                    return false;
                  } 
          
                  let topElement = stack[stack.length - 1];
          
                  if (BRACKETS_PAIR[currentSymbol] === topElement) {
                    stack.pop();
                  } else {
                    return false;
                  }
                }
            }else{ j++}
       }
       return stack.length === 0
  }
  
  if (checkStr(str) && checkArray(bracketsConfig)){
    return true
  } else{
    return false
  } 
  
}

