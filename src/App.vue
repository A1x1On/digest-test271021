<template>
  <router-view/>
</template>

<style lang="scss">

  @import '@/assets/styles/variables.scss';

  html {
    height: 100%;
  }

  body {
    margin: 0px;
    line-height: $lh;
    height: 100%;
    background-color: lightgray;
  }

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  #app {

    font-family: $ff;
    font-style: normal;
    font-weight: normal;
    font-size: $fs;
    line-height: $lh;
    color: $color;
    height: 100%;
  }


  .title {
    font-weight: bold;
    font-size: $fs-xxl;
    line-height: 44px;
  }

  .input-control {
    /*height: 120px;*/

    .input-control__label {
      font-weight: 500;
      font-size: 16px;
      margin-bottom: 10px;
      line-height: 21px;
      color: $color-sub;
    }

    .input-control__input {
      width: 100%;
      height: 52px;
      padding: 16px;
      background: #FFFFFF;
      border: 1px solid $color-border;
      box-sizing: border-box;
      box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
      border-radius: $br;

      @media only screen and (min-width: 490px) {
        height: 32px;
        padding: 14px;
      }
      @media only screen and (min-width: 768px) {
        height: 52px;
      }

      &::-webkit-input-placeholder { /* WebKit, Blink, Edge */
        color: $color-lightBlue;
      }

      &:focus,
      &:active {
        outline: none;
        border: 2px solid #0880AE !important;

        @media only screen and (min-width: 490px) {
          padding: 14px !important;
        }
        @media only screen and (min-width: 768px) {
          padding: 15px !important;
        }
      }
    }

    .input-control__text-valid {
      margin-top: 10px;
      font-size: $fs-s;
      line-height: 18px;
      color: $color-danger;
      display: none;
    }
  }

  .button {
    border: none;
    color: #FFF;
    cursor: pointer;
    background: $color-info;
    box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.08), 0px 4px 8px rgba(44, 39, 56, 0.08);
    border-radius: $br;
    width: 100%;
    height: 56px;

    &:hover {
      box-shadow: 0px 12px 24px rgba(44, 39, 56, 0.08), 0px 24px 48px rgba(44, 39, 56, 0.16);
    }

    &:active {
      border: 2px solid rgba(44, 39, 56, 0.86);
      box-sizing: border-box;
      box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.0001), 0px 4px 8px rgba(44, 39, 56, 0.08);
    }

    &:disabled{
      background: #DBE2EA;
      box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.08);
    }
  }

  .color-info{
    color: $color-info;
  }

</style>
