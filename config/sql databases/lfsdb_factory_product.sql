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
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-08-01 12:29:01
