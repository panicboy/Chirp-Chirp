function multiChirp(num){
  if(num > 0){
    return 'Chirp ' + multiChirp(--num);
  }
  return '';
}


console.log('multiChirp: ', multiChirp(5));