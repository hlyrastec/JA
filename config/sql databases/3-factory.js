CREATE TABLE `lfsdb`.`factory_product` (
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

CREATE TABLE `lfsdb`.`product_image` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `product_id` INT NOT NULL,
  `url` VARCHAR(200) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `product_image_UNIQUE` (`id` ASC));

CREATE TABLE `lfsdb`.`product_type` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(15) NOT NULL,
  `shortcut` VARCHAR(8) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC));

CREATE TABLE `lfsdb`.`product_color` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(15) NOT NULL,
  `shortcut` VARCHAR(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC));


