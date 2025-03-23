import { LoginCredentials, RegisterData, User } from '../types/auth';
import { storageKeys, setLocalStorage, getLocalStorage } from '../utils/localStorage';

export const authService = {
  login: async (credentials: LoginCredentials): Promise<User> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const users = getLocalStorage('users') || [];
    const user = users.find((u: User) => 
      u.email === credentials.email && u.password === credentials.password
    );
    
    if (!user) {
      throw new Error('Invalid credentials');
    }
    
    setLocalStorage(storageKeys.USER_DATA, user);
    return user;
  },

  register: async (data: RegisterData): Promise<User> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const users = getLocalStorage('users') || [];
    
    if (users.some((u: User) => u.email === data.email)) {
      throw new Error('Email already registered');
    }
    
    const newUser = {
      id: Date.now().toString(),
      ...data,
      profileComplete: false,
      createdAt: new Date().toISOString(),
    };
    
    users.push(newUser);
    setLocalStorage('users', users);
    setLocalStorage(storageKeys.USER_DATA, newUser);
    
    return newUser;
  },

  logout: () => {
    localStorage.removeItem(storageKeys.USER_DATA);
    localStorage.removeItem(storageKeys.AUTH_TOKEN);
  },
};