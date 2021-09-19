$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            fname:{
                required : true,
                minlength: 4
            },
            sname:{
                required: true
            },
            email:{
                required:true,
                email:true
            },
            password:{
                required:true,
                minlength: 5
            },
            day:{
                required:true
            },
            month:{
                required:true
            },
            year:{
                required:true
            },
            gender:{
                required:true
            }
        }
    })
})