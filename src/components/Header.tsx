import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Flex, useColorMode, IconButton, Heading } from "@chakra-ui/react";

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex h="10%" justify="space-between" py={2} px={5}>
      <Heading>React</Heading>
      <IconButton
        icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        _focus={{}}
        onClick={() => {
          toggleColorMode();
        }}
        aria-label={""}
      />
    </Flex>
  );
};
