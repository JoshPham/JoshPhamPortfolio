const LearnPage = () => {
    return (
      <main className="flex min-h-screen flex-col items-center p-24 gap-2 select-none">
        <div className="relative h-full w-full bg-slate-950">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        </div>
        <div className="relative w-full max-w-lg -z-10">
          <div className="absolute top-32 left-80 w-72 h-72 bg-rose-300 mix-blend-multiply rounded-full filter blur-xl opacity-70 animate-pulse animation-delay-100"></div>
          <div className="absolute top-40 -left-4 w-72 h-72 bg-lime-300 mix-blend-multiply rounded-full filter blur-xl opacity-70 animate-pulse animation-delay-200"></div>
          <div className="absolute top-72 right-20 w-72 h-72 bg-emerald-400 mix-blend-multiply rounded-full filter blur-xl opacity-70 animate-pulse animation-delay-400"></div>
          <div className="absolute top-60 -right-50 w-72 h-72 bg-orange-400 mix-blend-multiply rounded-full filter blur-xl opacity-70 animate-pulse animation-delay-600"></div>
          <div className="absolute -bottom-80 left-40 w-72 h-72 bg-cyan-300 mix-blend-multiply rounded-full filter blur-xl opacity-70 animate-pulse animation-delay-800"></div>
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <h1 className="text-3xl font-bold">Learn</h1>
          <p>I{`'`}m planning on adding a learning page, so stay tuned</p>
        </div>
      </main>
    );
};
  
  export default LearnPage;
  