import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Cabins() {
  return (
    <>
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>Filter / Sort</p>
    </Row>
<Row>
  <CabinTable />
</Row>
</>
  );
}

export default Cabins;

export async function loader() {
  const cabins = await getCabins();
  console.log(cabins);
  return cabins;
}
