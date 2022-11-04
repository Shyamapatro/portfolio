import styled from "styled-components";

export const Button= styled.button`
text-decoration: none;
max-width: auto;
background-color:rgba(98,94,243);
color:rgba(255,255,255);
padding:1.4rem 2.4rem;
border:none;
text-transform:uppercase;
text-align:center;
cursor: pointer;
transition:all 0.2s ease;
-webkit-transition:all 0.2s ease;
-moz-transition:all 0.2s ease;
-o-transition:all 0.2s ease;

&hover,
&active{
    box-shadow:0 2rem 2rem 0 rgba(132 144 255/30%);
    box-shadow: ${({ theme }) => theme.color.shadowSupport};
    tranfrom:scale(0.96);
}

a{
    text-decoration:none;
    color:rgba(255,255,255);
    font-size:1.8rem;

}

`