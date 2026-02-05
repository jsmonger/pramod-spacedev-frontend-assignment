import React from "react";

const Footer = ({
  page,
  total,
  limit,
  limits = [10, 20, 50, 100],
  onPageChange,
  onLimitChange,
}) => {
  const totalPages = Math.ceil(total / limit);

  if (totalPages <= 1) return null;

  const canGoPrevious = page > 1;
  const canGoNext = page < totalPages;

  return (
    <div className="footer">
      <label>
        Show
        <select
          value={limit}
          onChange={(e) => {
            onLimitChange(e.target.value);
          }}
        >
          {limits.map((l) => (
            <option key={l} value={l}>
              {l}
            </option>
          ))}
        </select>
        per page
      </label>

      <div className="pagination">
        <button
          disabled={!canGoPrevious}
          onClick={() => onPageChange(page - 1)}
        >
          Prev
        </button>

        <span>
          Page <strong>{page}</strong> of {totalPages}
        </span>

        <button disabled={!canGoNext} onClick={() => onPageChange(page + 1)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Footer;
