const Input = ({ label, id, className = "", value, onChange, ...props }) => {
  const inputId = id || label;

  return (
    <div className="space-y-1">
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <input
        id={inputId}
        value={value}
        onChange={onChange}
        className={`w-full rounded-md border border-gray-300 px-3 py-2 text-sm
          placeholder-gray-400 focus:border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-300
          ${className}`}
        {...props}
      />
    </div>
  );
};

export default Input;
