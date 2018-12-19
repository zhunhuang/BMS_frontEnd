import React,{Component} from 'react';
import StackedLineChart from "./stackedLineChart";
import PieChart from "./pieChart";


class EchartsContent extends Component{

  render() {
    return (
      <div>
        <StackedLineChart/>
        <hr/>
        <PieChart/>
      </div>
    );
  }
}

export default EchartsContent;

