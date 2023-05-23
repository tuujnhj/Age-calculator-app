const day =document.querySelector(".day2")
const month=document.querySelector(".month2")
const years=document.querySelector(".years2")
const btncalcul=document.querySelector(".cc")
const result=document.querySelector(".result")


btncalcul.addEventListener("click",()=>{
   const d= new Date()
   console.log(d);
    const getday =d.getDate()
    const getyears=d.getFullYear()
    const getmonth=d.getMonth()+1
    const resultyears= getyears-years.value
  let resultcalcul=`  <div class="result">
   <p class="yr">Years:<span>${getyears-years.value}</span></p> 
   <p  class="mt">Month:<span>${getmonth-month.value}</span> </p>
   <p  class="dy">DAY:<span>${getday-day.value}</span></p>
</div>`
   result.innerHTML=resultcalcul
    if(month.value>getmonth){
        resultcalcul=`  <div class="result">
        <p class="yr">Years:<span>${getyears-years.value}</span></p> 
        <p  class="mt">Month:<span>${month.value-getmonth}</span> </p>
        <p  class="dy">DAY:<span>${getday-day.value}</span></p>
     </div>`
        result.innerHTML=resultcalcul
    }else{
     
        if(day.value>getday ){
            resultcalcul=`  <div class="result">
            <p class="yr">Years:<span>${getyears-years.value}</span></p> 
            <p  class="mt">Month:<span>${getmonth-month.value}</span> </p>
            <p  class="dy">DAY:<span>${getday-day.value}</span></p>
         </div>`
            result.innerHTML=resultcalcul
        }
    }






   
    if(month.value>getmonth){
        console.log(month.value-getmonth);
    }
    else{
        console.log(getmonth-month.value)
    }
    if(years.value>getyears){
      const resultyears= years.value-getyears
      
   }
    else{
     const resultyears= getyears-years.value
       
       
    }
   
   
})