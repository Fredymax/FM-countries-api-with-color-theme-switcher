import { HiChevronDown as HiChevronDownImport } from 'react-icons/hi';
import styled from 'styled-components';

export const HiChevronDown = styled(HiChevronDownImport)`
  rotate: ${(props) => (props.open ? '0deg' : '90deg')};
  transition: rotate 300ms;
`;
