package multisteps.entities.dtos;

import multisteps.entities.user.UserRole;

public record RegisterDTO(String login, String password, UserRole role) {
  
}
