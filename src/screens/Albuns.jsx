import {ScrollView, Text, View, } from "react-native";

export const Albuns = () => (
    <ScrollView>
        <View style={fundo}>
            <Text style={textoum}>1- Mate. Feed. Kill. Repeat: O álbum foi a primeira colaboração da banda com Ross Robinson, cuja entrada levou à redefinição da banda para o som actual, em contraste com a sua anterior direção musical. Slipknot foi bem recebido pelos fãs e a crítica e foi responsável por dar aos Slipknot um grande aumento de popularidade.</Text>
            <Text style={textodois}>2-Iowa: Lançado em 28 de agosto de 2001, o disco traz um bode em sua capa, deixando evidente o clima obscuro da obra. Devido a grande pressão em torno da banda, o período de gravação do álbum foi sombrio e conturbado. O relacionamento entre os membros do Slipknot não era dos melhores, com vários conflitos internos, além de vários problemas gerados por vícios com drogas.</Text>
            <Text style={textotres}>3-Vol 3, The subliminal verses: O terceiro disco do grupo Slipknot é um tanto quanto majestoso. A banda consegue capturar de forma voraz a necessidade da intensidade absoluta entre suas composições. Lançado em 2004 e com quatro singles nas paradas, o grupo intensificou tudo, mesmo indo contra a maré que suspeitava de que a banda fosse continuar.</Text>
            <Text style={textoquatro}>4-All Hope Is Gone: Esse "All Hope is Gone" é o quarto trabalho do grupo norte americano e em especial, conseguiu atenção redobrada dos fãs; e na verdade, eles em algum trabalho antecessor já tinham conseguido o feito, mas aqui a coisa se ampliou.</Text>
        </View>
    </ScrollView>
    
)

const textoum = {
    backgroundColor: "white",
    textAlign: "left",
    marginTop: "50px",
    height: "400px",
    width: "75%",
    borderStyle: "groove",
    borderColor: "red",
    borderWidth: "2px",
    padding: "15px",
    fontSize: "20px",
    borderRadius: "10px"
}
const textodois = {
    backgroundColor: "white",
    textAlign: "left",
    marginTop: "50px",
    height: "430px",
    width: "75%",
    borderStyle: "groove",
    borderColor: "red",
    borderWidth: "2px",
    padding: "15px",
    fontSize: "20px",
    borderRadius: "10px"
}
const textotres = {
    backgroundColor: "white",
    textAlign: "left",
    marginTop: "50px",
    height: "400px",
    width: "75%",
    borderStyle: "groove",
    borderColor: "red",
    borderWidth: "2px",
    padding: "15px",
    fontSize: "20px",
    borderRadius: "10px"
}
const textoquatro = {
    backgroundColor: "white",
    textAlign: "left",
    marginTop: "50px",
    height: "340px",
    width: "75%",
    borderStyle: "groove",
    borderColor: "red",
    borderWidth: "2px",
    padding: "15px",
    fontSize: "20px",
    borderRadius: "10px"
}
const fundo = {
    backgroundColor: "lightgray",
    height: "100%",
    display: "flex",
    alignItems: "center",

}
