import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import { useAuth } from '../context/Authprovider';
import { Link } from 'react-router-dom';
function Login() {
    
    const{
        register,
        
        handleSubmit,
        formState:{errors}
    }=useForm();
    const[auth,setauth]=useAuth();
    const onsubmit=async(data)=>{
         const use={
            email:data.email,
            password:data.password,
         }
         await axios.post("/api/user/login",use)
         .then((response)=>{
               if(response.data){
                alert("login successfully");
               }
               localStorage.setItem("chatAPP", JSON.stringify(response.data));
                setauth(response.data);
         })
         .catch((error)=>{
            if(error.response){

                alert("Error"+error.response.data.error);
            }
         })

         

    }
    return (
        <>
            <div className='flex w-screen h-screen items-center justify-center'>

                <form onSubmit={handleSubmit(onsubmit)} action="" className='flex-wrap flex-col border-1 px-6 py-4 rounded-4xl border-amber-50 justify-center items-center align-middle'>
                    <div className='flex justify-center '>
                        <div className='w-fit'>
                            <h1><span>LOG</span><span className='text-green-500'>IN</span></h1>

                        </div>
                    </div>

                    <div className='flex justify-center py-1'>
                        <label className="input validator ">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
                            <input type="email" placeholder="Email" required 
                            {...register("email",{required:true})}/>
                        </label>
                        {errors.email && <span>"This field is required" </span>};
                        <div className="validator-hint hidden">Enter valid email address</div>
                    </div>
                    <div className='flex justify-center py-1'>
                        <label className="input validator">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle></g></svg>
                            <input type="password" required placeholder="Password" minLength="8" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" 
                            {...register("password",{required:true})}/>
                        </label>
                        {errors.password && <span>"This field is required"</span>}
                        <div>

                            <p className="validator-hint hidden">
                                Must be more than 8 characters, including
                                <br />At least one number
                                <br />At least one lowercase letter
                                <br />At least one uppercase letter
                            </p>
                        </div>
                    </div>



                    <div className='flex-col justify-center'>
                        <p className='flex justify-center py-2'>
                            New user? <Link to={'/signup'} className='text-green-500 pl-6'>Signup</Link>
                        </p>
                        <div className='flex justify-center'>
                         
                            <input type="submit" value="LOGIN" className='text-center p-2 rounded-3xl' />
                        </div>

                    </div>
                </form>
            </div>
        </>
    )
}

export default Login