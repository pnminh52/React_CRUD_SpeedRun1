import React, { useState } from "react";
import { useParams } from "react-router-dom";
const Update = ({ products, onHandleUpdate }) => {
  const [inputValue, setInputValue] = useState({});
  const currentProduct = products.find((item) => item.id == id);
  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };
  const onUpdate = (e) => {
    e.preventDefault();
    const updateData = { ...currentProduct, ...inputValue };
    onHandleUpdate(updateData);
  };
  return (
    <>
      <div>
        <form action="" onSubmit={onUpdate}>
          <input
            type="text"
            name="name"
            placeholder="
        name"
            onInput={onHandleChange}
            defaultValue={currentProduct?.name}
          />

          <input
            type="text"
            name="price"
            placeholder="
        price"
            onInput={onHandleChange}
            defaultValue={currentProduct?.price}
          />
          <input
            type="text"
            name="description"
            placeholder="
        description"
            onInput={onHandleChange}
            defaultValue={currentProduct?.description}
          />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Update;
