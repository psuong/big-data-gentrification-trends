$(document).ready(function () {
    $.getJSON("../data/grouped_neighborhoods.json", function (data) {
        console.log(data);
        console.log(data['Astoria']);

        var neighborhood_data = c3.generate({
            bindto: '#median-housing',
            data: {
                json: data['Baychester'],
                keys: {
                    x: 'year',
                    y: 'price',
                    value: ['familysize', 'price', 'year']
                }
            },
            axis: {
                x: {
                    label: {
                        text: 'Year'
                    },
                    type: 'timeseries',
                    tick: {
                        format: '%Y'
                    },
                    show: true
                },
                y: {
                    label: {
                        text: 'Price'
                    },
                    show: true
                }
            }
        });
    });

});