import Link from "next/link";
import { useState } from "react";
import IconButton from "../buttons/IconButton";
import Container from "../Container";
import { useAppContext } from "../context/app/AppContext";
import FlexBox from "../FlexBox";
import Icon from "../icon/Icon";
import Image from "../Image"
import SearchBox from "../search-box/SearchBox";
import { Tiny } from "../Typography";
import StyledHeader from "./HeaderStyle";

type HeaderProps = {
  isFixed?: boolean;
  className?: string;
};
const Header: React.FC<HeaderProps> = ({ isFixed, className }) => {
  const [open, setOpen] = useState(false);
  const toggleSidenav = () => setOpen(!open);
  const { state } = useAppContext();
  const {cartList} = state.cart;

  const cartHandle = (
    <FlexBox ml="20px" alignItems="flex-start">
      <IconButton bg="gray.200" p="12px">
        <Icon size="20px">bag</Icon>
      </IconButton>

      {!!cartList.length && (
        <FlexBox
          borderRadius="300px"
          bg="error.main"
          px="5px"
          py="2px"
          alignItems="center"
          justifyContent="center"
          ml="-1rem"
          mt="-9px"
        >
          <Tiny color="white" fontWeight="600">
            {cartList.length}
          </Tiny>
        </FlexBox>
      )}
    </FlexBox>
  );

  return (
    <>
      <StyledHeader className={className}>
        <Container
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          height="100%"
        >
          <FlexBox className="logo" alignItems="center" mr="1rem">
            <Link href="/">
                <Image src="/assets/images/logo.svg" alt="logo" />
            </Link>
          </FlexBox>

          <FlexBox justifyContent="center" flex="1 1 0">
            <SearchBox />
          </FlexBox>
        </Container>
      </StyledHeader>
    </>
  );
};

export default Header;
