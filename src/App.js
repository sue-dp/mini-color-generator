import { Component } from "react";
import "./App.scss";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      colorChosen: null,
    };

    this.colorList = [
      "lightblue",
      "lightgreen",
      "yellow",
      "salmon",
      "pink",
      "orange",
      "lime",
      "hotpink",
      "dodgerblue",
      "purple",
      "red",
      "aqua",
      "aquamarine",
      "black",
      "white",
      "green",
      "beige",
      "blueviolet",
      "brown",
      "chartreuse",
      "coral",
      "cornflowerblue",
      "crimson",
      "fuchsia",
      "forestgreen",
      "indigo",
      "midnightblue",
      "seagreen",
      "slateblue",
      "springgreen",
      "teal",
      "thistle",
      "turquoise",
    ];

    const randomIndex1 = Math.floor(Math.random() * this.colorList.length);
    this.randomColor1 = this.colorList[randomIndex1];

    const randomIndex2 = Math.floor(Math.random() * this.colorList.length);
    this.randomColor2 = this.colorList[randomIndex2];

    const randomIndex3 = Math.floor(Math.random() * this.colorList.length);
    this.randomColor3 = this.colorList[randomIndex3];

    const randomIndex4 = Math.floor(Math.random() * this.colorList.length);
    this.randomColor4 = this.colorList[randomIndex4];
  }

  handleHover = (color) => {
    console.log(color);
    this.setState({ colorChosen: color });
  };

  render() {
    return (
      <div className="app">
        <div className="main-container">
          <div className="background">
            <div className="left-colors">
              <div
                className="light-blue box"
                onMouseEnter={() => this.handleHover(this.randomColor1)}
              />

              <div
                className="pink box"
                onMouseEnter={() => this.handleHover(this.randomColor2)}
              />
            </div>

            <div className="right-colors">
              <div
                className="gold box"
                onMouseEnter={() => this.handleHover(this.randomColor3)}
              />

              <div
                className="light-green box"
                onMouseEnter={() => this.handleHover(this.randomColor4)}
              />
            </div>
          </div>

          <div className="color-display">
            <div
              className="display-color"
              style={{ color: `${this.state.colorChosen}` }}
            >
              {this.state.colorChosen}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
