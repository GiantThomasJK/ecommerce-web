import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { debounce } from "lodash";
import Box from "../Box";
import Card from "../Card";
import FlexBox from "../FlexBox";
import Icon from "../icon/Icon";
import Menu from "../Menu";
import MenuItem from "../MenuItem";
import TextField from "../text-field/TextField";
import { Span } from "../Typography";
import StyledSearchBox from "./SearchBoxStyle";

export interface SearchBoxProps {}

const SearchBox: React.FC<SearchBoxProps> = () => {
  const [category, setCategory] = useState("All Brand");
  const [resultList, setResultList] = useState<string[]>([]);

  const handleCategoryChange = (cat: any) => () => {
    setCategory(cat);
  };

  const search = debounce((e:any) => {
    const value = e.target?.value;

    if (!value) setResultList([]);
    else setResultList(dummySearchResult);
  }, 200);
  

  const hanldeSearch = useCallback((event:any) => {
    event.persist();
    search(event);
  }, []);

  const handleDocumentClick = () => {
    setResultList([]);
  };

  useEffect(() => {
    window.addEventListener("click", handleDocumentClick);
    return () => {
      window.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <Box position="relative" flex="1 1 0" maxWidth="670px" mx="auto">
      <StyledSearchBox>
        <Icon className="search-icon" size="18px" transform="0">
          search
        </Icon>
        <TextField
          className="search-field"
          placeholder="Search and hit enter..."
          fullwidth
          onChange={hanldeSearch}
        />
        <Menu           
          className="category-dropdown"
          direction="right"
          handler={
            <FlexBox className="dropdown-handler" alignItems="center">
              <span>{category}</span>
              <Icon variant="small">chevron-down</Icon>
            </FlexBox>
          }
          >
            {categories.map((item) => (
            <MenuItem key={item} onClick={handleCategoryChange(item)}>
              {item}
            </MenuItem>
          ))}
          
     
        </Menu>
        
      </StyledSearchBox>

      {!!resultList.length && (
        <Card
          position="absolute"
          top="100%"
          py="0.5rem"
          width="100%"
          boxShadow="large"
          zIndex={99}
          backgroundColor="#ffffff"
        >
          {resultList.map((item) => (
            <Link href={`/product/search/${item}`} key={item}>
              <MenuItem key={item}>
                <Span fontSize="14px">{item}</Span>
              </MenuItem>
            </Link>
          ))}
        </Card>
      )}
    </Box>
  );
};

const categories = [
  "All Categories",
  "Iphone",
  "Samsung",
  "Huawei",
  "Xiaomi",
  "Oppo",
];

const dummySearchResult = [
  "Iphone 13",
  "Iphone 14 Pro",
  "Iphone 12",
  "Iphone 11 Pro Max",
];

export default SearchBox;
