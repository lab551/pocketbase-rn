import * as SecureStore from 'expo-secure-store';

export class StorageService {
  static Constants = {
    SUBSCRIBED: 'subscribed',
    COOKIE: 'cookie',
  };

  static async get(key: string): Promise<string | null> {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  }

  static async set(key: string, value: string): Promise<void> {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  }

  static async remove(key: string): Promise<void> {
    try {
      return SecureStore.deleteItemAsync(key);
    } catch (err) {
      return;
    }
  }
}
