export function ViewButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        inline-flex items-center gap-1.5
        rounded-md px-2.5 py-1.5
        text-sm font-medium
        text-blue-600
        hover:bg-blue-50
        focus:outline-none focus:ring-2 focus:ring-blue-200
      "
    >
      <EyeIcon />
      View
    </button>
  );
}
