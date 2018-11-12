import React from 'react';

export default function ColorChanger(props) {
  return (
    <select className="dropDownContainer" 
    onChange={(e) => {props.changeColor(e.target.value)}}>
      <option value="black"> Black </option>
      <option value="blue"> Blue </option>
      <option value="green"> Green </option>
    </select>
  )
}