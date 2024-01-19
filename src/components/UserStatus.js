import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import ConditionalNavLink from './ConditionalNavLink';

const UserStatus = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      console.log('Usuário deslogado com sucesso!');
    } catch (error) {
      console.error('Erro ao fazer logout:', error.message);
    }
  };

  useEffect(() => {
    // Adiciona um observador de autenticação para verificar mudanças no estado do usuário
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      if (user == null) {
        navigate("/login")
      } else {
        console.log("logado:" + user.email)
      }

    });

    // Limpa o observador quando o componente é desmontado
    return () => {
      unsubscribe();
    };
  }, []); // Executa o efeito apenas uma vez durante a montagem do componente

  return (
    <div>
      {user ? (
        <div>
          <ConditionalNavLink to="/login" condition={false}>
            Login
          </ConditionalNavLink>

          <button onClick={handleLogout}>Logout</button>

        </div>
      ) : (
        <div>
          <ConditionalNavLink to="/login" condition={true}>
            Login
          </ConditionalNavLink>

        </div>
      )}

    </div>

  );
};

export default UserStatus;