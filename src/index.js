import vkbeautify from './js/vkbeautify';
import $ from './js/jquery-3.3.1.min';
import './css/bootstrap.min.css';
import './css/sql.css';



const errorMessage = 'Пустой запрос';
$(document).ready(function () {
    $('#main').removeClass('d-none');
});

$('#format').click(function () {
    setTimeout(formatSql, 200);
});

export function copyFormattedSql() {
    $("#sql").select();
    document.execCommand('copy');
}

export function formatSql() {

    sqlArea = $('#sql');
    errorP = $('#error');

    sourceSql = sqlArea.val();
    spacesSelect = $("#spaces").find("option:selected").text();

    if (sourceSql !== '') {
        errorP.text('');
        sql = vkbeautify.sql(sourceSql); // pretty print SQL
        sqlArea.val(sql);
        $('#copy').removeClass('d-none');
    } else {
        errorP.text(errorMessage);
        $('#copy').addClass('d-none');
    }
}