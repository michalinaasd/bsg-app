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
import { AppService } from "../service/AppService";

interface PlayerProps {
  mediaId: number;
  isOpen: any;
  onClose: any;
}

export const Player: React.FC<PlayerProps> = (props) => {
  const [mediaPlayInfo, setMediaPlayInfo] = useState<MediaPlayInfoModel>();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const getMediaPlayInfo = async () => {
    const response: MediaPlayInfoModel = await AppService.getMediaPlayInfo(
      localStorage.getItem("token") || "{}",
      props.mediaId
    );

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    setMediaPlayInfo(response);
  };
  useEffect(() => {
    if (props.mediaId > 0) {
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
          ) : mediaPlayInfo?.ContentUrl ? (
            <ReactPlayer controls url={mediaPlayInfo?.ContentUrl} />
          ) : (
            <Text>No Video available</Text>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
