import { COLORS, FONT_SIZE } from "../../constants/theme";

export const style = {
  doctor: {
    flex: 1,
    backgroundColor: COLORS.gray5,
    padding: 10,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: COLORS.gray4,
    borderRadius: 15,
    marginTop: 5,
    marginBottom: 5,

    // Estilos de sombra (sombras são usadas para dar destaque ou profundidade visual)
    shadowColor: COLORS.gray1,
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
  name: {
    fontSize: FONT_SIZE.lg,
    color: COLORS.gray1,
    marginTop: 8,
  },
  speciality: {
    fontSize: FONT_SIZE.md,
    color: COLORS.gray3,
  },
  icon: {
    marginRight: 8,
  },
};
