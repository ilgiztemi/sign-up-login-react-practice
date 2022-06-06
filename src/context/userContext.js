import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react'

const localList = JSON.parse(localStorage.getItem('list'));
const initialList = localList || [];

export const UserContext = new createContext();
export const UserProvider = ({children}) => {
    const [list, setList] = useState(initialList);
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [code, setCode] = useState('');
    const [state, setState] = useState('');
    const [avatar, setAvatar] = useState('');

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list));
    }, [list]);
    
  return (
    <UserContext.Provider value={{list, setList,name,setName,lastName,setLastName,email,setEmail,phone,setPhone,password,setPassword,confPassword,setConfPassword,code,setCode,state,setState,avatar,setAvatar}}>
        {children}
    </UserContext.Provider>
  )
}
