import Link from "next/link";
import { Button } from "@mui/material";

const Navbar = () => {
  return (
    <>
      <Link href="/">
        <Button variant="contained">Home</Button>
      </Link>
      <Link href="/api/users">
        <Button variant="contained">JSON DATA</Button>
      </Link>
    </>
  );
};

export default Navbar;
