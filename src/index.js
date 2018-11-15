import vkbeautify from 'vkbeautify';
import $ from './js/jquery-3.3.1.min';
import './css/bootstrap.min.css';
import './css/sql.css';



const errorMessage = 'Пустой запрос';


console.log('Loaded');
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

window.formatSql = function () {
    let sqlArea = $('#sql');
    let errorP = $('#error');
    let spacesSelect = $("#spaces").find("option:selected").text();
    let sourceSql = sqlArea.val();
    if (sourceSql.trim() === '') {
        errorP.text(errorMessage);
        $('#copy').addClass('d-none');
    } else {
        errorP.text('');
        let sql = vkbeautify.sql(sourceSql); // pretty print SQL
        sqlArea.val(sql);
        $('#copy').removeClass('d-none');
    }
};
