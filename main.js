const wallet = Map({GOLD: 0});
const expensesLedger = Map({GOLD: -5});
const profitsLedger = Map({GOLD: 10, SILVER: 5, BRONZE: 2});

const total = sum(wallet, expensesLedger, profitsLedger);
total.get("GOLD");   // 10
total.get("SILVER"); // 5
total.get("BRONZE"); // 2

const ledgers = [wallet, expenses, profits];
const total = sum(...ledgers);

const incomeFromSalesfolk = Map({GOLD: 2, INFLUENCE: 5});
const newIncome = scale(incomeFromSalesFolk, state.numOfSalesfolk);

newIncome.get("GOLD");     // 10 * state.numOfSalesfolk
newIncome.get("SILVER");   // 5 * state.numOfSalesfolk
newIncome.get("BRONZE");     // 2 * state.numOfSalesfolk
newIncome.get("INFLUENCE") // 5 * state.numOfSalesfolk

const materialCost = Map({GOLD: -25, SILVER: -10, BRONZE: -5});
const transportCost = Map({GOLD: -25});
const goldCost = totalOf("GOLD", materialCost, transportCost); // -7
