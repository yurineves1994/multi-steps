package multisteps.services;

import java.util.List;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import multisteps.entities.dtos.MessageRequestDTO;
import multisteps.entities.pedidos.Pedido;
import multisteps.repositories.PedidoRepository;

@Service
public class PedidoService {

  private final PedidoRepository pedidoRepository;
  private final RestTemplate restTemplate;

  public PedidoService(PedidoRepository pedidoRepository, RestTemplate restTemplate) {
    this.pedidoRepository = pedidoRepository;
    this.restTemplate = restTemplate;
  }

  public void salvar(Pedido pedido) {
    try {
      pedidoRepository.save(pedido);
      enviarMensagemParaAPI(pedido);
    } catch (Exception e) {
      throw new RuntimeException("Não foi possível realizar o pedido!", e);
    }
  }

  public List<Pedido> findAll() {
    return pedidoRepository.findAll();
  }

  public void enviarMensagemParaAPI(Pedido pedido) {
    var msg = "Parabéns,\n\nVocê acabou de realizar o pedido de contratação do plano: " + pedido.getPlan() +
        ".\n\nAlém disso, foram adicionados os seguintes serviços à contratação: " + pedido.servicesToString() +
        ".\n\nValor total: " + pedido.getTotal() + " reais.";

    MessageRequestDTO messageRequest = new MessageRequestDTO(pedido.getNome(), "projetosemjava@gmail.com",
        pedido.getEmail(), "Email de confirmação de Pedido", msg);

    HttpHeaders headers = new HttpHeaders();
    headers.setContentType(MediaType.APPLICATION_JSON);

    HttpEntity<MessageRequestDTO> requestEntity = new HttpEntity<>(messageRequest, headers);

    restTemplate.postForEntity("http://localhost:9090/api/ms", requestEntity, Void.class);
  }
}
