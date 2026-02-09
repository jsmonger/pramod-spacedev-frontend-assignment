const ProductPageSkeleton = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      {/* Toolbar */}
      <div className="mb-6 flex items-center justify-between">
        <div className="h-10 w-64 rounded-md bg-gray-200 animate-pulse" />
        <div className="h-10 w-32 rounded-md bg-gray-200 animate-pulse" />
      </div>

      {/* Table header */}
      <div className="grid grid-cols-12 gap-4 rounded-t-md bg-gray-100 px-4 py-3">
        <div className="col-span-1 h-4 rounded bg-gray-200 animate-pulse" />
        <div className="col-span-4 h-4 rounded bg-gray-200 animate-pulse" />
        <div className="col-span-3 h-4 rounded bg-gray-200 animate-pulse" />
        <div className="col-span-2 h-4 rounded bg-gray-200 animate-pulse" />
        <div className="col-span-2 h-4 rounded bg-gray-200 animate-pulse" />
      </div>

      {/* Table rows */}
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className="grid grid-cols-12 gap-4 border-b px-4 py-4">
          <div className="col-span-1 h-4 rounded bg-gray-200 animate-pulse" />
          <div className="col-span-4 h-4 rounded bg-gray-200 animate-pulse" />
          <div className="col-span-3 h-4 rounded bg-gray-200 animate-pulse" />
          <div className="col-span-2 h-4 rounded bg-gray-200 animate-pulse" />
          <div className="col-span-2 h-4 rounded bg-gray-200 animate-pulse" />
        </div>
      ))}

      {/* Pagination */}
      <div className="mt-6 flex items-center justify-between">
        <div className="h-9 w-16 rounded-md bg-gray-200 animate-pulse" />

        <div className="flex items-center gap-4">
          <div className="h-4 w-32 rounded bg-gray-200 animate-pulse" />
          <div className="flex gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="h-8 w-8 rounded bg-gray-200 animate-pulse"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPageSkeleton;
