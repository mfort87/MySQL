let mysql = require('mysql');
let inquirer = require('inquirer');
let Table = require('cli-table');


let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "shipstation123",
    database: "bamazon"
});

function displayAll() {

    connection.query('SELECT * FROM Products', function (error, response) {
        if (error) {
            console.log(error)
        };

        let theDisplayTable = new Table({

            head: ['Item ID', 'Product Name', 'Category', 'Price', 'Quantity'],

            colWidths: [10, 30, 18, 10, 14]
        });

        for (i = 0; i < response.length; i++) {

            theDisplayTable.push(
                [response[i].ItemID, response[i].ProductName, response[i].DepartmentName, response[i].Price, response[i].StockQuantity]
            );
        }

        console.log(theDisplayTable.toString());
        inquireForPurchase();
    });


};

function inquireForPurchase() {

    inquirer.prompt([

        {
            name: "ID",
            type: "input",
            message: "What is the item ID for the item you wish to purchase?"
        }, {
            name: 'Quantity',
            type: 'input',
            message: "What is the quantity you'd like to purchase?"
        },

    ]).then(function (answers) {
        let quantityDesired = answers.Quantity;
        let IDDesired = answers.ID;
        purchaseFromDatabase(IDDesired, quantityDesired);
    });

};

function purchaseFromDatabase(ID, quantityNeeded) {
    connection.query('SELECT * FROM Products WHERE ItemID = ' + ID, function (error, response) {
        if (error) {
            console.log(error)
        };

        
        if (quantityNeeded <= response[0].StockQuantity) {
           
            let totalCost = response[0].Price * quantityNeeded;
           
            console.log("We've got it! Coming right up!");
            console.log("Your total cost for " + quantityNeeded + " " + response[0].ProductName + " is " + totalCost + ". We appreciate your business today!");
            
            connection.query('UPDATE Products SET StockQuantity = StockQuantity - ' + quantityNeeded + ' WHERE ItemID = ' + ID);
        } else {
            console.log("Our apologies. We don't have enough " + response[0].ProductName + " to fulfill your order.");
        };
        displayAll();
    });

};

displayAll();