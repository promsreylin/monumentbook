import { Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { FaFacebookF, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const ContactComponent = () => {
  const [form] = Form.useForm();

  return (
      <div className="max-w-full my-10 mx-[5px] sm:mx-[20px] md:mx-[50px] lg:mx-[150px] h-auto text-center">
        <div className="text-2xl sm:text-4xl md:text-4xl lg:text-[3.75rem] font-bold tracking-tight text-[#292D77]">
          Contact
          <div className="md:text-base text-sm dark:text-gray-700 font-bold lg:px-36 md:px-10 py-5">
            Monument Books was established in Phnom Penh in 1993 and has grown
            to become the largest chain of bookstores in Cambodia. Today there
            are 12 stores in six cities throughout Cambodia, Laos and Myanmar
          </div>
        </div>
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4 md:grid-cols-2 mx-32 relative z-10">
          <section>
            <Form form={form} layout="vertical" autoComplete="off" className="">
              <Input
                placeholder="Full name"
                className="placeholder:text-[#363B9D] border-[#363B9D] border-1 mb-4 text-sm"
              />
              <Input
                placeholder="Email address"
                className="placeholder:text-[#363B9D] border-[#363B9D] border-1 mb-4 text-sm"
              />
              <Input
                placeholder="Subject"
                className="placeholder:text-[#363B9D] border-[#363B9D] border-1 mb-4 text-sm"
              />
              <TextArea
                rows={6}
                placeholder="Your message"
                className="placeholder:text-[#363B9D] border-[#363B9D] border-1 mb-4 text-md"
              />
              <Button className="bg-blue-900 text-white px-5 text-md grid justify-items-start self-center">
                Send message
              </Button>
            </Form>
          </section>
          <section className="text-start">
            <div className="font-bold">Head Office</div>
            <div className="flex mt-4">
              <FaPhoneAlt className="me-5 mt-1 text-[#292D77]" />
              <span className="">01234567</span>
            </div>
            <div className="flex mt-4">
              <BsFillEnvelopeFill className="me-5 mt-1 text-[#292D77]" />
              <Link>sambo@monument-books.com</Link>
            </div>
            <div className="flex mt-4">
              <FaFacebookF className="me-5 mt-1 text-[#292D77]" />
              <Link>https://www.facebook.com/monumentbooksandtoys/</Link>
            </div>
            <div className=" border border-b-2 border-[#EEF4F9] w-100 ml-1 mt-5"></div>
            <div className="mt-5 font-bold">Monument Books & Toys Norodom</div>
            <div className="flex mt-4">
              <FaPhoneAlt className="me-5 mt-1 text-[#292D77]" />
              <span className="">01234567</span>
            </div>
          </section>
          {/* <img src={contact} alt="" /> */}
        </div>
      </div>
  );
};

export default ContactComponent;
