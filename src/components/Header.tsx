import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Flex, useColorMode, IconButton } from "@chakra-ui/react";

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex h="10%" justify="flex-end" p={2}>
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
