import {
  Button,
  Flex,
  Spinner,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AppService } from "../service/AppService";
import { ListItem } from "./ListItem";
import { Pagination } from "./Pagination";
import { Player } from "./Player";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [mediaList, setMediaList] = useState<MediaListModel>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    localStorage.getItem("token") !== null
  );
  const [currentMediaId, setCurrentMediaId] = useState<number>();
  const [pageNr, setPageNr] = useState<number>(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  let navigate = useNavigate();

  const getMediaList = async () => {
    const response: MediaListModel = await AppService.getMediaList(
      localStorage.getItem("token") || "{}"
    );

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    setMediaList(response);
  };

  useEffect(() => {
    if (!isLoggedIn) {
      return navigate("/");
    } else {
      getMediaList();
    }
  }, []);

  return (
    <Flex h="90vh" w="100vw" align="center" justify="center">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Flex
            direction="row"
            h="50vh"
            w="100%"
            justify="center"
            overflowX="auto"
            css={{ "&::-webkit-scrollbar": { display: "none" } }}
          >
            <Pagination pageSize={3} pageNr={pageNr}>
              {mediaList?.Entities?.map((e) => (
                <ListItem
                  onClick={() => {
                    setCurrentMediaId(e.Id);
                    onOpen();
                  }}
                  media={e}
                />
              ))}
            </Pagination>
            {pageNr < Math.ceil(15 / 3) - 1 && (
              <Button
                h="30px"
                w="20px"
                _hover={{}}
                _focus={{}}
                position="absolute"
                right="20px"
                top="45%"
                onClick={() => setPageNr(pageNr + 1)}
              >
                <ArrowRightIcon />
              </Button>
            )}
            {pageNr > 0 && (
              <Button
                h="30px"
                w="20px"
                _hover={{}}
                _focus={{}}
                position="absolute"
                left="20px"
                top="45%"
                onClick={() => setPageNr(pageNr - 1)}
              >
                <ArrowLeftIcon />
              </Button>
            )}
          </Flex>
          <Player
            mediaId={currentMediaId || -1}
            onClose={onClose}
            isOpen={isOpen}
          />
        </>
      )}
    </Flex>
  );
};
