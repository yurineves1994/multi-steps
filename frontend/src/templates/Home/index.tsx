/* eslint-disable no-undef */
import * as S from './style';
// components
import { Additions } from '../../components/Additions';
import { Finished } from '../../components/Finished';
import { Finishing } from '../../components/Finishing';
import { Form } from '../../components/Form';
import { List } from '../../components/List';
import { Plan } from '../../components/Plan';

import { useContext } from 'react';
import { RegisterContext } from '~/context/RegisterContext/context';

export const stepsRegister = [
  <Form key={0} />,
  <Plan key={1} />,
  <Additions key={2} />,
  <Finishing key={3} />,
  <Finished key={4} />,
];

export const Home = () => {
  const { currentComponent } = useContext(RegisterContext);

  return (
    <S.Container>
      <S.SideBar>
        <List />
      </S.SideBar>
      <S.Content>{currentComponent}</S.Content>
    </S.Container>
  );
};
