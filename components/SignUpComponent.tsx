"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// FONTS
import { leotaroFree } from '@/app/layout';


const SingUpComponent: React.FC = () => {
     const [formData, setFormData] = useState({
    user: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dados enviados:', formData);
    // Aqui você pode adicionar sua lógica de autenticação
  };

  return (
    <>
      <header>
        <div className="register-wrapper">
          <div className="new-user">Have Already Account?  </div>
          <Link className="register" href={"/LogIn"} prefetch={false}> Log In</Link>
        </div>
      </header>

      <main>
        <Link href={"/ArtVault_Branding"} className="btnBackPage">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" 
          strokeLinejoin="round" className="lucide lucide-arrow-left-icon lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
        </Link>

        <div className="hero-wrapper">
          <Image
            width={700}
            height={700}
            className="hero" 
            src="/images/svgSignUp.svg" 
            alt="New ideas" 
            loading='eager'
          />
        </div>

        <form className="content-wrapper" onSubmit={handleSubmit}>
          <div className="welcome">
            <h1 className={leotaroFree.className}>Register Now!</h1>
            <div className="subtitle">Enter your details below</div>
          </div>

          <div className="log-in-wrapper">
            <div className="log-in user">
              <input
                id="user"
                type="text"
                placeholder="User"
                value={formData.user}
                onChange={handleChange}
              />
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
              stroke="#212b46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-round-icon lucide-user-round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>
              <label htmlFor="user"></label>
            </div>

            <div className="log-in email">
              <input
                id="email"
                type="text"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#212b46" strokeWidth="2" strokeLinecap="round" 
              strokeLinejoin="round" className="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
              <label htmlFor="email"></label>
            </div>

            <div className="log-in password">
              <input
                id="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
              stroke="#212b46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock-icon lucide-lock"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              <label htmlFor="password"></label>
            </div>
          </div>

          <div className="action">
            <a className="forgot-password" href="#">Forgot Password?</a>
            <button type="submit" className="log-in">Log-in</button>
          </div>
        </form>
      </main>
    </>
  );
}

export default SingUpComponent