import http from 'k6/http';
import { check, sleep } from 'k6';

// Configura o teste para rodar com 100 usuários simultâneos por 5 minutos
export let options = {
  vus: 100,
  duration: '5m',
};

// Função principal executada por cada usuário virtual
export default function () {
  // Realiza uma requisição GET para o endpoint da API pública
  let res = http.get('https://serverest.dev/usuarios');
  
  // Valida se o status da resposta é 200 (OK)
  check(res, {
    'status is 200': (r) => r.status === 200,
  });
  
  // Aguarda 1 segundo antes da próxima iteração
  sleep(1);
}