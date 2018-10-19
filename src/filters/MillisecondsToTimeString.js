import Vue from 'vue'

export default Vue.filter('millisecondsToTimeString', function (millseconds) {
    var neg = false;
    if (millseconds < 0) {
        millseconds = -millseconds;
        neg = true;
    }

    var seconds = Math.floor(millseconds / 1000);
    var days = Math.floor(seconds / 86400);
    var hours = Math.floor((seconds % 86400) / 3600);
    var minutes = Math.floor(((seconds % 86400) % 3600) / 60);

    var secondsRemaining = seconds - minutes * 60 - hours * 3600 - days * 86400;

    var timeString = '';
    // if (days > 0) timeString += (days > 1) ? (days + " days ") : (days + " day ");
    // if (hours > 0) timeString += (hours > 1) ? (hours + " hours ") : (hours + " hour ");
    // if (minutes >= 0) timeString += (minutes > 1) ? (minutes + " minutes ") : (minutes + " minute ");
    // if (secondsRemaining >= 0) timeString += (secondsRemaining > 1) ? (secondsRemaining + " seconds ") : (secondsRemaining + " second ");


    if (days > 0) timeString = days + "d ";
    if (hours > 0) timeString += hours + "h ";
    if (minutes > 0) timeString += minutes + "m ";
    if (secondsRemaining >= 0) timeString += secondsRemaining + "s ";

    if (neg)
        timeString = "-" + timeString;

    return timeString;
})