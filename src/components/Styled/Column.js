import styled from 'styled-components'

const Column = styled.div`
  display: flex;
  flex-direction: column
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'flex-start'};
  flex: ${props => props.flex || 1};
`
export default Column
