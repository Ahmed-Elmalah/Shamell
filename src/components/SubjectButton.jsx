
export default function SubjectButton({ name }) {
  return (
    <button className="w-full py-2 px-4 rounded-lg bg-gray-100 dark:bg-white/5 border border-transparent hover:border-brand-cyan text-gray-800 dark:text-gray-200 text-sm font-medium transition-all duration-300 hover:scale-[1.02]">
      {name}
    </button>
  );
}