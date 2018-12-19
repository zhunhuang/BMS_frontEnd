import React, {Component} from 'react';
import {Layout, Menu} from 'antd';
import UserContent from "./user/userContent";
import GoodsContent from "./goods/goodsContent";
import EchartsContent from "./echartsLearn/echartsContent";

const {Header, Content, Footer} = Layout;


class Layouts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectNav: "1",
      searchLoading: false,
      searchResult: '',
      splitSearchResult: null,
    };
  }

  onclickNav = (param) => {
    this.setState({
      selectNav: param.key,
    })
  };

  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo"/>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{lineHeight: '64px'}}
          >
            <Menu.Item key="1" onClick={this.onclickNav}>表格示例</Menu.Item>
            <Menu.Item key="2" onClick={this.onclickNav}>柱状图示例</Menu.Item>
            <Menu.Item key="3" onClick={this.onclickNav}>Echarts 学习</Menu.Item>
          </Menu>
        </Header>
        <Content style={{padding: '0 50px'}}>
          {this.state.selectNav === "1" && <UserContent/>}
          {this.state.selectNav === "2" && <GoodsContent/>}
          {this.state.selectNav === "3" && <EchartsContent/>}
        </Content>
        <Footer style={{textAlign: 'center'}}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}

export default Layouts;
