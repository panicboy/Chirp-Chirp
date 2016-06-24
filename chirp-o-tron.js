function multiChirp(num){
  if(num > 1){
    return 'Chirp ' + multiChirp(--num);
  }
  return 'Chirp';
}


console.log('multiChirp: ', multiChirp(5));