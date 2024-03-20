import { Breadcrumb, Button, InputNumber, QRCode, theme } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const CheckOutComponent = () => {
    const { useToken } = theme;
    const Data = [
        {
            Author: "George Orwell",
            Price: "$ 24.5",
            Category: "Non-Fiction",
            Publisher: "Dvir Publishing House Ltd. (Israel) Random House Harper",
            PublisherDate: "1984",
            ISBN: "9780062316097",
        },
    ];
    const { token } = useToken();
    const onChange = (value) => {
        console.log('changed', value);
    };
    return (
        <div className="ax-w-full mx-[5px] sm:mx-[20px] md:mx-[50px] lg:mx-[150px] h-auto bg-white-200">
            <Breadcrumb
                items={[
                    {
                        title: (
                            <Link to="/">
                                <p>Home</p>
                            </Link>
                        ),
                    },
                    {
                        title: (
                            <Link to="/book">
                                <p>Book</p>
                            </Link>
                        ),
                    },
                    {
                        title: <p className="text-blue-800">CheckOut</p>
                    },
                ]}
            />
            <div className="grid grid-cols-2 mt-8 border-b-2 border-gray-400">
                <div className="mb-3 font-bold">CheckOut</div>
            </div>

            <div className="grid md:grid-cols-2 gap-2 mb-5 sm:grid-cols-1">
                <div className="mt-10">
                    <div className="mt-5 ms-8">
                        <p className="font-bold text-2xl">Nineteen Eighty-Four</p>
                        {Data.map((dt) => (
                            <>
                                <p>Author:{dt.Author}</p>
                                <p>
                                    Price: <span className="ms-32">{dt.Price}</span>
                                </p>
                                <p>
                                    Categoty: <span className="ms-24">{dt.Category}</span>
                                </p>
                                <p>
                                    Publisher:
                                    <span className="ms-24">{dt.Publisher}</span>
                                </p>
                                <p>
                                    Published date:
                                    <span className="ms-16">{dt.PublisherDate}</span>
                                </p>
                                <p>
                                    ISBN: <span className="ms-32">{dt.ISBN}</span>
                                </p>
                            </>
                        ))}
                        <InputNumber min={1} max={20} defaultValue={1} onChange={onChange} className="mt-3 px-2 py-1" />
                        <Button type="primay" ><Link to="/sign-in">Proceed to Checkout</Link></Button>
                    </div>
                </div>
                <div className="mt-10 flex lg:justify-end">
                    <div className="py-5">
                        <QRCode
                            value="https://ant.design/"
                            color={token.colorInfoText}
                            bgColor={token.colorBgLayout}
                            size={320}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOutComponent;
