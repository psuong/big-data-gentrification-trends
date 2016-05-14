var x_ax = ['x']
for (var i = 1974; i<= 2011; i++){
    x_ax.push(i.toString());
};
console.log(x_ax);

var chart = c3.generate({
    data: {
        url: 'grouped_neighborhoods.json',
        // x: 'year',
    },
    // axis: {
    //     x: {
    //         tick: {
    //
    //             // this also works for non timeseries data
    //             // values: ['2013-01-05', '2013-01-10']
    //         }
    //     }
    // }
});
