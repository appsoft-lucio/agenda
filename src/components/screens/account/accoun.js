import { COLORS } from "../../../constants/theme.js";
// Importa um conjunto de cores padronizadas, que são provavelmente usadas em toda a aplicação para manter a consistência de design.

export const styles = {
  container: {
    // Estilos aplicados ao contêiner principal da tela
    backgroundColor: COLORS.gray5,
    // Define a cor de fundo como 'gray5', uma cor importada do arquivo de constantes.
    padding: 50,
    // Aplica um espaçamento interno (padding) de 50 unidades para criar espaço entre o conteúdo e as bordas do contêiner.
    justifyContent: "space-between",
    // Distribui o conteúdo dentro do contêiner, garantindo que ele ocupe o espaço disponível entre os elementos.
    height: "100%",
    // Define que o contêiner ocupará 100% da altura disponível da tela.
  },
  containerLogo: {
    // Estilos aplicados ao contêiner que segura o logotipo
    alignItems: "center",
    // Centraliza horizontalmente o logotipo dentro do contêiner.
  },
  logo: {
    // Estilos aplicados à imagem do logotipo
    width: 140,
    // Define a largura do logotipo como 140 unidades.
    height: 70,
    // Define a altura do logotipo como 70 unidades.
  },
  containerInput: {
    // Estilos aplicados ao contêiner de cada campo de entrada de texto
    marginBottom: 15,
    // Adiciona um espaçamento inferior de 15 unidades entre os campos de entrada.
  },
  input: {
    // Estilos aplicados aos campos de entrada (TextInput)
    backgroundColor: COLORS.gray4,
    // Define a cor de fundo dos campos de entrada como 'gray4', uma cor mais clara.
    padding: 15,
    // Define o preenchimento interno dos campos de entrada como 15 unidades, criando espaçamento ao redor do texto digitado.
    borderRadius: 10,
    // Aplica bordas arredondadas ao redor dos campos de entrada.

    // Estilos para sombras (para adicionar profundidade e destaque visual)
    shadowColor: "#000",
    // Define a cor da sombra como preta.
    shadowOffset: { width: 3, height: 3 },
    // Desloca a sombra em 3 unidades para a direita e 3 unidades para baixo.
    shadowOpacity: 0.2,
    // Define a opacidade da sombra, para que fique levemente visível.
    shadowRadius: 5,
    // Aplica um raio de desfoque à sombra, criando bordas suaves.

    // Estilos específicos de sombra para Android
    elevation: 5,
    // Adiciona uma elevação de 5 unidades nos dispositivos Android, criando o efeito de sombra.
  },
  footer: {
    // Estilos aplicados ao contêiner do rodapé
    alignItems: "center",
    // Centraliza os itens no rodapé horizontalmente.
    justifyContent: "center",
    // Centraliza os itens no rodapé verticalmente.
    flexDirection: "row",
    // Alinha os itens horizontalmente em uma linha (para o texto e o link ficarem lado a lado).
  },
  footerLink: {
    // Estilos aplicados ao link no rodapé
    color: COLORS.orange,
    // Define a cor do link como laranja, importada de uma paleta de cores padronizada.
  },
};
