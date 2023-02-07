import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

@media (max-width: 767px) {
        grid-template-columns: 1fr;
        display: flex;
        flex-wrap: wrap;
    }
`;

export const StyledInput = styled.input`
    border: 2px solid #ddd;
    padding: 10px;
    width: 100%;
`;

export const Button = styled.button`
    padding: 10px;
    background: teal;
    color: white;
    border: none;
    cursor: pointer;
    transition: 1s;

&:hover {
    background: hsl(180, 100%, 35%);
    transform: scale(1.2);
    ;
}

@media (max-width: 767px) {
        width: 100%;
    }
    `;