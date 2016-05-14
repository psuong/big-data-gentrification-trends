$(document).ready(function () {
    $.getJSON("../data/grouped_neighborhoods.json", function (data) {
        console.log(data);
        console.log(data['Astoria']);
    });
});