import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthHook {
  token: string | null;
  loading: boolean;
  error: string | null;
  login: (login: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuth = (): AuthHook => {
  const [token, setToken] = useState<string | null>(sessionStorage.getItem('token') || null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const login = async (login: string, password: string): Promise<void> => {
    setLoading(true);

    try {
      // Substitua a URL abaixo pela sua API de autenticação
      const response = await fetch('http://localhost:8080/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ login, password }),
      });

      if (!response.ok) {
        throw new Error('Credenciais inválidas');
      }

      const data = await response.json();
      const newToken: string = data.token; // Substitua pelo nome correto do token na resposta do seu backend

      setToken(newToken);
      sessionStorage.setItem('token', newToken);

      navigate('/admin', { replace: true });
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
