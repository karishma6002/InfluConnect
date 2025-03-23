export interface User {
  id: string;
  email: string;
  name: string;
  type: 'influencer' | 'brand';
  profileComplete: boolean;
  createdAt: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData extends LoginCredentials {
  name: string;
  type: 'influencer' | 'brand';
}