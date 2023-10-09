import { useContext } from 'react';
import { finishRegister } from '~/context/RegisterContext/actions';
import { RegisterContext } from '~/context/RegisterContext/context';
import * as S from './style';
import { useHttpPost } from '~/hooks/useFetch';

type Service = {
  name: string;
  price: number;
};

export const Finishing = () => {
  const { user, dispatch, changeStep } = useContext(RegisterContext);

  const { postData } = useHttpPost();

  const handleRegister = () => {
    finishRegister(dispatch);
    changeStep();
    postData('http://localhost:8080/api/pedido', user);
  };
  return (
    <div className='container'>
      <h2>Finishing upx</h2>
      <h3>Double-check everything looks OK before confirming.</h3>
      <S.Finishing>
        <S.BlockPlan>
          <div className='plan'>
            <span className='plan_title'>
              {user.plan?.type} ({user.period})
            </span>
            <span className='change'>Change</span>
          </div>
          <span className='plan_price'>${user.plan?.price}/mo</span>
        </S.BlockPlan>
        {user.services?.map((servico: Service, index) => (
          <S.OtherService key={index}>
            <div className='other_title'>{servico.name}</div>
            <div className='other_price'>+${servico.price}/mo</div>
          </S.OtherService>
        ))}
      </S.Finishing>
      <S.Total>
        <span className='total_title'>Total (per month)</span>
        <span className='total_price'>+${user.total}/mo</span>
      </S.Total>
      <hr />
      <div className='button'>
        <button onClick={handleRegister}>Confirm</button>
      </div>
    </div>
  );
};
