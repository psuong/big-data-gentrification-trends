function loadJSON(name) {
    $.getJSON("/static/data/grouped_neighborhoods.json", function (data) {
        if (data[name] != null) {
            var year = {};
            for (var i = 0; i < data[name].length; i++) {
                var yr = data[name][i]['year'];
                year[yr] = {}
            }
            for (var i = 0; i < data[name].length; i++) {
                var fs = data[name][i]['familysize'];
                var yr = data[name][i]['year'];
                var price = data[name][i]['price'];
                year[yr][fs] = price;
                year[yr]['year'] = yr
            }
    //        console.log(year)
            var neighborhood_data = c3.generate({
                bindto: '#median-housing',
                data: {
                    json: [
                        year[1974],
                        year[1975],
                        year[1976],
                        year[1977],
                        year[1978],
                        year[1979],
                        year[1980],
                        year[1981],
                        year[1982],
                        year[1983],
                        year[1984],
                        year[1985],
                        year[1986],
                        year[1987],
                        year[1988],
                        year[1989],
                        year[1990],
                        year[1991],
                        year[1992],
                        year[1993],
                        year[1994],
                        year[1995],
                        year[1996],
                        year[1997],
                        year[1998],
                        year[1999],
                        year[2000],
                        year[2001],
                        year[2002],
                        year[2003],
                        year[2004],
                        year[2005],
                        year[2006],
                        year[2007],
                        year[2008],
                        year[2009],
                        year[2010],
                        year[2011]
                    ],
                    keys: {
                        x: 'year',
    //                    y: 'price',
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
        };
    });
    $.getJSON("/static/data/taxi_data.json", function (data) {
        if (data[name] != null) {
            var year = {}
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
                year[yr]['avg_tip'] = tip
            }
    //        console.log(year)

            var taxi_data = c3.generate({
                bindto:'#taxi-data',
                data: {
                    json: [
                        year[2009],
                        year[2012],
                        year[2015]
                    ],
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
        };
    });
    $.getJSON("static/data/_crime_data.json", function (data){
        if (data[name] != null) {
            console.log(data);
            console.log(data[name]);
            var year = {}
            for (var i = 0; i < data[name].length; i++) {
                var yr = data[name][i]['year'];
                year[yr] = {}
            }
            for (var i = 0; i < data[name].length; i++) {
                var ct = data[name][i]['count'];
                var yr = Number(data[name][i]['year']);
                year[yr]['count'] = ct;
                year[yr]['year'] = yr;
            }
            console.log(year);
            var crime_data = c3.generate({
                bindto: '#crime-data',
                data: {
                    json: [
                        year[1940],
                        year[1941],
                        year[1942],
                        year[1943],
                        year[1944],
                        year[1945],
                        year[1946],
                        year[1947],
                        year[1948],
                        year[1949],
                        year[1950],
                        year[1951],
                        year[1952],
                        year[1953],
                        year[1954],
                        year[1955],
                        year[1956],
                        year[1957],
                        year[1958],
                        year[1959],
                        year[1960],
                        year[1961],
                        year[1962],
                        year[1963],
                        year[1964],
                        year[1965],
                        year[1966],
                        year[1967],
                        year[1968],
                        year[1969],
                        year[1970],
                        year[1971],
                        year[1972],
                        year[1973],
                        year[1974],
                        year[1975],
                        year[1976],
                        year[1977],
                        year[1978],
                        year[1979],
                        year[1980],
                        year[1981],
                        year[1982],
                        year[1983],
                        year[1984],
                        year[1985],
                        year[1986],
                        year[1987],
                        year[1988],
                        year[1989],
                        year[1990],
                        year[1991],
                        year[1992],
                        year[1993],
                        year[1994],
                        year[1995],
                        year[1996],
                        year[1997],
                        year[1998],
                        year[1999],
                        year[2000],
                        year[2001],
                        year[2002],
                        year[2003],
                        year[2004],
                        year[2005],
                        year[2006],
                        year[2007],
                        year[2008],
                        year[2009],
                        year[2010],
                        year[2011],
                        year[2012],
                        year[2013],
                        year[2014],
                        year[2015]
                    ],
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
        }
    });
};