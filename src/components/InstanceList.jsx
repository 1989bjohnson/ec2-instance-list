import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import faker from "faker";

function Home() {
  //fake data object to be generated from faker.js
  const instance = () => {
    return {
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      id: `${faker.random.alphaNumeric()}-${faker.random.alphaNumeric(6)}`,
      type: `${faker.random.alphaNumeric(2)}.${faker.random.word()}`,
      state: faker.datatype.boolean() ? <span class="badge bg-success">Running</span> : <span class="badge bg-danger">Down</span>,
      az: `${faker.random.locale().slice(0,2)}-${faker.address.cardinalDirection()}-${faker.random.alphaNumeric(
        2
      )}`,
      publicIP: faker.internet.ip(),
      privateIP: faker.internet.ip(),
    };
  };

  // function to generate array of random data
  // the default amount of ec2 instances to generate is 50
  const generateData = (rows = 50) => {
    return Array.from({ length: rows }, instance);
  };

  // object to give columns to our table/paginator
  const columns = Object.keys(generateData()[0]).map((item) => {
    return {
      dataField: item,
      text: item.toUpperCase(),
      sort: item == "state" ? false : true,
    };
  });

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1 className="text-center py-3">Active EC2 Instances</h1>
            <BootstrapTable
              keyField="id"
              data={generateData()}
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
