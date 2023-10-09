package multisteps.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;

import multisteps.entities.user.User;

public interface UserRepository extends JpaRepository<User, String> {

  UserDetails findByLogin(String login); /*
                                          * AQUI O METODO USADO PARA PROCURAR O LOGIN NO BANCO DE DADOS
                                          * E PRECISA RETORNAR O USERDETAILS PORQUE SERÁ USADO PELO SPRING SECURITY
                                          */
}
