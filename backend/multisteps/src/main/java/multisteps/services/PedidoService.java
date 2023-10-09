package multisteps.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import multisteps.entities.pedidos.Pedido;
import multisteps.repositories.PedidoRepository;

@Service
public class PedidoService {
  
  @Autowired
  private PedidoRepository pedidoRepository;

  public void salvar(Pedido pedido) {
    pedidoRepository.save(pedido);
  }

  public List<Pedido> findAll() {
    List<Pedido> pedidos = pedidoRepository.findAll();

    return pedidos;
  }
}
