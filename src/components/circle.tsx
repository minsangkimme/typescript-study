import styled from 'styled-components';

interface ContainerProps {
    bgColor: string;
    borderColor: string;
}

const Container = styled.div<ContainerProps>`
    background: ${props => props.bgColor};
    width: 100px;
    height: 100px;
    border-radius: 100px;
    border: 1px solid ${props => props.borderColor};
`;

interface CicleProps {
    bgColor: string;
    borderColor?: string;
}

const Circle  = ({ bgColor, borderColor }: CicleProps) => {
return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor} />
}

export default Circle;