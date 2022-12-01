import {cloneElement,InputHTMLAttributes, useEffect, useState } from "react";
import { SpaceProps } from "styled-system";
import Box from "../Box";
import { colorOptions } from "../interfaces";
import { TextFieldWrapper, StyledTextField } from "./TextFieldStyle";

export interface TextFieldProps {
  labelColor?: colorOptions;
  label?: string;
  errorText?: any;
  id?: any;
  fullwidth?: boolean;
  endAdornment?: any;
}

const TextField: React.FC<
  InputHTMLAttributes<HTMLInputElement> & TextFieldProps & SpaceProps
> = ({ id, label, errorText, labelColor, endAdornment, ...props }) => {
  const [textId, setTextId] = useState(id);

    let spacingProps = {};
  //   for (const key in props) {
  //     if (key.startsWith("m") || key.startsWith("p")){
  //         spacingProps[key] = props[key];
  //     }

  //   }

  useEffect(() => {
    if (!id) setTextId(Math.random());
  }, []);

  return (
    <TextFieldWrapper
      color={labelColor && `${labelColor}.main`}
      fullwidth={props.fullwidth}
      {...spacingProps}
    >
      {label && <label htmlFor={textId}>{label}</label>}
      <Box position="relative">
        <StyledTextField id={textId} {...props} />
        {endAdornment &&
          cloneElement(endAdornment, {
            className: `end-adornment ${endAdornment.className}`,
          })}
      </Box>
    </TextFieldWrapper>
  );
};

export default TextField;
