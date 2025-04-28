import csv from 'csvtojson';
import fs from 'fs';

async function convertCSVtoArray() {
  const jsonArray = await csv().fromFile('screener.csv');

  const formattedArray = jsonArray.map(item => ({
    name: item.name,
    price: parseNumber(item.price),
    mcap: parseNumber(item.mcap),
    pe: parseNumber(item.pe),
    pb: parseNumber(item.pb),
    roce: parseNumber(item.roce),
    roe: parseNumber(item.roe),
    three_yr_rev_charge: parseNumber(item.three_yr_rev_charge || item['three_yr_rev_charge'] || item['three_yr_rev_change']),
    three_yr_pat_charge: parseNumber(item['3yrpatcharge']),
    pbtbcfo: parseNumber(item.pbtbcfo),
    de: parseNumber(item.de),
    ds: parseNumber(item.ds),
    sector: item.sector
  }));

  fs.writeFileSync('output.json', JSON.stringify(formattedArray, null, 2));
  console.log('Conversion done! Check output.json');
}

// Helper to handle empty or N/A fields
function parseNumber(value) {
  if (value === undefined || value === null) return null;
  if (value.trim() === '' || value.trim().toLowerCase() === 'n/a') return null;
  return Number(value);
}

convertCSVtoArray();
