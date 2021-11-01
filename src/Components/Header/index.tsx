import React from 'react';
import { Container, Content } from './styles';
import logoImg from '../../assets/Poupancinha.svg';
export default function Header() {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="Poupancinha" />
                <button type="button">Nova Transação</button>
            </Content>
        </Container>
    );
}
