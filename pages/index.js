import { Button, Box, Stack, TextField, Typography } from "@mui/material";
import Layout from "../components/Layout";
import Link from "next/link";
import Image from "next/image";
import logo from "../assests/logo.png";
import axios from "axios";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(4).max(16).required(),
});
const index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handlePassword = useCallback(
    e => {
      setPassword(e.target.value);
    },
    [password],
  );
  const handleUserName = useCallback(
    e => {
      setEmail(e.target.value);
    },
    [email],
  );
  const handleForm = useCallback(
    async data => {
      const PassWord = btoa(data.password);
      try {
        const res = await axios("http://localhost:3000/api/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          data: { email: data.email, password: PassWord },
        });
        toast.success("DONE", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setTimeout(() => {
          navigate.push("/api/users");
        }, 6000);
        setEmail("");
        setPassword("");
        return res;
      } catch (error) {
        console.log("err", error);
      }
    },
    [email, password],
  );
  return (
    <Layout>
      <Box
        component="div"
        display="flex"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
      >
        <Box
          component={Stack}
          flexDirection="column"
          width="calc(35vw - 80px)"
          borderRadius="5px"
          alignItems="center"
          minHeight="calc(70vh - 80px)"
          border="2px solid red"
          p={2}
        >
          <Typography
            variant="h5"
            align="left"
            textTransform="uppercase"
            fontWeight={600}
          >
            PINTEREST
          </Typography>
          <Image src={logo} alt="Pintrest_logo" width={70} />

          <form onSubmit={handleSubmit(handleForm)}>
            <Box
              component={Stack}
              alignItems="center"
              spacing={5}
              marginY={5}
              width={"auto"}
            >
              <TextField
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "red",
                    },
                    "&:hover fieldset": {
                      borderColor: "red",
                    },
                  },
                  "& > :not(style)": { color: "white" },
                  "& label.Mui-focused": {
                    color: "white",
                  },
                }}
                variant="outlined"
                color="error"
                label="email"
                value={email}
                type="email"
                {...register("email", { required: true })}
                name="email"
                onChange={handleUserName}
              />
              {errors?.email && `${errors?.email?.message}`}

              <TextField
                type="password"
                value={password}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "red",
                    },
                    "&:hover fieldset": {
                      borderColor: "red",
                    },
                  },
                  "& > :not(style)": { color: "white" },
                  "& label.Mui-focused": {
                    color: "white",
                  },
                }}
                variant="outlined"
                color="error"
                name="password"
                label="Password"
                autoComplete="password"
                {...register("password", { required: true })}
                onChange={handlePassword}
              />
              {errors?.password && `${errors?.password?.message}`}
              <Button type="submit" variant="contained" fullWidth>
                SUBMIT
              </Button>
            </Box>
          </form>

          <Link href="api/users">{"Don't have an account? Sign Up"}</Link>
        </Box>
      </Box>
    </Layout>
  );
};

export default index;
