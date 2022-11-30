import AsyncStorage from '@react-native-async-storage/async-storage';
const storage = {
  //------------------------------------------------------> Value
  set: async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value.toString());
    } catch (e) {
      // saving error
    }
  },

  get: async key => {
    try {
      return await AsyncStorage.getItem(key);
    } catch (e) {
      // error reading value
    }
  },
  //------------------------------------------------------> JSON
  setJSON: async (key, value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      // saving error
    }
  },

  getJSON: async key => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  },
  removeItem: async key => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      throw new Error(error);
    }
  },
};
export default storage;
