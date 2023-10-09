package multisteps.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import multisteps.entities.dtos.AuthenticationDTO;
import multisteps.entities.dtos.LoginResponseDTO;
import multisteps.entities.dtos.RegisterDTO;
import multisteps.entities.user.User;
import multisteps.infra.security.TokenService;
import multisteps.repositories.UserRepository;

@RestController
@CrossOrigin("*")
@RequestMapping("auth")
public class AuthenticationController {

  @Autowired
  private AuthenticationManager authenticationManager;

  @Autowired
  private UserRepository userRepository;

  @Autowired
  private TokenService tokenService;

  @PostMapping("/login")
  public ResponseEntity login(@RequestBody AuthenticationDTO data) {
    var usernamepassword = new UsernamePasswordAuthenticationToken(data.login(), data.password());
    var auth = authenticationManager.authenticate(usernamepassword);

    var token = tokenService.generateToken((User) auth.getPrincipal());

    return ResponseEntity.ok(new LoginResponseDTO(token));
  }

  @PostMapping("/register")
  public ResponseEntity register(@RequestBody RegisterDTO data) {
    if (this.userRepository.findByLogin(data.login()) != null)
      return ResponseEntity.badRequest().build();

    String encryptedPassword = new BCryptPasswordEncoder().encode(data.password());

    User newUser = new User(data.login(), encryptedPassword, data.role());

    this.userRepository.save(newUser);

    return ResponseEntity.ok().build();
  }
}
