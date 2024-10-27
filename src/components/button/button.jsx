// Importa os componentes necessários do React Native
import { Alert, Text, TouchableOpacity } from "react-native";
// Importa os estilos definidos no arquivo button.style.js
import { styles } from "./button.style.js";

// Define o componente funcional Button que recebe as propriedades como props
function Button(props) {
  // Função chamada quando o botão é pressionado
  function TesteClick() {
    // Exibe um alerta na tela
    Alert.alert("Clicou no nosso botão");
  }

  // Retorna um TouchableOpacity que é um botão clicável
  return (
    <TouchableOpacity
      onPress={TesteClick} // Define a ação a ser executada quando o botão é pressionado
      style={[
        styles.btn, // Estilo base do botão
        props.theme == "danger" ? styles.danger : styles.primary, // Estilo condicional baseado na prop 'theme'
      ]}
    >
      {/* Renderiza o texto do botão, recebido através das props */}
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
}

// Exporta o componente Button como padrão
export default Button;
