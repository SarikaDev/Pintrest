import axios from "axios";
import React from "react";
import { useRouter } from "next/router";
const EachUser = ({ userDetails }) => {
  const router = useRouter();
  const userId = router.query.id;
  console.log("userId", userDetails);
  return <div>index</div>;
};

export async function getServerSideProps({ params }) {
  const { id } = params.id;
  const res = await axios(`http://localhost:3000/api/users/${id}`);
  console.log("id", id);
  const { userDetails } = res.data;
  console.log("userDetails", userDetails);
  return {
    props: { userDetails: userDetails },
  };
}

export default EachUser;
