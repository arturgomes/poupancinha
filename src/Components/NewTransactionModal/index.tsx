import { title } from 'process';
import { useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import { Container, RadioBox, TransactionTypeContainer } from './styles';
import outcomeImg from '../../assets/outcome.svg';
import incomeImg from '../../assets/income.svg';
interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export default function NewTransactionModal({
    isOpen,
    onRequestClose,
}: NewTransactionModalProps) {
    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    return (
        <Modal
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
            isOpen={isOpen}
        >
            <button
                type="button"
                onClick={onRequestClose}
                className="react-modal-close"
            >
                <img src={closeImg} alt="close" />
            </button>
            <Container>
                <h2>Cadastrar Transação</h2>
                <input
                    placeholder="Titulo"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
                <input
                    placeholder="Valor"
                    value={amount}
                    onChange={(event) => setAmount(Number(event.target.value))}
                />
                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        isActive={type === 'deposit'}
                        activeColor="green"
                        onClick={() => setType('deposit')}
                    >
                        <img src={incomeImg} alt="saida" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox
                        type="button"
                        isActive={type === 'withdraw'}
                        activeColor="red"
                        onClick={() => setType('withdraw')}
                    >
                        <img src={outcomeImg} alt="saida" />
                        <span>Saida</span>
                    </RadioBox>
                </TransactionTypeContainer>
                <input
                    type="text"
                    placeholder="Categoria"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                />
                <button type="submit" value="Cadastrar">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    );
}
