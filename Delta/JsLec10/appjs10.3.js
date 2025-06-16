let form1 = document.querySelector('.form1');
form1.addEventListener("submit", function(event){
    event.preventDefault();
    alert("form submitted");
});

// after submitting form user will be redirected to the url that is in the action of html form, to prevent that default redirection a method is there that is in the event: event.preventDefault(). because of this method that is happening by default will not occur.


// EXTRACTING FORM DATA

let form2 = document.querySelector('.form2');
form2.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(form1.elements);
    console.dir(form1.elements);

// To access a particular element:
    let user = this.elements[0];
    let pass = this.elements[1];
    console.log(user.value);
    console.log(pass.value);

// Instead of entering each elemnt of form we can also track the internal elements of form element with the form object that is created above.

    // let user = document.querySelector('.user');
    // let pass = document.querySelector('.pass');
    // console.log(user.value);
    // console.log(pass.value);
    // alert(`Welcome ${user.value}`);
});