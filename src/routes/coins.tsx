import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { fetchCoins } from './api';

const Container = styled.div`
    padding: 0 20px;
    max-width: 480px;
    margin: 0 auto;
`;

const Header = styled.header`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CoinList = styled.ul`
    
`;

const Coin = styled.li`
    background-color: white;
    color: ${props => props.theme.bgColor};
    border-radius: 15px;
    margin: 10px;
    a {
        display: flex;
        align-items: center;
        transition: color 0.2s ease-in;
        padding: 20px;
    }
    &:hover {
        a {
            color: ${props => props.theme.accentColor};
        }
    }
`;

const Title = styled.h1`
    font-size: 48px;
    color: ${props => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block ;
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

interface ICoin {
    id: string,
    name: string,
    symbol: string,
    rank: number,
    is_new: boolean,
    is_active: boolean,
    type: string,
}

function Coins() {
    const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins);    
    return (
        <Container>
            <Header>
                <Title>Coins</Title>
            </Header>
            <CoinList>
                {isLoading ? (
                    <Loader>Loading...</Loader>
                ) : data?.slice(0, 100).map(coin => (
                    <Coin key={coin.id}>
                        <Link to={`/${coin.id}`} state={{name: coin.name}}>
                            <Img src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`} />
                            {coin.name} &rarr;
                        </Link>
                    </Coin>
                ))}
            </CoinList>
        </Container>
    )
}

export default Coins;
