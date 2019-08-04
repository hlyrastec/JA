CREATE TABLE `lfsdb`.`store_product` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `cod` INT(4) NOT NULL,
  `name` VARCHAR(15) NOT NULL,
  `type` VARCHAR(20) NOT NULL,
  `color` VARCHAR(10) NOT NULL,
  `size` VARCHAR(3) NOT NULL,
  `amount` INT(5) UNSIGNED NOT NULL DEFAULT 0,
  `value` DECIMAL(8,2) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `cod_UNIQUE` (`cod` ASC),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC));

CREATE TABLE `lfsdb`.`store_customer` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `cpf` VARCHAR(11) NULL,
  `phone` VARCHAR(11) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  UNIQUE INDEX `cpf_UNIQUE` (`cpf` ASC));

CREATE TABLE `lfsdb`.`store_sale` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date` VARCHAR(45) NOT NULL,
  `full_date` VARCHAR(45) NOT NULL,
  `customer_cpf` VARCHAR(11) NOT NULL,
  `customer_name` VARCHAR(45) NOT NULL,
  `payment_method` VARCHAR(3) NOT NULL,
  `payment_installment` VARCHAR(2) NOT NULL,
  `discount` DECIMAL(8,2) NOT NULL,
  `total_value` DECIMAL(8,2) NOT NULL,
  `final_value` DECIMAL(8,2) NOT NULL,
  `status` VARCHAR(20) NOT NULL,
  `user` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC));

CREATE TABLE `lfsdb`.`store_sale_product` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `sale_id` INT NOT NULL,
  `product_id` INT NOT NULL,
  `amount` INT NOT NULL,
  `value` DECIMAL(8,2) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC));