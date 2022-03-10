import React from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function Chart(props) {
  return (
    <HighchartsReact
      oneToOne={true}
      redraw={false}
      // key={Math.random()}
      highcharts={Highcharts}
      {...props}
      containerProps={{ className: props.className }}
    />
  );
}
