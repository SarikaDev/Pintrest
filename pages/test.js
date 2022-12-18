// import { Box, Typography, Button } from "@mui/material";
// import axios from "axios";
// import Link from "next/link";
// // import addNewUser from "./add";
// import Image from "next/image";
// import profilePic from "../assests/user.png";
// const index = ({ userDetails }) => {
//   return (
//     <div>
//       <h1>INDEX</h1>
//       <addNewUser />
//       <Typography
//         variant="h4"
//         textTransform="uppercase"
//         letterSpacing={2}
//         sx={{ textDecoration: "underline" }}
//         align="center"
//       >
//         Users Details
//       </Typography>
//       <Image src={profilePic} alt="Picture of the author" />
//       <h1>
//         {userDetails.map(data => {
//           return (
//             <Box
//               component={"div"}
//               key={data?._id}
//               display="flex"
//               justifyContent="center"
//               alignItems="center"
//             >
//               <Typography align="left" variant="h6" pr={2}>
//                 {data?.userName}
//               </Typography>
//               <Link href="/add">
//                 <Button variant="contained">Edit </Button>
//               </Link>
//             </Box>
//           );
//         })}
//       </h1>
//       <Box
//         component={"div"}
//         display="flex"
//         alignItems="center"
//         justifyContent="center"
//         minHeight={"10vh"}
//       >
//         <Link href="/add">
//           <Button variant="contained">Add</Button>
//         </Link>
//       </Box>
//     </div>
//   );
// };

// export async function getServerSideProps(context) {
//   const res = await axios("http://localhost:3000/api/users");
//   // console.log("res", res.data);
//   const { userDetails } = res.data;
//   console.log("userDetails", userDetails);
//   return {
//     props: { userDetails: userDetails },
//   };
// }

// export default index;

// ! IMAGE
// import React, { useState } from "react";
// import Head from "next/head";
// import TransformImage from "../components/image";

// const IndexPage = () => {
//   const [imagePublicId, setImagePublicId] = useState("");
//   const [alt, setAlt] = useState("");
//   const [crop, setCrop] = useState("scale");
//   const [height, setHeight] = useState(200);
//   const [width, setWidth] = useState(200);
//   const openWidget = () => {
//     const widget = window.cloudinary.createUploadWidget(
//       {
//         cloudName: "dofowidci",
//         uploadPreset: "Sarika",
//       },
//       (error, result) => {
//         if (
//           result.event === "success" &&
//           result.info.resource_type === "image"
//         ) {
//           console.log(result.info);
//           setImagePublicId(result.info?.url);
//           setAlt(`A file of ${result.info.original_filename}`);
//         } else {
//           console.log("ERROR UPLOAD", error);
//         }
//       },
//     );
//     widget.open(); // open up the widget after creation
//   };
//   return (
//     <>
//       <Head>
//         <title>
//           How to Upload, Crop, & Resize Images in the Browser in Next.js
//         </title>
//         <link rel="icon" href="/favicon.ico" />
//         <meta charSet="utf-8" />
//         <script
//           src="https://widget.Cloudinary.com/v2.0/global/all.js"
//           type="text/javascript"
//         ></script>
//       </Head>
//       <div className="main">
//         <div className="splitdiv" id="leftdiv">
//           <h1 className="main-h1">
//             How to Crop, Resize & Upload Image in the Browser using Cloudinary
//             Transformation
//           </h1>
//           <div id="leftdivcard">
//             <h2 className="main-h2">Resize Options</h2>

//             <label className="form-control">Select Crop Type</label>
//             <div>
//               <label className="form-control">Scale</label>
//               <input
//                 type="radio"
//                 value="scale"
//                 name="crop"
//                 onChange={event => setCrop(event.target.value)}
//               />
//             </div>
//             <div>
//               <label className="form-control">Crop</label>
//               <input
//                 type="radio"
//                 value="crop"
//                 name="crop"
//                 onChange={event => setCrop(event.target.value)}
//               />
//             </div>
//             <input
//               type="number"
//               placeholder="Height"
//               onChange={event => setHeight(event.target.value)}
//             />
//             <input
//               type="number"
//               placeholder="Width"
//               onChange={event => setWidth(event.target.value)}
//             />
//           </div>

//           <button type="button" id="leftbutton" onClick={openWidget}>
//             Upload Image
//           </button>
//         </div>

//         <div className="splitdiv" id="rightdiv">
//           <div id="rightdivcard">
//             {imagePublicId ? (
//               <TransformImage
//                 crop={crop}
//                 image={imagePublicId}
//                 width={width}
//                 height={height}
//               />
//             ) : (
//               <h1> Image will appear here</h1>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default IndexPage;
