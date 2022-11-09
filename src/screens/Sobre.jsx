import { ScrollView, Text, View } from "react-native";

export const Sobre = () => (
    <ScrollView>
    <View style={fundao}>
        <Text style={sobre}>Olá pessoal, eu escolhi fazer sobre esse tema porque quando eu penso em banda logo me vem slipknot na cabeça, então espero que gostem do que eu preparei para vocês. Slipknot é uma banda norte-americana de heavy metal. O grupo se destacou pela caracterização dos integrantes que se apresentam trajados com máscaras e macacões industriais.

            O Slipknot foi criado na cidade de Des Moines, capital do estado de Iowa, Estados Unidos, no ano de 1995. Além de se apresentarem mascarados, se destacam também por suas músicas niilistas, sombrias, raivosas e melancólicas.

            O primeiro álbum da banda intitulado “Slipknot” foi lançado em 1999. Com os singles “Walt and Bleed” e “Spit it Out” e com a realização de grandes shows, o grupo ganhou importante espaço na mídia. Em 2000 o álbum recebeu disco de platina. Em 2001 foi lançado “Iowa” e em 2004 “Vol.3:The Subliminal Verses”, considerado por muitos como o melhor trabalho do grupo.

            Em 2008 o grupo lançou o álbum “All Hope is Bone”, que ficou em primeiro lugar na Billboard 200. A banda realizou shows na Austrália, Japão e Europa. Em 2010, o baixista Paul Gray, foi encontrado morto em um quarto de hotel. Em 2011 foi anunciado o novo integrante Donnie Steele. Nesse mesmo ano, a banda tocou em festivais na Europa e na edição brasileira do “Rock in Rio”. Em 2014 lançam o álbum de estúdio “The Gray Chapter”.

            O grupo é formado por nove integrantes: Sid Wilson, Joey Jordison, Chris Fehn, James Root, Craig Jones, Shawn Crahan, Mick Thomson, Corey Tayloe e Donnie Steele.
        </Text>
    </View>
    </ScrollView>
)

const sobre = {
    marginTop: "50px",
    fontSize: "25px",
    width: "80%",
    color: "red",
}
const fundao = {
    display: "flex",
    alignItems: "center"
}