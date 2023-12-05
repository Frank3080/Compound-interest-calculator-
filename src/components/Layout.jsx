import React from "react";

export default function Layout(props) {
  const { children } = props;
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col gap-10 p-4 sm:gap-12 md:gap-15">
      <header className="flex flex-col gap-4 items-center justify-center max-w-[800px] pt-16 sm:pt-20 w-full mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center">
          Compound interest calculator
        </h1>
        <div className="flex items-center gap-2 sm:text-lg md:text-2xl">
          <i className="fa-solid fa-money-bill"></i>
          <i className="fa-solid fa-money-bill"></i>
          <i className="fa-solid fa-money-bill"></i>
          <i className="fa-solid fa-money-bill"></i>
          <i className="fa-solid fa-money-bill"></i>
          <i className="fa-solid fa-money-bill"></i>
          <i className="fa-solid fa-money-bill"></i>
        </div>
      </header>
      <p className="text-center text-slate-200 text-sm md:text-base">
        COMPOUNDDDD
      </p>
      <main className="flex-1 flex flex-col gap-4 max-w-[600px] w-full mx-auto">
        {children}
      </main>
      <footer>FOOTER</footer>
    </div>
  );
}
