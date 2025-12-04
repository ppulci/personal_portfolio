export default function Footer() {
  return (
    <footer className={`text-slate-400 p-2 text-sm bg-gray-100 z-1`}>
      <div className="flex justify-between items-center max-w-[80rem] mx-auto">
        <div>
          &copy; {new Date().getFullYear()} Peter Pulcini
        </div>

        <div className="flex items-center gap-2 italic">
          designed and built by me
        </div>
      </div>
    </footer>
  );
}