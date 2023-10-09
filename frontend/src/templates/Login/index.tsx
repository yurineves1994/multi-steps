import { useState } from 'react';
import * as S from './style';
import { useAuth } from '~/hooks/useAuth';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { token, loading, error, login } = useAuth();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <S.Container>
      <S.Form onSubmit={handleLogin}>
        <S.Label>
          Username
          <S.Input type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
        </S.Label>

        <S.Label>
          Password
          <S.Input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </S.Label>

        <S.Button type='submit'>Login</S.Button>
      </S.Form>
    </S.Container>
  );
};
