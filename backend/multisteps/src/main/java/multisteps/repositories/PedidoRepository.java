package multisteps.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import multisteps.entities.pedidos.Pedido;

public interface PedidoRepository extends JpaRepository<Pedido, Long> {

}
