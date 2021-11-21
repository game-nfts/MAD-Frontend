import { useNavigate } from "react-router-dom";
import SlantButton from "./SlantButton";

function UserMenu(props) {
  let navigate = useNavigate(); // to push an endpoint, call `navigate("/path");`

  return (
    <>
      <SlantButton onClick={() => {}} text="Sign In" />
    </>
  );
}

export default UserMenu;
