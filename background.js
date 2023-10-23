const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button){

    console.log(button);
  button.addEventListener('click',function(e)
  {
    console.log(e);
    console.log(e.target);
    // if(e.target.id==='graey')
    // {
    //     body.style.backgroundColor = 'green';

    //     // 👇️ optionally change text color
    //     // btn.style.color = 'white';
    //   } else {
    //     body.style.backgroundColor = 'salmon';
    //   }
    // if(e.target.id==='white')
    // {
    // body.style.backgroundColor =e.target.id;
    // }
    // if(e.target.id==='blue')
    // {
    // body.style.backgroundColor =e.target.id;
    // }
    // if(e.target.id==='yellow')
    // {
    // body.style.backgroundColor =e.target.id;
    // }
   switch(button)
   {
    case grey:
 body.style.backgroundColor='grey'
   }
   switch(button)
   {
    case white:
 body.style.backgroundColor='white'
   }
   switch(button)
   {
    case blue:
 body.style.backgroundColor='blue'
   }
   switch(button)
   {
    case yellow:
 body.style.backgroundColor='yellow'
   
   }

  });
});