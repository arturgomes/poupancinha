import React from 'react';
import { Container, Content } from './styles';
import logoImg from '../../assets/Poupancinha.svg';
interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export default function Header({ onOpenNewTransactionModal }: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="Poupancinha" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova Transação
                </button>
            </Content>
        </Container>
    );
}
