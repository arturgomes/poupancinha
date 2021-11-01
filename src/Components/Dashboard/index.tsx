import React from 'react';
import Sumario from '../Sumario';
import TabelaTransacoes from '../TabelaTransacoes';
import { Container } from './styles';

export default function Dashboard() {
    return (
        <Container>
            <TabelaTransacoes />
            <Sumario />
        </Container>
    );
}
