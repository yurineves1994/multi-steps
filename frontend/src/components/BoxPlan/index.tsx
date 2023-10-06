import * as S from './style';

type Box = {
  onDispatch: (e: any) => void;
  id: string;
  plan: any;
  icon: string;
  name: string;
  price: number;
};

export const BoxPlan = ({ onDispatch, id, plan, icon, name, price }: Box) => {
  return (
    <>
      <input onClick={() => onDispatch({ type: name })} type='checkbox' name='plan' id={id} />
      <S.Box htmlFor={id} active={plan.type === name.toLowerCase() ? 'true' : 'false'}>
        <img src={icon} alt={'Icon Arcade'} />
        <div>
          <span className='title_box'>{name}</span>
          <span className='price_box'>${price}/mo</span>
        </div>
      </S.Box>
    </>
  );
};
