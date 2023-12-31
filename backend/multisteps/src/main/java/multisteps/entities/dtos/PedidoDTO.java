
package multisteps.entities.dtos;

import java.util.List;

public class PedidoDTO {
  private String name;
  private String email;
  private String phone;
  private String period;
  private PlanDTO plan;

  private List<ServicesDTO> services;

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPhone() {
    return phone;
  }

  public void setPhone(String phone) {
    this.phone = phone;
  }

  public String getPeriod() {
    return period;
  }

  public void setPeriod(String period) {
    this.period = period;
  }

  public PlanDTO getPlan() {
    return plan;
  }

  public void setPlan(PlanDTO plan) {
    this.plan = plan;
  }

  public List<ServicesDTO> getServices() {
    return services;
  }

  public void setServices(List<ServicesDTO> services) {
    this.services = services;
  }

}