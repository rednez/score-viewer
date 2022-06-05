import React from 'react';
import styled from 'styled-components';

const Letter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: ${(props) => props.color};
  font-size: 14px;
  height: 24px;
  width: 24px;
  border-radius: 20px;
  color: #ffffff;
  margin-left: 12px;
`;

export function LetterGrade(props: { score: number }) {
  const { score } = props;

  const letter =
    score >= 90
      ? 'A'
      : score >= 80
      ? 'B'
      : score >= 70
      ? 'C'
      : score >= 60
      ? 'D'
      : 'F';

  const color =
    letter === 'A'
      ? '#35860d'
      : letter === 'B'
      ? '#b09908'
      : letter === 'C'
      ? '#cc872c'
      : letter === 'D'
      ? '#ec7839'
      : '#e11c1c';

  return <Letter color={color}>{letter}</Letter>;
}
