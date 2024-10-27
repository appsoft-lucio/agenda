// Importa os componentes necessários do React Native
import { Image, Text, TouchableOpacity, View } from "react-native";
// Importa os estilos definidos no arquivo doctor.style
import { style } from "./doctor.style";

// Define o componente funcional Doctor que recebe as propriedades como props
export default function Doctor(props) {
  return (
    // TouchableOpacity para tornar o componente clicável
    <TouchableOpacity style={style.doctor}>
      {/* Renderiza a imagem do médico com o ícone passado via props */}
      <Image source={props.icon} style={style.icon} />
      {/* Cria uma View para agrupar os textos */}
      <View>
        {/* Renderiza o nome do médico, estilizado conforme definido */}
        <Text style={style.name}>{props.name}</Text>
        {/* Renderiza a especialidade do médico, estilizado conforme definido */}
        <Text style={style.speciality}>{props.specialty}</Text>
      </View>
    </TouchableOpacity>
  );
}
