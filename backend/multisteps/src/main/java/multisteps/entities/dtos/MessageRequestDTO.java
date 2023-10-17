package multisteps.entities.dtos;

public record MessageRequestDTO(String ownerRef, String emailFrom, String emailTo, String subject, String text) {
}
