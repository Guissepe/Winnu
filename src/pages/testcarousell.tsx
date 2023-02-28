import { Component } from "react";
import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import { Arrow } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/arrow.css";

const DemoComponent = () => {
  const _plugins = [new Arrow()];

    return <Flicking circular={true} plugins={_plugins}>
      <div className="card-panel">1</div>
      <div className="card-panel">2</div>
      <div className="card-panel">3</div>
      <ViewportSlot>
        <span className="flicking-arrow-prev"></span>
        <span className="flicking-arrow-next"></span>
      </ViewportSlot>
    </Flicking>;
  }


export default DemoComponent
