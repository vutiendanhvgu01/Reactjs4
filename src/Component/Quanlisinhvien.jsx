import React, { Component } from "react";

import TableSearch from "./TableSearch";
import Tablesinhvien from "./Tablesinhvien";

export default class Quanlisinhvien extends Component {
  state = {
    formValue: {
      maSV: "",
      phoneNum: "",
      email: "",
      fullName: "",
    },
    formErro: {
      maSV: "",
      phoneNum: "",
      email: "",
      fullName: "",
    },
    arrSinhVien: [
      {
        maSV: "15873",
        phoneNum: "0329624359",
        email: "vutiendanh.0101@gmail.com",
        fullName: "Vu Tien Danh",
      },
    ],
    arrSearch: [],
    valid: false,
    svSearch: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.checkFormValid()) {
      alert("Form is invalid");
      return;
    }
    let newArrSinhVien = this.state.arrSinhVien;
    let sinhVien = { ...this.state.formValue };
    newArrSinhVien.push(sinhVien);
    this.setState({
      arrSinhVien: newArrSinhVien,
    });
  };
  checkFormValid = () => {
    let { formValue, formErro } = this.state;
    for (let key in formErro) {
      if (formErro[key] !== "" || formValue[key] === "") {
        return false;
      }
    }
    return true;
  };
  handelInputChange = (e) => {
    let { value, name } = e.target;
    let newFormValue = this.state.formValue;
    newFormValue[name] = value;
    let newFormErro = this.state.formErro;
    let message = "";
    if (value.trim() === "") {
      message = name + " can not be blanked!";
    }
    newFormErro[name] = message;
    this.setState(
      {
        formValue: newFormValue,
        formErro: newFormErro,
      },
      () => {
        this.setState({
          valid: this.checkFormValid(),
        });
      }
    );
  };
  handleDelSinhVien = (maSVClick) => {
    let newArrSinhVien = this.state.arrSinhVien;
    let maSVDel = newArrSinhVien.filter((sv) => sv.maSV !== maSVClick);
    this.setState({
      arrSinhVien: maSVDel,
    });
  };
  handleEditSinhVien = (sinhVienClick) => {
    this.setState(
      {
        formValue: sinhVienClick,
      },
      () => {
        this.setState({
          valid: this.checkFormValid(),
        });
      }
    );
  };
  handleUpdateSinhVien = () => {
    let { arrSinhVien, formValue } = this.state;
    let sinhVienUpdate = arrSinhVien.find((sv) => sv.maSV === formValue.maSV);
    if (sinhVienUpdate) {
      for (let key in formValue) {
        if (key !== "maSV") {
          sinhVienUpdate[key] = formValue[key];
        }
      }
    }
    this.setState({
      arrSinhVien: arrSinhVien,
    });
  };
  handleSearch = (e) => {
    e.preventDefault();
    let { arrSinhVien } = this.state;
    let svSearch = this.state.svSearch;
    console.log(svSearch);
    let svFound = arrSinhVien.filter((sv) => sv.maSV === svSearch);
    this.setState({
      arrSearch: svFound,
    });
  };

  handleSearchChange = (e) => {
    let { value } = e.target;
    this.setState({
      svSearch: value,
    });
  };
  render() {
    let { formValue } = this.state;

    return (
      <>
        <div>
          <form className="container" onSubmit={this.handleSubmit}>
            <div className="card-header bg-dark text-white">
              <h3>Thông tin sinh viên</h3>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <p>Mã SV</p>
                    <input
                      value={formValue.maSV}
                      type="text"
                      name="maSV"
                      className="form-control"
                      onInput={this.handelInputChange}
                    />
                    {this.state.formErro.maSV && (
                      <div class="alert alert-danger mt-2">
                        {this.state.formErro.maSV}
                      </div>
                    )}
                  </div>
                  <div className="form-group">
                    <p>Số điện thoại </p>
                    <input
                      value={formValue.phoneNum}
                      type="text"
                      name="phoneNum"
                      className="form-control"
                      onInput={this.handelInputChange}
                    />
                    {this.state.formErro.phoneNum && (
                      <div class="alert alert-danger mt-2">
                        {this.state.formErro.phoneNum}
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <p>Họ và tên</p>
                    <input
                      value={formValue.fullName}
                      type="text"
                      name="fullName"
                      className="form-control"
                      onInput={this.handelInputChange}
                    />
                    {this.state.formErro.fullName && (
                      <div class="alert alert-danger mt-2">
                        {this.state.formErro.fullName}
                      </div>
                    )}
                  </div>
                  <div className="form-group">
                    <p>Email </p>
                    <input
                      value={formValue.email}
                      type="text"
                      name="email"
                      className="form-control"
                      onInput={this.handelInputChange}
                    />
                    {this.state.formErro.email && (
                      <div class="alert alert-danger mt-2">
                        {this.state.formErro.email}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button
                type="submit"
                className="btn btn-success"
                disabled={!this.state.valid}
              >
                Thêm sinh viên
              </button>
              <button
                type="button"
                className="btn btn-primary mx-2"
                disabled={!this.state.valid}
              >
                Cập nhật
              </button>
            </div>
          </form>
          <div>
            <form className="container pt-2" onSubmit={this.handleSearch}>
              <input
                className="form-control me-2 w-25 mb-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                name="svSearch"
                onInput={this.handleSearchChange}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="container pt-5">
            <TableSearch arrSearch={this.state.arrSearch} />
          </div>
          <div className="container pt-5">
            <Tablesinhvien
              arrSinhVien={this.state.arrSinhVien}
              handleDelSinhVien={this.handleDelSinhVien}
              handleEditSinhVien={this.handleEditSinhVien}
            />
          </div>
        </div>
      </>
    );
  }
}
