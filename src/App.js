import React from "react";
import Header from "./components/header";
import Headline from "./components/headline";
import SharedButton from "./components/button";
import ListItem from "./components/listitem";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./actions";
import "./app.scss";

const tempArr = [
  {
    fName: "Joe",
    lName: "Bloggs",
    email: "joebloggs@gmail.com",
    age: 24,
    onlineStatus: true,
  },
];

const App = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state);

  const fetch = () => {
    dispatch(fetchPosts());
  };

  const configButton = {
    buttonText: "Get Posts",
    emitEvent: fetch,
  };

  return (
    <div>
      <Header />
      <section className="main">
        <Headline
          header="Posts"
          desc="Click the button to render posts"
          tempArr={tempArr}
        />
        <SharedButton {...configButton} />
        {posts.length > 0 && (
          <div>
            {posts.map((post, index) => {
              const { title, body } = post;
              const configListItem = {
                title,
                desc: body,
              };
              return <ListItem {...configListItem} key={index} />;
            })}
          </div>
        )}
      </section>
    </div>
  );
};

export default App;
