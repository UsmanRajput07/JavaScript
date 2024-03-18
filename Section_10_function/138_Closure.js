function Parentfunction (){
    let counter =0;
  return function (){
      counter ++
      console.log(counter)
  }
}
const increment = Parentfunction();
increment();
increment();
