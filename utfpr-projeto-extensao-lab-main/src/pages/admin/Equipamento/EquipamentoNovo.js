import {
    Flex,
    Input,
    FormControl,
    FormLabel,
    Center,
    Select,
    Text,
    ButtonGroup,
    Button,
    FormErrorMessage,
} from "@chakra-ui/react";



import { useForm } from "react-hook-form";




const EquipamentoNovo = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        localStorage.setItem("USER", data);

        window.location.reload();
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
                        Equipamento
                    </Text>

                    <FormControl isInvalid={errors.nome}>
                        <FormLabel htmlFor="nome">Nome</FormLabel>
                        <Input
                            id="nome"
                            type="text"
                            {...register("", { required: "O nome é obrigatório!" })}
                        />

                        {errors.login && (
                            <FormErrorMessage>{errors.nome.message}</FormErrorMessage>
                        )}

                    </FormControl>

                    <FormControl >
                        <FormLabel htmlFor="sigla">Sigla</FormLabel>
                        <Input
                            id="sigla"
                            type="text"
                            {...register("")}
                        />
                        
                    </FormControl>
                    
                    
                    
                    
                    <Center bg='white' h='100px' color='black'>
                        Unidade Medida Interna:
                    </Center>
                    <Select placeholder='Select option'>
                        <option value='hora'>Hora</option>
                        <option value='amostra'>Amostra</option>
    
                    </Select>

                    <FormControl >
                        <FormLabel htmlFor="valorInterno">Valor Interno</FormLabel>
                        <Input
                            id="valorInterno"
                            type="text"
                            {...register("")}
                        />
                        
                    </FormControl>

                    <Center bg='white' h='100px' color='black'>
                        Unidade Medida Externo:
                    </Center>
                    <Select placeholder='Select option'>
                        <option value='hora'>Hora</option>
                        <option value='amostra'>Amostra</option>
    
                    </Select>

                    <FormControl >
                        <FormLabel htmlFor="valorExterno">Valor Externo</FormLabel>
                        <Input
                            id="valorExterno"
                            type="text"
                            {...register("")}
                        />
                        
                    </FormControl>


                    <Center bg='white' h='100px' color='black'>
                        Unidade Medida Padrão:
                    </Center>
                    <Select placeholder='Select option'>
                        <option value='hora'>Hora</option>
                        <option value='amostra'>Amostra</option>
    
                    </Select>

                    <FormControl >
                        <FormLabel htmlFor="valorPadrao">Valor Padrão</FormLabel>
                        <Input
                            id="valorPadrao"
                            type="text"
                            {...register("")}
                        />
                        
                    </FormControl>


                    <ButtonGroup variant='outline' spacing='6'>
                        <Button colorScheme='blue'>Save</Button>
                        <Button>Cancel</Button>
                    </ButtonGroup>
                </Flex>
            </form>
        </Flex>
    );
};

export default EquipamentoNovo;