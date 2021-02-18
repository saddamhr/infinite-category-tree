import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import "./styles.css";
import MultiMenus from "./MultiMenus";

const Wrapper = styled.aside`
  background: #ccc;
  width: 300px;
`;

// const menus = [
//   {
//     label: "Menu 1"
//   },
//   {
//     label: "Menu 2",
//     submenu: [
//       {
//         label: "Sub Menu 1"
//       },
//       {
//         label: "Sub Menu 2"
//       }
//     ]
//   },
//   {
//     label: "Menu 3",
//     submenu: [
//       {
//         label: "Sub Menu 1",
//         submenu: [
//           {
//             label: "Boom 1"
//           },
//           {
//             label: "Boom 2"
//           }
//         ]
//       },
//       {
//         label: "Sub Menu 2",
//         submenu: [
//           {
//             label: "Deep 1"
//           },
//           {
//             label: "Deep 2",
//             submenu: [
//               {
//                 label: "Lorem 1"
//               },
//               {
//                 label: "Lorem 2",
//                 submenu: [
//                   {
//                     label: "Super Deep"
//                   }
//                 ]
//               }
//             ]
//           }
//         ]
//       },
//       {
//         label: "Sub Menu 3"
//       },
//       {
//         label: "Sub Menu 4",
//         submenu: [
//           {
//             label: "Last 1"
//           },
//           {
//             label: "Last 2"
//           },
//           {
//             label: "Last 3"
//           }
//         ]
//       }
//     ]
//   },
//   {
//     label: "Menu 4"
//   }
// ];

const comments = [
  {
    id: 1,
    category_name: "DESKTOP PC",
    parent: null,
    level: "root",
    root: 1
  },
  {
    id: 2,
    category_name: "ASUS Brand PC",
    parent: 1,
    level: "leaf",
    root: 1
  },
  {
    id: 3,
    category_name: "Last Test",
    parent: 8,
    level: "leaf",
    root: 1
  },
  {
    id: 4,
    category_name: "Nova",
    parent: 3,
    level: "leaf",
    root: 3
  },
  {
    id: 5,
    category_name: "LAPTOPS",
    parent: null,
    level: "root",
    root: 5
  },
  {
    id: 6,
    category_name: "TestCat",
    parent: 5,
    level: "leaf",
    root: 5
  },
  {
    id: 7,
    category_name: "Components",
    parent: null,
    level: "root",
    root: 7
  },
  {
    id: 8,
    category_name: "Asus Laptop",
    parent: 5,
    level: "leaf",
    root: 5
  }
];

function App() {
  const nest = (items, id = null, link = "parent") =>
    items
      .filter((item) => item[link] === id)
      .map((item) => ({ ...item, children: nest(items, item.id) }));

  const menus = nest(comments);
  console.log(menus);
  return (
    <Wrapper>
      <MultiMenus menus={menus} />
    </Wrapper>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
