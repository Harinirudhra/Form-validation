export default function validate(values,item){
    let errors={}

    if (!values.username.trim()){
        errors.username="username required"
    }
    if(!values.email.trim()){
        errors.email="email required"
    }
    if(!values.password.trim()){
        errors.password="password requied"
    }
    else if(values.password.length>6){
        errors.password="password needs to be 6 character or more"
    }
    if(!values.password2.trim()){
        errors.password2="password is requied"
    }
    else if(values.password2!==values.password ){
        errors.password2="password do not match"
    }
   
        
    
    return errors
}