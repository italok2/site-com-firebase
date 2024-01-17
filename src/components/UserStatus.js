// src/components/UserStatus.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase'; // Certifique-se de importar a referência correta para o Firebase

const UserStatus = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
 

  useEffect(() => {
    // Adiciona um observador de autenticação para verificar mudanças no estado do usuário
    const unsubscribe = auth.onAuthStateChanged((user) => {
      
      setUser(user);
      if(user == null){
        console.log("Não logado")
        navigate("/login")
      }
    });

    // Limpa o observador quando o componente é desmontado
    return () => {
      unsubscribe();
    };
  }, []); // Executa o efeito apenas uma vez durante a montagem do componente

  const handleLogout = async () => {
    try {
      await auth.signOut();
      console.log('Usuário deslogado com sucesso!');
    } catch (error) {
      console.error('Erro ao fazer logout:', error.message);
    }
  };

  return (
    <div>
      {user ? (
        <div>
          <p>Usuário logado: {user.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>Nenhum usuário logado</p>
      )}
    </div>
  );
};

export default UserStatus;
