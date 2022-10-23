import React from "react";
import styled from "styled-components";

const ToggleSwitch = () => {
  return (
    <StyledLabel className='toggle'>
      <input className='toggle-checkbox' type='checkbox' />
      <div className='toggle-switch'></div>
    </StyledLabel>
  );
};

const StyledLabel = styled.label`
  .toggle {
    cursor: pointer;
    display: inline-block;
  }

  .toggle-switch {
    display: inline-block;
    background: #ccc;
    border-radius: 16px;
    width: 40px;
    height: 22px;
    position: relative;
    vertical-align: middle;
    transition: background 0.25s;
  }
  .toggle-switch:before,
  .toggle-switch:after {
    content: "";
  }
  .toggle-switch:before {
    display: block;
    background: linear-gradient(to bottom, #fff 0%, #eee 100%);
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    width: 20px;
    height: 20px;
    position: absolute;
    top: 1px;
    left: 2px;
    transition: left 0.25s;
  }
  .toggle:hover .toggle-switch:before {
    background: linear-gradient(to bottom, #fff 0%, #fff 100%);
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5);
  }
  .toggle-checkbox:checked + .toggle-switch {
    background: #0d3de5;
  }
  .toggle-checkbox:checked + .toggle-switch:before {
    left: 17px;
  }

  .toggle-checkbox {
    position: absolute;
    visibility: hidden;
  }

  .toggle-label {
    margin-left: 5px;
    position: relative;
    top: 2px;
  }
`;

export default ToggleSwitch;
