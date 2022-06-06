import { nanoid } from "nanoid";
import React from "react";
import { useContext } from "react";
import '../App.css';
import { UserContext } from "../context/userContext";

const Create = () => {
    const { list, setList,name,setName,lastName,setLastName,email,setEmail,phone,setPhone,password,setPassword,confPassword,setConfPassword,code,setCode,state,setState,avatar,setAvatar} = useContext(UserContext);


    const onSubmitForm = (e) => {
        e.preventDefault();
        if(password === confPassword) {
            setList([{id: nanoid(), name, lastName, email, phone, password, confPassword, code, state, avatar}, ...list]);
        }
        else {
            alert('Please match your password !!!!!!');
        }
        setName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setPassword('');
        setConfPassword('');
        setState('');
        setAvatar('');
        setCode('');
    }
    // console.log(list)
  return (
    <div className="create" id="main">
      <nav className="header">
        <h1>Welcome to SEYTECH!</h1>
        <p>
          In order to register you need a code. Please ask to your admin if you
          don't have it.
        </p>
      </nav>
      <form className="form" onSubmit={onSubmitForm}>
        <h3>CREATE AN ACCOUNT</h3>
        <div className="grid">
        <div className="inputs">
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name* " required />
          <i class="fa-solid fa-user-ninja"></i>
        </div>
        <div className="inputs">
          <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Last Name* " required />
          <i class="fa-solid fa-user-ninja"></i>
        </div>
        <div className="inputs">
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email*" required />
          <i class="fa-solid fa-envelope"></i>
        </div>
        <div className="inputs">
          <input value={phone} onChange={(e) => setPhone(e.target.value)} type="phone" placeholder="Phone*" required />
          <i class="fa-solid fa-phone-flip"></i>
        </div>
        <div className="inputs">
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password*" required />
          <i class="fa-solid fa-key"></i>
        </div>
        <div className="inputs">
          <input value={confPassword} onChange={(e) => setConfPassword(e.target.value)} type="password" placeholder="Confirm Password*" required />
          <i class="fa-solid fa-key"></i>
        </div>
        <div className="inputs">
          <input value={code} onChange={(e) => setCode(e.target.value)} type="password" placeholder="Register Code*" required />
          <i class="fa-solid fa-key"></i>
        </div>
        <div className="inputs">
          <input value={state} onChange={(e) => setState(e.target.value)} type="text" placeholder="State*" required />
          <i class="fa-solid fa-plus"></i>
        </div>
        <div className="inputs">
          <input value={avatar} onChange={(e) => setAvatar(e.target.value)} type="url" placeholder="Avatar Url" />  
          <i class="fa-solid fa-image"></i>
        </div>
        </div>
        <button className="register">Register</button>
        <h4>Already have an account?</h4>
        <a href="#login">Login</a>
      </form>
    </div>
  );
};

export default Create;
