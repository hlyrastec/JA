CREATE DATABASE  IF NOT EXISTS `lfsdb` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `lfsdb`;
-- MySQL dump 10.13  Distrib 5.7.27, for Linux (x86_64)
--
-- Host: localhost    Database: lfsdb
-- ------------------------------------------------------
-- Server version	5.7.27-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `factory_product`
--

DROP TABLE IF EXISTS `factory_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `factory_product` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `cod` int(4) NOT NULL,
  `name` varchar(15) NOT NULL,
  `type` varchar(20) NOT NULL,
  `color` varchar(10) NOT NULL,
  `size` varchar(3) NOT NULL,
  `amount` int(5) unsigned NOT NULL DEFAULT '0',
  `value` decimal(8,2) NOT NULL DEFAULT '0.00',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `cod_UNIQUE` (`cod`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `factory_product`
--

LOCK TABLES `factory_product` WRITE;
/*!40000 ALTER TABLE `factory_product` DISABLE KEYS */;
INSERT INTO `factory_product` VALUES (3,1,'Close','Colete','pt','P',0,150.00),(4,31,'Close','Colete','vd','P',0,150.00),(5,51,'Close','Colete','tan','P',0,150.00),(6,2,'Close','Colete','pt','M',0,150.00),(7,3,'Close','Colete','pt','G',0,150.00),(8,4,'Plate Carrier','Colete','pt','ST',0,180.00),(9,34,'Plate Carrier','Colete','vd','ST',0,180.00),(10,54,'Plate Carrier','Colete','tan','ST',0,180.00),(11,32,'Close','Colete','vd','M',0,150.00),(12,33,'Close','Colete','vd','G',0,150.00),(13,52,'Close','Colete','tan','M',0,150.00),(14,53,'Close','Colete','tan','G',0,150.00),(16,35,'JA3','Colete','vd','P',0,180.00),(17,6,'JA3','Colete','pt','M',0,180.00),(18,7,'JA3','Colete','pt','G',0,180.00),(20,36,'JA3','Colete','vd','M',0,180.00),(21,37,'JA3','Colete','vd','G',0,180.00),(22,55,'JA3','Colete','tan','P',0,180.00),(23,56,'JA3','Colete','tan','M',0,180.00),(24,57,'JA3','Colete','tan','G',0,180.00),(25,5,'JA3','Colete','pt','P',0,180.00),(26,201,'P. Camelback','Peça_mod','pt','ST',0,40.00),(27,202,'Bolsa Pequena','Peça_mod','pt','ST',0,25.00);
/*!40000 ALTER TABLE `factory_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `online_sale`
--

DROP TABLE IF EXISTS `online_sale`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `online_sale` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cod` varchar(45) NOT NULL,
  `customer_name` varchar(45) NOT NULL,
  `customer_username` varchar(45) NOT NULL,
  `date` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `cod_UNIQUE` (`cod`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `online_sale`
--

LOCK TABLES `online_sale` WRITE;
/*!40000 ALTER TABLE `online_sale` DISABLE KEYS */;
/*!40000 ALTER TABLE `online_sale` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_color`
--

DROP TABLE IF EXISTS `product_color`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_color` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(15) NOT NULL,
  `shortcut` varchar(7) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_color`
--

LOCK TABLES `product_color` WRITE;
/*!40000 ALTER TABLE `product_color` DISABLE KEYS */;
INSERT INTO `product_color` VALUES (1,'Preto','pt'),(2,'Verde','vd'),(3,'Tan','tan');
/*!40000 ALTER TABLE `product_color` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_image`
--

DROP TABLE IF EXISTS `product_image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_image` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL,
  `url` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `product_image_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_image`
--

LOCK TABLES `product_image` WRITE;
/*!40000 ALTER TABLE `product_image` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_type`
--

DROP TABLE IF EXISTS `product_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(15) NOT NULL,
  `shortcut` varchar(8) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_type`
--

LOCK TABLES `product_type` WRITE;
/*!40000 ALTER TABLE `product_type` DISABLE KEYS */;
INSERT INTO `product_type` VALUES (1,'Colete','Colete'),(2,'Peça Modular','Peça_mod');
/*!40000 ALTER TABLE `product_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `room1`
--

DROP TABLE IF EXISTS `room1`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `room1` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `full_date` varchar(45) NOT NULL,
  `user` varchar(45) NOT NULL,
  `message` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `room1`
--

LOCK TABLES `room1` WRITE;
/*!40000 ALTER TABLE `room1` DISABLE KEYS */;
/*!40000 ALTER TABLE `room1` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `room2`
--

DROP TABLE IF EXISTS `room2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `room2` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `full_date` varchar(45) NOT NULL,
  `user` varchar(45) NOT NULL,
  `message` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `room2`
--

LOCK TABLES `room2` WRITE;
/*!40000 ALTER TABLE `room2` DISABLE KEYS */;
/*!40000 ALTER TABLE `room2` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `room3`
--

DROP TABLE IF EXISTS `room3`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `room3` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `full_date` varchar(45) NOT NULL,
  `user` varchar(45) NOT NULL,
  `message` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `room3`
--

LOCK TABLES `room3` WRITE;
/*!40000 ALTER TABLE `room3` DISABLE KEYS */;
/*!40000 ALTER TABLE `room3` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `room4`
--

DROP TABLE IF EXISTS `room4`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `room4` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `full_date` varchar(45) NOT NULL,
  `user` varchar(45) NOT NULL,
  `message` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `room4`
--

LOCK TABLES `room4` WRITE;
/*!40000 ALTER TABLE `room4` DISABLE KEYS */;
/*!40000 ALTER TABLE `room4` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `store_customer`
--

DROP TABLE IF EXISTS `store_customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `store_customer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `cpf` varchar(11) DEFAULT NULL,
  `phone` varchar(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `cpf_UNIQUE` (`cpf`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `store_customer`
--

LOCK TABLES `store_customer` WRITE;
/*!40000 ALTER TABLE `store_customer` DISABLE KEYS */;
/*!40000 ALTER TABLE `store_customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `store_product`
--

DROP TABLE IF EXISTS `store_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `store_product` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `cod` int(4) NOT NULL,
  `name` varchar(15) NOT NULL,
  `type` varchar(20) NOT NULL,
  `color` varchar(10) NOT NULL,
  `size` varchar(3) NOT NULL,
  `amount` int(5) unsigned NOT NULL DEFAULT '0',
  `value` decimal(8,2) NOT NULL DEFAULT '0.00',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `cod_UNIQUE` (`cod`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `store_product`
--

LOCK TABLES `store_product` WRITE;
/*!40000 ALTER TABLE `store_product` DISABLE KEYS */;
INSERT INTO `store_product` VALUES (3,1,'Close','Colete','pt','P',100,150.00),(4,31,'Close','Colete','vd','P',100,150.00),(5,51,'Close','Colete','tan','P',100,150.00),(6,2,'Close','Colete','pt','M',100,150.00),(7,3,'Close','Colete','pt','G',100,150.00),(8,4,'Plate Carrier','Colete','pt','ST',100,180.00),(9,34,'Plate Carrier','Colete','vd','ST',100,180.00),(10,54,'Plate Carrier','Colete','tan','ST',100,180.00),(11,32,'Close','Colete','vd','M',100,150.00),(12,33,'Close','Colete','vd','G',100,150.00),(13,52,'Close','Colete','tan','M',100,150.00),(14,53,'Close','Colete','tan','G',100,150.00),(16,35,'JA3','Colete','vd','P',100,180.00),(17,6,'JA3','Colete','pt','M',100,180.00),(18,7,'JA3','Colete','pt','G',100,180.00),(20,36,'JA3','Colete','vd','M',100,180.00),(21,37,'JA3','Colete','vd','G',100,180.00),(22,55,'JA3','Colete','tan','P',100,180.00),(23,56,'JA3','Colete','tan','M',100,180.00),(24,57,'JA3','Colete','tan','G',100,180.00),(25,5,'JA3','Colete','pt','P',100,180.00),(26,201,'P. Camelback','Peça_mod','pt','ST',100,40.00),(27,202,'Bolsa Pequena','Peça_mod','pt','ST',0,25.00);
/*!40000 ALTER TABLE `store_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `store_sale`
--

DROP TABLE IF EXISTS `store_sale`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `store_sale` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` varchar(45) NOT NULL,
  `full_date` varchar(45) DEFAULT NULL,
  `customer_cpf` varchar(11) NOT NULL,
  `customer_name` varchar(45) NOT NULL,
  `payment_method` varchar(3) NOT NULL,
  `payment_installment` varchar(2) NOT NULL,
  `discount` decimal(8,2) NOT NULL,
  `total_value` decimal(8,2) NOT NULL,
  `final_value` decimal(8,2) NOT NULL,
  `status` varchar(20) NOT NULL,
  `user` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `store_sale`
--

LOCK TABLES `store_sale` WRITE;
/*!40000 ALTER TABLE `store_sale` DISABLE KEYS */;
/*!40000 ALTER TABLE `store_sale` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `store_sale_product`
--

DROP TABLE IF EXISTS `store_sale_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `store_sale_product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sale_id` varchar(45) NOT NULL,
  `product_id` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `value` decimal(8,2) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `store_sale_product`
--

LOCK TABLES `store_sale_product` WRITE;
/*!40000 ALTER TABLE `store_sale_product` DISABLE KEYS */;
INSERT INTO `store_sale_product` VALUES (1,'1',3,2,150.00),(2,'2',3,1,150.00),(3,'2',6,1,150.00),(4,'2',7,1,150.00),(5,'2',8,2,180.00),(6,'2',25,1,180.00),(7,'2',17,1,180.00),(8,'2',18,1,180.00),(9,'3',3,1,150.00),(10,'3',6,1,150.00),(11,'3',7,1,150.00),(12,'3',8,2,180.00),(13,'3',25,2,180.00),(14,'3',17,1,180.00),(15,'3',18,1,180.00),(16,'4',3,1,150.00),(17,'4',6,1,150.00),(18,'4',7,2,150.00),(19,'4',8,2,180.00),(20,'4',25,2,180.00),(21,'4',17,1,180.00),(22,'4',18,1,180.00),(23,'5',3,1,150.00),(24,'5',6,6,150.00),(25,'5',7,2,150.00),(26,'5',8,2,180.00),(27,'5',25,2,180.00),(28,'5',17,1,180.00),(29,'5',18,1,180.00),(30,'6',6,4,150.00),(31,'6',8,1,180.00),(32,'7',26,3,40.00),(33,'7',3,2,150.00),(34,'7',7,1,150.00),(35,'7',4,2,150.00),(36,'7',11,3,150.00),(37,'7',12,4,150.00),(38,'7',9,5,180.00),(39,'8',3,1,150.00),(40,'8',6,2,150.00),(41,'8',7,3,150.00),(42,'9',6,26,150.00),(43,'9',7,3,150.00),(44,'10',26,1,40.00),(45,'11',4,5,150.00),(46,'12',3,1,150.00),(47,'12',6,12,150.00),(48,'12',7,11,150.00),(49,'12',8,4,180.00),(50,'12',17,8,180.00),(51,'13',3,100,150.00),(52,'14',6,3,150.00),(53,'14',3,3,150.00),(54,'15',6,6,150.00),(55,'16',3,1,150.00),(56,'17',3,3,150.00),(57,'17',6,1,150.00),(58,'17',7,1,150.00),(59,'17',8,1,180.00),(60,'17',25,1,180.00),(61,'18',3,33,150.00),(62,'19',26,25,40.00),(63,'20',26,16,40.00),(64,'21',3,1,150.00),(65,'21',6,1,150.00),(66,'21',7,1,150.00);
/*!40000 ALTER TABLE `store_sale_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `job` varchar(25) NOT NULL DEFAULT 'S/R',
  `email` varchar(45) NOT NULL,
  `birth` varchar(17) NOT NULL,
  `username` varchar(45) NOT NULL,
  `password` varchar(60) NOT NULL,
  `access` varchar(3) NOT NULL DEFAULT 'aaa',
  `support` varchar(12) NOT NULL DEFAULT 'disconnected',
  `serviceDesk` varchar(6) NOT NULL DEFAULT 'closed',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'ADMIN','Desenvolvedor','hlyrastec@gmail.com','04/11/1994','ADMIN','$2a$10$0dD64MBT2VMTxAe/UKc6kel2iWykAxP/lK8piRkp8pPg1OlOFr8P6','dvp','disconnected','closed'),(2,'Jean Carvalho','Proprietário','assistentejario@gmail.com','01/janeiro/2000','jeancarvalho','$2a$10$tSdiXkF9QCCt.km3zIqx2u3jF2j6WLXFcWFzzGs6hVlER9ewQYgjG','prp','disconnected','closed'),(3,'Henrique Lyra','Suporte','hhlyras2011@gmail.com','4/Novembro/1994','hlyras','$2a$10$tSdiXkF9QCCt.km3zIqx2u3jF2j6WLXFcWFzzGs6hVlER9ewQYgjG','spt','disconnected','opened'),(4,'Daniel Anderson','Gerente Fábrica','danielanderson@gmail.com','12/Agosto/1992','danielanderson','$2a$10$tSdiXkF9QCCt.km3zIqx2u3jF2j6WLXFcWFzzGs6hVlER9ewQYgjG','grf','disconnected','closed');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-08-03 16:46:36
