import { Link, router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

import { CustomButton } from "@/components/CustomButton";
import { colors, spacing } from "@/constants/theme";

export default function Index() {
  const handleLogin = () => {
    router.push("/home?user=Fulano");
  };

  const handleRandomMovie = () => {
    const randomId = Math.floor(Math.random() * 10);
    router.push(`/movie/${randomId}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍿 Clube de Cinema</Text>
      <Text style={styles.subtitle}>Escolha como deseja acessar</Text>

      <Link href="/home" asChild>
        <CustomButton title="Entrar como Convidado" variant="secondary" />
      </Link>

      <CustomButton title="Entrar como Usuário Logado" onPress={handleLogin} />

      <CustomButton
        title="Ver um Filme Aleatório"
        onPress={handleRandomMovie}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.lg,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textMuted,
    marginBottom: spacing.xl,
  },
});
