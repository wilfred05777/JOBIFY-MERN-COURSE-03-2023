import styled from "styled-components";

export const Wrapper = styled.section`
    /* style here */
    .dashboard {
        display: grid;
        grid-template-columns: 1fr;
        column: 1fr;
    }
    .dashboard-page{
        width: 90vw;
        margin: 0 auto; /*center*/
        padding: 2rem 0;
    }

    @media (min-width: 992px){
        .dashboard {
            grid-template-columns:auto 1fr;
            column: 1fr;
        }
        .dashboard-page{
            width: 90%;
        }
    }
`;

export default Wrapper;