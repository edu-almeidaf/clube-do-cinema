import { router, useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

import { CustomButton } from "@/components/CustomButton";
import { colors, spacing } from "@/constants/theme";

export default function Home() {
  const { user } = useLocalSearchParams<{ user?: string }>();

  const handleBack = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.icon}>🎫</Text>

        {user ? (
          <>
            <Text style={styles.welcomeText}>Bem-vindo, {user}!</Text>
            <Text style={styles.promoText}>Hoje tem promoção para sócios!</Text>
            <Text style={styles.priceText}>Ingresso R$10,00.</Text>
          </>
        ) : (
          <>
            <Text style={styles.welcomeText}>
              Bem-vindo ao Clube de Cinema!
            </Text>
            <Text style={styles.priceText}>Ingresso R$20,00.</Text>
          </>
        )}
      </View>

      <CustomButton
        title="Voltar ao Início"
        variant="secondary"
        onPress={handleBack}
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
  welcomeText: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.text,
    textAlign: "center",
    marginBottom: spacing.sm,
  },
  promoText: {
    fontSize: 16,
    color: colors.success,
    marginBottom: spacing.md,
  },
  priceText: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.primary,
    marginTop: spacing.sm,
  },
});
