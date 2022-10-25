import { Form, FormContainer, Input, SendButton, StyledLabel } from "./styled"

export default function TelaCadastroEndereco(props) {

    return (
        <FormContainer>
            <h1>Cadastro de Endereço</h1>
            <Form>

                <StyledLabel>
                    Endereço: 
                    <Input/>
                </StyledLabel>

                <StyledLabel>
                    Numero da residência: 
                    <Input />
                </StyledLabel>

                <StyledLabel>
                    Telefone: 
                    <Input type={"number"}/>
                </StyledLabel>

                <StyledLabel>
                    Complemento: 
                    <Input/>
                </StyledLabel>

                <SendButton onClick={() => props.mudarTela(4)}>Cadastrar</SendButton>

            </Form>
            </FormContainer>
    )
}