import React from "react";
import { Cards, Chart, Countrypicker } from "./component";
import style from "./App.module.css";
import { fetchData } from "./api";

class App extends React.Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  render() {
    const { data } = this.state;
    return (
      <div className={style.container}>
        <Cards data={data} />
        <Countrypicker />
        <Chart />
      </div>
    );
  }
}

export default App;
