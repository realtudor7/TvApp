function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();

    // Ensure the minutes and seconds always have two digits
    m = checkTime(m);
    s = checkTime(s);

    // Update the content of the element with id "txt"
    document.getElementById('txt').innerHTML = h + ":" + m + ":" + s;

    // Call the function every second to keep the time updating
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    // Add leading zero to numbers less than 10
    if (i < 10) { i = "0" + i; }
    return i;
}

function back() {
    location.href = "page1.html"
}