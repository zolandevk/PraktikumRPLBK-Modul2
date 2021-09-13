import React, { Component } from "react";
export default class Header extends Component {
    render() {
        return (
        <div
        className="flex flex-col items-center justify-center bg-blue-200 shadow-md text-3xl font-extrabold "
        style={{ height: "150px" }}
        >
        <h3 className="block text-indigo-600">{this.props.nama}</h3>
        <p className="text-center text-gray-800 font-normal text-l">-{this.props.a1} <span>{this.props.a2}</span></p>
        </div>
        );
    }
}