import React, { Component } from "react";

export default class TableSearch extends Component {
  render() {
    const { arrSearch } = this.props;
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
          {arrSearch.map((sinhVien, index) => {
            return (
              <tr key={index}>
                <td>{sinhVien.maSV}</td>
                <td>{sinhVien.fullName}</td>
                <td>{sinhVien.phoneNum}</td>
                <td>{sinhVien.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
