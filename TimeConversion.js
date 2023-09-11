function timeConversion(s) {
    // Write your code here
    const meridiem = s.slice(-2);
    const [hours, minutes, seconds] = s.slice(0, -2).split(':');
    let h = parseInt(hours);
    if (meridiem === 'AM' && hours === '12') {
        h = 0;
    } else if (meridiem === 'PM' && h >= 1 && h <= 11) {
        h = h + 12;
    }
    return `${h.toString().padStart(2, '0')}:${minutes}:${seconds}`;
}
