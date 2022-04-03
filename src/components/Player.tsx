import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  Spinner,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { ERROR_MESSAGES } from "../constants";
import { AppService } from "../service/AppService";

interface PlayerProps {
  mediaId: number;
  isOpen: any;
  onClose: any;
}

export const Player: React.FC<PlayerProps> = (props) => {
  const [mediaPlayInfo, setMediaPlayInfo] = useState<MediaPlayInfoModel>();
  const [errorMessage, setErrorMessage] = useState<string>();

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getMediaPlayInfo = async () => {
    await AppService.getMediaPlayInfo(
      localStorage.getItem("token") || "{}",
      props.mediaId
    )
      .then((response: MediaPlayInfoModel) => {
        if (!response.ContentUrl) {
          setErrorMessage(ERROR_MESSAGES.NO_VIDEO_AVAILABLE);
        }
        setMediaPlayInfo(response);
      })
      .catch((error) => setErrorMessage(error.message));
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    if (props.mediaId > 0) {
      setErrorMessage(undefined);
      getMediaPlayInfo();
    }
  }, [props.mediaId]);

  return (
    <Modal
      size="5xl"
      isOpen={props.isOpen}
      onClose={() => {
        props.onClose();
        setIsLoading(true);
        setMediaPlayInfo(undefined);
      }}
    >
      <ModalOverlay backdropFilter="auto" backdropBlur="2px" />
      <ModalContent>
        <ModalHeader>{mediaPlayInfo?.Title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody m="auto">
          {isLoading ? (
            <Spinner />
          ) : !errorMessage ? (
            <ReactPlayer controls url={mediaPlayInfo?.ContentUrl} />
          ) : (
            <Text>{errorMessage}</Text>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
