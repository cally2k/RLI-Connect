// Retailer
const RetailerInfo = document.getElementById("RetailerInfo");
const PopUpXRet = document.getElementById("PopUpXRet");
const PopUpBookingFormRet = document.getElementById("PopUpBookingFormRet");

const PopUpActivateRet = () => {
    document.getElementById("RetailerPopUp").style.display = "block";
}

RetailerInfo.addEventListener("click", PopUpActivateRet);

const PopUpCloseRet = () => {
    document.getElementById("RetailerPopUp").style.display = "none";
}

PopUpXRet.addEventListener("click", PopUpCloseRet);

// Developer
const DeveloperInfo = document.getElementById("DeveloperInfo");
const PopUpXDev = document.getElementById("PopUpXDev");
const PopUpBookingFormDev = document.getElementById("PopUpBookingFormDev");
const PopUpBookNowDev = document.getElementById("PopUpBookNowDev");

const PopUpActivateDev = () => {
    document.getElementById("DeveloperPopUp").style.display = "block";;
}

DeveloperInfo.addEventListener("click", PopUpActivateDev);

const PopUpCloseDev = () => {
    document.getElementById("DeveloperPopUp").style.display = "none";
}

PopUpXDev.addEventListener("click", PopUpCloseDev);

// Delegate
const DelegateInfo = document.getElementById("DelegateInfo");
const PopUpXDel = document.getElementById("PopUpXDel");
const PopUpBookingFormDel = document.getElementById("PopUpBookingFormDel");
const PopUpBookNowDel = document.getElementById("PopUpBookNowDel");

const PopUpActivateDel = () => {
    document.getElementById("DelegatePopUp").style.display = "block";
}

DelegateInfo.addEventListener("click", PopUpActivateDel);

const PopUpCloseDel = () => {
    document.getElementById("DelegatePopUp").style.display = "none";
}

PopUpXDel.addEventListener("click", PopUpCloseDel);