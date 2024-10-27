// Importa os componentes necessários do React Native
import { View, Text, Image } from "react-native";
// Importa os estilos definidos no arquivo appointment.style.js
import { styles } from "./appointment.style.js";
// Importa ícones para exibição (como calendário e relógio)
import icon from "../../constants/icon.js";
// Importa o componente Button que será usado para ações
import Button from "../../components/button/button.jsx";

// Define o componente 'Appointment' que exibe informações sobre um compromisso
function Appointment(props) {
  return (
    // 'View' principal que envolve o conteúdo do compromisso
    <View style={styles.appointment}>
      {/* Exibe o serviço e o nome do médico */}
      <Text style={styles.name}>
        {props.service} - {props.doctor}
      </Text>
      {/* Exibe a especialidade do médico */}
      <Text style={styles.specialty}>{props.specialty}</Text>
      {/* Container para informações de data e hora */}
      <View style={styles.container}>
        {/* Container para as informações de agendamento */}
        <View style={styles.containerBook}>
          {/* Exibe a data do compromisso */}
          <View style={styles.book}>
            <Image style={styles.icon} source={icon.calendar} />
            <Text>15/10/2024</Text>
          </View>
          {/* Exibe a hora do compromisso */}
          <View style={styles.book}>
            <Image style={styles.icon} source={icon.clock} />
            <Text>15/10/2024</Text>
          </View>
        </View>
        {/* Container para o botão de ação */}
        <View style={styles.containerButton}>
          {/* Botão para cancelar a reserva */}
          <Button text={"Cancelar Reserva"} theme="danger"></Button>
        </View>
      </View>
    </View>
  );
}

// Exporta o componente 'Appointment' para ser utilizado em outras partes do aplicativo
export default Appointment;
