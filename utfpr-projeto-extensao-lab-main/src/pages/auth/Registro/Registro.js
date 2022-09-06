import {
    Flex,
    Button,
    Text,
    useToast
  } from "@chakra-ui/react";
  
  import { useForm } from "react-hook-form";
  
  import { useMutationDirecionarCadastro } from "service/auth";
  import { Link } from "react-router-dom";

  const escolherCadastro = [
    { title: "Aluno", link: "/cadastro-aluno" },
    { title: "Professor", link: "/cadastro-professor" },
    { title: "Empresa", link: "/cadastro-empresa" }
  ];
  
  const Registro = () => {
  
  
    const toast = useToast();
  
    const {
  
      handleSubmit,
    } = useForm();
  
    const { mutate } = useMutationDirecionarCadastro({
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
      onSuccess: ({ data }) => {
        localStorage.setItem("USER", data.token);
  
        window.location.reload();
      },
    });
  
    const onSubmit = async (data) => {
      await mutate(data);
    };
  
  
    return (
      <Flex height="100vh" width="100%" align="center" justify="center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex direction="column">
            <Text
              fontWeight="bold"
              fontSize="1.5rem"
              mb="50px"
              textDecor="underline"
            >
              Como deseja cadastrar-se?
            </Text>
  
            <Flex>
        {escolherCadastro.map((item, index) => (
          <Link key={index} to={item.link}>
            <Button variant="ghost">{item.title}</Button>
          </Link>
        ))}
      
    
      </Flex>
      <Link key="login" to="/login">
      <Button variant="ghost">Voltar ao Login</Button>
    </Link>
     
      </Flex>
          
        </form>
      </Flex>
    );
  };
  
  export default Registro;
  