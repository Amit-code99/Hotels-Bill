
let menu={
    Samosa:"15",
    Chai:"10", 
    Jalebi:"20", 
    Kachori:"12", 
    Lassi:"30", 
    pakodi:"25",
    Khasta:"30" ,
    PaneerHalf:"70",
    PannerFull:"120",
    Jalebi:    "120",
    Namkeen: "120",
    Vadapaw: "30"
    

}
let myOrders={

}

 function personalInfo(){
    let name=document.querySelector('#name');
    let phone=document.querySelector('#phone');
    let email=document.querySelector('#email');
    document.querySelector('#yourname').innerHTML=name.value
    document.querySelector('#yourphone').innerHTML=phone.value
    document.querySelector('#youremail').innerHTML=email.value
 }
 let btn=document.querySelector('#btn')
function menus(){
    let item=document.querySelector('#items');
    let text="";
    for(let x in menu){
        text +=`

         <div class="form-group form-second">
                <label for="quantity">${x}(Rs${menu[x]})</label>
                <input type="text" id="${x}" placeholder="Enter Quantity" >
            </div>
         `;
       // console.log(x)

    }
    item.innerHTML=text
}

 function getBill(){
    let allorder=document.querySelectorAll('#items  input');
      for(let x in myOrders){
        delete myOrders[x];
      }
    allorder.forEach(val=>{
       let totalqu=parseInt(val.value)
    
        if(isNaN(totalqu)|| totalqu==0||totalqu<0){
           
        }else{
            myOrders[val.id]=totalqu
        }
     })
     
    genratebill() 
 }
  function genratebill(){
    let texts="";
    let bill=document.querySelector('#bill');
    let total=document.querySelector('#totalAmount')
   let totaleAmount=0;
    for(let x in myOrders){
       let amounts=menu[x]*myOrders[x];
       totaleAmount +=amounts
        texts +=`<tr>
            <td class="menu">${x}</td>
            <td>Rs ${menu[x]}</td>
            <td>${myOrders[x]}</td>
            <td>${menu[x]}*${myOrders[x]}=${amounts}</td>
          </tr>`;
          
    }
    bill.innerHTML=texts;
    //console.log(totaleAmount)
    total.innerHTML=totaleAmount;
  }


btn.addEventListener('click', ()=>{
   getBill()
   personalInfo()
})
menus()