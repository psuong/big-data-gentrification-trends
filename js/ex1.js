var x_ax = ['x']
for (var i = 1974; i<= 2011; i++){
    x_ax.push(i.toString());
};
console.log(x_ax);

var chart = c3.generate({
    data: {
        url: '../data/grouped_neighborhoods.json',
        // json:[
        //     '../data/grouped_neighborhoods.json'
        // ],
        keys: {
            x: 'year',
            value: ['familysize', 'price']
        }
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
console.log('done')
