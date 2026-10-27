import { router, useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

import { CustomButton } from "@/components/CustomButton";
import { colors, spacing } from "@/constants/theme";

const FILMES = [
  { id: "0", nome: "Interestelar" },
  { id: "1", nome: "A Origem" },
  { id: "2", nome: "Batman: O Cavaleiro das Trevas" },
  { id: "3", nome: "Clube da Luta" },
  { id: "4", nome: "Matrix" },
  { id: "5", nome: "O Poderoso Chefão" },
  { id: "6", nome: "Pulp Fiction" },
  { id: "7", nome: "Cidade de Deus" },
  { id: "8", nome: "O Senhor dos Anéis: A Sociedade do Anel" },
  { id: "9", nome: "Parasita" },
];

export default function MovieDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const filme = FILMES.find((f) => f.id === id);

  const handleGoHome = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.icon}>🎬</Text>
        <Text style={styles.label}>
          Exibindo detalhes do filme:{" "}
          <Text style={styles.movieName}>
            {filme ? filme.nome : "Filme não encontrado"}
          </Text>
        </Text>
      </View>

      <CustomButton
        title="Voltar ao Início"
        variant="secondary"
        onPress={handleGoHome}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.lg,
    justifyContent: "center",
  },
  card: {
    backgroundColor: colors.surface,
    padding: spacing.lg,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: spacing.xl,
    borderWidth: 1,
    borderColor: colors.border,
  },
  icon: {
    fontSize: 48,
    marginBottom: spacing.md,
  },
  label: {
    fontSize: 16,
    color: colors.textMuted,
    textAlign: "center",
  },
  movieName: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.text,
    textAlign: "center",
  },
});
