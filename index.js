const app = "I don't do much."

function Arrays(){
  window.kittens = ['Milo', 'Otis', 'Garfield'];
}

function destructivelyAppendKitten(name){
  Arrays();
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name){
  Arrays();
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(){
  Arrays();
  kittens.shift(kittens.length-1);
  return kittens;
}