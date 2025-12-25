export default function SubjectButton({ name }) {
  return (
    <button className="w-full h-auto py-3 px-4 rounded-lg bg-gray-100 dark:bg-white/5 border border-transparent hover:shadow-[0_0_20px_1px_var(--color-brand-purple)] text-gray-800 dark:text-gray-200 text-sm font-medium transition-all duration-300 hover:scale-[1.02] whitespace-normal wrap-break-word text-center flex items-center justify-center min-h-11">
      {name}
    </button>
  );
}
