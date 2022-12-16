import React from "react";
import Head from "next/head";
import Router from "next/router";

const Badpage = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-pink-airbnb">
      <Head>
        <title>Airbnb</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo-4.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet" />
      </Head>
      <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
      <div className="bg-cream-airbnb px-2 mb-16 text-sm text-black-airbnb rounded rotate-12 absolute">Page Not Found</div>
      <div className="text-white text-xl text-center">
        <p>
          We re sorry, the page you are looking doesn t appear, <br /> you must login first. Hit the button bellow.
        </p>
      </div>
      <button className="mt-5" onClick={() => Router.push(`/`)}>
        <a className="relative inline-block text-sm font-medium text-black-airbnb group focus:outline-none focus:ring">
          <span className="relative block px-8 py-3 bg-cream-airbnb border-none rounded-lg hover:bg-[#FFCBB6]">Go to Login</span>
        </a>
      </button>
    </div>
  );
};

export default Badpage;
