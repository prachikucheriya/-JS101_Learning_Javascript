let arr = [2,3,4,5,6]

 let evenArr = arr.filter(function(ele){
   return ele%2 === 0
})
console.log(evenArr)
let sum=0
for(let i=0;i<evenArr.length;i++)
  {
    sum=sum+evenArr[i]
  }
console.log(sum)
let avg=sum/evenArr.length
console.log(avg)