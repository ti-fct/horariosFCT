$(document).ready(function() {
    var table = $('#scheduleTable').DataTable({
        searchHighlight: true,
        "dom": 'frtip', //Oculta quantidade visuzalização por pagina

        //ordena a coluna 7(Sala) em ordem crescente
        "order":[[7, "asc"]],

        //altera o idioma do datatables para português
        "language": {
            "url": "https://cdn.datatables.net/plug-ins/1.10.25/i18n/Portuguese-Brasil.json",
            searchPlaceholder: 'Digite a sala, matéria ou horário'
        },
        //Mostra 100 por pagina
        "pageLength":100,

        // a variavel dados aqui foi importado no index.html, repare que o dados é carregado primeiro que o arquivo dataTables.js
        data:dados,

        columns: [
            { title: "Horário" },
            { title: "Segunda" },
            { title: "Terça" },
            { title: "Quarta" },
            { title: "Quinta" },
            { title: "Sexta" },
            { title: "Sábado" },
            { title: "Sala" }
        ]
    });

    // Função para destacar a coluna do dia atual
    function highlightTodayColumn() {
        var today = new Date().getDay();
        console.log(today)
        var days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
        var todayName = days[today];
        
        // Encontra o índice da coluna correspondente ao dia atual
        var columnIndex = $('th:contains(' + todayName + ')').index();
        
        if (columnIndex !== -1) {
            // Aplica a classe de destaque à coluna
            table.column(columnIndex).nodes().to$().addClass('highlight-column');
            $(table.column(columnIndex).header()).addClass('highlight-column');
        }
    }

    // Chama a função para destacar a coluna
    highlightTodayColumn();

    // Função para filtrar a tabela
    var filterLists = {
        'Salas': ['108', '208', '308', '504', '505', '506', '507', '508'],
        'Mini-auditórios': ['Terreo', '102', '202', '302', '402', '502'],
        'Labs INF': ['303', '304', '403', '109'],
        'Labs Mat-Geo': ['103', '105', '106', '207', '305', '306', '307'],
        'Labs Prod': ['206', '404', '503A', '503B'],
        'Labs Transp': ['T02', '203', '204', '205']
    };

    function filterTable(filter) {
        var regex = filterLists[filter].map(function(sala) {
            return '^' + sala + '$';
        }).join('|');
        table.column(7).search(regex, true, false).draw();
    }

    function clearFilter() {
        table.column(7).search('').draw();
    }

    var currentFilter = null;

    $('.btn-group .btn').on('click', function() {
        var filter = $(this).data('filter');
        $('.btn-group .btn').removeClass('active');
        
        if (currentFilter === filter) {
            // If clicking the same button, clear the filter
            clearFilter();
            currentFilter = null;
        } else {
            // Apply the new filter
            $(this).addClass('active');
            filterTable(filter);
            currentFilter = filter;
        }
    });
});