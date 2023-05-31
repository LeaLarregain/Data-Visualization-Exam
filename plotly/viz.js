fetch('data.json')
    .then((response) => response.json())
    .then((data) => run_visualization(data));

function run_visualization(data) {
   // tri des données
    sortByCountryPopulation(data);
    
    //Sélectionner les top 30 pays
    const countries = data.slice(0, 30).map((item) => item.country);
    const populations = data.slice(0, 30).map((item) => item.population);

    const trace = {
        x: countries,
        y: populations,
        type: 'bar',
        marker: {
            color: 'rgba(75, 192, 192, 0.6)',
            line: {
                color: 'rgba(75, 192, 192, 1)',
                width: 1
            }
        }
    };

    const layout = {
        title: 'Data distribution of countries population',
        xaxis: {
            title: 'Countries'
        },
        yaxis: {
            title: 'Population'
        }
    };

    const dataToPlot = [trace];
}

Plotly.newPlot('data-viz', dataToPlot, layout);

function sortByCountryPopulation(data) {
    data.sort((acc, value) => acc.population < value.population ? -1 : 1);
}


