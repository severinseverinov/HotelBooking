import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

//new way
function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

//old way
// function AddCabin() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   return (
//     <>
//       <Button onClick={() => setIsModalOpen(show => !show)}>
//         Add new cabin
//       </Button>
//       {isModalOpen && (
//         <Modal onClose={() => setIsModalOpen(show => !show)}>
//           <CreateCabinForm onClose={() => setIsModalOpen(show => !show)} />
//         </Modal>
//       )}
//     </>
//   );
// }

export default AddCabin;
