import { Link } from "react-router-dom";
import useAuth from "../components/useAuth";
import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
    const { createUser } = useAuth()
    const [showPassword, setShowPassword] = useState(false)
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const info = { name, email, password }
        console.log(info);
        form.reset()
        createUser(email, password)
            .then(result => {
                if(result.user){
                    toast.success('User created Successfully')
                }
            })
            .catch(error => {
                if(error.message){
                    toast.error('Email Already Registered')
                }
            })

    }
    return (
        <div className="mt-10 flex items-center justify-center">
            <div className="flex-1">
                <img src="https://i.postimg.cc/6Qr6xLdM/Frame-9.png" alt="" />
            </div>
            <div className="px-8 py-12 flex-1 border border-gray-300">
                <h1 className="text-3xl font-semibold text-center">Sign Up</h1>
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Name</span>
                        </label>
                        <input name="name" type="text" placeholder="Your Name" className="input input-bordered" required />
                    </div>
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
                        <button className="btn text-[#FFF] text-lg font-bold bg-[#FF3811]">Sign Up</button>
                    </div>
                </form>
                <h2 className="mt-6 text-lg text-center font-semibold">Have an account? <Link to={'/login'} className="text-[#FF3811]">Sign In</Link></h2>
                <Toaster></Toaster>
            </div>
        </div>
    );
};

export default Register;