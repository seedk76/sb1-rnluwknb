export interface AuthUser {
  id: string;
  email: string;
  role: 'client' | 'provider' | 'admin';
}

export interface AuthError {
  message: string;
}