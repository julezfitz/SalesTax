const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [100, 200, 400]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [80, 20, 10, 100, 90, 500]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [500, 100]
  }
];

const calculateTax = function(sales, taxRate) {
  return sales * taxRate;
};

const calculateSalesTax = function(salesData, taxRates) {
  let results = {};
  for (let keys of salesData) {
    let province = keys.province;
    if (results[keys.name]) {
      for (let values of keys.sales) {
        results[keys.name]['totalSales'] += +values;
        results[keys.name]['totalTaxes'] = calculateTax((results[keys.name]['totalSales']), (taxRates[province]));
      }
    } else {
      let totalSales = 0;
      for (let values of keys.sales) {
        totalSales += +values;
      }
      results[keys.name] = { 'totalSales': totalSales, 'totalTaxes': calculateTax((taxRates[province]), totalSales) };
    }
  }
  return results;
};

calculateSalesTax(companySalesData, salesTaxRates);
