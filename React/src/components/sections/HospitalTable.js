import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import axios from "axios";
import { Pagination } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default class table extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: false,
      sort: "none",
      totalItems: 60,
      itemsPerPage: 10,
      currentPageNumber: 1,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get(
        `https://iphy6zyd24.execute-api.ap-south-1.amazonaws.com/test1/hospital`
      )
      .then((res) => {
        const data = res.data;
        this.setState({
          data,
          currentPageNumber: res.currentPageNumber,
          totalItems: res.totalItems,
          itemsPerPage: res.itemsPerPage,
        });

        // console.log("data");
        // console.log(data);
      });
    this.setState({ loading: false });
  }

  handleSelect(number) {
    console.log("handle select", number);
  }
  render() {
    const rows = this.state.data;
    return (
      <div style={{ position: "relative", margin: "20px" }}>
        <Table>
          <Thead>
            <Tr>
              <Th>Serial No.</Th>
              <Th>Hospital Name</Th>
              <Th>Covid Beds</Th>
              <Th>Covid Ventilators</Th>
              <Th>Distance (Kms)</Th>
              <Th>Address</Th>
              <Th>Contact</Th>
            </Tr>
          </Thead>
          <Tbody>
            {rows.map((row) => (
              <Tr>
                <Td>{row.serialNo}</Td>
                <Td>{row.hospital}</Td>
                {row.covidBeds > 0 ? <Td>{row.covidBeds}</Td> : <Td>0</Td>}
                {row.covidVentillator > 0 ? (
                  <Td>{row.covidVentillator}</Td>
                ) : (
                  <Td>0</Td>
                )}
                <Td>{row.distance}</Td>
                <Td>{row.address}</Td>
                <Td>{row.mobileNo}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </div>
    );
  }
}
