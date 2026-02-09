const Product = ({ index, style, products }) => {
  const { rows, columns } = products;
  const row = rows[index];

  return (
    <div
      style={style}
      className="flex items-center border-b border-gray-300 hover:bg-gray-50"
    >
      {columns.map((col) => (
        <div
          key={col.key}
          style={{ width: col.width }}
          className={`px-4 text-sm ${
            col.align === "right" ? "text-right ml-auto" : ""
          }`}
        >
          {col.renderer ? col.renderer(row) : row[col.key]}
        </div>
      ))}
    </div>
  );
};

export default Product;
