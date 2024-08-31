import { createGlobalStyle } from "styled-components";
import PoppinsLight from "../fonts/Poppins/Poppins-Light.ttf";
import PoppinsMedium from "../fonts/Poppins/Poppins-Medium.ttf";

const EstiloGlobal = createGlobalStyle`

    @font-face {
        font-family: "PoppinsLight";
        src: local('Poppins Light'), local('PoppinsLight'), url(${PoppinsLight});
    }
    @font-face {
        font-family: "PoppinsMedium";
        src: local('Poppins Medium'), local('PoppinsMedium'), url(${PoppinsMedium});
    }

    *{
        padding: 0;
        margin: 0;
        list-style: none;
        text-decoration: none;
        text-transform: none;
        box-sizing: border-box;
        font-family: "PoppinsLight";
    }
    .esconder{
        font-size: 1px;
        color: transparent;
        position: absolute;
        left: -9999;
    }    
`;

export default EstiloGlobal;