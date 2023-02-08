import React ,{ useState } from 'react';
import { redirect } from 'react-router-dom';

export const Login = () => {
    const [rightEmail] = useState("khalied.mo2030@gmail.com"); 
    const [rightPass] = useState("12345"); 
    const [Email,setEmail] = useState(""); 
    const [Pass,setPass] = useState(""); 
    const handelSubmit = (e) =>{
        e.preventDefault();
        if(rightEmail == Email & rightPass == Pass) {
            window.location.href = "/Dashboard"
        } else {
            window.location.href = "/"
        }
    }
  return (
<form class="row g-3 needs-validation" onSubmit={(e)=>{handelSubmit(e)}} >

  <div class="col-md-4">
    <label for="email" class="form-label">Email</label>
    <input type="email" class="form-control" id="email"  required onChange={(e)=>{setEmail(e.target.value)}}/>
    <div class="valid-feedback">
      Looks good!
    </div>
    <div class="invalid-feedback">
      Email may be wrong 😭!
    </div>
  </div>
  <div class="col-md-4">
    <label for="password" class="form-label">Password</label>
    <input type="password" class="form-control" id="password" required onChange={(e)=>{setPass(e.target.value)}}/>
    <div class="valid-feedback">
      Looks good!
    </div>
    <div class="invalid-feedback">
    password may be wrong 😭!
    </div>
  </div>
  
  <div class="col-12">
    <button class="btn btn-primary" type="submit" >Submit form</button>
  </div>
</form>
  )
}
