import * as S from './style';
import iconThankYou from '../../assets/icon-thank-you.png';

export const Finished = () => {
  return (
    <S.Finished className='container'>
      <div className='finished'>
        <img src={iconThankYou} />
        <h2>Thank you!</h2>
        <p>
          Thanks for confirming your subscription! We hope you have fun using our platform. If you
          ever need support, please feel free to email us at support@loremgaming.com.
        </p>
      </div>
    </S.Finished>
  );
};
