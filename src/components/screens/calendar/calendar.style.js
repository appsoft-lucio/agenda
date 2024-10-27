import { COLORS } from "../../../constants/theme.js";
// Importa um arquivo de constantes de cores, que possivelmente armazena um conjunto de cores padronizadas usadas em toda a aplicação.

export const styles = {
  container: {
    // Estilos aplicados ao contêiner principal da tela de login
    backgroundColor: COLORS.gray5,
    // Define a cor de fundo do contêiner principal como 'gray5', que é importada do arquivo de constantes.
    padding: 20,
    // Define um espaçamento interno de 10 unidades ao redor do conteúdo.
    justifyContent: "space-between",
    // Faz com que o conteúdo seja distribuído uniformemente entre o início e o fim do contêiner.
    height: "100%",
    // Define que o contêiner ocupará 100% da altura disponível da tela.
    flex: 1,
  },
  containerLogo: {
    // Estilos aplicados ao contêiner que contém o logotipo
    alignItems: "center",
    // Centraliza o logotipo horizontalmente.
  },
  logo: {
    // Estilos aplicados à imagem do logotipo
    width: 270,
    // Define a largura do logotipo como 140 unidades.
    height: 60,
    // Define a altura do logotipo como 70 unidades.
  },
  containerInput: {
    // Estilos aplicados a cada contêiner dos campos de entrada
    marginBottom: 15,
    // Adiciona um espaço de 15 unidades abaixo de cada input para separá-los.
  },
  input: {
    // Estilos aplicados aos campos de entrada de e-mail e senha
    backgroundColor: COLORS.gray4,
    // Define a cor de fundo dos inputs como 'gray4', importada do arquivo de constantes.
    padding: 15,
    // Adiciona um preenchimento interno de 15 unidades dentro dos campos.
    borderRadius: 10,
    // Aplica bordas arredondadas aos campos de entrada.

    // Estilos de sombra (sombras são usadas para dar destaque ou profundidade visual)
    shadowColor: "#000",
    // Define a cor da sombra como preta.
    shadowOffset: { width: 3, height: 3 },
    // Define o deslocamento da sombra em 3 unidades horizontalmente e verticalmente.
    shadowOpacity: 0.2,
    // Define a opacidade da sombra, que será levemente visível.
    shadowRadius: 5,
    // Aplica um raio de desfoque à sombra, para que ela não fique com bordas nítidas.

    // Sombras específicas para Android
    elevation: 5,
    // O 'elevation' gera uma sombra no Android, e o valor 5 indica a intensidade da elevação.
  },
  footer: {
    // Estilos aplicados ao contêiner do rodapé
    alignItems: "center",
    // Centraliza o conteúdo horizontalmente.
    justifyContent: "center",
    // Centraliza o conteúdo verticalmente dentro do contêiner.
    flexDirection: "row",
    // Define a direção dos elementos filhos como uma linha (horizontal).
  },
  footerLink: {
    // Estilos aplicados ao link "Criar conta agora" no rodapé
    color: COLORS.orange,
    // Define a cor do link como laranja, uma constante vinda do arquivo de cores.
  },
};
