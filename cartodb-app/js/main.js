window.onload = function() {
    cartodb.createVis('median-housing-prices', 'https://cyang3462.cartodb.com/api/v2/viz/b607556c-1a38-11e6-9cc0-0e5db1731f59/viz.json');

    cartodb.createVis('taxi-avg-tip', 'https://cyang3462.cartodb.com/api/v2/viz/942cf0be-17d1-11e6-8d78-0ea31932ec1d/viz.json');

    cartodb.createVis('taxi-pickup-count', 'https://cyang3462.cartodb.com/api/v2/viz/3fe1b440-1a38-11e6-baa7-0ecd1babdde5/viz.json');

    cartodb.createVis('crime', 'https://cyang3462.cartodb.com/api/v2/viz/d404fa88-1a38-11e6-8dd1-0e3ff518bd15/viz.json');
}

$("a").click(function(e){
    e.preventDefault();
    $(this).next().toggle();
})
