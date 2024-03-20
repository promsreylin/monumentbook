import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BookService from "../../redux/service/BookService";
import { setBestSelling, setBookOfTheWeek, setNewArrival } from "../../redux/slices/BookSlice";
import { Carousel } from "antd";
import NewsServises from "../../redux/service/NewsServices";
import { setAllNews } from "../../redux/slices/NewsSlices";
import AuthorServises from "../../redux/service/AuthorService";
import { setAllAuthor } from "../../redux/slices/AuthorSlice";
import vectorBgWave from '../../assets/images/Vectorbg-wave.png';
import cover from '../../assets/images/Books Cover/Nineteen_Eighty_Four_Cover.jpg';
import reading from '../../assets/images/Reading glasses.gif';
import { Link } from "react-router-dom";
import CardComponent from "./component/CardComponent";
import bestsalling from "../../assets/images/Best Selling.png";
import featureauthor from "../../assets/images/Feature Aurthor.png";
import newarrivals from "../../assets/images/New Arrivals.png";
import ouractivities from "../../assets/images/Our Activities.png";
import bookglasses from "../../assets/images/Book glasses.gif";
import FeatureComponent from "./component/FeatureComponent";
import ButtonComponent from "./component/ButtonComponent";
import CardOurActivites from "./component/CardOurActivites";

const HomeComponent = () => {

  const dispatch = useDispatch();


  const bestSelling = useSelector((state) => state.book.bestSelling)
  const bookOfTheWeek = useSelector((state) => state.book.bookOfTheWeek)
  const newArrival = useSelector((state) => state.book.newArrival)
  const resNews = useSelector((state) => state.news.allNews)
  const resAuthor = useSelector((state) => state.author.featureAuthor)

  //Books of The Week
  const booksOfTheWeekService = () => {
    BookService.getBookOfTheWeek()
      .then((res) => {
        console.log("res.data", res.data);
        dispatch(setBookOfTheWeek(res.data));
      })
      .catch((error) => {
        console.error("Error fetching best-selling books:", error);
        // Handle the error as needed, e.g., show a user-friendly message or dispatch an error action
      });
  };
  //Books of The Week Slide Settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  //Books of The Week

  // Best Selling Books
  const getAllBestSellingBooks = () => {
    BookService.getBookSelling()
      .then((res) => {
        console.log("res.data", res.data);
        dispatch(setBestSelling(res.data));
      })
      .catch((error) => {
        console.error("Error fetching best-selling books:", error);
        // Handle the error as needed, e.g., show a user-friendly message or dispatch an error action
      });
  };
  // New Arrivals
  const newArrivalService = () => {
    BookService.getNeweArrival()
      .then((res) => {
        dispatch(setNewArrival(res.data));
      })
      .catch((error) => {
        console.error("Error fetching best-selling books:", error);

      });
  };
  // Best Selling Books
  //Books of The Week

  // Books of The Week
  const booksOfTheWeek = bookOfTheWeek.map((item) => ({
    id: item.id,
    image: item.coverImg,
    title: item.title,
    author: item.author.map((autor) => autor.name),
    isbn: item.isbn,
    category: item.categories.map((category) => category.name),
    pubdate: item.publishDate,
    publisher: item.publisher,
  }));

  const newArrivals = newArrival.map((item) => ({
    coverimg: item.coverImg,
    price: item.price,
    title: item.title,
    author: item.author.map((autor) => autor.name),
  }));

  // New Arrivals
  // Feature Author
  const authorService = () => {
    AuthorServises.getfeatureAuthor().then((res) => {
      dispatch(setfeatureAuthor(res.body.data));
    })
      .catch((error) => {
        console.error("Error fetching best-selling books:", error);

      });
  }
  // news
  const newsService = () => {
    NewsServises.getAllNews()
      .then((res) => {
        console.log("res.dataa", res.data);
        dispatch(setAllNews(res.data));
      })
      .catch((error) => {
        console.error("Error fetching best-selling books:", error);
        // Handle the error as needed, e.g., show a user-friendly message or dispatch an error action
      });
  }

  const featureAuthor = resAuthor.map((author) => ({

    authorquote: author.quote !== null ? author.quote : 'No quote available',
    authorname: author.name,
    authorimg: author.image,
    authordesc: author.description,
    authorbooks: author.books.map((books) => books.coverImg), // Assuming you want an array of book images
  }));

  const news = resNews.map((newsr) => ({
    id: 1,
    image: newsr.coverImg,
    title: newsr.title,
    description: newsr.description
  }))
  useEffect(() => {
    getAllBestSellingBooks();
    newArrivalService();
    booksOfTheWeekService();
    newsService();
    authorService();
  }, [])
  return (
    <>
      {/* Book of The Week */}
      <section>
        <div className='h-screen max-w-full px-[5px] sm:px-[20px] md:px-[50px] lg:px-[100px]' style={{ backgroundImage: `url(${vectorBgWave})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
          <h1 className="flex text-[#2BD7AD] font-bold text-2xl sm:text-4xl md:text-4xl lg:text-[3.75rem] py-10">
            Books of The Week
          </h1>
          <Carousel autoplay>
            {booksOfTheWeek.length > 0 ? (booksOfTheWeek.map((booksOfTheWeek) => (
              <div>
                <section className="text-white lg:px-20 md:px-10 px-10 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8 mb-20">
                  <img className="md:max-w-48 md:max-w-56 lg:max-w-96 m-auto max-w-none" src={booksOfTheWeek.image} alt="Cover" />
                  <div className="mt-10">
                    <h3 className="line-clamp-2 leading-tight font-bold text-4xl">{booksOfTheWeek.title}</h3>
                    <p className="mt-2 flex gap-1 md:mb-0 text-[3.2vw] md:text-[2vw] xl:text-[1.75rem] text-gray-400">
                      Author: <span className="line-clamp-1 ml-5">{booksOfTheWeek.author}</span>
                    </p>
                    <div className="flex my-12 gap-5">
                      <div className="gap-2 flex flex-col text-[2.2vw] md:text-[1.8vw] xl:text-[1.75rem] font-bold shrink-0">
                        <div className="line-clamp-1">ISBN :</div>
                        <div className="line-clamp-1">Category :</div>
                        <div className="line-clamp-1">Publish Date :</div>
                        <div className="line-clamp-1">Publisher :</div>
                      </div>
                      <div className="flex flex-col gap-2 text-[2.2vw] md:text-[1.8vw] xl:text-[1.75rem] line-clamp-1">
                        <div className="line-clamp-1 w-96">{booksOfTheWeek.isbn}</div>
                        <div className="line-clamp-1 w-96">{booksOfTheWeek.category}</div>
                        <div className="line-clamp-1 w-96">{booksOfTheWeek.pubdate}</div>
                        <div className="line-clamp-1 w-96">{booksOfTheWeek.publisher}</div>
                      </div>
                    </div>
                    <button className="px-5 py-2 bg-[#2BD7AD] rounded-xl hover:bg-[#009CA3] duration-300 text-[3vw] font-bold md:text-[2vw] lg:text-[1.625rem] text-white">
                      Add to Cart
                    </button>
                  </div>
                </section>
              </div>
            ))) : (
              <>
                <div>
                  <section className="text-white grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8">
                    <img className="md:max-w-48 md:max-w-56 lg:max-w-96 m-auto max-w-none" src={reading} alt="Sapiens_Cover" />
                    <p className="text-[3.75rem] mt-10 flex items-center text-gray-400">No data</p>
                  </section>
                </div>
              </>)}
          </Carousel>
        </div>
      </section>

      {/* Feature */}
      <section>
        <h1 className="pt-5 flex text-[#2BD7AD] justify-center m-[4vw] lg:m-[1.875rem] font-bold text-2xl sm:text-4xl md:text-4xl lg:text-[3.75rem]">
          Feature
        </h1>
        <div className="py-10 px-[5px] sm:px-[20px] md:px-[150px] lg:px-[200px] xl:px-[250px] grid place-content-center grid-flow-row lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-4 mx-auto ">
          <Link to="/best-salling"><FeatureComponent featureimage={bestsalling} text="Best Selling" /></Link>
          <Link to="/new-arrivals"><FeatureComponent featureimage={newarrivals} text="New Arrivals" /></Link>
          <Link to="/feature-aurthor"><FeatureComponent featureimage={featureauthor} text="Feature Aurthor" /></Link>
          <Link to="/our-activites"><FeatureComponent featureimage={ouractivities} text="Our Activities" /></Link>
        </div>
      </section>

      {/* Best Selling Books */}
      <section>
        <h1 className="py-5 flex text-[#2BD7AD] justify-center m-[4vw] lg:m-[1.875rem] font-bold text-2xl sm:text-4xl md:text-4xl lg:text-[3.75rem]">
          Best Selling Books
        </h1>
        <div className="background-gradient py-20">
          <div className="max-w-full px-[5px] sm:px-[20px] md:px-[50px] lg:px-[100px] grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-6 mb-5 mx-auto">
            {bestSelling.length > 0 ? (bestSelling.map((item) => (
              <CardComponent image={item.coverImg} price={item.price} title={item.title} description={item.description} />
            ))) : (
              <CardComponent image={cover} price="200" title="slkdjfsdfsdf" description="jksdjflksd" />
            )}
          </div>
          <div className="mt-10">
            <ButtonComponent namebutton="Explore More" />
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section>
        <h1 className="py-5 flex text-[#2BD7AD] justify-center m-[4vw] lg:m-[1.875rem] font-bold text-2xl sm:text-4xl md:text-4xl lg:text-[3.75rem]">
          New Arrivals
        </h1>
        <div className="">
          <div className="max-w-full px-[5px] sm:px-[20px] md:px-[50px] lg:px-[100px] grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-6 mb-5 mx-auto">
            {newArrivals.length > 0 ? (newArrivals.map((newArrivals) => (
              <CardComponent image={newArrivals.coverImg} price={newArrivals.price} title={newArrivals.title} description={newArrivals.author} />
            ))) : (
              <CardComponent image={cover} price="200" title="slkdjfsdfsdf" description="jksdjflksd" />
            )}
          </div>
          <div className="mt-10">
            <ButtonComponent namebutton="Explore More" />
          </div>
          <div className="flex  items-center place-content-center">
            <div className=" border-double border-b-4 border-[#292D77] w-40 mr-5" ></div>
           <img src={bookglasses} alt="" />
            <div className=" border-double border-b-4 border-[#292D77] w-40 ml-5" ></div>
          </div>

        </div>
      </section>

      {/* Feature Author */}
      <section>
        <h1 className="py-5 flex text-[#2BD7AD] justify-center m-[4vw] lg:m-[1.875rem] font-bold text-2xl sm:text-4xl md:text-4xl lg:text-[3.75rem]">
          Feature Author
        </h1>
        <div className="bg-feature-author py-20">
          <div className="max-w-full px-[5px] sm:px-[20px] md:px-[150px] lg:px-[200px] xl:px-[250px] mb-5 mx-auto">
            {
              featureAuthor.map((item) => (
                <div className="grid grid-cols-2 gap-6">
                  <img className="w-full h-full m-auto rounded-lg" src={item.authorimg} alt="George_Orwell" />
                  <div className="flex flex-col justify-between w-full pt-6">
                    <div className="items-start text-2xl rounded-lg">
                      <div className="text-4xl text-[#253C95] h-16 font-bold line-clamp-1 uppercase">{item.authorname}</div>
                      <p className="text-gray-500 line-clamp-3 h-28">{item.authordesc}</p>
                    </div>
                    <div className="flex gap-4 pt-6">
                      {item.authorbooks.map((book, index) => (
                        <div className="flex w-[100px] h-[150px] xl:w-[9.375rem] xl:h-[14.0625rem] shrink-0">
                          <img className="max-w-full max-h-full m-auto rounded-lg" src={book} alt={`${index + 1}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      {/* Our Activities */}
      <section>
        <h1 className="py-5 flex text-[#2BD7AD] justify-center m-[4vw] lg:m-[1.875rem] font-bold text-2xl sm:text-4xl md:text-4xl lg:text-[3.75rem]">
          Our Activities
        </h1>
        <div className="py-10">
          <div className="max-w-full px-[5px] sm:px-[20px] md:px-[50px] lg:px-[100px] grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-6 mb-5 mx-auto">
            {news.length > 0 ? (news.map((news) => (
              <CardOurActivites image={news.image} title={news.title} description={news.description} />
            ))) : (
              <CardOurActivites image={cover} title="slkdjfsdfsdf" description="jksdjflksd" />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeComponent;
