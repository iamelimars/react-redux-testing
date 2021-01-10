import React, { Component } from "react";
import Header from "./components/header";
import Headline from "./components/headline";
import SharedButton from "./components/button";
import ListItem from "./components/listitem";
import { connect } from "react-redux";
import { fetchPosts } from "./actions";
import "./app.scss";

/* This const is not used within our app.
   Although we are passing it to the Headline Component
   it is only here as an exampleof testing PropTypes */
const tempArr = [
  {
    fName: "Joe",
    lName: "Bloggs",
    email: "joebloggs@gmail.com",
    age: 24,
    onlineStatus: true,
  },
];

const initialState = {
  hideBtn: false,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
    this.fetch = this.fetch.bind(this);
  }

  fetch() {
    this.props.fetchPosts();
    this.exampleMethod_updatesState();
  }

  exampleMethod_updatesState() {
    const { hideBtn } = this.state;
    this.setState({
      hideBtn: !hideBtn,
    });
  }

  exampleMethod_returnsAValue(number) {
    return number + 1;
  }

  render() {
    const { posts } = this.props;
    const { hideBtn } = this.state;

    const configButton = {
      buttonText: "Get posts",
      emitEvent: this.fetch,
    };

    return (
      <div className="App" data-test="appComponent">
        <Header />
        <section className="main">
          <Headline
            header="Posts"
            desc="Click the button to render posts!"
            tempArr={tempArr}
          />

          {!hideBtn && <SharedButton {...configButton} />}

          {posts.length > 0 && (
            <div>
              {posts.map((post, index) => {
                const { title, body } = post;
                const configListItem = {
                  title,
                  desc: body,
                };
                return <ListItem key={index} {...configListItem} />;
              })}
            </div>
          )}
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps, { fetchPosts })(App);

// import React from "react";
// import Header from "./components/header";
// import Headline from "./components/headline";
// import SharedButton from "./components/button";
// import ListItem from "./components/listitem";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchPosts } from "./actions";
// import "./app.scss";

// const tempArr = [
//   {
//     fName: "Joe",
//     lName: "Bloggs",
//     email: "joebloggs@gmail.com",
//     age: 24,
//     onlineStatus: true,
//   },
// ];

// const App = () => {
//   const dispatch = useDispatch();
//   const posts = useSelector((state) => state.posts);

//   const fetch = () => {
//     dispatch(fetchPosts());
//   };

//   const configButton = {
//     buttonText: "Get Posts",
//     emitEvent: fetch,
//   };

//   return (
//     <div data-test="appComponent">
//       <Header />
//       <section className="main">
//         <Headline
//           header="Posts"
//           desc="Click the button to render posts"
//           tempArr={tempArr}
//         />
//         <SharedButton {...configButton} />
//         {posts.length > 0 && (
//           <div>
//             {posts.map((post, index) => {
//               const { title, body } = post;
//               const configListItem = {
//                 title,
//                 desc: body,
//               };
//               return <ListItem {...configListItem} key={index} />;
//             })}
//           </div>
//         )}
//       </section>
//     </div>
//   );
// };

// export default App;
