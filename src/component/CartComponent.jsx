import React from "react";
import { Button, Select } from "antd";
import { Link } from "react-router-dom";
import { DeleteOutlined } from "@ant-design/icons";

const onChange = (value) => {
  console.log(`selected ${value}`);
};

// Filter `option.label` match the user type `input`
const filterOption = (input, option) =>
  (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

const CartComponent = () => {
  const detail = [
    {
      title: "Author :Stop Overthinking",
      text: "George Orwell",
    },
    {
      title: "Category :",
      text: "Non-Fiction",
    },
    {
      title: "ISBN :",
      text: "9780062316097",
    },
  ];
  return (
    <div className="ax-w-full mx-[5px] sm:mx-[20px] md:mx-[50px] lg:mx-[150px] h-auto bg-white-200">
      <div className="md:font-serif lg:text-4xl font-bold border-b-2 pb-4 sm:text-left text-sky-800">
        Shopping Cart
      </div>
      <div className="bg-white overflow-hidden mt-5">
        <div className="md:flex">
          <div className="md:shrink-0 px-5">
            <img
              className="w-48 h-ful object-coverl"
              src="https://tse4.mm.bing.net/th?id=OIP.98921h3AyTfHqvQInqIP7gHaLO&pid=Api&P=0&h=220"
              alt="Modern building architecture"
            />
          </div>
          <div className="p-2">
            <div>
              <h1 className="text-3xl mb-5">Stop Overthinking</h1>
            </div>
            <p className="text-base font-serif">
              Written more than 70 years ago, 1984 was George Orwell’s chilling
              prophecy about the future. And while 1984 has come and gone, his
              dystopian vision of a government that will do anything to control
              the narrative is timelier than ever...
            </p>
            <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 items-start mt-6">
              <div className="border-t-2">
                <div className="mt-3 font-serif text-base text-zinc-500">
                  {detail.map((dt) => (
                    <div className="grid grid-cols-3 ">
                      <div className="font-bold font-sans pb-3">{dt.title}</div>
                      <div className="ps-1 font-mono col-span-2">
                        {" "}
                        {dt.text}
                      </div>
                    </div>
                  ))}
                  <div className="grid grid-cols-3 ">
                    <div className="font-bold font-sans pb-3">Buy now</div>
                    <div className="ps-1 font-mono col-span-2 text-[#FF7B4E] text-2xl font-bold">
                      $9.99
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row lg:pl-10 items-center pt-10">
                <h6>5 in stock</h6>
                <Select
                  className="lg:ml-3"
                  placeholder="qty: 0"
                  optionFilterProp="children"
                  onChange={onChange}
                  filterOption={filterOption}
                  size="large"
                  options={[
                    {
                      value: "01",
                      label: "01",
                    },
                    {
                      value: "02",
                      label: "02",
                    },
                    {
                      value: "03",
                      label: "03",
                    },
                  ]}
                />
                <DeleteOutlined />
              </div>
              <Button className="bg-white text-[#FF7B4E] px-5 border-2 border-[#FF7B4E] shadow-none mt-9">
                <Link to="/sign-in" className="grid justify-items-end">Proceed to checkout </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-2 mt-5 text-right">
        <div className="mt-3">
          <span>Subtotal</span>(<span className="text-[#FF7B4E]">1</span>item):{" "}
          <span className="text-blue-900 font-bold">$9.99</span>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
