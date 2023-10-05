// import { RegisterContext } from '../../context/RegisterContext';
import { useContext } from 'react';
import { finishRegister } from '~/context/RegisterContext/actions';
import { RegisterContext } from '~/context/RegisterContext/context';
import * as S from './style';

export const Finishing = () => {
  const { user, dispatch, changeStep } = useContext(RegisterContext);

  const handleRegister = () => {
    finishRegister(dispatch);
    changeStep();
    console.log('ENVIANDO DADOS PARA O BACKEND!', user);
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
        {user.largeStorage?.contratado && (
          <S.OtherService>
            <div className='other_title'>Large Storage</div>
            <div className='other_price'>+${user.largeStorage.price}/mo</div>
          </S.OtherService>
        )}
        {user.onlineService?.contratado && (
          <S.OtherService>
            <div className='other_title'>Online Service</div>
            <div className='other_price'>+${user.onlineService.price}/mo</div>
          </S.OtherService>
        )}
        {user.customizable?.contratado && (
          <S.OtherService>
            <div className='other_title'>Customizable</div>
            <div className='other_price'>+${user.customizable.price}/mo</div>
          </S.OtherService>
        )}
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
