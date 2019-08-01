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
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `store_sale`
--

LOCK TABLES `store_sale` WRITE;
/*!40000 ALTER TABLE `store_sale` DISABLE KEYS */;
INSERT INTO `store_sale` VALUES (1,'26/07/2019','26/07/2019-19:46:48','07103488606','Henrique Lyra','din','1',20.00,300.00,280.00,'concluída','Henrique Lyra'),(2,'26/07/2019','26/07/2019-19:49:2','07103488606','Henrique Lyra','din','1',170.00,1170.00,1000.00,'concluída','Henrique Lyra'),(3,'26/07/2019','26/07/2019-19:49:24','07103488606','Henrique Lyra','din','1',170.00,1170.00,1000.00,'concluída','Henrique Lyra'),(4,'26/07/2019','26/07/2019-19:49:38','07103488606','Henrique Lyra','din','1',170.00,1170.00,1000.00,'concluída','Henrique Lyra'),(5,'26/07/2019','26/07/2019-19:49:59','07103488606','Henrique Lyra','din','1',170.00,1170.00,1000.00,'concluída','Henrique Lyra'),(6,'26/07/2019','26/07/2019-20:16:19','07103488606','Henrique Lyra','din','1',10.00,780.00,770.00,'concluída','Henrique Lyra'),(7,'27/07/2019','27/07/2019-2:13:50','07103488606','Henrique Lyra','din','1',320.00,2820.00,2500.00,'concluída','Henrique Lyra'),(8,'27/07/2019','27/07/2019-9:31:40','07103488606','Henrique Lyra','din','2',33.00,900.00,867.00,'concluída','Henrique Lyra'),(9,'27/07/2019','27/07/2019-9:32:2','07103488606','Henrique Lyra','chq','6',331.00,4350.00,4019.00,'concluída','Henrique Lyra'),(10,'29/07/2019','29/07/2019-20:32:31','07103488606','Henrique Lyra','din','1',10.00,40.00,30.00,'concluída','Henrique Lyra'),(11,'29/07/2019','29/07/2019-22:52:15','07103488606','Henrique Lyra','din','1',50.00,750.00,700.00,'concluída','Henrique Lyra'),(12,'29/07/2019','29/07/2019-22:56:5','07103488606','Henrique Lyra','din','1',300.50,5760.00,5459.50,'concluída','Henrique Lyra'),(13,'29/07/2019','29/07/2019-23:6:36','07103488606','Henrique Lyra','din','1',10000.00,15000.00,5000.00,'concluída','Henrique Lyra'),(14,'29/07/2019','29/07/2019-23:29:5','15717132293','joao','din','4',300.00,900.00,600.00,'concluída','Henrique Lyra'),(15,'29/07/2019','29/07/2019-23:42:31','07103488606','Henrique Lyra','din','1',333.00,900.00,567.00,'concluída','Henrique Lyra');
/*!40000 ALTER TABLE `store_sale` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-08-01 12:29:02
