import React, { Component } from "react";
import "./style.css";
import moment from "moment";

class Clock extends Component {

  constructor() {
    super();
    this.state = {
      time: moment().format("HH:mm:ss"),
      h11Lit: false,
      h12Lit: false,
      h21Lit: false,
      h22Lit: false,
      h24Lit: false,
      h28Lit: false,
      m11Lit: false,
      m12Lit: false,
      m14Lit: false,
      m21Lit: false,
      m22Lit: false,
      m24Lit: false,
      m28Lit: false,
      s11Lit: false,
      s12Lit: false,
      s14Lit: false,
      s21Lit: false,
      s22Lit: false,
      s24Lit: false,
      s28Lit: false
    };
  }

  componentWillMount() {
    this.update();
  }

  update() {
    setInterval(() => {
      let hours = moment().format("HH").split("");
      let minutes = moment().format("mm").split("");
      let seconds = moment().format("ss").split("");
      let h1, h2, m1, m2, s1, s2;
      let payload = [];
      if(hours.length > 1) {
        h1 = hours[0];
        h2 = hours[1];
        payload.push(parseInt(h1), parseInt(h2));
      } else {
        h1 = 0;
        h2 = hours[0];
        payload.push(parseInt(h1), parseInt(h2));
      }
      if(minutes.length > 1) {
        m1 = minutes[0];
        m2 = minutes[1];
        payload.push(parseInt(m1), parseInt(m2));
      } else {
        m1 = 0;
        m2 = minutes[0];
        payload.push(parseInt(m1), parseInt(m2));
      }
      if(seconds.length > 1) {
        s1 = seconds[0];
        s2 = seconds[1];
        payload.push(parseInt(s1), parseInt(s2));
      } else {
        s1 = 0;
        s2 = seconds[0];
        payload.push(parseInt(s1), parseInt(s2));
      }
      this.lightController(payload);
    }, 1000);
  }

  lightController(time) {
    let lightNames = [
      "h11", "h12",
      "h21", "h22", "h24", "h28",
      "m11", "m12", "m14",
      "m21", "m22", "m24", "m28",
      "s11", "s12", "s14",
      "s21", "s22", "s24", "s28"
    ];
    let results = [];
    time.forEach(num => {
      if(num >= 8) {
        num = num - 8;
        results.push(true);
      } else {
        results.push(false);
      }
      if(num >= 4) {
        num = num - 4;
        results.push(true);
      } else {
        results.push(false);
      }
      if(num >= 2) {
        num = num - 2;
        results.push(true);
      } else {
        results.push(false);
      }
      if(num >= 1) {
        results.push(true);
      } else {
        results.push(false);
      }
    });
    results.splice(0, 2);
    results.splice(6, 1);
    results.splice(14, 1);
    let updatePayload = {};
    for(let i = 0; i < results.length; i++) {
      updatePayload[`${lightNames[i]}Lit`] = results[i];
    }
    this.setState(updatePayload);
  }

  render() {
    return (
      <div className="clockContainer">
        <div className="pairing">
          <div className="circleHouse">
            <div id="h11" className={ this.state.h11Lit ? "circle lightUp" : "circle" }></div>
            <div id="h12" className={ this.state.h12Lit ? "circle lightUp" : "circle" }></div>
          </div>
          <div className="circleHouse">
            <div id="h21" className={ this.state.h21Lit ? "circle lightUp" : "circle" }></div>
            <div id="h22" className={ this.state.h22Lit ? "circle lightUp" : "circle" }></div>
            <div id="h24" className={ this.state.h24Lit ? "circle lightUp" : "circle" }></div>
            <div id="h28" className={ this.state.h28Lit ? "circle lightUp" : "circle" }></div>
          </div>
        </div>
        <div className="pairing">
          <div className="circleHouse">
            <div id="m11" className={ this.state.m11Lit ? "circle lightUp" : "circle" }></div>
            <div id="m12" className={ this.state.m12Lit ? "circle lightUp" : "circle" }></div>
            <div id="m14"className={ this.state.m14Lit ? "circle lightUp" : "circle" }></div>
          </div>
          <div className="circleHouse">
            <div id="m21" className={ this.state.m21Lit ? "circle lightUp" : "circle" }></div>
            <div id="m22" className={ this.state.m22Lit ? "circle lightUp" : "circle" }></div>
            <div id="m24" className={ this.state.m24Lit ? "circle lightUp" : "circle" }></div>
            <div id="m28" className={ this.state.m28Lit ? "circle lightUp" : "circle" }></div>
          </div>
        </div>
        <div className="pairing">
          <div className="circleHouse">
            <div id="s11" className={ this.state.s11Lit ? "circle lightUp" : "circle" }></div>
            <div id="s12" className={ this.state.s12Lit ? "circle lightUp" : "circle" }></div>
            <div id="s14" className={ this.state.s14Lit ? "circle lightUp" : "circle" }></div>
          </div>
          <div className="circleHouse">
            <div id="s21" className={ this.state.s21Lit ? "circle lightUp" : "circle" }></div>
            <div id="s22" className={ this.state.s22Lit ? "circle lightUp" : "circle" }></div>
            <div id="s24" className={ this.state.s24Lit ? "circle lightUp" : "circle" }></div>
            <div id="s28" className={ this.state.s28Lit ? "circle lightUp" : "circle" }></div>
          </div> 
        </div>
      </div>
    );
  }
}

export default Clock;