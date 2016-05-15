function getNeighborhoodName() {
    var neighborhood = $('#submit').click(function () {
       return $('#neighborhood_id').val();
    });
    if (neighborhood != null)
        return neighborhood.toString();
    return null;
}