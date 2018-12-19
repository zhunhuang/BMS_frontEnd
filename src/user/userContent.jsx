import React from 'react';
import UserTable from './userTable'
import {Col, Row} from "antd";

const UserContent = () => (
  <div>
    <Row>
      <Col span={20} offset={2}>
        表格内容
      </Col>
    </Row>
    <Row>
      <Col span={20} offset={2}>    <UserTable/>
      </Col>
    </Row>
  </div>
);
export default UserContent;

