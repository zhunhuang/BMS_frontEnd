import React, {Component} from 'react';
import {Button, Col, Row} from 'antd';
import reqwest from 'reqwest';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入饼状图
import 'echarts/lib/chart/pie';
// 引入提示框、标题、图例、工具箱、格子组件
// 需要引入哪些组件，就看chart的数据传了哪些属性进去
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/toolbox';
import 'echarts/lib/component/axis';


class PieChart extends Component {

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
      url: 'http://localhost:3000/totalSaleStats/',
      method: 'get',
      type: 'json',
    }).then((data) => {
      // Read total count from server
      let goodsNameData = [];
      let goodsInfo = [];
      let length = Math.round(Math.random() * 8);
      for (let j = 0, len = length; j < len; j++) {
        goodsNameData[j] = data[j].goodsName;
        goodsInfo[j] = {};
        goodsInfo[j].name = data[j].goodsName;
        goodsInfo[j].value = data[j].totalSale;
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
    let myChart = echarts.init(document.getElementById('pieChart'));
    // 绘制图表
    myChart.clear();
    myChart.setOption({
      title : {
        text: '各商品售卖总量',
        subtext: 'top10',
        x:'center'
      },
      tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: this.state.goodsNameData
      },
      series : [
        {
          name: '售卖总量',
          type: 'pie',
          radius : '55%',
          center: ['50%', '60%'],
          data:this.state.goodsInfo,
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    },true);
  };


  render() {
    return (
      <div>
        <div style={{textAlign: 'center'}}><Button onClick={this.fetch}>更新</Button></div>
        <Row>
          <Col span={20} offset={4}>
            <div id="pieChart" style={{width: 800, height: 400}}/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default PieChart;
