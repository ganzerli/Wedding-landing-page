document.addEventListener("DOMContentLoaded",()=>{
    
    AOS.init();
    var rellax = new Rellax('.rellax');
    
    // prevent form submit
    const fakeSubmit = e => e.preventDefault();
    const form = document.querySelector("form");
    form.onsubmit = fakeSubmit;
});