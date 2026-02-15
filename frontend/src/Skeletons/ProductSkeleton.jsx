const ProductSkeleton = () => (
  <>
    {/* Image skeleton */}
    <div className="w-full h-64 rounded-lg bg-gray-200 animate-pulse" />

    {/* Title skeleton */}
    <div className="mt-4 h-6 w-2/3 rounded bg-gray-200 animate-pulse" />

    <div className="mt-4 grid grid-cols-2 gap-4">
      <div>
        <div className="h-4 w-20 rounded bg-gray-200 animate-pulse" />
        <div className="mt-2 h-4 w-32 rounded bg-gray-200 animate-pulse" />
      </div>

      <div>
        <div className="h-4 w-16 rounded bg-gray-200 animate-pulse" />
        <div className="mt-2 h-4 w-24 rounded bg-gray-200 animate-pulse" />
      </div>
    </div>
  </>
);

export default ProductSkeleton;
