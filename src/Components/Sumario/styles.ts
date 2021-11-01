import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 3rem;
    margin-left: 5%;
    width: 30%;
    display: flex;
    flex-direction: column;

    div {
        margin-bottom: 1.5rem;
        background: var(--shape);
        padding: 8px 16px;
        border-radius: 0.25rem;
        color: var(--text-title);

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            p {
                font-size: 16px;
            }
        }
        strong {
            display: block;
            font-size: 24px;
            font-weight: 400;
        }

        &.highlight-background {
            background: var(--green);
            color: var(--shape);
        }
    }
`;
