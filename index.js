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
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(){
  Arrays();
  kittens.shift();
  return kittens;
}

function appendKitten(name){
  Arrays();
  
}