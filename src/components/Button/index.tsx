import { useNavigate } from "react-router-dom";
import * as SC from "./styles";

export const Button = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/create");
  };

  return <SC.Container onClick={handleClick}>🎉 Create my event</SC.Container>;
};
