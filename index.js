const app = "I don't do much."

function Arrays(){
  window.kittens = ['Milo', 'Otis', 'Garfield'];
}

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}