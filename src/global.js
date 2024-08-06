import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--font-inter: Inter;
--font-monda: Monda;

/* font sizes */
--font-size-11xl: 30px;
--font-size-lg: 18px;
--font-size-5xl: 24px;
--font-size-xl: 20px;
--font-size-base: 16px;
--font-size-3xs: 10px;
--font-size-mini: 15px;
--font-size-smi: 13px;
--font-size-6xl: 25px;
--font-size-52xl-6: 71.6px;
--font-size-24xl: 43px;
--font-size-38xl: 57px;
--font-size-lgi-2: 19.2px;
--font-size-11xl-7: 30.7px;
--font-size-81xl: 100px;
--font-size-31xl: 50px;
--font-size-61xl: 80px;
--font-size-21xl: 40px;
--font-size-13xl: 32px;
--font-size-16xl: 35px;
--font-size-2xl: 21px;
--font-size-9xl: 28px;

/* Colors */
--color-darkslategray-100: #434040;
--color-darkslategray-200: rgba(67, 64, 64, 0.7);
--color-darkslategray-300: rgba(67, 64, 64, 0.5);
--color-darkslategray-400: rgba(67, 64, 64, 0.3);
--color-darkslategray-500: rgba(67, 64, 64, 0.2);
--color-linen-100: #eae8dc;
--color-linen-200: #eae7dc;
--color-tomato-100: #ef6125;
--color-tomato-200: #d6470a;
--color-tomato-300: rgba(239, 97, 37, 0.3);
--color-mediumpurple-100: #9180db;
--color-mediumpurple-200: #7766c2;
--color-gold-100: #ffcd1c;
--color-gold-200: #fec601;
--color-gold-300: rgba(255, 205, 28, 0.3);
--color-gray-100: #939393;
--color-gray-200: #202020;
--color-white: #fff;
--color-lightpink-100: #fea1bd;
--color-lightpink-200: rgba(254, 161, 189, 0.3);
--color-gainsboro-100: #e0e0e0;
--color-gainsboro-200: #d9d9d9;
--color-deepskyblue-100: #2c9fe6;
--color-deepskyblue-200: rgba(44, 159, 230, 0.3);
--color-goldenrod-100: #f1c732;
--color-goldenrod-200: #cc9900;
--color-darkgray: #9f9f9f;
--color-silver: #c0c0c0;
--color-palevioletred: #cc6e8a;
--color-lightgray: #d1cfc2;
--color-mediumseagreen: #14ae59;
--color-steelblue: #1287cc;
--color-burlywood: #c29d66;

/* Gaps */
--gap-11xl: 30px;
--gap-mini: 15px;
--gap-3xs: 10px;
--gap-0: 0px;
--gap-xl: 20px;
--gap-146xl: 165px;
--gap-22xl: 41px;
--gap-27xl: 46px;
--gap-4xl: 23px;
--gap-mid: 17px;
--gap-14xl: 33px;
--gap-6xs: 7px;
--gap-10xl: 29px;
--gap-lgi: 19px;
--gap-2xs: 11px;
--gap-8xs: 5px;
--gap-5xs: 8px;
--gap-2xl: 21px;
--gap-172xs: -159px;
--gap-7xs: 6px;
--gap-8xl: 27px;
--gap-6xl-5: 25.5px;
--gap-19xl: 38px;
--gap-6xl-7: 25.7px;
--gap-xs-2: 11.2px;
--gap-lgi-5: 19.5px;
--gap-13xl-2: 32.2px;
--gap-327xl-5: 346.5px;
--gap-68xl: 87px;
--gap-154xl: 173px;
--gap-xl-7: 20.7px;
--gap-7xs-7: 5.7px;
--gap-base: 16px;
--gap-lg: 18px;
--gap-sm: 14px;
--gap-sm-7: 13.7px;
--gap-5xl: 24px;
--gap-3xl: 22px;
--gap-6xl: 25px;
--gap-38xs: -25px;
--gap-42xl-5: 61.5px;
--gap-35xl: 54px;
--gap-21xl: 40px;
--gap-44xl: 63px;
--gap-235xl: 254px;
--gap-108xl: 127px;
--gap-xs: 12px;
--gap-9xs: 4px;
--gap-132xs: -119px;
--gap-171xs-5: -158.5px;
--gap-9xl: 28px;
--gap-186xs: -173px;
--gap-18xl: 37px;
--gap-30xs: -17px;
--gap-26xl: 45px;
--gap-18xl-5: 37.5px;
--gap-7xl: 26px;
--gap-82xs: -69px;
--gap-6xl-2: 25.2px;
--gap-xl-9: 20.9px;
--gap-20xl: 39px;

/* Paddings */
--padding-45xl: 64px;
--padding-12xs: 1px;
--padding-89xl: 108px;
--padding-35xl: 54px;
--padding-8xl: 27px;
--padding-xl: 20px;
--padding-2xs: 11px;
--padding-10xl: 29px;
--padding-28xl: 47px;
--padding-3xs: 10px;
--padding-6xs: 7px;
--padding-smi: 13px;
--padding-xs: 12px;
--padding-10xs: 3px;
--padding-4xs: 9px;
--padding-7xs: 6px;
--padding-8xs: 5px;
--padding-66xl: 85px;
--padding-mini: 15px;
--padding-5xs: 8px;
--padding-9xs: 4px;
--padding-sm: 14px;
--padding-49xl: 68px;
--padding-11xs: 2px;
--padding-43xl: 62px;
--padding-48xl: 67px;
--padding-40xl: 59px;
--padding-257xl: 276px;
--padding-50xl: 69px;
--padding-base: 16px;
--padding-4xl-8: 23.8px;
--padding-3xs-6: 9.6px;
--padding-55xl: 74px;
--padding-305xl: 324px;
--padding-143xl: 162px;
--padding-229xl: 248px;
--padding-62xl: 81px;
--padding-22xl: 41px;
--padding-2xl: 21px;
--padding-25xl: 44px;
--padding-9xs-9: 3.9px;
--padding-46xl: 65px;
--padding-3xl: 22px;
--padding-4xl: 23px;
--padding-mid: 17px;
--padding-lg: 18px;
--padding-16xl: 35px;
--padding-10088xl-9: 10107.9px;
--padding-6xl: 25px;
--padding-58xl: 77px;
--padding-21xl: 40px;
--padding-27xl: 46px;
--padding-20xl: 39px;
--padding-7xl: 26px;
--padding-34xl: 53px;
--padding-11xl: 30px;
--padding-5xl: 24px;
--padding-2xl-3: 21.3px;
--padding-14xl: 33px;
--padding-32xl: 51px;
--padding-31xl: 50px;
--padding-33xl: 52px;
--padding-59xl: 78px;
--padding-19xl: 38px;
--padding-lgi: 19px;
--padding-12xl: 31px;
--padding-15xl: 34px;
--padding-17xl: 36px;
--padding-24xl: 43px;
--padding-xs-9: 11.9px;
--padding-96xl: 115px;
--padding-7xs-8: 5.8px;
--padding-smi-5: 12.5px;
--padding-84xl: 103px;
--padding-18xl: 37px;

/* Border radiuses */
--br-xs: 12px;
--br-lg: 18px;
--br-5xs: 8px;
--br-11xs-5: 1.5px;
--br-mini: 15px;
--br-11xs-8: 1.8px;
--br-smi: 13px;
--br-3xs: 10px;
--br-sm-8: 13.8px;
--br-xs-4: 11.4px;
--br-3xs-5: 9.5px;
--br-2xs-2: 10.2px;
--br-4xs-5: 8.5px;
--br-10xs: 3px;
--br-10xs-6: 2.6px;
--br-11xl: 30px;

}
`;
