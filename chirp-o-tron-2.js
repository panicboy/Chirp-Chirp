function multiChirp(num, word){
  if(num > 1){
    return word + ' ' + multiChirp(--num, word);
  }
  return word;
}


console.log('multiChirp(5, \'woof!\'): ', multiChirp(5, 'woof'));