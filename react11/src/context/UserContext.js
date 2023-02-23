import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Dummy Name",
    email: "dummy@gmial.com",
  },
});
UserContext.displayName = "MineUserContext";
export default UserContext;
