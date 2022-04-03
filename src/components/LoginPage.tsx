import { Flex } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AppService } from "../service/AppService";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useState } from "react";
import { Login } from "./Login";

type FormValues = {
  username?: string;
  password?: string;
};

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required("Username is required")
    .email("Username is invalid"),
  password: Yup.string().required("Password is required"),
});

export const LoginPage = () => {
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: yupResolver(validationSchema) });
  const [errorMessage, setErrorMessage] = useState<string>("");

  const logIn = async (username: string, password: string) => {
    await AppService.logIn(username, password)
      .then((response: SignIn) => {
        localStorage.setItem("token", response.AuthorizationToken.Token);
        localStorage.setItem(
          "expire",
          response.AuthorizationToken.TokenExpires.toString()
        );

        navigate("/home");
      })
      .catch((error) => setErrorMessage(error.message));
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (data.username && data.password) {
      logIn(data.username, data.password);
    }
  };

  return (
    <Flex width="full" align="center" justifyContent="center">
      <Login
        onSubmit={handleSubmit(onSubmit)}
        register={register}
        errors={errors}
        errorMessage={errorMessage}
      />
    </Flex>
  );
};
