CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE Products(
	ItemID INTEGER(10) AUTO_INCREMENT NOT NULL,
    ProductName VARCHAR(50) NOT NULL,
    DepartmentName VARCHAR(50) NOT NULL,
    Price DECIMAL(10,2) NOT NULL,
    StockQuantity INTEGER(10),
    primary key (ItemId)
);


INSERT INTO Products(ProductName,DepartmentName,Price,StockQuantity) VALUES('Rick and Morty Socks','Clothing',9.99,300);
INSERT INTO Products(ProductName,DepartmentName,Price,StockQuantity) VALUES('Goku DBZ Shirt','Clothing',19.99,150);
INSERT INTO Products(ProductName,DepartmentName,Price,StockQuantity) VALUES('Harry Potter Invisibility Cloak','Clothing',99.99,200);
INSERT INTO Products(ProductName,DepartmentName,Price,StockQuantity) VALUES('Goblet of Fire','Dishware',199.99,200);
INSERT INTO Products(ProductName,DepartmentName,Price,StockQuantity) VALUES('Jake The Dog Toy','Toys',29.49,200);
INSERT INTO Products(ProductName,DepartmentName,Price,StockQuantity) VALUES('Coming to America T-Shirt','Clothing',19.99,200);
INSERT INTO Products(ProductName,DepartmentName,Price,StockQuantity) VALUES('Lumpy Space Princess Plush','Toys',14.99,200);
INSERT INTO Products(ProductName,DepartmentName,Price,StockQuantity) VALUES('Snoop Dogg Chalice','Dishware',39.49,200);
INSERT INTO Products(ProductName,DepartmentName,Price,StockQuantity) VALUES('Land Before Time T-Shirt','Clothing',20.50,200);
INSERT INTO Products(ProductName,DepartmentName,Price,StockQuantity) VALUES('Garbage Pail Kids Lunchbox','Dishware',24.99,200);

