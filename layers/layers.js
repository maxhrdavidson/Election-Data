var wms_layers = [];

var format_EditableAD46Mapnyed_0 = new ol.format.GeoJSON();
var features_EditableAD46Mapnyed_0 = format_EditableAD46Mapnyed_0.readFeatures(json_EditableAD46Mapnyed_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EditableAD46Mapnyed_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EditableAD46Mapnyed_0.addFeatures(features_EditableAD46Mapnyed_0);
var lyr_EditableAD46Mapnyed_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EditableAD46Mapnyed_0, 
                style: style_EditableAD46Mapnyed_0,
                popuplayertitle: "Editable AD 46 Map — nyed",
                interactive: true,
    title: 'Editable AD 46 Map — nyed<br />\
    <img src="styles/legend/EditableAD46Mapnyed_0_0.png" /> 0 - 1.9<br />\
    <img src="styles/legend/EditableAD46Mapnyed_0_1.png" /> 1.9 - 3.8<br />\
    <img src="styles/legend/EditableAD46Mapnyed_0_2.png" /> 3.8 - 5.7<br />\
    <img src="styles/legend/EditableAD46Mapnyed_0_3.png" /> 5.7 - 7.6<br />\
    <img src="styles/legend/EditableAD46Mapnyed_0_4.png" /> 7.6 - 9.5<br />\
    <img src="styles/legend/EditableAD46Mapnyed_0_5.png" /> 9.5 - 11.4<br />\
    <img src="styles/legend/EditableAD46Mapnyed_0_6.png" /> 11.4 - 13.3<br />\
    <img src="styles/legend/EditableAD46Mapnyed_0_7.png" /> 13.3 - 15.2<br />\
    <img src="styles/legend/EditableAD46Mapnyed_0_8.png" /> 15.2 - 17.1<br />\
    <img src="styles/legend/EditableAD46Mapnyed_0_9.png" /> 17.1 - 19<br />\
    <img src="styles/legend/EditableAD46Mapnyed_0_10.png" /> 19 - 20.9<br />\
    <img src="styles/legend/EditableAD46Mapnyed_0_11.png" /> 20.9 - 22.8<br />\
    <img src="styles/legend/EditableAD46Mapnyed_0_12.png" /> 22.8 - 24.7<br />\
    <img src="styles/legend/EditableAD46Mapnyed_0_13.png" /> 24.7 - 26.6<br />\
    <img src="styles/legend/EditableAD46Mapnyed_0_14.png" /> 26.6 - 28.5<br />\
    <img src="styles/legend/EditableAD46Mapnyed_0_15.png" /> 28.5 - 30.4<br />\
    <img src="styles/legend/EditableAD46Mapnyed_0_16.png" /> 30.4 - 32.3<br />\
    <img src="styles/legend/EditableAD46Mapnyed_0_17.png" /> 32.3 - 34.2<br />\
    <img src="styles/legend/EditableAD46Mapnyed_0_18.png" /> 34.2 - 36.1<br />\
    <img src="styles/legend/EditableAD46Mapnyed_0_19.png" /> 36.1 - 38<br />\
    <img src="styles/legend/EditableAD46Mapnyed_0_20.png" /> 38 - 39.9<br />\
    <img src="styles/legend/EditableAD46Mapnyed_0_21.png" /> 39.9 - 41.8<br />\
    <img src="styles/legend/EditableAD46Mapnyed_0_22.png" /> 41.8 - 43.7<br />\
    <img src="styles/legend/EditableAD46Mapnyed_0_23.png" /> 43.7 - 45.6<br />\
    <img src="styles/legend/EditableAD46Mapnyed_0_24.png" /> 45.6 - 47.5<br />\
    <img src="styles/legend/EditableAD46Mapnyed_0_25.png" /> 47.5 - 49.4<br />\
    <img src="styles/legend/EditableAD46Mapnyed_0_26.png" /> 49.4 - 51.3<br />\
    <img src="styles/legend/EditableAD46Mapnyed_0_27.png" /> 51.3 - 53.2<br />\
    <img src="styles/legend/EditableAD46Mapnyed_0_28.png" /> 53.2 - 55.1<br />\
    <img src="styles/legend/EditableAD46Mapnyed_0_29.png" /> 55.1 - 57<br />'
        });

lyr_EditableAD46Mapnyed_0.setVisible(true);
var layersList = [lyr_EditableAD46Mapnyed_0];
lyr_EditableAD46Mapnyed_0.set('fieldAliases', {'fid': 'fid', 'ElectDist': 'ElectDist', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Turnout': 'Turnout', });
lyr_EditableAD46Mapnyed_0.set('fieldImages', {'fid': 'TextEdit', 'ElectDist': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Turnout': 'TextEdit', });
lyr_EditableAD46Mapnyed_0.set('fieldLabels', {'fid': 'hidden field', 'ElectDist': 'inline label - always visible', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'Turnout': 'inline label - always visible', });
lyr_EditableAD46Mapnyed_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});