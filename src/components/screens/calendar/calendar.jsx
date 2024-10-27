// Importa os componentes necessários do React Native
import { FlatList, Text, View } from "react-native";

// Importa os estilos definidos no arquivo calendar.style.js
import { styles } from "./calendar.style.js";

// Importa a lista de compromissos (appointments) do arquivo data.js
import { appointments } from "../../../constants/data.js";

// Importa o componente Appointment, que será usado para exibir cada item da lista
import Appointment from "../../appointment/appointment.jsx";

// Importa os ícones que representam os médicos (não está sendo usado diretamente aqui)
import icon from "../../../constants/icon.js";

// Define o componente principal 'Calendar' que será responsável por renderizar a lista de compromissos
function Calendar() {
  return (
    // 'View' principal que envolve o conteúdo da tela, com os estilos aplicados
    <View style={styles.container}>
      {/* Texto de título no topo da tela */}
      <Text style={styles.text}>Agende seus serviços.</Text>

      {/* FlatList é usada para renderizar uma lista de dados de forma eficiente */}
      <FlatList
        // 'data' recebe o array de compromissos (appointments) que serão exibidos
        data={appointments}
        // 'keyExtractor' define uma chave única para cada item da lista, utilizando o ID do compromisso
        keyExtractor={(appoint) => appoint.id_appointment}
        // Remove o indicador de rolagem vertical da lista
        showsVerticalScrollIndicator={false}
        // 'renderItem' é uma função que renderiza cada item da lista
        renderItem={({ item }) => {
          return (
            // O componente Appointment é chamado para cada item da lista, passando as props necessárias
            <Appointment
              service={item.service} // Serviço do compromisso (ex: "Consulta")
              doctor={item.doctor} // Nome do médico responsável
              specialty={item.specialty} // Especialidade do médico
              booking_date={item.booking_date} // Data do compromisso
              booking_hour={item.booking_hour} // Horário do compromisso
            />
          );
        }}
      />
    </View>
  );
}

// Exporta o componente 'Calendar' para ser utilizado em outras partes do aplicativo
export default Calendar;
