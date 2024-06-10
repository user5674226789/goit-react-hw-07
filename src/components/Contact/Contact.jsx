import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <div className={css.contactInfo}>
        <p className={css.contactName}>{name}</p>
        <p className={css.contactNumber}>{number}</p>
      </div>
      <button
        className={css.deleteButton}
        type="button"
        onClick={() => dispatch(handleDelete)}
      >
        Delete
      </button>
    </>
  );
};

export default Contact;