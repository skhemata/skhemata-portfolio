import { css } from 'lit-element';

export const SkhemataPortfolioStyle = css`
    .work-column{
        padding: 0;
    }
    .work-box{
        padding:15px;
    }
  .work-template .work-item {
    display: block;
    border-radius: 4px;
    -webkit-box-shadow: 0px 0px 0px 2px #ededed;
    box-shadow: 0px 0px 0px 2px #ededed;
    position: relative;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    overflow: hidden; }
    .work-template .work-item.vertical-work-item {
      max-height: 800px; }
    .work-template .work-item.square-work-item, .work-template .work-item.horizontal-work-item {
      max-height: calc(calc(800px / 2) - 15px);
      /* calculate max height of vertical-work-item */ }
    .work-template .work-item:hover {
      -webkit-box-shadow: 0px 0px 0px 2px var(--skhemata-portfolio-background-color, rgb(255, 193, 7));
      box-shadow: 0px 0px 0px 2px var(--skhemata-portfolio-background-color, rgb(255, 193, 7)); }
      .work-template .work-item:hover .work-overlay {
        -webkit-transform: scale(35);
        transform: scale(35); }
      .work-template .work-item:hover .cta-text {
        opacity: 1;
        -webkit-transform: translateY(0px);
        transform: translateY(0px); }
    .work-template .work-item .work-overlay {
      position: absolute;
      top: -100px;
      left: 40%;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background: var(--skhemata-portfolio-background-color, rgb(255, 193, 7));
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transition: all 0.6s;
      transition: all 0.6s;
      z-index: 1; }
    .work-template .work-item .work-info {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 2;
      color: var(--skhemata-portfolio-text-color, rgb(255, 255, 255));
      text-align: center;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center; }
    .work-template .work-item .cta-text {
      opacity: 0;
      -webkit-transition: all 0.4s;
      transition: all 0.4s;
      font-size: 18px;
      font-family:quicksand;
      -webkit-transform: translateY(40px);
      transform: translateY(40px);
      display: -webkit-box;
      display: -ms-flexbox;
      display: block;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center; }
      .work-template .work-item .cta-text .im {
        font-size: 30px;
        font-weight: bold;
        margin-left: 15px; }

        .project-title{
            font-size:20pt;
        }
        .project-desc{
            font-size:12pt;
        }
        .project-link{
            font-size:17pt;
            text-transform: uppercase;
            font-weight: bold;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
        }
        .project-text{
            margin-bottom: 10px;
        }
  

`;
