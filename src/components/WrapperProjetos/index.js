import styled, { css } from 'styled-components';
import breakpointsMedia from '../../theme/helpers/breakpointsMedia';

const WrapperProjetos = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    ${breakpointsMedia({
    xs: css`background-color: red;`,
    md: css`
            background-color: blue;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
        `,
  })}
`;

export default WrapperProjetos;
