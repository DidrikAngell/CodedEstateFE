import { THEME_TYPE, Theme } from "../../configs/Constants";

export const Style = (theme) => `
    body {
        background : ${Theme[theme].WHITE} !important;
        color : ${Theme[theme].DARK_PURPLE};
    }

    .Header .navbar .nav-link {
        color : ${Theme[theme].DARK_PURPLE} !important;
    }

    .Header .navbar .nav-link:hover,
    .Header .navbar .nav-link:active,
    .Header .navbar .nav-link:focus {
        color : ${Theme[theme].PURPLE} !important;
    }

    .Header {
        box-shadow : 0 0 1px 0 ${Theme[theme].GRAY} !important;
        top: 0;
    }

    .DetailPage {
        margin-top : 85px !important;
    }

    .round-btn {
        background : ${Theme[theme].PURPLE} !important;
        color : ${Theme[theme].WHITE};
        border-radius : 500px;
        border : none;
    }

    .NormalCard .card-price {
        color : ${Theme[theme].DARK_PURPLE} !important;
        font-weight : bold !important;
        font-size : 16px !important;
    }

    .NormalCard .card-reviews {
        font-size : 14px !important;
        color : ${Theme[theme].GRAY} !important;
    }

    .NormalCard .card-reviews .review-icon {
        color : ${Theme[theme].ORANGE} !important;
    }

    .NormalCard .normal-card-title {
        font-size : 14px;
        font-weight : 500;
        color : ${Theme[theme].GRAY} !important;
    }

    .NormalCard .card-properties {
        font-size : 14px;
        color : ${Theme[theme].GRAY} !important;
    }

    .SearchBar {
        font-size : 14px !important;
    }

    .cursor-pointer {
        cursor : pointer !important;
    }

    .rmdp-day, .rmdp-week-day {
        width : 2.5rem !important;
        height : 2.5rem !important;
    }

    .rmdp-day span {
        color: ${Theme[theme].DARK_PURPLE} !important;
    }

    .rmdp-day.rmdp-disabled span {
        color: ${Theme[theme].GRAY} !important;
    }

    .rmdp-shadow {
        box-shadow : none !important;
        margin: auto;
    }

    .rmdp-header-values {
        color: ${Theme[theme].DARK_PURPLE} !important;
        font-size: 1rem;
        font-weight: 500;
    }

    .rmdp-week .rmdp-week-day,
    .rmdp-week .rmdp-day {
        font-size : 1rem !important;
        color: ${Theme[theme].GRAY} !important;
    }

    .rmdp-range {
        background-color : #f7f7f7 !important;
        border : none !important;
        box-shadow : none !important;        
    }

    .rmdp-range.start span,
    .rmdp-range.end span {
        background-color : ${Theme[theme].PURPLE} !important;
        color: ${Theme[theme].WHITE} !important;
    }

    .rmdp-range span {
        color : ${Theme[theme].DARK_PURPLE} !important;
        font-weight : 500;
    }

    .rmdp-day.rmdp-disabled span:hover {
        color: ${Theme[theme].GRAY} !important;
        border : none !important;
    }

    .rmdp-range span:hover,
    .rmdp-day span:hover {
        background-color : ${Theme[theme].WHITE} !important;
        border : 1px solid ${Theme[theme].DARK_PURPLE} !important;
        border-radius : 50px;
        color : ${Theme[theme].DARK_PURPLE} !important;
    }

    .rmdp-arrow-container .rmdp-arrow {
        border-color : ${Theme[theme].DARK_PURPLE} !important;
    }

    .rmdp-arrow-container:hover {
        background-color : #f7f7f7 !important;
        color : ${Theme[theme].DARK_PURPLE} !important;
    }

    div[role=tablist] {
        background : #f7f7f7 !important;
        padding : 0.5rem;
        border-radius : 50px;
    }

    .modal-body .nav-pills .nav-item .nav-link.active {
        border-radius : 50px;
        background : ${Theme[theme].WHITE} !important;
        box-shadow : 0 0 5px 0 ${Theme[theme].GRAY} !important;             
    }

    .modal-body .nav-pills .nav-item .nav-link {
        color : ${Theme[theme].DARK_PURPLE} !important;  
        font-weight : 500; 
    }

    .modal-body .tab-content .tab-pane {
        overflow-x : auto;
    }

    .guest-stepper .guest-content .guest-title {
        font-size : 1.25rem;
        font-weight : bold;
    }

    .guest-stepper .guest-content .guest-condition {
        color : ${Theme[theme].GRAY} !important;  
    }

    .guest-stepper .stepper button {
        width : 2.5rem;
        height : 2.5rem;
        border-radius : 50px !important;
        background : ${Theme[theme].WHITE} !important;  
        border : 1px solid ${Theme[theme].DARK_PURPLE} !important;  
        color : ${Theme[theme].DARK_PURPLE} !important; 
        display : flex;
        align-items : center
    }

    .guest-stepper .stepper span {
        min-width : 2rem;
    }

    .text-purple {
        color : ${Theme[theme].PURPLE} !important; 
    }

    .text-dark-purple {
        color : ${Theme[theme].DARK_PURPLE} !important; 
    }

    .text-light-purple {
        color : ${Theme[theme].LIGHT_PURPLE} !important; 
    }

    .text-white-custom {
        color : ${Theme[theme].WHITE_CUSTOM} !important; 
    }

    .text-orange {
        color : ${Theme[theme].ORANGE} !important; 
    }

    .text-red {
        color : ${Theme[theme].RED} !important; 
    }

    .text-gray {
        color : ${Theme[theme].GRAY} !important; 
    }

    .bg-purple {
        background : ${Theme[theme].PURPLE} !important; 
    }

    .bg-dark-purple {
        background : ${Theme[theme].DARK_PURPLE} !important; 
    }

    .bg-light-purple {
        background : ${Theme[theme].LIGHT_PURPLE} !important; 
    }

    .bg-white-custom {
        background : ${Theme[theme].WHITE_CUSTOM} !important; 
    }

    .bg-orange {
        background : ${Theme[theme].ORANGE} !important; 
    }

    .bg-red {
        background : ${Theme[theme].RED} !important; 
    }

    .bg-gray {
        background : ${Theme[theme].GRAY} !important; 
    }

    .border-purple {
        border-color : ${Theme[theme].PURPLE} !important; 
    }

    .border-dark-purple {
        border-color : ${Theme[theme].DARK_PURPLE} !important; 
    }

    .border-light-purple {
        border-color : ${Theme[theme].LIGHT_PURPLE} !important; 
    }

    .border-white-custom {
        border-color : ${Theme[theme].WHITE_CUSTOM} !important; 
    }

    .border-orange {
        border-color : ${Theme[theme].ORANGE} !important; 
    }

    .border-red {
        border-color : ${Theme[theme].RED} !important; 
    }

    .border-gray {
        border-color : ${Theme[theme].GRAY} !important; 
    }


    .Sidebar {
        border-right : 0.5px solid #0000002d !important; 
    }


`;