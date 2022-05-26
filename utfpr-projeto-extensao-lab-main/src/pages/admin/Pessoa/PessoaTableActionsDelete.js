import {
    MenuItem,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Button,
    useToast,
    Flex,
    Text,
  } from "@chakra-ui/react";
  
  import { useQueryClient } from "react-query";
  
  import { useMutationDeleteInstitution } from "service/institutions";
  
  const PessoaTableActionsDelete = ({ pessoa }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    const queryClient = useQueryClient();
  
    const toast = useToast();
  
    const { mutate, isLoading } = useMutationDeleteInstitution({
      onError: ({ response }) => {
        const message = response.data.message;
  
        toast({
          title: message,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
  
        return;
      },
      onSuccess: async () => {
        toast({
          title: "Pessoa cadastrada com sucesso!",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
  
        await queryClient.refetchQueries(["queryListPessoas"]);
  
        return;
      },
    });
  
    const handleDeleteIPessoa = () => {
      mutate({ PessoaDocumento: pessoa.documento });
    };
  
    return (
      <>
        <MenuItem onClick={onOpen} color="red">
          Remover
        </MenuItem>
  
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader textAlign="center">{`Remover pessoa ${pessoa.nome}`}</ModalHeader>
  
            <ModalCloseButton />
            <ModalBody>
              <Text textAlign="center">
                Tem certeza? Essa ação é irreversível
              </Text>
            </ModalBody>
  
            <Flex justify="space-between" mt="30px" mb="10px" mx="20px">
              <Button variant="ghost" onClick={onClose}>
                Cancelar
              </Button>
  
              <Button
                onClick={handleDeleteIPessoa}
                isLoading={isLoading}
                isDisabled={isLoading}
                color="red"
              >
                Remover Pessoa
              </Button>
            </Flex>
          </ModalContent>
        </Modal>
      </>
    );
  };
  
  export default PessoaTableActionsDelete;