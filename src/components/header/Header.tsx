import Link from "next/link";
import { useState } from "react";
import Container from "../Container";
import FlexBox from "../FlexBox";
import Image from "../Image"
import SearchBox from "../search-box/SearchBox";
import StyledHeader from "./HeaderStyle";

type HeaderProps = {
  isFixed?: boolean;
  className?: string;
};
const Header: React.FC<HeaderProps> = ({ isFixed, className }) => {
  const [open, setOpen] = useState(false);
  const toggleSidenav = () => setOpen(!open);
  // const {state} = useAppContext();
  // const {cartList} = cart;

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
