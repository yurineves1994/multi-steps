package multisteps.entities.dtos;

public class PlanDTO {
  private String type;
  private Double price;
  private Boolean period;

  public String getType() {
    return type;
  }

  public void setType(String type) {
    this.type = type;
  }

  public Double getPrice() {
    return price;
  }

  public void setPrice(Double price) {
    this.price = price;
  }

  public Boolean getPeriod() {
    return period;
  }

  public void setPeriod(Boolean period) {
    this.period = period;
  }

}