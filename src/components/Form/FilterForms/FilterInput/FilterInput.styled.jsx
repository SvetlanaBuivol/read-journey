import styled from 'styled-components';
import { colors } from '../../../../css/variables';

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 14px 14px;
  border-radius: 12px;
  background-color: ${colors.mediumGrey};

  label {
    margin-right: 10px;
    line-height: 1.3;
    letter-spacing: -0.02em;
    color: ${colors.lightGrey};

    @media screen and (min-width: 768px) {
      font-size: 14px;
      width: 87px;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 14px 16px;
  }
`;

export const Input = styled.input`
  flex: 1;
  line-height: 1.3;
  letter-spacing: -0.02em;

  &::placeholder {
    color: ${colors.white};
    line-height: 1.3;
    letter-spacing: -0.02em;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;
