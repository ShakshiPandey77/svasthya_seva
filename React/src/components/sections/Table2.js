import React from "react";
import Table from "react-bootstrap/Table";
import { Pagination } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
export default class Tables extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: false,
      sort: "none",
      totalItems: 1,
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
    let active = 2;
    let items = [];
    for (let number = 1; number <= 5; number++) {
      items.push(
        <Pagination.Item key={number} active={number === active}>
          {number}
        </Pagination.Item>
      );
    }

    return (
      <div>
        {" "}
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
        <Pagination size="lg">{items}</Pagination>
      </div>
    );
  }
}
