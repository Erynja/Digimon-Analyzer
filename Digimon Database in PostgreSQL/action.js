$(document).ready(function() {
    const digimonUrl = "http://localhost:3000/digimon";  // API endpoint
    const elDigi = $('#digimon');
    const searchInput = $('#digiSearch');
    const searchButton = $('#btSearchDigimon');
    const digimonDraw = $('#digimonDraw');
    const infoBox = $('.infoBox');
    const digiLevel = $('#digiLevel');
    const digiType = $('#digiType');
    const digiAttack = $('#digiAttack');
  
    // Fetch and display Digimon data from API
    function fetchDigimon() {
        $.getJSON(digimonUrl)
            .done(function(data) {
                if (Array.isArray(data)) {
                    populateResults(data);
                } else {
                    console.error('Expected an array of digimon but received:', data);
                }
            })
            .fail(function(jqXHR, textStatus, errorThrown) {
                console.error('Error fetching Digimon data:', textStatus, errorThrown);
            });
    }

    // Search Digimon via API
    function searchDigimon() {
        const searchTerm = searchInput.val().toLowerCase();
        $.getJSON(digimonUrl + '/search', { name: searchTerm })
            .done(function(data) {
                populateResults(data);
                if (data.length > 0) {
                    const firstItem = data[0];
                    showDigimon(firstItem.name, firstItem.level, firstItem.digiType, firstItem.attack);
                } else {
                    digimonDraw.empty();  // Clear if no result
                    infoBox.hide();
                }
            })
            .fail(function(jqXHR, textStatus, errorThrown) {
                console.error('Error searching Digimon:', textStatus, errorThrown);
            });
    }

    function populateResults(digimonItems) {
        elDigi.empty();
        digimonItems.forEach(item => {
            elDigi.append(`
                <section class="digiItem" data-name="${item.name}" data-level="${item.level}" data-type="${item.digiType}" data-attack="${item.attack}">
                    <h2>${item.name}</h2>
                    <p>Level: ${item.level}</p>
                    <p>Type: ${item.digiType}</p>
                    <p>Attack: ${item.attack}</p>
                </section>`);
        });
        elDigi.show();
    }

    function showDigimon(name, level, type, attack) {
        const imageUrl = `/images/${name}.jpg`;
        digimonDraw.empty().append(`<section class="digiImage" style="background-image: url('${imageUrl}');"></section>`);
        $('.digiImage').show();
        updateInfoBox(level, type, attack);
    }

    function updateInfoBox(level, type, attack) {
        digiLevel.text(level);
        digiType.text(type);
        digiAttack.text(attack);
        infoBox.show();
    }

    searchButton.on('click', function() {
        searchDigimon();
    });

    elDigi.on('click', '.digiItem', function() {
        const name = $(this).data('name');
        const level = $(this).data('level');
        const type = $(this).data('type');
        const attack = $(this).data('attack');
        showDigimon(name, level, type, attack);
    });

    fetchDigimon();
});
