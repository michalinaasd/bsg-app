import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AppService } from "../service/AppService";

type FormValues = {
  username: string;
  password: string;
};

export const Login = () => {
  let navigate = useNavigate();
  const { register, handleSubmit } = useForm<FormValues>();
  const logIn = async (username: string, password: string) => {
    const response: SignIn = await AppService.logIn(username, password);
    localStorage.setItem("token", response.AuthorizationToken.Token);
    navigate("/home");
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    logIn(data.username, data.password);
  };
  return (
    <Flex width="full" align="center" justifyContent="center">
      <Box p={2}>
        <Box textAlign="center">
          <Heading>Login</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                {...register("username")}
                placeholder="test@test.com"
              />
            </FormControl>
            <FormControl mt={6}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                {...register("password")}
                placeholder="*******"
              />
            </FormControl>
            <Button width="full" mt={4} type="submit">
              Sign In
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
};
