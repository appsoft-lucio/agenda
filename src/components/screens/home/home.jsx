// Importa os componentes necessários do React Native
import { FlatList, Text, View } from "react-native";
// Importa os estilos definidos no arquivo home.style.js
import { styles } from "./home.style.js";
// Importa os dados dos médicos do arquivo de constantes
import { doctors } from "../../../constants/data.js";
// Importa o componente Doctor que será usado para renderizar cada médico
import Doctor from "../../doctor/doctor.jsx";
// Importa os ícones que representam os médicos
import icon from "../../../constants/icon.js";

// Define o componente funcional Home
function Home() {
  return (
    // Cria uma View que servirá como contêiner principal do componente
    <View style={styles.container}>
      {/* Exibe um texto informativo sobre agendamentos */}
      <Text style={styles.text}>Agende seus serviços.</Text>

      {/* 
        Renderiza uma lista vertical de médicos usando FlatList.
        FlatList é otimizado para exibir grandes listas de dados.
      */}
      <FlatList
        // Passa os dados dos médicos para a lista
        data={doctors}
        // Define uma chave única para cada item, usando o id_doctor
        keyExtractor={(doc) => doc.id_doctor}
        // Desativa o indicador de rolagem vertical
        showsVerticalScrollIndicator={false}
        // Renderiza cada item da lista
        renderItem={({ item }) => {
          return (
            // Renderiza o componente Doctor, passando as propriedades necessárias
            <Doctor
              name={item.name} // Nome do médico
              // Define o ícone baseado no gênero do médico
              icon={item.icon == "M" ? icon.male : icon.female}
              specialty={item.specialty} // Especialidade do médico
            />
          );
        }}
      />
    </View>
  );
}

// Exporta o componente Home como padrão
export default Home;
