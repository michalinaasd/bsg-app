import { AlertIcon, Alert as ChakraAlert, AlertTitle } from "@chakra-ui/react";
import React from "react";

type AlertProps = {
  message: string;
};
export const Alert: React.FC<AlertProps> = (props) => {
  return (
    <ChakraAlert
      status="error"
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      height="100px"
      mt={2}
    >
      <AlertIcon boxSize="40px" mr={0} />
      <AlertTitle mt={4} mb={1} fontSize="lg">
        {props.message}
      </AlertTitle>
    </ChakraAlert>
  );
};
