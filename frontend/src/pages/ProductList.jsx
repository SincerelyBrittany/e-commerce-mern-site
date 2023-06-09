import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Subscription from "../components/Subscription";
import Footer from "../components/Footer";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Locations</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Locations
            </Option>
            <Option>United States</Option>
            <Option>Europe</Option>
            <Option>India</Option>
            <Option>China</Option>
            <Option>South America</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Month
            </Option>
            <Option>January</Option>
            <Option>February</Option>
            <Option>March</Option>
            <Option>April</Option>
            <Option>May</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Locations:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Subscription />
      <Footer />
    </Container>
  );
};

export default ProductList;
