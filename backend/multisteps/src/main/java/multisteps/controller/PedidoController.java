package multisteps.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import multisteps.entities.dtos.PedidoDTO;
import multisteps.entities.dtos.PlanDTO;
import multisteps.entities.dtos.ServicesDTO;
import multisteps.entities.pedidos.Pedido;
import multisteps.entities.plan.Plan;
import multisteps.entities.services.Services;
import multisteps.services.PedidoService;

@RestController
@CrossOrigin("*")
@RequestMapping(path = "/api/pedido")
public class PedidoController {

  @Autowired
  private PedidoService pedidoService;

  @PostMapping
  public Pedido createProduto(@RequestBody PedidoDTO pedidoDTO) {
    Pedido pedido = new Pedido();
    pedido.setNome(pedidoDTO.getName());
    pedido.setAdress(pedidoDTO.getAdress());
    pedido.setPhone(pedidoDTO.getPhone());

    PlanDTO planDTO = pedidoDTO.getPlan();
    Plan plan = new Plan();
    plan.setType(planDTO.getType());
    plan.setPrice(planDTO.getPrice());
    pedido.setPlan(plan);

    List<ServicesDTO> serviceDTOs = pedidoDTO.getServices();
    List<Services> services = new ArrayList<>();
    for (ServicesDTO serviceDTO : serviceDTOs) {
      Services service = new Services();
      service.setName(serviceDTO.getName());
      service.setPrice(serviceDTO.getPrice());
      services.add(service);
    }
    pedido.setServices(services);
    pedido.calculeteTotal();

    pedidoService.salvar(pedido);

    return pedido;
  }

  @GetMapping
  public List<Pedido> findAll() {
    return pedidoService.findAll();
  }
}
