import { Component } from "react";
import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import { Arrow } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/arrow.css";

export default class DemoComponent extends Component {
  private _plugins = [new Arrow()];

  public render() {
    return <Flicking circular={true} plugins={this._plugins}>
      <div className="card-panel">1</div>
      <div className="card-panel">2</div>
      <div className="card-panel">3</div>
      <ViewportSlot>
        <span className="flicking-arrow-prev is-circle"></span>
        <span className="flicking-arrow-next is-circle"></span>
      </ViewportSlot>
    </Flicking>;
  }
}
