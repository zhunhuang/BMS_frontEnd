import React, {Component} from 'react';
import {Button, Col, Row} from 'antd';
import reqwest from 'reqwest';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入折线图
import 'echarts/lib/chart/line';
// 引入提示框、标题、图例、工具箱、格子组件
// 需要引入哪些组件，就看chart的数据传了哪些属性进去
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/toolbox';
import 'echarts/lib/component/axis';


class StackedLineChart extends Component {

  constructor(props) {
    super(props);

    this.state = {
      goodsNameData: [],
      goodsInfo: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.fetch();
  }

  fetch = () => {
    reqwest({
      url: 'http://localhost:3000/last7daySaleStats/',
      method: 'get',
      type: 'json',
    }).then((data) => {
      // Read total count from server
      let goodsNameData = [];
      let goodsInfo = [];
      let length = Math.round(Math.random() * 5);
      for (let j = 0, len = length; j < len; j++) {
        goodsNameData[j] = data[j].goodsName;
        goodsInfo[j] = {};
        goodsInfo[j].name = data[j].goodsName;
        goodsInfo[j].type = 'line';
        goodsInfo[j].stack = '总量';
        goodsInfo[j].data = data[j].sales;
      }
      this.setState({
        goodsNameData: goodsNameData,
        goodsInfo: goodsInfo,
      });

      this.paintSaleBar();
    });
  };

  paintSaleBar = () => {
    // 基于准备好的dom，初始化echarts实例
    let myChart = echarts.init(document.getElementById('stackedLineChart'));
    // 绘制图表
    myChart.clear();
    myChart.setOption({
      title: {
        text: '最近七天每日销售数据'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: this.state.goodsNameData
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      yAxis: {
        type: 'value'
      },
      series: this.state.goodsInfo
    },true);
  };


  render() {
    return (
      <div>
        <div style={{textAlign: 'center'}}><Button onClick={this.fetch}>更新</Button></div>
        <Row>
          <Col span={20} offset={2}>
            <div id="stackedLineChart" style={{width: 800, height: 400}}/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default StackedLineChart;

