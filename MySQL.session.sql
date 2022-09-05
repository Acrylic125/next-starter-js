-- @block
CREATE TABLE test(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);
-- @block
-- Insert Records to test
INSERT INTO test (name)
VALUES ('test1');
-- @block
-- Get Records
SELECT *
FROM test;