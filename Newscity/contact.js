console.log('it works')

$(document).ready(function(){
    $('.submit').click(function(event){

        var email = $('.email').val()
        var subject = $('.subject').val()
        var message = $('.message').val()
        var statusElm = $('.status')
        statusElm.empty()
        
        //checking the conditio
        if(email.length > 10 && email.includes('@') && email.includes('.')){
            
        }else{
            event.preventDefault()
            statusElm.append('<div>email is not valid</div>')
        }
        if(subject.length > 6){
            
        }else{
            event.preventDefault()
            statusElm.append('<div> Subject is not valid</div>')
        }
        if(message.length > 10){
            
        }else{
            event.preventDefault()
            statusElm.append('<div>message is not valid</div>')
        }

    })
})