import * as S from './style';
import { stepsRegister } from '../../templates/Home';
import { useControlStep } from '../../hooks/useControlStep';

export const List = () => {
  const { stepsList } = useControlStep(stepsRegister);
  return (
    <S.Container>
      <S.List>
        {stepsList.map((step, index) => (
          <S.ListItem key={index} className={step.status == 'sucess' ? 'passed' : 'pendent'}>
            <span className='number'>{index + 1}</span>
            <div>
              <span className='step'>STEP-{index + 1}</span>
              <span className='step_name'>{step.name}</span>
            </div>
          </S.ListItem>
        ))}
      </S.List>
    </S.Container>
  );
};
