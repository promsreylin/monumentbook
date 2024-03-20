import React from "react";
import { Breadcrumb, Button, Dropdown, Select, Space } from "antd";
import { Link } from "react-router-dom";
import pic from "../assets/images/Books Cover/Animal_Farm_Cover.jpg";
// import { HeartIcon } from "@heroicons/react/24/outline";

const ViewComponent = () => {
    const Data = [
        {
            Author: "George Orwell",
            Price: "$ 24.5",
            Category: "Non-Fiction",
            Publisher: "Dvir Publishing House Ltd. (Israel) Random House Harper",
            PublisherDate: "1984",
            ISBN: "9780062316097",
            Stock: "5"
        },

    ]

    const onChange = (value) => {
        console.log(`selected ${value}`);
    };

    // Filter `option.label` match the user type `input`
    const filterOption = (input, option) =>
        (option?.label ?? "").toLowerCase().includes(input.toLowerCase());


    return (
        <div className="max-w-full mx-[5px] sm:mx-[20px] md:mx-[50px] lg:mx-[150px] h-auto bg-white-200">
            <Breadcrumb
                items={[
                    {
                        title: (
                            <Link to="/" className="text-black me-5">
                                Home
                            </Link>
                        ),
                    },
                    {
                        title: (
                            <Link to="/book" className="text-black me-5">
                                Book
                            </Link>
                        ),
                    },
                    {
                        title: <p className="text-blue-800">View</p>,
                    },
                ]}
            />
            <div className="grid grid-cols-2 mt-8 border-b-2 border-gray-400">
                <div className="mb-3 font-bold">Book Detail</div>
            </div>

            <div className="grid md:grid-cols-2 gap-2 mb-5 sm:grid-cols-1">
                <div className="bg-[#EEF4F9] mt-10">
                    <div className="py-10">
                        <img className="w-100 mx-auto" src={pic} alt="" />
                    </div>
                </div>
                <div className="mt-10">
                    <div className="mt-5 ms-8">
                        <p className="font-bold text-2xl">Nineteen Eighty-Four</p>
                        {Data.map((dt) => (
                            <>
                                <p>Author:{dt.Author}</p>
                                <p>
                                    Written more than 70 years ago, 1984 was George Orwell’s chilling
                                    prophecy about the future. And while 1984 has come and gone, his
                                    dystopian vision of a government that will do anything to
                                    control...
                                </p>
                                <p>
                                    Price: <span className="ms-32">{dt.Price}</span>
                                </p>
                                <p>
                                    Categoty: <span className="ms-24">{dt.Category}</span>
                                </p>
                                <p>
                                    Publisher:
                                    <span className="ms-24">
                                        {dt.Publisher}
                                    </span>
                                </p>
                                <p>
                                    Published date:<span className="ms-16">{dt.PublisherDate}</span>
                                </p>
                                <p>
                                    ISBN: <span className="ms-32">{dt.ISBN}</span>
                                </p>
                                <p className="mb-3">
                                    In stock <span className="ms-28">{dt.Stock}</span>
                                </p>
                            </>

                        ))}
                        <Space>
                            Quantity:
                            <Select
                                className="lg:ml-3"
                                placeholder="0"
                                optionFilterProp="children"
                                onChange={onChange}
                                filterOption={filterOption}
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
                        </Space>
                        <div className="flex mt-3">
                            <Button className="text-black border-blue-800">
                                <Link to="/book/checkout">
                                    Add to cart
                                </Link>
                            </Button>
                            <Button className="ms-3 bg-blue-800 text-white border-blue-800">
                                <Link to="/cart">
                                    Buy Now
                                </Link>
                            </Button>
                            {/* <HeartIcon className="h-8 w-8 bg-[#EEF4F9] ms-3 rounded px-1 py-2 text-blue-800" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewComponent