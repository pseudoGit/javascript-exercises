const findTheOldest = function(people) {
    const oldest = people.sort(function(a, b) {
        const currentYear = (new Date()).getFullYear();
        if (!('yearOfDeath' in a)) {
            a.yearOfDeath = currentYear;
        }
        if (!('yearOfDeath' in b)) {
            b.yearOfDeath = currentYear;
        }
        const current = a.yearOfDeath - a.yearOfBirth;
        const next = b.yearOfDeath - b.yearOfBirth;
        return (current > next) ? -1 : 1;
    });
    console.log(oldest);
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
