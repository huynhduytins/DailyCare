import { useAppContext } from "../../context/appContext";
import Card from "../Patient/News/Card";

const Articles = () => {
  const { articles } = useAppContext();

  return (
    <div className="mb-10 flex w-full flex-col items-center justify-center">
      <h2 className="mt-10 w-10/12 text-xl font-bold">
        Favorite articles: {articles.myFavorite.length}
      </h2>
      <div className="ml-32 mt-10 flex flex-wrap gap-20 ">
        {articles.myFavorite.map((art) => (
          <Card
            img={art.img}
            subImg={art.subImg}
            title={art.title}
            calendar={art.calendar}
            name={art.name}
            like={art.like}
            server={true}
          />
        ))}
      </div>
      <h2 className="my-10 w-10/12 text-xl font-bold">
        All articles: {articles.allArticles.length}
      </h2>
      <div className="flex flex-wrap justify-center gap-20 ">
        {articles.allArticles.map((art) => (
          <Card
            img={art.img}
            subImg={art.subImg}
            title={art.title}
            calendar={art.calendar}
            name={art.name}
            like={art.like}
            server={true}
          />
        ))}
      </div>
    </div>
  );
};

export default Articles;
