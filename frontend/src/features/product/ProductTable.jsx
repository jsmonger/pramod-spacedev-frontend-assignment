import { useMemo } from "react";
import { List } from "react-window";

import Toolbar from "../../components/layout/Toolbar";
import Product from "./Product";
import Pagination from "../../components/ui/Pagination";

const ROW_HEIGHT = 48;
const TABLE_HEIGHT = 480;

const ProductTable = ({
  data,
  columns,
  page,
  limit,
  total,
  onPageChange,
  onLimitChange,
  toolBarActions,
}) => {
  // memoize row data for react-window
  const products = useMemo(() => ({ rows: data, columns }), [data, columns]);

  return (
    <>
      <div className="bg-white p-4 rounded-md">
        <Toolbar left={toolBarActions.left} right={toolBarActions.right} />

        {/* Table shell */}
        <div className="overflow-hidden rounded-lg">
          {/* Header */}
          <div className="border-b border-gray-300 bg-gray-100">
            <div className="flex">
              {columns.map((col) => (
                <div
                  key={col.key}
                  style={{ width: col.width }}
                  className={`px-4 py-3 text-sm font-medium text-gray-600  ${
                    col.align === "right" ? "text-right ml-auto" : ""
                  }`}
                >
                  {col.title}
                </div>
              ))}
            </div>
          </div>

          <List
            rowCount={data.length}
            rowHeight={ROW_HEIGHT}
            rowComponent={Product}
            rowProps={{ products }}
            style={{ height: TABLE_HEIGHT, width: "100%" }}
          />
        </div>

        <Pagination
          page={page}
          pageSize={limit}
          total={total}
          onPageChange={onPageChange}
          onLimitChange={onLimitChange}
        />
      </div>
    </>
  );
};

export default ProductTable;
