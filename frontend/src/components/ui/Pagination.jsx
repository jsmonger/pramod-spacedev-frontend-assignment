import { useMemo } from "react";
import Dropdown from "./Dropdown";

const buildPageList = (totalPages, page) => {
  const pages = [];
  const maxVisible = 7;

  if (totalPages <= maxVisible) {
    for (let i = 1; i <= totalPages; i += 1) pages.push(i);
    return pages;
  }

  const showLeftDots = page > 4;
  const showRightDots = page < totalPages - 3;

  pages.push(1);

  if (showLeftDots) {
    pages.push("left-ellipsis");
  } else {
    for (let i = 2; i < Math.min(4, totalPages); i += 1) pages.push(i);
  }

  const start = Math.max(2, page - 1);
  const end = Math.min(totalPages - 1, page + 1);

  for (let i = start; i <= end; i += 1) {
    if (!pages.includes(i)) pages.push(i);
  }

  if (showRightDots) {
    pages.push("right-ellipsis");
  } else {
    for (let i = Math.max(totalPages - 2, 2); i < totalPages; i += 1) {
      if (!pages.includes(i)) pages.push(i);
    }
  }

  if (!pages.includes(totalPages)) pages.push(totalPages);

  return pages;
};

const Pagination = ({ page, total, pageSize, onPageChange, onLimitChange }) => {
  const totalPages = Math.ceil(total / pageSize);

  if (totalPages <= 1) return null;

  const pageItems = useMemo(
    () => buildPageList(totalPages, page),
    [totalPages, page],
  );

  return (
    <div className="flex items-center justify-between  px-4 py-3 text-sm text-gray-600">
      <div className="flex items-center gap-4">
        <Dropdown
          width="w-12"
          value={pageSize}
          options={[10, 20, 50, 100].map((opt) => ({ label: opt, value: opt }))}
          onChange={onLimitChange}
        />

        <span>
          Showing {(page - 1) * pageSize + 1}–{Math.min(page * pageSize, total)}{" "}
          of {total}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <button
          disabled={page === 1}
          onClick={() => onPageChange(page - 1)}
          className="rounded px-2 py-1 hover:bg-gray-100 disabled:opacity-40"
        >
          Prev
        </button>

        {pageItems.map((item, index) =>
          typeof item === "number" ? (
            <button
              key={item}
              onClick={() => onPageChange(item)}
              className={`rounded px-2 py-1 ${
                page === item ? "bg-orange-500 text-white" : "hover:bg-gray-100"
              }`}
            >
              {item}
            </button>
          ) : (
            <span key={`${item}-${index}`} className="px-2 py-1">
              …
            </span>
          ),
        )}

        <button
          disabled={page === totalPages}
          onClick={() => onPageChange(page + 1)}
          className="rounded px-2 py-1 hover:bg-gray-100 disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
