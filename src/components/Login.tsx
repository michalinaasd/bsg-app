import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { Alert } from "./Alert";

type LoginProps = {
  onSubmit: any;
  register: any;
  errors: any;
  errorMessage: string;
};

export const Login: React.FC<LoginProps> = (props) => {
  return (
    <Box p={2}>
      <Box textAlign="center">
        <Heading>Login</Heading>
      </Box>
      <Box my={4} textAlign="left">
        <form onSubmit={props.onSubmit} noValidate>
          <FormControl
            isInvalid={typeof props.errors.username?.message === "string"}
          >
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              {...props.register("username")}
              placeholder="test@test.com"
            />
            <FormErrorMessage>
              {props.errors.username?.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl
            mt={6}
            isInvalid={typeof props.errors.password?.message === "string"}
          >
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              {...props.register("password")}
              placeholder="*******"
            />
          </FormControl>
          <Button width="full" mt={4} type="submit">
            Sign In
          </Button>
        </form>
        {props.errorMessage && <Alert message={props.errorMessage} />}
      </Box>
    </Box>
  );
};
