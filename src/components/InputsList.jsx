import React from "react";
import Input from "./Input";
import { inputProps } from "../utilities/utilities";

export default function InputsList({ value, onChange }) {
  return (
    <>
      {Object.values(inputProps).map(prop => {
        return (
          <Input key={prop.id} onChange={onChange} value={value} {...prop}>
            {prop.name}
          </Input>
        );
      })}
    </>
  );
}
