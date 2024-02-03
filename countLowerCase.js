let obj={
    methodOne:function countvowels(x){
      let count=0;
      let str="abouse"
      let vowels="aeiou"
      for(let i=0;i<str.length;i++){
        for(let j=0;j<vowels.length;j++){
          if(str[i]==vowels[j]){
            count++
          }
        }
      }
      console.log(count)
    }
    methodTwo:function convertvowelsIn(x){
      let str="#"
      let vowels="aeiou"
      let bag=""
      for(let i=0;i<str.length;i++){
        for(let j=0;j<vowels.length;j++){
          if(str[i]==vowels[j]){
            bag=bag+str[i]
          }
        }
      }
      console.log(bag)
    }
  }
  console.log(obj.methodOne())
  console.log(obj.methodTwo())