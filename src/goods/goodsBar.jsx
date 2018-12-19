import React, {Component} from 'react';
import {Button, Col, Row} from 'antd';
import reqwest from 'reqwest';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import 'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';


class GoodsBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      goodsNameData: [],
      goodsSaleCountData: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.fetch();
  }

  fetch = () => {
    reqwest({
      url: 'http://localhost:3000/totalSaleStats/',
      method: 'get',
      type: 'json',
    }).then((data) => {
      // Read total count from server
      let goodsNameData = [];
      let goodsSaleCountData = [];
      let length = Math.round(Math.random()*20);
      for (let j = 0, len = length; j < len; j++) {
        goodsNameData[j] = data[j].goodsName;
        goodsSaleCountData[j] = data[j].totalSale;
      }
      this.setState({
        goodsNameData: goodsNameData,
        goodsSaleCountData: goodsSaleCountData,
      });

      this.paintSaleBar();
    });
  };

  paintSaleBar = () => {
    // 基于准备好的dom，初始化echarts实例
    let myChart = echarts.init(document.getElementById('main'));
    // 绘制图表
    myChart.setOption({
      title: {text: '商品售卖量',left:'center'},
      tooltip: {},
      xAxis: {
        data: this.state.goodsNameData,
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: this.state.goodsSaleCountData
      }]
    });
  };


  render() {
    return (
      <div>
        <div style={{textAlign:'center'}}><Button onClick={this.fetch}>更新</Button></div>
        <Row>
          <Col span={20} offset={2}>
            <div id="main" style={{ height: 400}}/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default GoodsBar;

