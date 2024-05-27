import {
  Card,
  Elevation
} from "@blueprintjs/core";
import type { InlineValueConfig } from "./Macro.flyde"
import React from "react";
import { MacroEditorComp } from "@flyde/core";

const Macromyeditor: MacroEditorComp<InlineValueConfig> =
  function Macromyeditor(props) {
    const { value } = props;

    const style: { [key: string]: string } = {
      width: "300px",
	    height: "200px"
    };

    return (
      <div>
        <Card interactive={true} elevation={Elevation.ONE}>
          <img src={value.pic} style={style}></img>
        </Card>
      </div>
    );
  };

export default Macromyeditor;
