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
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `store_sale_product`
--

LOCK TABLES `store_sale_product` WRITE;
/*!40000 ALTER TABLE `store_sale_product` DISABLE KEYS */;
INSERT INTO `store_sale_product` VALUES (1,'1',3,2,150.00),(2,'2',3,1,150.00),(3,'2',6,1,150.00),(4,'2',7,1,150.00),(5,'2',8,2,180.00),(6,'2',25,1,180.00),(7,'2',17,1,180.00),(8,'2',18,1,180.00),(9,'3',3,1,150.00),(10,'3',6,1,150.00),(11,'3',7,1,150.00),(12,'3',8,2,180.00),(13,'3',25,2,180.00),(14,'3',17,1,180.00),(15,'3',18,1,180.00),(16,'4',3,1,150.00),(17,'4',6,1,150.00),(18,'4',7,2,150.00),(19,'4',8,2,180.00),(20,'4',25,2,180.00),(21,'4',17,1,180.00),(22,'4',18,1,180.00),(23,'5',3,1,150.00),(24,'5',6,6,150.00),(25,'5',7,2,150.00),(26,'5',8,2,180.00),(27,'5',25,2,180.00),(28,'5',17,1,180.00),(29,'5',18,1,180.00),(30,'6',6,4,150.00),(31,'6',8,1,180.00),(32,'7',26,3,40.00),(33,'7',3,2,150.00),(34,'7',7,1,150.00),(35,'7',4,2,150.00),(36,'7',11,3,150.00),(37,'7',12,4,150.00),(38,'7',9,5,180.00),(39,'8',3,1,150.00),(40,'8',6,2,150.00),(41,'8',7,3,150.00),(42,'9',6,26,150.00),(43,'9',7,3,150.00),(44,'10',26,1,40.00),(45,'11',4,5,150.00),(46,'12',3,1,150.00),(47,'12',6,12,150.00),(48,'12',7,11,150.00),(49,'12',8,4,180.00),(50,'12',17,8,180.00),(51,'13',3,100,150.00),(52,'14',6,3,150.00),(53,'14',3,3,150.00),(54,'15',6,6,150.00);
/*!40000 ALTER TABLE `store_sale_product` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-08-01 12:29:01
