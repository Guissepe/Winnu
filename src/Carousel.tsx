import { Component } from "react";
import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import '@egjs/react-flicking/dist/flicking.css';


const updateTransform = (e:any) => {
  e.currentTarget.panels.forEach((panel:any) => {
    const rotateVal = -panel.progress * 14;
    const sinRot = Math.sin(Math.abs(rotateVal * Math.PI / 90));
    const depth = 180 * sinRot * sinRot;
    panel.element.style.transform = `translateZ(-${depth}px) rotateX(${rotateVal}deg)`;
  });
};

export default  class DemoComponent extends Component {
  public render() {
    return <Flicking horizontal={true} onReady={updateTransform} onMove={updateTransform}>
      <div className="date-panel">1</div>
      <div className="date-panel">2</div>
      <div className="date-panel">3</div>
      <div className="date-panel">4</div>
      <div className="date-panel">5</div>
      <div className="date-panel">6</div>
      <div className="date-panel">7</div>
      <div className="date-panel">8</div>
      <div className="date-panel">9</div>
      <div className="date-panel">10</div>
      <div className="date-panel">11</div>
      <div className="date-panel">12</div>
      <ViewportSlot>
        <div className="date-panel-border"></div>
        <div className="shadow-top"></div>
        <div className="shadow-bottom"></div>
      </ViewportSlot>
    </Flicking>;
  }
}
