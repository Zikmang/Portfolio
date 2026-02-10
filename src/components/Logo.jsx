
export default function Logo() {
  return (
    <div className="font-mono font-bold cursor-pointer group flex items-center justify-center">

      <span className="text-gray-400 text-lg transition-all duration-300 ease-out group-hover:text-black group-hover:-translate-x-2">
        &lt;
      </span>

      <span className="text-black text-lg mx-1 relative">
        zikmang
      </span>

      <span className="text-gray-400 text-lg transition-all duration-300 ease-out group-hover:text-black group-hover:translate-x-2">
        /&gt;
      </span>
    </div>
  );
}