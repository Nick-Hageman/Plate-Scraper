$( document ).ready(function() {
    $.get('catlett.csv',function(data) {
        console.log(data);
        var html ='<table>';
        var rows = data.split("\n");
        rows.forEach( function getvalues(ourrow) {
        html += "<tr>";
        var columns = ourrow.split(",");
        html += "<td>" + columns[0] + "</td>";
        html += "<td>" + columns[1] + "</td>";
        html += "<td>" + columns[2] + "</td>";

        html += "</tr>";
    })

        html += "</table>";
        $('#container').append(html);
    });
});