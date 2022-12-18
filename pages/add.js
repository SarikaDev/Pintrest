import { Box, Typography } from "@mui/material";
import axios from "axios";
import { Router } from "next/router";
import { useCallback, useState } from "react";
const addNewUser = () => {
  const [userName, setUserName] = useState(""); 

  const handleForm = useCallback(
    async e => {
      e.preventDefault();
      try {
        const res = await axios("http://localhost:3000/api/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          data: { userName: userName },
        });
        Router.push("/");
        setUserName("");
        return res;
      } catch (error) {
        console.log("err", error);
      }
    },
    [userName],
  );
  return (
      <Box component={"div"}>
        <Typography>Add A New User</Typography>
        <form onSubmit={handleForm}>
          <input
            type="text"
            label="userName"
            placeholder="update_user"
            onChange={e => setUserName(e.target.value)}
            value={userName}
          />
          <button type="submit">Add NewUser</button>
        </form>
      </Box>
  );
};

export default addNewUser;
