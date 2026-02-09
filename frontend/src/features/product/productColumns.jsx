import Button, { EyeIcon } from "../../components/ui/Button";

export const productColumns = [
  {
    key: "id",
    title: "ID",
    width: 48,
  },
  {
    key: "name",
    title: "Item",
    width: 240,
    renderer: (row) => <span className="font-medium">{row.name}</span>,
  },
  {
    key: "category",
    title: "Category",
    width: 180,
    align: "right",
    renderer: (row) => row.category,
  },
  {
    key: "price",
    title: "Price",
    width: 120,
    align: "right",
    renderer: (row) => `$${row.price.toLocaleString()}`,
  },
  {
    key: "actions",
    title: "",
    width: 120,
    align: "right",
    renderer: (row, onView) => (
      <Button variant="tertiary" onClick={() => onView(row)}>
        <EyeIcon /> View
      </Button>
    ),
  },
];
