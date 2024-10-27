import { Image, TextInput, View, Text, TouchableOpacity } from "react-native";
import icon from "../../../constants/icon.js";
// Importa componentes essenciais do React Native, como 'Image', 'TextInput', 'View', 'Text', e 'TouchableOpacity'.
// 'icon' é um arquivo JavaScript localizado em um diretório de constantes que contém a definição de ícones ou imagens.

import { styles } from "./login.style";
// Importa os estilos definidos em um arquivo de estilo externo (login.style.js).

import Button from "../../button/button";
// Importa um componente personalizado de botão que está localizado na pasta 'button'.

function Login() {
  // Função que define o componente funcional 'Login'. Este componente será responsável por renderizar a tela de login.
  return (
    <View style={styles.container}>
      {/* Contêiner principal que envolve toda a interface. A estilização vem de styles.container */}

      <View style={styles.containerLogo}>
        {/* Segundo contêiner para posicionar o logotipo */}
        <Image source={icon.logo} style={styles.logo} />
        {/* Exibe a imagem (logotipo) da aplicação, com a fonte 'icon.logoxxl' e estilizada conforme styles.logo */}
      </View>

      <View>
        {/* Bloco que contém os inputs de e-mail e senha */}
        <View style={styles.containerInput}>
          {/* Primeiro campo de entrada para o e-mail */}
          <TextInput placeholder="E-mail" style={styles.input} />
          {/* Campo de entrada de texto com o placeholder "E-mail", estilizado com styles.input */}
        </View>

        <View style={styles.containerInput}>
          {/* Segundo campo de entrada para a senha */}
          <TextInput
            placeholder="Senha"
            style={styles.input}
            secureTextEntry={true}
            // Propriedade 'secureTextEntry' para ocultar o texto enquanto o usuário digita a senha.
          />
        </View>

        <Button text="Acessar" />
        {/* Componente personalizado de botão que recebe a propriedade 'text' com o valor "Acessar". Este botão provavelmente será o acionador do login. */}
      </View>

      <View style={styles.footer}>
        {/* Contêiner para o rodapé com a opção de criar uma nova conta */}
        <Text>Não tenho conta. </Text>
        <TouchableOpacity>
          {/* Um botão clicável (TouchableOpacity) que permitirá a criação de uma conta nova */}
          <Text style={styles.footerLink}>Criar conta agora.</Text>
          {/* Texto do link estilizado para indicar a criação de uma nova conta */}
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Login;
// Exporta o componente 'Login' para ser usado em outras partes da aplicação.
