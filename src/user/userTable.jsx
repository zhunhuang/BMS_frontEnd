import React, {Component} from 'react';
import {Button, Divider, Table} from 'antd';
import reqwest from 'reqwest';

class UserTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      pagination: {
        defaultCurrent:1,
        defaultPageSize:20,
        pageSize:20,
      },
      loading: false,
    };
  }
  columns = [{
    title: 'id',
    dataIndex: 'id',
    sorter: true,
    width: '20%',
  }, {
    title: 'name',
    dataIndex: 'userName',
    width: '20%',
  }, {
    title: 'password',
    dataIndex: 'password'
  }, {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <Button>更新</Button>
      <Divider type="vertical"/>
      <Button onClick={this.deleteRow.bind(this, record.id)}>删除</Button>
    </span>
    ),
  }];


  componentDidMount() {
    this.fetch();
  }

  handleTableChange = (pagination, filters, sorter) => {
    //好像这里三个点是展开符号
    const pager = {...this.state.pagination};
    pager.current = pagination.current;
    this.setState({
      pagination: pager,
    });
  };

  fetch = (params = {}) => {
    console.log('params:', params);
    reqwest({
      url: 'http://localhost:3000/users/',
      method: 'get',
      type: 'json',
    }).then((data) => {
      // Read total count from server
      const pagination = {...this.state.pagination};
      pagination.total = data.length;
      this.setState({
        loading: false,
        data: data,
        pagination:pagination,
      });
    });
  };

  deleteRow = (index) => {
    console.log(index);
    alert("确认删除吗");
    reqwest({
      url: 'http://localhost:3000/users/'+index,
      method: 'delete',
      type: 'json',
    }).then((data) => {
      alert("删除:"+data);
      this.componentDidMount();
    });
  };

  render() {
    return (
      <div>
        <Table columns={this.columns}
               dataSource={this.state.data}
               onChange={this.handleTableChange}
               rowKey={record => record.id}
        />
      </div>
    );
  }
}

export default UserTable;

