import { Notify } from "notiflix/build/notiflix-notify-aio.js";

// import Notiflix from "notiflix";
//
// export function notificationsInit() {
//     Notiflix.Notify.init({
//         width: "2080px",
//         position: "right-top",
//         distance: "10px",
//         opacity: 1,
//         borderRadius: "5px",
//         rtl: false,
//         timeout: 3000,
//         messageMaxLength: 110,
//         backOverlay: false,
//         backOverlayColor: "rgba(0,0,0,0.5)",
//         plainText: true,
//         showOnlyTheLastOne: false,
//         clickToClose: false,
//         pauseOnHover: true,
//         ID: "NotiflixNotify",
//         className: "notiflix-notify",
//         zindex: 4001,
//         fontFamily: "Quicksand",
//         fontSize: "13px",
//         cssAnimation: true,
//         cssAnimationDuration: 400,
//         cssAnimationStyle: "fade",
//         closeButton: false,
//         useIcon: true,
//         useFontAwesome: false,
//         fontAwesomeIconStyle: "basic",
//         fontAwesomeIconSize: "34px",
//         success: {
//             background: "#32c682",
//             textColor: "#fff",
//             childClassName: "notiflix-notify-success",
//             notiflixIconColor: "rgba(0,0,0,0.2)",
//             fontAwesomeClassName: "fas fa-check-circle",
//             fontAwesomeIconColor: "rgba(0,0,0,0.2)",
//             backOverlayColor: "rgba(50,198,130,0.2)",
//         },
//         failure: {
//             background: "#ff5549",
//             textColor: "#fff",
//             childClassName: "notiflix-notify-failure",
//             notiflixIconColor: "rgba(0,0,0,0.2)",
//             fontAwesomeClassName: "fas fa-times-circle",
//             fontAwesomeIconColor: "rgba(0,0,0,0.2)",
//             backOverlayColor: "rgba(255,85,73,0.2)",
//         },
//         warning: {
//             background: "#eebf31",
//             textColor: "#fff",
//             childClassName: "notiflix-notify-warning",
//             notiflixIconColor: "rgba(0,0,0,0.2)",
//             fontAwesomeClassName: "fas fa-exclamation-circle",
//             fontAwesomeIconColor: "rgba(0,0,0,0.2)",
//             backOverlayColor: "rgba(238,191,49,0.2)",
//         },
//         info: {
//             background: "#26c0d3",
//             textColor: "#fff",
//             childClassName: "notiflix-notify-info",
//             notiflixIconColor: "rgba(0,0,0,0.2)",
//             fontAwesomeClassName: "fas fa-info-circle",
//             fontAwesomeIconColor: "rgba(0,0,0,0.2)",
//             backOverlayColor: "rgba(38,192,211,0.2)",
//         },
//     });
// }
//
// export const notifications = {
//     success: (message, options = {}) => Notiflix.Notify.success(message, options),
//     failure: (message, options = {}) => Notiflix.Notify.failure(message, options),
//     warning: (message, options = {}) => Notiflix.Notify.warning(message, options),
//     info: (message, options = {}) => Notiflix.Notify.info(message, options),
// };

export function readNotifications(key) {
    const notifications = sessionStorage.getItem(key);
    console.log(sessionStorage.getItem(key));
    if (notifications) {
        Notify.success(notifications);
        console.log(notifications);
    }

    sessionStorage.removeItem(key);
}
