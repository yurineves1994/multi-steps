package multisteps.entities;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_pedido")
public class Pedido {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String nome;
  private String adress;
  private String phone;

  @OneToOne(cascade = CascadeType.PERSIST)
  private Plan plan;

  @OneToMany(cascade = CascadeType.PERSIST)
  private List<Services> services = new ArrayList<Services>();

  private Double total;

  public Pedido() {
  }

  public Pedido(String nome, String adress, String phone, Plan plan, List<Services> services) {
    this.nome = nome;
    this.adress = adress;
    this.phone = phone;
    this.plan = plan;
    this.services = services;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getNome() {
    return nome;
  }

  public void setNome(String nome) {
    this.nome = nome;
  }

  public String getAdress() {
    return adress;
  }

  public void setAdress(String adress) {
    this.adress = adress;
  }

  public String getPhone() {
    return phone;
  }

  public void setPhone(String phone) {
    this.phone = phone;
  }

  public Plan getPlan() {
    return plan;
  }

  public void setPlan(Plan plan) {
    this.plan = plan;
  }

  public List<Services> getServices() {
    return services;
  }

  public void setServices(List<Services> services) {
    this.services = services;
  }

  public Double getTotal() {
    return total;
  }

  public void calculeteTotal() {
    this.total = 0.0;

    for (Services service : services) {
      this.total += service.getPrice();
    }

    if (plan != null) {
      this.total += plan.getPrice();
    }
  }
}
