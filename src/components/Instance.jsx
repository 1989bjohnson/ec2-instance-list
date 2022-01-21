import { useState, useEffect } from "react";
import faker from "faker";

function Instance({ attributes, setAttributes }) {
  //fake data generated from faker.js
  let data = {
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    id: `${faker.random.alphaNumeric()}-${faker.random.alphaNumeric(6)}`,
    type: `${faker.random.alphaNumeric(2)}.${faker.random.word()}`,
    state: faker.datatype.boolean() ? "Running" : "Down",
    az: `${faker.random.locale()}-${faker.address.cardinalDirection()}-${faker.random.alphaNumeric(
      2
    )}`,
    publicIP: faker.internet.ip(),
    privateIP: faker.internet.ip(),
  };

  return (
    <>
      <tr>
        <td>{data.name}</td>
        <td>{data.id}</td>
        <td>{data.type}</td>
        <td>{data.state}</td>
        <td>{data.az}</td>
        <td>{data.publicIP}</td>
        <td>{data.privateIP}</td>
      </tr>
    </>
  );
}

export default Instance;
