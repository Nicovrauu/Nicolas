import { Image, Text, View } from "react-native";

export const Home = ({ navigation }) => (
    <View style={fundo}>
        <Text style={divStyle}>BOAS VINDAS AO MEU BLOG</Text>
        <Image style={marca} source={{ uri: 'https://logosmarcas.net/wp-content/uploads/2020/05/Slipknot-Logo.png' }} />  
    </View>
)

    const divStyle = {
        textAlign: "center",
        fontSize: "40px",
        marginTop: "40px"
    };
    const fundo = {
        backgroundColor: "lightgray",
        height: "100%",
        display: "flex",
        alignItems: "center"
    }
    const marca = {     
        marginTop: "100px",  
        height: "150px",
        width: "85%"
    }