import styled from "styled-components";
import {
  border,
  BorderProps,
  color,
  ColorProps,
  compose,
  flex,
  flexbox,
  FlexboxProps,
  FlexProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from "styled-system";
import shadows from "../utils/themeShadows";

type BoxProps = {
  shadow?: number;
  cursor?: string;
  transition?: string;
};

const Box = styled.div<
  BoxProps &
    LayoutProps &
    ColorProps &
    PositionProps &
    SpaceProps &
    FlexProps &
    BorderProps &
    FlexboxProps &
    TypographyProps
>(
  ({ shadow, cursor, transition, theme }) => ({
    boxShadow: theme.shadow,
    cursor,
    transition,
  }),
  compose(layout, space, color, position, flexbox, flex, border, typography)
);

Box.defaultProps = {
  shadow: 0,
  cursor: "unset",
};

export default Box;
