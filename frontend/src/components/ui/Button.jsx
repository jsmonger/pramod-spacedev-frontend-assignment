export const Chevron = ({ open }) => {
  return (
    <svg
      className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M6 8l4 4 4-4" />
    </svg>
  );
};

export const EyeIcon = () => {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
};

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition focus:outline-none px-6 py-3 cursor-pointer";

  const variants = {
    primary:
      "bg-orange-500 text-white hover:bg-orange-600 focus:ring-2 focus:ring-offset-2 focus:ring-orange-500",
    secondary:
      "border border-gray-300 bg-white focus:ring-2 focus:ring-offset-2 text-gray-700 hover:bg-gray-50",
    tertiary: "text-gray-600",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
