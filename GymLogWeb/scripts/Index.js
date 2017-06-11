$(document).ready(function () {
            jQuery.support.cors = true;
            var today = new Date();
            var todayFormatted = '';            
            todayFormatted = todayFormatted.concat(today.getFullYear().toString(),
                '-', ("0" + (today.getMonth() + 1)).slice(-2).toString(),
                '-', ("0" + today.getDate()).slice(-2).toString());
            
            $('#selected-date').val(todayFormatted);
            
        });
