import React, { Component } from "react";

export default class Tablesinhvien extends Component {
  componentWillReceiveProps(newProps) {
    this.setState({
      arrSinhVien: newProps.arrSinhVien,
    });
  }
  render() {
    const { arrSinhVien, handleDelSinhVien, handleEditSinhVien } = this.props;
    console.log("Danh1");
    return (
      <table className="table">
        <thead className="bg-dark text-white">
          <tr>
            <th>Mã SV</th>
            <th>Họ và tên</th>
            <th>Số điện thoại </th>
            <th>Email</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {arrSinhVien.map((sinhVien, index) => {
            return (
              <tr key={index}>
                <td>{sinhVien.maSV}</td>
                <td>{sinhVien.fullName}</td>
                <td>{sinhVien.phoneNum}</td>
                <td>{sinhVien.email}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.props.handleDelSinhVien(sinhVien.maSV)}
                  >
                    <i className="fa fa-trash"></i>
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-primary mx-2"
                    onClick={() => this.props.handleEditSinhVien(sinhVien)}
                  >
                    <i className="fa fa-edit"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
