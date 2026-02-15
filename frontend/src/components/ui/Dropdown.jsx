import { useState, useRef, useEffect } from "react";
import { Chevron } from "./Button";

const Dropdown = ({
  value,
  options,
  onChange,
  placeholder = "Select",
  width = "w-48",
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const selected = options?.find((o) => o.value === value);

  return (
    <div ref={ref} className={`relative ${width}`}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-600 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200"
      >
        <span>{selected ? selected.label : placeholder}</span>

        <Chevron open={open} />
      </button>

      {/* Menu */}
      {open && (
        <div className="absolute z-10 mt-2 w-full rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden">
          {options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
              className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100"
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
