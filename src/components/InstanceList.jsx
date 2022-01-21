import Container from "react-bootstrap/Container";
import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import faker from "faker";

function Home() {
  //fake data generated from faker.js
  const instance = () => {
    return {
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      id: `${faker.random.alphaNumeric()}-${faker.random.alphaNumeric(6)}`,
      type: `${faker.random.alphaNumeric(2)}.${faker.random.word()}`,
      state: faker.datatype.boolean() ? "Running" : "Down",
      az: `${faker.random.locale().slice(0,2)}-${faker.address.cardinalDirection()}-${faker.random.alphaNumeric(
        2
      )}`,
      publicIP: faker.internet.ip(),
      privateIP: faker.internet.ip(),
    };
  };

  // function to generate array of random data
  const generateData = (rows = 50) => {
    return Array.from({ length: rows }, instance);
  };
  const instanceData = generateData();

  // object to give columns to our table/paginator
  const columns = Object.keys(instanceData[0]).map((item) => {
    return {
      dataField: item,
      text: item.toUpperCase(),
      sort: true,
    };
  });


  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1 className="text-center">Active EC2 Instances</h1>
            <BootstrapTable
              keyField="id"
              data={instanceData}
              columns={columns}
              pagination={paginationFactory({ sizePerPage: 10 })}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
