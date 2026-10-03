$(document).ready(function () {

    function loadData(category) {
        const dataConfig = DataGenerator.categories[category];
        if (!dataConfig) return;

        $('#data-table').hide();
        $('#loader').show();

        $('#table-head').empty();
        $('#table-body').empty();
        $('#search-input').val('');

        const fakeDelay = Math.floor(Math.random() * 500) + 1000;

        setTimeout(() => {
            let headersHtml = '';
            dataConfig.headers.forEach(header => {
                headersHtml += `<th>${header}</th>`;
            });
            $('#table-head').html(headersHtml);

            let rowsHtml = '';
            for (let i = 0; i < dataConfig.records.length; i++) {
                rowsHtml += dataConfig.generateRow(i);
            }
            $('#table-body').html(rowsHtml);

            $('#loader').hide();
            $('#data-table').show();

        }, fakeDelay);
    }

    const initialCategory = $('.tab-btn.active').data('tab');
    loadData(initialCategory);

    $('.tab-btn').on('click', function () {
        if ($(this).hasClass('active')) return;

        $('.tab-btn').removeClass('active');
        $(this).addClass('active');

        const tabId = $(this).data('tab');
        loadData(tabId);
    });

    // Search functionality
    $('#search-input').on('keyup', function () {
        const value = $(this).val().toLowerCase();
        $("#table-body tr").filter(function () {
            // We search text content of the row. 
            // It ignores checkbox state but finds text in the columns.
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });

    // Export to CSV functionality
    $('#export-btn').on('click', function () {
        let csv = [];

        // Get headers
        let headers = [];
        $('#table-head th').each(function () {
            headers.push('"' + $(this).text() + '"');
        });
        csv.push(headers.join(","));

        // Get checked visible rows
        const $checkedRows = $('#table-body tr:visible').filter(function() {
            return $(this).find('input[type="checkbox"]').is(':checked');
        });

        if ($checkedRows.length === 0) {
            alert('Please select at least one row to export.');
            return;
        }

        $checkedRows.each(function () {
            let row = [];
            $(this).find('td').each(function (index) {
                if (index === 0) {
                    row.push('"Yes"'); // since it is checked
                } else {
                    let text = $(this).text().replace(/"/g, '""'); // Escape double quotes
                    row.push('"' + text + '"');
                }
            });
            csv.push(row.join(","));
        });

        // Create CSV file and trigger download
        const csvFile = new Blob([csv.join("\n")], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(csvFile);
        const link = document.createElement("a");
        link.setAttribute("href", url);
        link.setAttribute("download", "data_portal_export.csv");
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

});
