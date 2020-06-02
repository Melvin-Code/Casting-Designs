import React, { Component } from "react";
import { SketchPicker } from "react-color";
import reactCSS from "reactcss";
class Colorquestion3 extends Component {
  state = {
    displayColorPicker: false,
    background: "blue",
  };
  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
  };
  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };
  render() {
    const styles = reactCSS({
      default: {
        color: {
          width: "36px",
          height: "14px",
          borderRadius: "2px",
          background: this.state.background,
        },
        swatch: {
          padding: "5px",
          background: "#fff",
          borderRadius: "1px",
          boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
          display: "inline-block",
          cursor: "pointer",
        },
        popover: {
          position: "absolute",
          zIndex: "2",
        },
        cover: {
          position: "fixed",
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px",
        },
      },
    });
    return (
      <div className='color-box'>
        <div>
          <div style={styles.swatch} onClick={this.handleClick}>
            <div style={styles.color} />
          </div>
          {this.state.displayColorPicker ? (
            <div style={styles.popover}>
              <div style={styles.cover} onClick={this.handleClose} />
              <SketchPicker
                color={this.state.background}
                onChange={this.handleChangeComplete}
              />
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Colorquestion3;
