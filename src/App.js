import React, { useState, useEffect } from "react";
import "./App.css";
import mondaySdk from "monday-sdk-js";
import "bootstrap/dist/css/bootstrap.min.css";
import "monday-ui-react-core/dist/main.css";
//Explore more Monday React Components here: https://style.monday.com/
import Button from "monday-ui-react-core/dist/Button";
import TopBar from "./components/Main/TopBar";
import Main from "./components/Main/Main";
import { Provider } from "react-redux";
import { useSelector } from "react-redux";
import store from "./redux/store";

const monday = mondaySdk();
export default function App() {
  monday.setToken(
    "eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjEzNjMyMTE1NiwidWlkIjoyNTM5Mjk4MCwiaWFkIjoiMjAyMS0xMi0wOFQwODo1MzoxMS41MzVaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTEwMjMyOCwicmduIjoidXNlMSJ9.m0y59mso7-bU4w_hqbebYXpYxuthEgXVRufHF4CJrLU"
  );

  const [name, setName] = useState("Nadav");
  const [items, setItems] = useState([]);
  const [meta, setMeta] = useState({});

  useEffect(() => {
    monday.get("context").then((res) => {
      setMeta(res.data);
      console.log(res);
    });
  }, []);

  // const addAnOrder = async () => {
  //   const columnValues = JSON.stringify({ text: "Room Nisan" });
  //   console.log(columnValues);
  //   const variables = { columnValues };
  //   const query = `mutation {
  //     create_item(board_id: 1984654160, item_name: "Test testonovitch", column_values: "{\"text\" : \"eee\"}") {
  //       id
  //     }
  //   }
  //   `;

  //   console.log("q", query, { variables });
  //   const { data } = await monday.api(query);
  //   console.log(data);
  // };

  const test = async () => {
    const query = `mutation  ($itemName : String, $boardId : Int! , $columnValues  : JSON){
    create_item(item_name : $itemName,board_id : $boardId , column_values: $columnValues ,create_labels_if_missing: true) {
     id
    }
  }`;
    const columnValues = JSON.stringify({
      text3: "0505434239",
      text: "Test",
      date4: { date: "2021-12-08" },
    });
    const variables = {
      itemName: "test test",
      boardId: meta.boardId,
      columnValues,
    };
    return await monday.api(query, { variables });
  };

  return (
    <Provider store={store}>
      <div className="App">
        <TopBar />
        {/* <Button onClick={test}>Test</Button> */}
        <Main monday={monday} meta={meta} />
      </div>
    </Provider>
  );
}
