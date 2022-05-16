let tot = 0;
let misuraminore = [];
let misuramagiore = [];
let totMisuraminorePeso = 0;
let totMiminorePeso = 0;

const zucchineProperty =[
    {
        lunchezza: 10,
        altezza: 15,
        peso: 5,
    },

    {
        lunchezza: 28,
        altezza: 52,
        peso: 10,
    },

    {
        lunchezza: 18,
        altezza: 20,
        peso: 8,
    },

    {
        lunchezza: 87,
        altezza: 54,
        peso: 14,
    },

    {
        lunchezza: 17,
        altezza: 56,
        peso: 8,
    },

    {
        lunchezza: 17,
        altezza: 89,
        peso: 6,
    },

    {
        lunchezza: 65,
        altezza: 18,
        peso: 18,
    },

    {
        lunchezza: 97,
        altezza: 67,
        peso: 18,
    },

    {
        lunchezza: 54,
        altezza: 17,
        peso: 9,
    },

    {
        lunchezza: 45,
        altezza: 65,
        peso: 88,
    },

];

console.log(zucchineProperty);

for(let i = 0; i < zucchineProperty.length; i++){
    if(zucchineProperty[i].lunchezza <= 15){
        misuraminore.push(zucchineProperty[i]);
    }
    else{
        misuramagiore.push(zucchineProperty[i]);
    }
}

console.log(misuraminore);
console.log(misuramagiore);

for(let i = 0; i < misuraminore.length; i++){
    totMisuraminorePeso += misuraminore[i].peso;
}
for(let i = 0; i < misuramagiore.length; i++){
    totMiminorePeso += misuramagiore[i].peso;
}

console.log(totMisuraminorePeso);
console.log(totMiminorePeso);