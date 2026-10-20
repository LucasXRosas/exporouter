import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';

export default function HomeScreen() {
  const { user } = useLocalSearchParams<{ user?: string }>();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {user ? (
          <Text style={styles.welcomeText}>
            Bem-vindo, <Text style={styles.highlight}>{user}</Text>! Hoje tem promoção para sócios! Ingresso R$10,00.
          </Text>
        ) : (
          <Text style={styles.welcomeText}>
            Bem-vindo ao Clube de Cinema! Ingresso R$20,00.
          </Text>
        )}
      </View>

      <Pressable style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>← Voltar à Tela Inicial</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#0c0a09',
  },
  card: {
    width: '100%',
    padding: 24,
    backgroundColor: '#1c1917',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#292524',
    marginBottom: 24,
  },
  welcomeText: {
    fontSize: 18,
    color: '#f5f5f4',
    textAlign: 'center',
    lineHeight: 26,
  },
  highlight: {
    color: '#f59e0b',
    fontWeight: 'bold',
  },
  backButton: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    backgroundColor: '#292524',
    borderRadius: 12,
  },
  backButtonText: {
    color: '#f59e0b',
    fontWeight: '600',
    fontSize: 14,
  },
});