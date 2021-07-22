var trace1 = {
    x:[	'Aubrite', 'CO3.2',	'Eucrite-mmict', 'H3-6', 'H4', 'H6', 'L/LL4', 'L/LL5', 'L/LL6',	'L4', 'L5-6', 'L5',	'LL5', 'LL6', 'Mesosiderite-A3/4'],
    y:[	1206743, 200000, 553722.2, 184000, 1305967,	1152954, 338000, 501945, 247350.5, 322266.5, 306913, 1165466.2, 726958,	809127.2, 320000],
    mode: 'markers',
    marker: {
    size:[	120, 20, 60, 20, 130, 120, 30, 50, 20, 30, 30, 120,	70,	80,	30],
        //   color: ['blue','indigo','green','yellow','orange','red'],
    }
  };
  
  var data = [trace1];
  
  var layout = {
    title: 'Meteorite Mass (gms)',
    showlegend: false,
    height: 600,
    width: 1300
  };


Plotly.newPlot('bubble', data, layout);