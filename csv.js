const CSVToJSON = require('csvtojson');
const fs = require('fs');

CSVToJSON().fromFile('./yourfile.csv')
.then(objects => {
    const temp = [];
    objects.forEach((product) => {
        const itemProduct = {
            subCategory: product['Sous catégorie'],
            ref: product['Ref'],
            designation: product['Désignation'],
            featureName: product['Nom de la caractéristique'],
            featureValue: product['Caractéristique'],
            typeDimension: product['Type de dimension'],
            typeDimensionValue: product['Dimensions'],
            weightType: product['Type de poids'],
            weightTypeValue: product['Poids unitaire'],
            typeOfPackaging: product['Type de conditionnement'],
            typeOfPackagingValue: product['Conditionnement'],
            colors: product['OPTION COULEUR'] || undefined
        }
        temp.push(itemProduct);
    })
    fs.writeFileSync('./your.json', JSON.stringify(temp));
}).catch(err => {
    console.log(err);
});