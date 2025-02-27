$(document).ready(function() {
    // Inicializa a tabela DataTable
    var table = $('#scheduleTable').DataTable({
        searchHighlight: true,
        "dom": 'frtip', // Oculta quantidade visualização por página

        // Ordena a coluna 7 (Sala) em ordem crescente
        "order": [[7, "asc"]],

        // Altera o idioma do datatables para português
        "language": {
            "url": "https://cdn.datatables.net/plug-ins/1.10.25/i18n/Portuguese-Brasil.json",
            searchPlaceholder: 'Digite a sala, matéria ou horário'
        },
        
        "pageLength": 100, // Mostra 100 por página

        // Dados importados do arquivo dados.js
        data: dados,
        columns: [
            { title: "Horário" },
            { title: "Segunda" },
            { title: "Terça" },
            { title: "Quarta" },
            { title: "Quinta" },
            { title: "Sexta" },
            { title: "Sábado" },
            { title: "Sala" }
        ],

        // Garante que a tabela seja desenhada completamente antes de inicializar outras funções
        "initComplete": function(settings, json) {

            initAutocomplete(); // Inicializa o autocomplete após a tabela estar pronta
            
            highlightTodayColumn(); // Função para destacar a coluna do dia atual
        }
    });

    // Função para destacar a coluna do dia atual
    function highlightTodayColumn() {
        var today = new Date().getDay();
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

    // Função para coletar todas as palavras únicas da tabela
    function obterPalavrasDaTabela() {
        console.log("Coletando palavras da tabela...");
        var palavras = new Set();
        
        // Percorre todas as linhas e colunas
        table.rows().data().each(function(rowData) {
            rowData.forEach(function(texto) {
                if (texto && typeof texto === 'string') {
                    texto.split(' ').forEach(function(palavra) {
                        if (palavra.trim() && palavra.trim().length > 2) {
                            palavras.add(palavra.trim());
                        }
                    });
                }
            });
        });
        
        var resultado = Array.from(palavras);
        console.log("Total de palavras coletadas: " + resultado.length);
        return resultado;
    }

    // Função para inicializar o autocomplete
    function initAutocomplete() {
        console.log("Inicializando autocomplete...");
        
        // Obtém o campo de pesquisa do DataTables
        var campoPesquisa = $('.dataTables_filter input');
        
        if (campoPesquisa.length === 0) {
            console.error("Campo de pesquisa não encontrado!");
            return;
        }
        
        // Obtém a lista de palavras
        var listaPalavras = obterPalavrasDaTabela();
        
        // Configura o autocomplete usando jQuery UI
        campoPesquisa.autocomplete({
            source: function(request, response) {
                var termo = request.term.toLowerCase();
                var resultado = listaPalavras.filter(function(palavra) {
                    return palavra.toLowerCase().indexOf(termo) > -1;
                });
                response(resultado.slice(0, 10)); // Limita a 10 sugestões
            },
            minLength: 1, // Começa a sugerir após 1 caracteres digitado
            select: function(event, ui) {
                $(this).val(ui.item.value);
                table.search(ui.item.value).draw();
                return false;
            },
            open: function() {
                $(this).autocomplete("widget").css({
                    "width": ($(this).outerWidth() + "px")
                });
            }
        }).data("ui-autocomplete")._renderItem = function(ul, item) {
            // Personaliza a aparência dos itens do autocomplete
            var term = this.term.trim();
            var regex = new RegExp('(' + term + ')', 'gi');
            var t = item.value.replace(regex, '<strong>$1</strong>');
            return $("<li></li>")
                .data("ui-autocomplete-item", item)
                .append("<div>" + t + "</div>")
                .appendTo(ul);
        };
        
        console.log("Autocomplete inicializado com sucesso!");
    }

    // Função para filtrar a tabela
    var filterLists = {
        'Salas': ['108', '208', '308', '504', '505', '506', '507', '508'],
        'Mini-auditórios': ['MINI-AUDITÓRIO','Terreo', '102', '202', '302', '402', '502'],
        'Labs INF': ['303', '304', '403', '109'],
        'Labs Mat-Geo': ['103', '105', '106', '207', '305', '306', '307'],
        'Labs Prod': ['206', '404', '503A', '503B','503A e B'],
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
            // Se clicar no mesmo botão, limpa o filtro
            clearFilter();
            currentFilter = null;
        } else {
            // Aplica o novo filtro
            $(this).addClass('active');
            filterTable(filter);
            currentFilter = filter;
        }
    });
});