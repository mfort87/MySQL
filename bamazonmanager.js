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

function updateInquiry() {
    inquire.prompt([{
        name: "action",
        type: "list",
        message: "Choose an option below.",
        choices: ["View Low Inventory", "Add to Inventory", "Add New Product"]
    }]);
    then.function(answers) {
        switch (answers.action) {

            case "View Low Inventory":
                lowInventory();
                break;

            case "Add to Inventory":
                addInventory();
                break;

            case "Add New Product":
                newProduct();
                break;
        }



    };
};

function lowInventory(){
   connection.query("SELECT * from Products where StockQuantity <= 5")

}