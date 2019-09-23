-- MySQL dump 10.13  Distrib 5.7.27, for Linux (x86_64)
--
-- Host: localhost    Database: ERP
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
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `customer` (
  `id` int(11) DEFAULT NULL,
  `name` text,
  `cpf` text,
  `phone` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (4,'Henrique','07103488606',33999999961);
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `factory`
--

DROP TABLE IF EXISTS `factory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `factory` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `city` varchar(25) NOT NULL,
  `state` varchar(25) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `factory`
--

LOCK TABLES `factory` WRITE;
/*!40000 ALTER TABLE `factory` DISABLE KEYS */;
INSERT INTO `factory` VALUES (1,'Rio de Janeiro','Rio de Janeiro');
/*!40000 ALTER TABLE `factory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `factory_storage`
--

DROP TABLE IF EXISTS `factory_storage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `factory_storage` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `factory_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=133 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `factory_storage`
--

LOCK TABLES `factory_storage` WRITE;
/*!40000 ALTER TABLE `factory_storage` DISABLE KEYS */;
INSERT INTO `factory_storage` VALUES (1,1,3,1),(2,1,6,1),(3,1,7,1),(4,1,8,1),(5,1,25,0),(6,1,17,0),(7,1,18,0),(8,1,4,0),(9,1,11,0),(10,1,12,0),(11,1,9,0),(12,1,16,0),(13,1,20,0),(14,1,21,0),(15,1,5,0),(16,1,13,0),(17,1,14,0),(18,1,10,0),(19,1,22,0),(20,1,23,0),(21,1,24,0),(22,1,26,0),(23,1,27,0),(24,1,28,0),(25,1,29,0),(26,1,30,0),(27,1,31,0),(28,1,32,0),(29,1,33,0),(30,1,34,0),(31,1,35,0),(32,1,36,0),(33,1,37,0),(34,1,38,0),(35,1,86,0),(36,1,39,0),(37,1,40,0),(38,1,41,0),(39,1,42,0),(40,1,43,0),(41,1,44,0),(42,1,45,0),(43,1,46,0),(44,1,47,0),(45,1,48,0),(46,1,49,0),(47,1,50,0),(48,1,51,0),(49,1,87,0),(50,1,52,0),(51,1,53,0),(52,1,54,0),(53,1,55,0),(54,1,56,0),(55,1,57,0),(56,1,58,0),(57,1,59,0),(58,1,60,0),(59,1,61,0),(60,1,62,0),(61,1,63,0),(62,1,64,0),(63,1,88,0),(64,1,65,0),(65,1,66,0),(66,1,131,0),(67,1,67,0),(68,1,68,0),(69,1,132,0),(70,1,69,0),(71,1,70,0),(72,1,133,0),(73,1,71,0),(74,1,72,0),(75,1,128,0),(76,1,134,0),(77,1,73,0),(78,1,74,0),(79,1,129,0),(80,1,135,0),(81,1,75,0),(82,1,76,0),(83,1,130,0),(84,1,136,0),(85,1,77,0),(86,1,78,0),(87,1,79,0),(88,1,80,0),(89,1,81,0),(90,1,82,0),(91,1,83,0),(92,1,84,0),(93,1,85,0),(94,1,93,0),(95,1,94,0),(96,1,95,0),(97,1,125,0),(98,1,126,0),(99,1,127,0),(100,1,98,0),(101,1,120,0),(102,1,99,0),(103,1,100,0),(104,1,101,0),(105,1,102,0),(106,1,104,0),(107,1,105,0),(108,1,106,0),(109,1,107,0),(110,1,108,0),(111,1,110,0),(112,1,111,0),(113,1,112,0),(114,1,113,0),(115,1,122,0),(116,1,116,0),(117,1,119,0),(118,1,124,0),(119,1,103,0),(120,1,117,0),(121,1,109,0),(122,1,114,0),(123,1,115,0),(124,1,118,0),(125,1,92,0),(126,1,121,0),(127,1,123,0),(128,1,97,0),(129,1,96,0),(130,1,137,0),(131,1,138,0),(132,1,139,0);
/*!40000 ALTER TABLE `factory_storage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `cod` int(4) NOT NULL,
  `name` varchar(15) NOT NULL,
  `category` varchar(20) NOT NULL,
  `color` varchar(10) NOT NULL,
  `size` varchar(3) NOT NULL,
  `amount` int(5) unsigned NOT NULL DEFAULT '0',
  `value` decimal(8,2) NOT NULL DEFAULT '0.00',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `cod_UNIQUE` (`cod`)
) ENGINE=InnoDB AUTO_INCREMENT=140 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (3,1,'Close','Colete','pt','P',0,150.00),(4,51,'Close','Colete','vd','P',0,150.00),(5,101,'Close','Colete','tan','P',0,150.00),(6,2,'Close','Colete','pt','M',0,150.00),(7,3,'Close','Colete','pt','G',0,150.00),(8,4,'Plate Carrier','Colete','pt','ST',0,180.00),(9,54,'Plate Carrier','Colete','vd','ST',0,180.00),(10,104,'Plate Carrier','Colete','tan','ST',0,180.00),(11,52,'Close','Colete','vd','M',0,150.00),(12,53,'Close','Colete','vd','G',0,150.00),(13,102,'Close','Colete','tan','M',0,150.00),(14,103,'Close','Colete','tan','G',0,150.00),(16,55,'JA3','Colete','vd','P',0,180.00),(17,6,'JA3','Colete','pt','M',0,200.00),(18,7,'JA3','Colete','pt','G',0,200.00),(20,56,'JA3','Colete','vd','M',0,180.00),(21,57,'JA3','Colete','vd','G',0,180.00),(22,105,'JA3','Colete','tan','P',0,180.00),(23,106,'JA3','Colete','tan','M',0,180.00),(24,107,'JA3','Colete','tan','G',0,180.00),(25,5,'JA3','Colete','pt','P',0,200.00),(26,501,'P. Camelback','Peça_mod','pt','ST',0,40.00),(27,502,'Bolsa Pequena','Peça_mod','pt','ST',0,20.00),(28,503,'Bolsa Média','Peça_mod','pt','ST',0,20.00),(29,504,'Bolsa Grande','Peça_mod','pt','ST',0,35.00),(30,505,'P.C. Fuzil Velc','Peça_mod','pt','ST',0,20.00),(31,506,'P.C. Fuzil TT','Peça_mod','pt','ST',0,20.00),(32,507,'P.C. Fuzil Elás','Peça_mod','pt','ST',0,20.00),(33,508,'P.C.Pistola Dup','Peça_mod','pt','ST',0,20.00),(34,509,'P.C. SMT/UMP','Peça_mod','pt','ST',0,20.00),(35,510,'P.C. Calibre 12','Peça_mod','pt','ST',0,20.00),(36,511,'Coldre Unive. D','Peça_mod','pt','ST',0,15.00),(37,512,'Coldre Unive. C','Peça_mod','pt','ST',0,15.00),(38,513,'P. Rádio / HT','Peça_mod','pt','ST',0,15.00),(39,551,'P. Camelback','Peça_mod','vd','ST',0,40.00),(40,552,'Bolsa Pequena','Peça_mod','vd','ST',0,20.00),(41,553,'Bolsa Média','Peça_mod','vd','ST',0,20.00),(42,554,'Bolsa Grande','Peça_mod','vd','ST',0,30.00),(43,555,'P.C. Fuzil Velc','Peça_mod','vd','ST',0,20.00),(44,556,'P.C. Fuzil TT','Peça_mod','vd','ST',0,20.00),(45,557,'P.C. Fuzil Elás','Peça_mod','vd','ST',0,20.00),(46,558,'P.C.Pistola Dup','Peça_mod','vd','ST',0,20.00),(47,559,'P.C. SMT/UMP','Peça_mod','vd','ST',0,20.00),(48,560,'P.C. Calibre 12','Peça_mod','vd','ST',0,20.00),(49,561,'Coldre Unive. D','Peça_mod','vd','ST',0,15.00),(50,562,'Coldre Unive. C','Peça_mod','vd','ST',0,15.00),(51,563,'P. Rádio / HT','Peça_mod','vd','ST',0,15.00),(52,601,'P. Camelback','Peça_mod','tan','ST',0,40.00),(53,602,'Bolsa Pequena','Peça_mod','tan','ST',0,20.00),(54,603,'Bolsa Média','Peça_mod','tan','ST',0,20.00),(55,604,'Bolsa Grande','Peça_mod','tan','ST',0,30.00),(56,605,'P.C. Fuzil Velc','Peça_mod','tan','ST',0,20.00),(57,606,'P.C. Fuzil TT','Peça_mod','tan','ST',0,20.00),(58,607,'P.C. Fuzil Elás','Peça_mod','tan','ST',0,20.00),(59,608,'P.C.Pistola Dup','Peça_mod','tan','ST',0,20.00),(60,609,'P.C. SMT/UMP','Peça_mod','tan','ST',0,20.00),(61,610,'P.C. Calibre 12','Peça_mod','tan','ST',0,20.00),(62,611,'Coldre Unive. D','Peça_mod','tan','ST',0,15.00),(63,612,'Coldre Unive. C','Peça_mod','tan','ST',0,15.00),(64,613,'P. Rádio / HT','Peça_mod','tan','ST',0,15.00),(65,1001,'Universal Per D','Coldre','pt','ST',0,35.00),(66,1002,'Universal Per C','Coldre','pt','ST',0,35.00),(67,1051,'Universal Per D','Coldre','vd','ST',0,35.00),(68,1052,'Universal Per C','Coldre','vd','ST',0,35.00),(69,1101,'Universal Per D','Coldre','tan','ST',0,35.00),(70,1102,'Universal Per C','Coldre','tan','ST',0,35.00),(71,1501,'Tático Fiv Plas','Cinto','pt','ST',0,35.00),(72,1502,'NA','Cinto','pt','ST',0,35.00),(73,1551,'Tático Fiv Plas','Cinto','vd','ST',0,35.00),(74,1552,'NA','Cinto','vd','ST',0,35.00),(75,1601,'Tático Fiv Plas','Cinto','tan','ST',0,35.00),(76,1602,'NA','Cinto','tan','ST',0,35.00),(77,2001,'Tático','Bornal','pt','ST',0,55.00),(78,2002,'3 PST','Bornal','pt','ST',0,55.00),(79,2051,'Tático','Bornal','vd','ST',0,55.00),(80,2052,'3 PST','Bornal','vd','ST',0,55.00),(81,2101,'Tático','Bornal','tan','ST',0,55.00),(82,2102,'3 PST','Bornal','tan','ST',0,55.00),(83,2501,'Tática 1 ponto','Bandolei','pt','ST',0,55.00),(84,2551,'Tática 1 ponto','Bandolei','vd','ST',0,55.00),(85,2601,'Tática 1 ponto','Bandolei','tan','ST',0,55.00),(86,514,'P. Algemas','Peça_mod','pt','ST',0,15.00),(87,564,'P. Algemas','Peça_mod','vd','ST',0,15.00),(88,614,'P. Algemas','Peça_mod','tan','ST',0,15.00),(92,5401,'Shemagh simples','Shemagh','S/C','ST',0,45.00),(93,3001,'Mochila pequena','Mochila','S/C','ST',0,110.00),(94,3002,'Mochila média','Mochila','S/C','ST',0,120.00),(95,3003,'Mochila Grande','Mochila','S/C','ST',0,200.00),(96,5801,'Sup. Cel braço ','Sup. Cel','S/C','ST',0,15.00),(97,5701,'Kit cantil ','Cantil','S/C','ST',0,75.00),(98,3701,'Ref camel 2.5L','Ref. Cam','S/C','ST',0,45.00),(99,3901,'Farda exército','Farda','cvd','P',0,210.00),(100,3902,'Farda Exército','Farda','cvd','M',0,210.00),(101,3903,'Farda Exército ','Farda','cvd','G',0,210.00),(102,3904,'Farda Exército','Farda','cvd','GG',0,210.00),(103,4701,'Gorro','Gorro','S/C','ST',0,20.00),(104,4001,'Faca Tática','Faca','S/C','ST',0,80.00),(105,4101,'Canivete Pequen','Canivete','S/C','ST',0,0.00),(106,4102,'Canivete médio','Canivete','S/C','ST',0,35.00),(107,4103,'Canivete Grande','Canivete','S/C','ST',0,55.00),(108,4104,'Multiuso talher','Canivete','S/C','ST',0,35.00),(109,4901,'Bússola simples','Bússola','S/C','ST',0,35.00),(110,4201,'Mini lanterna','Lanterna','S/C','ST',0,10.00),(111,4202,'Lanterna Pequen','Lanterna','S/C','ST',0,20.00),(112,4203,'Lanterna Choque','Lanterna','S/C','ST',0,55.00),(113,4204,'Lanterna Tática','Lanterna','S/C','ST',0,65.00),(114,5001,'Par de Bombacho','Bombacho','S/C','ST',0,5.00),(115,5101,'Cadeado pequeno','Cadeado','S/C','ST',0,20.00),(116,4401,'Pul c/ Bússola','Pulseira','S/C','ST',0,35.00),(117,4801,'Capacete Básico','Capacete','S/C','ST',0,220.00),(118,5301,'Másc. Tática','Máscara','S/C','ST',0,45.00),(119,4501,'Boné simples','Boné','S/C','ST',0,40.00),(120,3801,'Fiel Aspiral','Fiel','S/C','ST',0,25.00),(121,5501,'Gandoleta','Gandolet','S/C','ST',0,135.00),(122,4301,'Moch. Camelback','Camelbac','S/C','ST',0,105.00),(123,5601,'Bolsa Velame','Bolsa','S/C','ST',0,35.00),(124,4601,'Chapéu caçador','Chapéu','S/C','ST',0,35.00),(125,3601,'Kit cot. e joel','Cot/joel','pt','ST',0,60.00),(126,3602,'Kit Cot. e Joel','Cot/joel','vd','ST',0,60.00),(127,3603,'Kit Cot. e Joel','Cot/joel','tan','ST',0,60.00),(128,1503,'Black Hawk','Cinto','pt','ST',0,60.00),(129,1553,'Black Hawk','Cinto','vd','ST',0,60.00),(130,1603,'Black Hawk','Cinto','tan','ST',0,60.00),(131,1003,'Mini Coldre','Coldre','pt','ST',0,20.00),(132,1053,'Mini Coldre','Coldre','vd','ST',0,20.00),(133,1103,'Mini Coldre','Coldre','tan','ST',0,20.00),(134,1504,'Prot. Acolchoad','Cinto','pt','ST',0,15.00),(135,1554,'Prot. Acolchoad','Cinto','vd','ST',0,15.00),(136,1604,'Prot. Acolchoad','Cinto','tan','ST',0,15.00),(137,5901,'Corta Vento','Casaco','S/C','ST',0,0.00),(138,5902,'Casaco tático','Casaco','S/C','ST',0,220.00),(139,5903,'Malvinão','Casaco','S/C','ST',0,150.00);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_category`
--

DROP TABLE IF EXISTS `product_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_category` (
  `id` int(11) DEFAULT NULL,
  `name` text,
  `shortcut` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_category`
--

LOCK TABLES `product_category` WRITE;
/*!40000 ALTER TABLE `product_category` DISABLE KEYS */;
INSERT INTO `product_category` VALUES (1,'Colete','Colete'),(2,'Peça Modular','Peça_mod'),(4,'Coldre','Coldre'),(5,'Cinto','Cinto'),(6,'Bornal','Bornal'),(7,'Bandoleira','Bandolei'),(9,'Mochila','Mochila'),(10,'Luva','Luva'),(11,'Cotoveleira e j','Cot/joel'),(12,'Refil Camelback','Ref. Cam'),(13,'Fiel','Fiel'),(14,'Farda','Farda'),(15,'Faca','Faca'),(16,'Canivete','Canivete'),(17,'Lanterna','Lanterna'),(18,'Camelback','Camelbac'),(19,'Pulseira','Pulseira'),(20,'Boné','Boné'),(21,'Chapéu','Chapéu'),(22,'Gorro','Gorro'),(23,'Capacete','Capacete'),(24,'Bússola','Bússola'),(25,'Bombacho','Bombacho'),(26,'Cadeado','Cadeado'),(27,'Alicate','Alicate'),(28,'Máscara','Máscara'),(29,'Shemagh','Shemagh'),(30,'Gandoleta','Gandolet'),(31,'Bolsa','Bolsa'),(32,'Cantil','Cantil'),(33,'Sup. Celular','Sup. Cel'),(34,'Casaco','Casaco');
/*!40000 ALTER TABLE `product_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_color`
--

DROP TABLE IF EXISTS `product_color`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_color` (
  `id` int(11) DEFAULT NULL,
  `name` text,
  `shortcut` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_color`
--

LOCK TABLES `product_color` WRITE;
/*!40000 ALTER TABLE `product_color` DISABLE KEYS */;
INSERT INTO `product_color` VALUES (1,'Sem Cor','S/C'),(2,'Preto','pt'),(3,'Verde','vd'),(4,'Tan','tan'),(5,'Camoflado verde','cvd'),(6,'Multicam','Mtc');
/*!40000 ALTER TABLE `product_color` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_image`
--

DROP TABLE IF EXISTS `product_image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_image` (
  `id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `url` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_image`
--

LOCK TABLES `product_image` WRITE;
/*!40000 ALTER TABLE `product_image` DISABLE KEYS */;
INSERT INTO `product_image` VALUES (3,8,'https://http2.mlstatic.com/capa-de-colete-modular-plate-carrier-ja-rio-militar-specas-D_NQ_NP_989494-MLB31419522802_072019-F.webp'),(4,8,'https://http2.mlstatic.com/capa-de-colete-modular-plate-carrier-ja-rio-militar-specas-D_NQ_NP_741013-MLB31419518358_072019-F.webp'),(5,8,'https://http2.mlstatic.com/capa-de-colete-modular-plate-carrier-ja-rio-militar-specas-D_NQ_NP_618461-MLB31419537673_072019-F.webp'),(6,8,'https://http2.mlstatic.com/capa-de-colete-modular-plate-carrier-ja-rio-militar-specas-D_NQ_NP_992269-MLB31419519870_072019-F.webp'),(7,9,'https://http2.mlstatic.com/capa-de-colete-modular-plate-carrier-ja-rio-militar-specas-D_NQ_NP_923651-MLB31419550329_072019-F.webp'),(8,9,'https://http2.mlstatic.com/capa-de-colete-modular-plate-carrier-ja-rio-militar-specas-D_NQ_NP_711585-MLB31419546367_072019-F.webp'),(9,9,'https://http2.mlstatic.com/capa-de-colete-modular-plate-carrier-ja-rio-militar-specas-D_NQ_NP_683165-MLB31419550311_072019-F.webp'),(10,9,'https://http2.mlstatic.com/capa-de-colete-modular-plate-carrier-ja-rio-militar-specas-D_NQ_NP_670846-MLB31419546375_072019-F.webp'),(11,10,'https://http2.mlstatic.com/capa-de-colete-modular-plate-carrier-ja-rio-militar-specas-D_NQ_NP_961971-MLB31419521997_072019-F.webp'),(12,10,'https://http2.mlstatic.com/capa-de-colete-modular-plate-carrier-ja-rio-militar-specas-D_NQ_NP_689825-MLB31419547689_072019-F.webp'),(13,10,'https://http2.mlstatic.com/capa-de-colete-modular-plate-carrier-ja-rio-militar-specas-D_NQ_NP_715038-MLB31419548664_072019-F.webp'),(14,10,'https://http2.mlstatic.com/capa-de-colete-modular-plate-carrier-ja-rio-militar-specas-D_NQ_NP_871004-MLB31419550144_072019-F.webp'),(15,3,'https://http2.mlstatic.com/capa-de-colete-modular-close-ja-rio-militar-s-pecas-D_NQ_NP_772843-MLB31190580458_062019-F.webp'),(16,6,'https://http2.mlstatic.com/capa-de-colete-modular-close-ja-rio-militar-s-pecas-D_NQ_NP_772843-MLB31190580458_062019-F.webp'),(17,7,'https://http2.mlstatic.com/capa-de-colete-modular-close-ja-rio-militar-s-pecas-D_NQ_NP_772843-MLB31190580458_062019-F.webp'),(18,3,'https://http2.mlstatic.com/capa-de-colete-modular-close-ja-rio-militar-s-pecas-D_NQ_NP_996366-MLB31190577905_062019-F.webp'),(19,6,'https://http2.mlstatic.com/capa-de-colete-modular-close-ja-rio-militar-s-pecas-D_NQ_NP_996366-MLB31190577905_062019-F.webp'),(20,7,'https://http2.mlstatic.com/capa-de-colete-modular-close-ja-rio-militar-s-pecas-D_NQ_NP_996366-MLB31190577905_062019-F.webp'),(21,3,'https://http2.mlstatic.com/capa-de-colete-modular-close-ja-rio-militar-s-pecas-D_NQ_NP_988520-MLB31190580180_062019-F.webp'),(22,6,'https://http2.mlstatic.com/capa-de-colete-modular-close-ja-rio-militar-s-pecas-D_NQ_NP_988520-MLB31190580180_062019-F.webp'),(23,7,'https://http2.mlstatic.com/capa-de-colete-modular-close-ja-rio-militar-s-pecas-D_NQ_NP_988520-MLB31190580180_062019-F.webp'),(24,3,'https://http2.mlstatic.com/capa-de-colete-modular-close-ja-rio-militar-s-pecas-D_NQ_NP_928722-MLB31190589109_062019-F.webp'),(25,6,'https://http2.mlstatic.com/capa-de-colete-modular-close-ja-rio-militar-s-pecas-D_NQ_NP_928722-MLB31190589109_062019-F.webp'),(26,7,'https://http2.mlstatic.com/capa-de-colete-modular-close-ja-rio-militar-s-pecas-D_NQ_NP_928722-MLB31190589109_062019-F.webp'),(27,26,'https://http2.mlstatic.com/porta-camelback-modular-ja-rio-militar-D_NQ_NP_818244-MLB31498972733_072019-F.webp'),(28,26,'https://http2.mlstatic.com/porta-camelback-modular-ja-rio-militar-D_NQ_NP_986789-MLB31498988535_072019-F.webp'),(29,39,'https://http2.mlstatic.com/porta-camelback-modular-ja-rio-militar-D_NQ_NP_994834-MLB31637343115_072019-F.webp'),(30,39,'https://http2.mlstatic.com/porta-camelback-modular-ja-rio-militar-D_NQ_NP_880382-MLB31637343617_072019-F.webp'),(31,52,'https://http2.mlstatic.com/porta-camelback-modular-ja-rio-militar-D_NQ_NP_968416-MLB31498980211_072019-F.webp'),(32,52,'https://http2.mlstatic.com/porta-camelback-modular-ja-rio-militar-D_NQ_NP_676363-MLB31498978737_072019-F.webp'),(36,27,'https://http2.mlstatic.com/bolsa-pequena-modular-ja-rio-militar-D_NQ_NP_914251-MLB31499264300_072019-F.webp'),(37,27,'https://http2.mlstatic.com/bolsa-pequena-modular-ja-rio-militar-D_NQ_NP_893776-MLB31499243475_072019-F.webp'),(38,27,'https://http2.mlstatic.com/bolsa-pequena-modular-ja-rio-militar-D_NQ_NP_944210-MLB31499259856_072019-F.webp'),(39,40,'https://http2.mlstatic.com/bolsa-pequena-modular-ja-rio-militar-D_NQ_NP_647582-MLB31637418984_072019-O.webp'),(40,40,'https://http2.mlstatic.com/bolsa-pequena-modular-ja-rio-militar-D_NQ_NP_922406-MLB31637438834_072019-F.webp'),(41,53,'https://http2.mlstatic.com/bolsa-pequena-modular-ja-rio-militar-D_NQ_NP_844052-MLB31499287530_072019-O.webp'),(42,53,'https://http2.mlstatic.com/bolsa-pequena-modular-ja-rio-militar-D_NQ_NP_920649-MLB31499267855_072019-F.webp'),(43,53,'https://http2.mlstatic.com/bolsa-pequena-modular-ja-rio-militar-D_NQ_NP_626313-MLB31499290505_072019-F.webp'),(46,28,'https://http2.mlstatic.com/bolsa-media-modular-ja-rio-militar-D_NQ_NP_686256-MLB31499295947_072019-F.webp'),(47,28,'https://http2.mlstatic.com/bolsa-media-modular-ja-rio-militar-D_NQ_NP_929677-MLB31499325059_072019-F.webp'),(48,28,'https://http2.mlstatic.com/bolsa-media-modular-ja-rio-militar-D_NQ_NP_725307-MLB31499330511_072019-F.webp'),(49,41,'https://http2.mlstatic.com/bolsa-media-modular-ja-rio-militar-D_NQ_NP_638411-MLB31637475175_072019-F.webp'),(50,41,'https://http2.mlstatic.com/bolsa-media-modular-ja-rio-militar-D_NQ_NP_827291-MLB31637491050_072019-F.webp'),(51,54,'https://http2.mlstatic.com/bolsa-media-modular-ja-rio-militar-D_NQ_NP_913216-MLB31499309648_072019-F.webp'),(52,54,'https://http2.mlstatic.com/bolsa-media-modular-ja-rio-militar-D_NQ_NP_664313-MLB31499300808_072019-F.webp'),(53,54,'https://http2.mlstatic.com/bolsa-media-modular-ja-rio-militar-D_NQ_NP_949365-MLB31499307181_072019-O.webp'),(54,30,'https://http2.mlstatic.com/porta-carregadormagazine-de-fuzil-modular-ja-rio-militar-D_NQ_NP_757661-MLB31489198431_072019-F.webp'),(55,30,'https://http2.mlstatic.com/porta-carregadormagazine-de-fuzil-modular-ja-rio-militar-D_NQ_NP_635423-MLB31489210626_072019-F.webp'),(56,30,'https://http2.mlstatic.com/porta-carregadormagazine-de-fuzil-modular-ja-rio-militar-D_NQ_NP_968130-MLB31489209645_072019-F.webp'),(57,30,'https://http2.mlstatic.com/porta-carregadormagazine-de-fuzil-modular-ja-rio-militar-D_NQ_NP_946645-MLB31489194828_072019-F.webp'),(58,56,'https://http2.mlstatic.com/porta-carregadormagazine-de-fuzil-modular-ja-rio-militar-D_NQ_NP_992259-MLB31489216682_072019-F.webp'),(59,56,'https://http2.mlstatic.com/porta-carregadormagazine-de-fuzil-modular-ja-rio-militar-D_NQ_NP_867231-MLB31489228091_072019-F.webp'),(60,56,'https://http2.mlstatic.com/porta-carregadormagazine-de-fuzil-modular-ja-rio-militar-D_NQ_NP_956261-MLB31489198491_072019-F.webp'),(61,43,'https://http2.mlstatic.com/porta-carregadormagazine-de-fuzil-modular-ja-rio-militar-D_NQ_NP_944890-MLB31489198379_072019-F.webp'),(65,59,'https://http2.mlstatic.com/porta-carregador-de-pistola-duplo-modular-ja-rio-militar-D_NQ_NP_938060-MLB31498783777_072019-F.webp'),(66,59,'https://http2.mlstatic.com/porta-carregador-de-pistola-duplo-modular-ja-rio-militar-D_NQ_NP_887875-MLB31498792678_072019-F.webp'),(67,59,'https://http2.mlstatic.com/porta-carregador-de-pistola-duplo-modular-ja-rio-militar-D_NQ_NP_712652-MLB31498763885_072019-F.webp'),(68,33,'https://http2.mlstatic.com/porta-carregador-de-pistola-duplo-modular-ja-rio-militar-D_NQ_NP_991989-MLB31498767755_072019-F.webp'),(69,33,'https://http2.mlstatic.com/porta-carregador-de-pistola-duplo-modular-ja-rio-militar-D_NQ_NP_606526-MLB31498763787_072019-F.webp'),(70,33,'https://http2.mlstatic.com/porta-carregador-de-pistola-duplo-modular-ja-rio-militar-D_NQ_NP_961302-MLB31498789118_072019-F.webp'),(71,46,'https://http2.mlstatic.com/porta-carregador-de-pistola-duplo-modular-ja-rio-militar-D_NQ_NP_855674-MLB31637386042_072019-O.webp'),(72,36,'https://http2.mlstatic.com/coldre-universal-modular-preto-ja-rio-militar-D_NQ_NP_614333-MLB31188151337_062019-F.webp'),(73,37,'https://http2.mlstatic.com/coldre-universal-modular-preto-ja-rio-militar-D_NQ_NP_614333-MLB31188151337_062019-F.webp'),(74,36,'https://http2.mlstatic.com/coldre-universal-modular-preto-ja-rio-militar-D_NQ_NP_637125-MLB31188157169_062019-F.webp'),(75,37,'https://http2.mlstatic.com/coldre-universal-modular-preto-ja-rio-militar-D_NQ_NP_637125-MLB31188157169_062019-F.webp'),(76,36,'https://http2.mlstatic.com/coldre-universal-modular-preto-ja-rio-militar-D_NQ_NP_630382-MLB31188161413_062019-F.webp'),(77,37,'https://http2.mlstatic.com/coldre-universal-modular-preto-ja-rio-militar-D_NQ_NP_630382-MLB31188161413_062019-F.webp'),(78,62,'https://http2.mlstatic.com/coldre-universal-modular-tan-ja-rio-militar-D_NQ_NP_740157-MLB31116893591_062019-O.webp'),(83,63,'https://http2.mlstatic.com/coldre-universal-modular-tan-ja-rio-militar-D_NQ_NP_740157-MLB31116893591_062019-F.webp'),(84,62,'https://http2.mlstatic.com/coldre-universal-modular-tan-ja-rio-militar-D_NQ_NP_699296-MLB31116881470_062019-F.webp'),(85,63,'https://http2.mlstatic.com/coldre-universal-modular-tan-ja-rio-militar-D_NQ_NP_699296-MLB31116881470_062019-F.webp'),(86,62,'https://http2.mlstatic.com/coldre-universal-modular-tan-ja-rio-militar-D_NQ_NP_938859-MLB31116882843_062019-F.webp'),(87,63,'https://http2.mlstatic.com/coldre-universal-modular-tan-ja-rio-militar-D_NQ_NP_938859-MLB31116882843_062019-F.webp'),(88,49,'https://http2.mlstatic.com/coldre-universal-modular-verde-ja-rio-militar-D_NQ_NP_891206-MLB31637493260_072019-F.webp'),(89,50,'https://http2.mlstatic.com/coldre-universal-modular-verde-ja-rio-militar-D_NQ_NP_891206-MLB31637493260_072019-F.webp'),(90,49,'https://http2.mlstatic.com/coldre-universal-modular-verde-ja-rio-militar-D_NQ_NP_910947-MLB31637511578_072019-F.webp'),(91,50,'https://http2.mlstatic.com/coldre-universal-modular-verde-ja-rio-militar-D_NQ_NP_910947-MLB31637511578_072019-F.webp'),(92,38,'https://http2.mlstatic.com/porta-ht-radio-modular-ja-rio-militar-D_NQ_NP_656091-MLB31498880362_072019-F.webp'),(93,38,'https://http2.mlstatic.com/porta-ht-radio-modular-ja-rio-militar-D_NQ_NP_699347-MLB31498880360_072019-F.webp'),(95,64,'https://http2.mlstatic.com/porta-ht-radio-modular-ja-rio-militar-D_NQ_NP_812664-MLB31498880408_072019-F.webp'),(96,64,'https://http2.mlstatic.com/porta-ht-radio-modular-ja-rio-militar-D_NQ_NP_911695-MLB31498887753_072019-F.webp'),(97,51,'https://http2.mlstatic.com/porta-ht-radio-modular-ja-rio-militar-D_NQ_NP_753711-MLB31637402319_072019-F.webp'),(99,83,'https://http2.mlstatic.com/bandoleira-operacional-1-ponto-ja-rio-militar-D_NQ_NP_784857-MLB31117454275_062019-F.webp'),(100,65,'https://i.imgur.com/PElazsL.jpg'),(101,66,'https://i.imgur.com/PElazsL.jpg'),(102,67,'https://i.imgur.com/L6aF3oN.jpg'),(103,68,'https://i.imgur.com/L6aF3oN.jpg'),(104,69,'https://i.imgur.com/1khKOSI.jpg'),(105,70,'https://i.imgur.com/1khKOSI.jpg'),(107,77,'https://i.imgur.com/ggH6qMa.jpg'),(108,77,'https://i.imgur.com/cRSdJ3E.jpg'),(110,17,'https://http2.mlstatic.com/capa-de-colete-modular-ja3-ja-rio-militar-D_NQ_NP_860142-MLB31552975657_072019-O.webp'),(111,18,'https://http2.mlstatic.com/capa-de-colete-modular-ja3-ja-rio-militar-D_NQ_NP_860142-MLB31552975657_072019-O.webp'),(113,25,'https://http2.mlstatic.com/capa-de-colete-modular-ja3-ja-rio-militar-D_NQ_NP_860142-MLB31552975657_072019-O.webp'),(114,25,'https://http2.mlstatic.com/capa-de-colete-modular-ja3-ja-rio-militar-D_NQ_NP_667436-MLB31552963755_072019-F.webp'),(115,25,'https://http2.mlstatic.com/capa-de-colete-modular-ja3-ja-rio-militar-D_NQ_NP_891795-MLB31552950470_072019-O.webp'),(117,25,'https://http2.mlstatic.com/capa-de-colete-modular-ja3-ja-rio-militar-D_NQ_NP_679317-MLB31552953402_072019-F.webp'),(119,17,'https://http2.mlstatic.com/capa-de-colete-modular-ja3-ja-rio-militar-D_NQ_NP_667436-MLB31552963755_072019-F.webp'),(120,18,'https://http2.mlstatic.com/capa-de-colete-modular-ja3-ja-rio-militar-D_NQ_NP_667436-MLB31552963755_072019-F.webp'),(121,17,'https://http2.mlstatic.com/capa-de-colete-modular-ja3-ja-rio-militar-D_NQ_NP_891795-MLB31552950470_072019-O.webp'),(122,18,'https://http2.mlstatic.com/capa-de-colete-modular-ja3-ja-rio-militar-D_NQ_NP_891795-MLB31552950470_072019-O.webp'),(123,17,'https://http2.mlstatic.com/capa-de-colete-modular-ja3-ja-rio-militar-D_NQ_NP_679317-MLB31552953402_072019-F.webp'),(124,18,'https://http2.mlstatic.com/capa-de-colete-modular-ja3-ja-rio-militar-D_NQ_NP_679317-MLB31552953402_072019-F.webp');
/*!40000 ALTER TABLE `product_image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `store`
--

DROP TABLE IF EXISTS `store`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `store` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `city` varchar(25) NOT NULL,
  `state` varchar(25) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `store`
--

LOCK TABLES `store` WRITE;
/*!40000 ALTER TABLE `store` DISABLE KEYS */;
/*!40000 ALTER TABLE `store` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `store_order`
--

DROP TABLE IF EXISTS `store_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `store_order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `store` int(11) NOT NULL,
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `store_order`
--

LOCK TABLES `store_order` WRITE;
/*!40000 ALTER TABLE `store_order` DISABLE KEYS */;
INSERT INTO `store_order` VALUES (1,1,'05/09/2019','05/09/2019-12:24:22','07103488606','Henrique','din','1',50.00,450.00,400.00,'concluída','ADMIN'),(2,1,'05/09/2019','05/09/2019-19:48:22','07103488606','Henrique','din','3',150.00,1320.00,1170.00,'concluída','ADMIN');
/*!40000 ALTER TABLE `store_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `store_order_product`
--

DROP TABLE IF EXISTS `store_order_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `store_order_product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `store_id` int(11) DEFAULT '1',
  `order_id` varchar(45) NOT NULL,
  `product_id` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `value` decimal(8,2) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `store_order_product`
--

LOCK TABLES `store_order_product` WRITE;
/*!40000 ALTER TABLE `store_order_product` DISABLE KEYS */;
INSERT INTO `store_order_product` VALUES (1,NULL,'1',3,1,150.00),(2,NULL,'1',6,1,150.00),(3,NULL,'1',7,1,150.00),(4,NULL,'2',11,2,150.00),(5,NULL,'2',12,1,150.00),(6,NULL,'2',21,1,180.00),(7,NULL,'2',14,1,150.00),(8,NULL,'2',10,3,180.00);
/*!40000 ALTER TABLE `store_order_product` ENABLE KEYS */;
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
  `job` varchar(45) NOT NULL DEFAULT 'aaa',
  `email` varchar(45) NOT NULL,
  `birth` varchar(45) NOT NULL,
  `username` varchar(45) NOT NULL,
  `password` varchar(60) NOT NULL,
  `access` varchar(3) NOT NULL,
  `support` varchar(45) DEFAULT 'disconnected',
  `serviceDesk` varchar(45) DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'ADMIN','Desenvolvedor','hlyrastec2@gmail.com','04/11/1994','ADMIN','$2a$10$mKGr7f4jkacBEGaW1/whgOgC.7hNsSxGo/zaxW8ctAnkxrK2jSIYS','dvp','disconnected','closed'),(2,'Jean Carvalho','Proprietário','assistentejario@gmail.com','01/janeiro/2000','jeancarvalho','$2a$10$tSdiXkF9QCCt.km3zIqx2u3jF2j6WLXFcWFzzGs6hVlER9ewQYgjG','prp','disconnected','closed'),(3,'Henrique Lyra','Suporte','hhlyras2011@gmail.com','4/Novembro/1994','hlyras','$2a$10$tSdiXkF9QCCt.km3zIqx2u3jF2j6WLXFcWFzzGs6hVlER9ewQYgjG','spt','disconnected','opened'),(4,'Daniel Anderson','Gerente Fábrica','danielanderson@gmail.com','12/Agosto/1992','danielanderson','$2a$10$tSdiXkF9QCCt.km3zIqx2u3jF2j6WLXFcWFzzGs6hVlER9ewQYgjG','grf','disconnected','closed'),(5,'Chris Carvalho','Coordernador','christihellenferreira2015@gmail.com','29/Setembro/1998','chris','$2a$10$M.U.dOwYDq2/N0eH1T88WunscuhYWf37eyFCfQchbXSbiU.PWc2uC','crd','disconnected','closed'),(6,'Éric Lyra','Acesso fábrica','eric.lyra@outlook.com','1/Novembro/2000','ericlyra','$2a$10$HuSmJJ3jIDCfIFhAELMHxuV.DT3TihCHEB/mLyUWTOZIdm4giDV/S','aaf','disconnected','opened');
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

-- Dump completed on 2019-09-23 19:35:04
