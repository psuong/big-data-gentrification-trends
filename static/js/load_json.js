function loadJSON(name) {
    $.getJSON("/static/data/grouped_neighborhoods.json", function (data) {
        if (data[name] != null) {
            var year = {};
            var list_of_year = [];
            for (var i = 0; i < data[name].length; i++) {
                var yr = data[name][i]['year'];
                year[yr] = {};
            }
            for (var i = 0; i < data[name].length; i++) {
                var fs = data[name][i]['familysize'];
                var yr = data[name][i]['year'];
                var price = data[name][i]['price'];
                year[yr][fs] = price;
                year[yr]['year'] = yr;
                list_of_year.push(year[yr]);
            }
        }
        else{
            var list_of_year = [{
                '1':0,
                '2-4':0,
                '5+':0,
                'condo':0,
                'year':0
            }]
        }
            var neighborhood_data = c3.generate({
                bindto: '#median-housing',
                data: {
                    json: list_of_year,
                    keys: {
                        x: 'year',
                        value: ['1', '2-4', '5+', 'condo']
                    }
                },
                axis: {
                    x: {
                        label: {
                            text: 'Year'
                        },
                        show: true
                    },
                    y: {
                        label: {
                            text: 'Price ($)'
                        },
                        show: true
                    }
                }
            });
    });
    $.getJSON("/static/data/taxi_data.json", function (data) {
        if (data[name] != null) {
            var year = {};
            var list_of_year = [];
            for (var i = 0; i < data[name].length; i++) {
                var yr = data[name][i]['year'];
                year[yr] = {}
            }
            for (var i = 0; i < data[name].length; i++) {
                var ct = data[name][i]['count'];
                var yr = Number(data[name][i]['year']);
                var tip = data[name][i]['avg_tip'];
                year[yr]['count'] = ct;
                year[yr]['year'] = yr;
                year[yr]['avg_tip'] = tip;
                list_of_year.push(year[yr]);
            }
        }
        else{
            var list_of_year = [{
                '1':0,
                '2-4':0,
                '5+':0,
                'condo':0,
                'year':0
            }]
        }
            var taxi_data = c3.generate({
                bindto:'#taxi-data',
                data: {
                    json: list_of_year,
                    keys:{
                        x: 'year',
                        value: ['count', 'avg_tip']
                    },
                    type: 'bar',
                    axes:{
                        count : 'y',
                        avg_tip : 'y2'
                    }
                },
                axis: {
                    x: {
                        type: 'category',
                        label: {
                            text: 'Year'
                        },
                        show: true
                    },
                    y: {
                        label: {
                            text: '# of people'
                        },
                        show: true
                    },
                    y2:{
                        label:{
                            text: 'Price($)'
                        },
                        show: true
                    }
                }
            });
    });
    $.getJSON("static/data/_crime_data.json", function (data){
        if (data[name] != null) {
            var list_of_year = [];
            var year = {};
            for (var i = 0; i < data[name].length; i++) {
                var yr = data[name][i]['year'];
                year[yr] = {}
            }
            for (var i = 0; i < data[name].length; i++) {
                var ct = data[name][i]['count'];
                var yr = Number(data[name][i]['year']);
                year[yr]['count'] = ct;
                year[yr]['year'] = yr;
                list_of_year.push(year[yr])
            }
        }
        else{
            var list_of_year = [{
                '1':0,
                '2-4':0,
                '5+':0,
                'condo':0,
                'year':0
            }]
        }
            var crime_data = c3.generate({
                bindto: '#crime-data',
                data: {
                    json: list_of_year,
                    keys:{
                        x: 'year',
                        value: ['count']
                    }
                },
                axis: {
                    x: {
                        label: {
                            text: 'Year'
                        },
                        show: true
                    },
                    y: {
                        label: {
                            text: '# of crimes'
                        },
                        show: true
                    }
                }
            });
    });
};