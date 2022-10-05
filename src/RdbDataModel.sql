CREATE TABLE Author (
    Id int,
    LastName varchar(255),
    FirstName varchar(255)
);

CREATE TABLE Publisher (
    Id int,
    AuthorId int,
    Name varchar(255),
    Address varchar(255)
);

CREATE TABLE Book (
    Id int,
    AuthorId int, 
    PublisherId int,
    Title varchar(255),
    Genre varchar(255)
);

-- Assumed foreign key relationships are understood (otherwise reachout, this is just an example) --
-- OPTIONAL, if you have a complex example yourself you would rather work with feel free, if you want to ask if it is worthy, feel free to reach out --

-- NOTES --
-- THERE ARE MANY WAYS TO SOLVE THIS WITH DYNAMODB/DOCUMENT_STORE, PICK ONE, IT LIKELY WON'T BE WRONG