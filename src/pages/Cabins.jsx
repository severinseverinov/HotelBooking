import { useLoaderData } from "react-router-dom";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";

function Cabins() {
  const cabins = useLoaderData();
  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>{cabins[0].name}</p>
      <img src={cabins[0].image} alt={cabins[0].name} />
    </Row>
  );
}

export default Cabins;

export async function loader() {
  const cabins = await getCabins();

  return cabins;
}
