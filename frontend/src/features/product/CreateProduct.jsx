import { useState } from "react";
import Modal from "../../components/ui/Modal";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import { validateForm } from "./product.helpers";

const CreateProduct = ({ open, onClose, onCreate }) => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    image: "",
  });
  const [errors, setErrors] = useState({});

  const updateField = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    setProduct((prev) => ({ ...prev, [name]: value }));

    const error = validateForm({ [name]: value });
    if (error) {
      setErrors((prevErrors) => ({ ...prevErrors, ...error }));
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setProduct((prev) => ({ ...prev, image: file }));
  };

  const handleCreate = () => {
    const validationErrors = validateForm(product);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    onCreate(product);
  };

  const { name, price, category } = product;

  console.log({ errors }, errors.name);

  return (
    <Modal open={open} onClose={onClose} title="Product details">
      <div className="space-y-5">
        <Input value={name} onChange={updateField} name="name" label={"Name"} />
        {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}
        <Input
          value={category}
          onChange={updateField}
          name="category"
          label={"Category"}
        />
        {errors.category && (
          <p className="text-sm text-red-600">{errors.category}</p>
        )}
        <Input
          value={price}
          onChange={updateField}
          name="price"
          label={"Price"}
          type="number"
        />
        {errors.price && <p className="text-sm text-red-600">{errors.price}</p>}
        <Input
          onChange={handleImageUpload}
          name="image"
          label={"Upload mage"}
          type="file"
          accept="image/*"
        />
        <div className="flex justify-end gap-3 border-t pt-4">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleCreate}>Create</Button>
        </div>
      </div>
    </Modal>
  );
};

export default CreateProduct;
