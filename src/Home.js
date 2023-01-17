import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <Hero text="Welcome to the Movie Browser" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
            Welcome to our movie database search! Here you can find all the movies and TV shows you could ever want. Our easy to use search engine will help you find exactly what you’re looking for in no time. Whether you’re looking for a classic or a new release, we have it all! So start your search today and explore our vast selection of films and TV shows.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

//<h1>Hello world from React 201 </h1> -it was under the <Hero text... />!
