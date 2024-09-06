import React from "react";
import { useForm } from "react-hook-form";
import "./signup.css";

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <div className="sign-up-container">
          
            <p className="title">Registration Form</p>

            <form className="App" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("name")} placeholder="Name" />
                <input 
                    type="email" 
                    {...register("email", { required: true })} 
                    placeholder="Email" 
                />
                {errors.email && <span style={{ color: "red" }}>
                    *Email* is mandatory
                </span>}
                <input 
                    type="password" 
                    {...register("password")} 
                    placeholder="Password" 
                />
                <input 
                    type="submit" 
                    style={{ backgroundColor: "#a1eafb" }} 
                />
            </form>

            
        </div>
    );
};

export default SignUp;
