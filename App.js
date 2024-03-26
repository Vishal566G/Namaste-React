// const heading = React.createElement("h1",
//     {
//         id: "heading",
//         className: "buddha",
//         data: "MyNameIsVishal"
//     },
//     "Hello world inside React!!");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);


const parent = React.createElement(
    "div",
    { id: "parent" },
    [
        React.createElement(
            "div",
            { id: "child1" }, [
            React.createElement("h1", {}, "I'm H1 tag"),
            React.createElement("h1", {}, "I'm H1 tag")
        ]
        ),
        React.createElement(
            "div",
            { id: "child2" }, [
            React.createElement("h1", {}, "I'm H1 tag"),
            React.createElement("h1", {}, "I'm H1 tag")
        ]
        )
    ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(parent)

root.render(parent)