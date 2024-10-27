import { Image, TextInput, View, Text, TouchableOpacity } from "react-native";
import icon from "../../../constants/icon.js";
// Importa componentes essenciais do React Native: 'Image', 'TextInput', 'View', 'Text', e 'TouchableOpacity'.
// 'icon' é um arquivo que contém referências para imagens e ícones usados na aplicação.

import { styles } from "./accoun.js";
// Importa o arquivo de estilos personalizados para o componente 'Account', onde "accoun.js" provavelmente deveria ser "account.js" (um erro de digitação no nome do arquivo).

import Button from "../../button/button";
// Importa um componente de botão reutilizável, que será utilizado na tela de criação de conta.

function Account() {
  // Define o componente funcional 'Account', responsável pela tela de cadastro de usuário.
  return (
    <View style={styles.container}>
      {/* Contêiner principal da tela com estilização aplicada a partir de 'styles.container' */}

      <View style={styles.containerLogo}>
        {/* Contêiner para centralizar e exibir o logotipo */}
        <Image source={icon.logoxxl} style={styles.logo} />
        {/* Exibe o logotipo da aplicação com um estilo específico definido em 'styles.logo' */}
      </View>

      <View>
        {/* Contêiner que contém os campos de entrada de texto (Nome, E-mail, Senha) */}

        <View style={styles.containerInput}>
          {/* Campo de entrada para o nome do usuário */}
          <TextInput placeholder="Nome" style={styles.input} />
          {/* O 'TextInput' exibe o placeholder "Nome" e aplica os estilos de 'styles.input' */}
        </View>

        <View style={styles.containerInput}>
          {/* Campo de entrada para o e-mail do usuário */}
          <TextInput placeholder="E-mail" style={styles.input} />
          {/* O 'TextInput' exibe o placeholder "E-mail", também com a estilização definida */}
        </View>

        <View style={styles.containerInput}>
          {/* Campo de entrada para a senha do usuário */}
          <TextInput
            placeholder="Senha"
            style={styles.input}
            secureTextEntry={true}
            // A propriedade 'secureTextEntry' faz com que o campo de entrada oculte a senha à medida que o usuário digita.
          />
        </View>

        <Button text="Criar conta" />
        {/* Componente de botão reutilizável com a propriedade 'text' definida como "Criar conta", que provavelmente acionará o evento de criação de conta. */}
      </View>

      <View style={styles.footer}>
        {/* Rodapé da tela, que oferece um link para acessar uma conta já existente */}
        <Text>Já tenho conta. </Text>
        <TouchableOpacity>
          {/* Um botão clicável para o usuário acessar uma conta já existente */}
          <Text style={styles.footerLink}>Acessar conta.</Text>
          {/* Texto do link para acessar uma conta existente, estilizado com 'styles.footerLink' */}
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Account;
// Exporta o componente 'Account' para que possa ser usado em outras partes da aplicação.
