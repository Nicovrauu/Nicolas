import { Text, View, } from "react-native";
import { Button, TextInput } from "react-native-paper";

export const Contatos = () => (
    <View style={fundo}>
        <View style={fundodois}>
            <Text style={titulo}>CONTATOS</Text>
            <TextInput label="Nome:" style={input}></TextInput>
            <br></br>
            <TextInput label="Senha:" style={inputdois}></TextInput>
            <Button style={enviar}>Enviar</Button>
        </View>    
    </View>
)
const fundodois = {
    display: "flex",
    backgroundColor: "white",
    padding: "30px",
    marginTop: "100px"
}
const titulo = {
    marginTop: "10px",
    textAlign: "center",
    fontSize: "30px"
}
const input = {
    marginTop: "40px",
    width: "300px",
    height: "50px",
}
const inputdois = {
    width: "300px",
    height: "50px",
    borderRadius: "5px"
}
const fundo = {
    backgroundColor: "lightgray",
    height: "100%",
    display: "flex",
    alignItems: "center",
}
const enviar = {
    marginTop: "20px",
    width: "300px",
    height: "50px",
    textAlign: "center",
    backgroundColor: "green",
    padding: "5px"
}
