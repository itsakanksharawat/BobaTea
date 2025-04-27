document.addEventListener('DOMContentLoaded',function(){
    function handleGlassSelection(size, price){
        alert(`YOU SELECTED A ${size} glass!`); 
        const priceDisplay = document.getElementById('price');
        priceDisplay.textContent = `Price: ${price}`;
    }
     const button7 = document.querySelector(".button7");
     const button8 = document.querySelector(".button8");
     const button9 = document.querySelector(".button9");
      

     button7.addEventListener('click',function(){
        handleGlassSelection('small','$13');
     });
     button8.addEventListener('click',function(){
        handleGlassSelection('Medium','$18');
     });
     button9.addEventListener('click',function(){
        handleGlassSelection('large','$23');
     });
     
});