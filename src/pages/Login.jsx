import { Link } from "react-router-dom";
import SocialLogin from "../components/SocialLogin";
import useAuth from "../components/useAuth";
import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
    const {signIn} = useAuth()
    const [showPassword,setShowPassword] = useState(false)
    const handleLogin = e =>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value
        const info = {email,password}
        console.log(info);
        form.reset()
        signIn(email,password)
        .then(result=>{
            if(result.user){
                toast.success('Login Successful')
            }
        })
        .catch(error=>{
            if(error.message){
                toast.error('Wrong Email or Password')
            }
        })
    }
    return (
        <div className="mt-10 flex items-center justify-center">
            <div className="flex-1">
                <img src="https://i.postimg.cc/6Qr6xLdM/Frame-9.png" alt="" />
            </div>
            <div className="px-8 py-12 flex-1 border border-gray-300">
                <h1 className="text-3xl font-semibold text-center">Login</h1>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="Your Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Confirm Password</span>
                        </label>
                        <input name="password" type={showPassword ? 'text' : 'password'} placeholder="Your Password" className="input input-bordered" required />
                        <span className="absolute ml-[440px] mt-[58px] text-xl" onClick={() => setShowPassword(!showPassword)}>
                            {
                                showPassword ? <IoEyeOff></IoEyeOff> : <IoEye></IoEye>
                            }
                        </span>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn text-[#FFF] text-lg font-bold bg-[#FF3811]">Login</button>
                    </div>
                </form>
                <SocialLogin></SocialLogin>
                <h2 className="mt-6 text-lg text-center font-semibold">New Here? <Link to={'/register'} className="text-[#FF3811]">Sign Up</Link></h2>
                <Toaster></Toaster>
            </div>
        </div>
    );
};
export default Login;