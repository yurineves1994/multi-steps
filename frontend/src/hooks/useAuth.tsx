import { useState } from 'react';

interface AuthHook {
  token: string | null;
  loading: boolean;
  error: string | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuth = (): AuthHook => {
  const [token, setToken] = useState<string | null>(sessionStorage.getItem('token') || null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (username: string, password: string): Promise<void> => {
    setLoading(true);

    try {
      // Substitua a URL abaixo pela sua API de autenticação
      const response = await fetch('SUA_URL_DE_LOGIN', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Credenciais inválidas');
      }

      const data = await response.json();
      const newToken: string = data.token; // Substitua pelo nome correto do token na resposta do seu backend

      setToken(newToken);
      sessionStorage.setItem('token', newToken);
    } catch (error: Error | any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const logout = (): void => {
    setToken(null);
    sessionStorage.removeItem('token');
  };

  return { token, loading, error, login, logout };
};
