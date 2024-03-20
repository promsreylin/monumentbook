import React, { useEffect, useState } from "react";
import { Breadcrumb, Button, Card, Checkbox, Dropdown, Flex, Input, Pagination } from "antd";
import pic from "../../assets/images/MBLogo.png";
import { Link } from "react-router-dom";
import { HiEye, HiHeart, HiOutlineSearch, HiOutlineShoppingCart } from "react-icons/hi";
import BookService from "../../redux/service/BookService";
import { useDispatch, useSelector } from "react-redux";
import { setAllBook } from "../../redux/slices/BookSlice";

const BookComponent = () => {
  const dispatch = useDispatch();
  const resAllBook = useSelector((state) => state.book.allBook);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 120;
  const getAllBookService = async (page) => {
    try {
      
      const response = await BookService.getAllBook(1, pageSize);
      dispatch(setAllBook(response.data));
    } catch (error) {
      console.error("Error fetching all books:", error);
      // Handle the error as needed (e.g., show an error message to the user)
    }
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
    getAllBookService(page);
  };

  const Data = resAllBook.map((res) => ({
    id: res.id,
    src: res.coverImg,
    price: res.price,
    title: res.title,
  }));
  const items = [
    {
      key: "1",
      label: <Link>1st menu item</Link>,
    },
    {
      key: "2",
      label: <Link>1st menu item</Link>,
    },
    {
      key: "3",
      label: <Link>1st menu item</Link>,
    },
  ];
  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };
  console.log("resAllBook", resAllBook)
  useEffect(() => {
    getAllBookService(currentPage);

  }, [currentPage])
  return (
    <div className="max-w-full px-[10px] sm:px-[20px] md:px-[50px] lg:px-[100px]">
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
            title: <p className="text-blue-800 ms-5">Books</p>,
          },
        ]}
      />
      <div className="p-3 grid grid-cols-2 border-b-2">
        <div className="">Filters</div>
        <div className="flex justify-end">
          <Dropdown
            menu={{
              items,
            }}
            placement="bottomLeft"
          >
            <Button>Sort By:</Button>
          </Dropdown>

          <Dropdown
            className="ms-3"
            menu={{
              items,
            }}
            placement="bottomLeft"
          >
            <Button>10 / page</Button>
          </Dropdown>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-1 mt-5 hidden lg:block">
          Category
          <Flex gap="small" className="mt-4">
            <Flex wrap="wrap" gap="small">
              <Input
                className="border-1 border-gray-500"
                placeholder="Search..."
                prefix={<HiOutlineSearch className="text-blue-700" />}
              />
            </Flex>
          </Flex>
          <div>
            <div>
              <Checkbox.Group
                style={{
                  width: "100%",
                }}
                onChange={onChange}
              >
                <div className="block">
                  <div span={8} className="mb-3 mt-3">
                    <Checkbox value="A">Book1</Checkbox>
                  </div>
                  <div span={8} className="mb-3">
                    <Checkbox value="B">Book2</Checkbox>
                  </div>
                  <div span={8} className="mb-3">
                    <Checkbox value="C">Book3</Checkbox>
                  </div>
                  <div span={8} className="mb-3">
                    <Checkbox value="D">Book3</Checkbox>
                  </div>
                  <div span={8} className="mb-3">
                    <Checkbox value="E">Book4</Checkbox>
                  </div>

                  <div span={8}>
                    <Checkbox value="F">Book5</Checkbox>
                  </div>
                </div>
              </Checkbox.Group>
              <p>show more</p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 col-span-5">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
            {Data.map((dt) => (
              <Card
                key={dt.id}
                className="mt-8 border-0 card-hover shadow-lg"
                hoverable
                cover={
                  <div className="image relative">
                    <div className="overlay-img">
                      <img
                        alt="example"
                        src={dt.src}
                        className="px-14 py-8 bg-[#EEF4F9] card-image bg"
                      />
                    </div>
                    <div className="icon-container flex gap-2 absolute">
                      <Link to=''>
                        <HiHeart className="h-8 w-8 bg-white rounded px-1 py-2 text-blue-800" />
                      </Link>
                      <Link to='/book/view'>
                        <HiEye className="h-8 w-8 bg-white rounded px-1 py-2 text-blue-800" />
                      </Link>
                      <Link to=''>
                        <HiOutlineShoppingCart className="h-8 w-8 bg-white rounded px-1 py-2 text-blue-800" />
                      </Link>
                    </div>
                  </div>
                }
              >
                <p className="text-center text-gray-700 font-bold">
                  {dt.title}
                </p>
                <p className="text-center text-[#292D77] text-2xl font-bold">
                  {dt.price}
                </p>
              </Card>
            ))}
          </div>
          <div className="justify-center flex p-3">
            <Pagination
              current={currentPage}
              pageSize={pageSize}
              // total={totalBooks} // Use the length of the fetched data for total
              onChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookComponent;