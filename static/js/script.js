(function () {

    //Add an event listener to the window at the start of the sessions.
    window.addEventListener('load', function () {

        //Seclect the form
        let form = document.querySelector('form')

        //Add event listener when submitting the form (button)
        form.addEventListener('submit', function (event) {

            //Stop page from loading so you can run another code
            event.preventDefault(); 

            //Seclect all the input fields on the screen
            let allfields = document.querySelectorAll('input')
            let allwarnings = document.querySelectorAll('small.warning')
                  
            for(let i = 0; i < allfields.length; i++ ) {

                //Check box is true or not. type = attrabute from html page.
                //Run the valiadation if it runs correctly.
                if (allfields[i].type != "checkbox") {

                    //Checks if the field has a value in it.
                    //Sends an alert message  
                    //Puts redlines underneath
                    (allfields[i].value == "") ? allwarnings[i].style.display = "block" : allwarnings[i].style.display = "none"; 
                }
            }

        })
    })

})()