-- MySQL dump 10.13  Distrib 5.7.27, for Linux (x86_64)
--
-- Host: localhost    Database: customer
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
-- Current Database: `customer`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `customer` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `customer`;

--
-- Table structure for table `database`
--

DROP TABLE IF EXISTS `database`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `database` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `cpf` varchar(11) NOT NULL,
  `phone` varchar(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `cpf_UNIQUE` (`cpf`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `database`
--

LOCK TABLES `database` WRITE;
/*!40000 ALTER TABLE `database` DISABLE KEYS */;
INSERT INTO `database` VALUES (4,'Henrique','07103488606','33999999961');
/*!40000 ALTER TABLE `database` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Current Database: `product`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `product` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `product`;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category` (
  `id` int(11) DEFAULT NULL,
  `name` text,
  `shortcut` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Colete','Colete'),(2,'Peça Modular','Peça_mod'),(4,'Coldre','Coldre'),(5,'Cinto','Cinto'),(6,'Bornal','Bornal'),(7,'Bandoleira','Bandolei'),(9,'Mochila','Mochila'),(10,'Luva','Luva'),(11,'Cotoveleira e j','Cot/joel'),(12,'Refil Camelback','Ref. Cam'),(13,'Fiel','Fiel'),(14,'Farda','Farda'),(15,'Faca','Faca'),(16,'Canivete','Canivete'),(17,'Lanterna','Lanterna'),(18,'Camelback','Camelbac'),(19,'Pulseira','Pulseira'),(20,'Boné','Boné'),(21,'Chapéu','Chapéu'),(22,'Gorro','Gorro'),(23,'Capacete','Capacete'),(24,'Bússola','Bússola'),(25,'Bombacho','Bombacho'),(26,'Cadeado','Cadeado'),(27,'Alicate','Alicate'),(28,'Máscara','Máscara'),(29,'Shemagh','Shemagh'),(30,'Gandoleta','Gandolet'),(31,'Bolsa','Bolsa'),(32,'Cantil','Cantil'),(33,'Sup. Celular','Sup. Cel'),(34,'Casaco','Casaco');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `color`
--

DROP TABLE IF EXISTS `color`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `color` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(15) NOT NULL,
  `shortcut` varchar(7) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `color`
--

LOCK TABLES `color` WRITE;
/*!40000 ALTER TABLE `color` DISABLE KEYS */;
INSERT INTO `color` VALUES (1,'Sem Cor','S/C'),(2,'Preto','pt'),(3,'Verde','vd'),(4,'Tan','tan'),(5,'Camoflado verde','cvd'),(6,'Multicam','Mtc');
/*!40000 ALTER TABLE `color` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `database`
--

DROP TABLE IF EXISTS `database`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `database` (
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
-- Dumping data for table `database`
--

LOCK TABLES `database` WRITE;
/*!40000 ALTER TABLE `database` DISABLE KEYS */;
INSERT INTO `database` VALUES (3,1,'Close','Colete','pt','P',0,150.00),(4,51,'Close','Colete','vd','P',0,150.00),(5,101,'Close','Colete','tan','P',0,150.00),(6,2,'Close','Colete','pt','M',0,150.00),(7,3,'Close','Colete','pt','G',0,150.00),(8,4,'Plate Carrier','Colete','pt','ST',0,180.00),(9,54,'Plate Carrier','Colete','vd','ST',0,180.00),(10,104,'Plate Carrier','Colete','tan','ST',0,180.00),(11,52,'Close','Colete','vd','M',0,150.00),(12,53,'Close','Colete','vd','G',0,150.00),(13,102,'Close','Colete','tan','M',0,150.00),(14,103,'Close','Colete','tan','G',0,150.00),(16,55,'JA3','Colete','vd','P',0,180.00),(17,6,'JA3','Colete','pt','M',0,200.00),(18,7,'JA3','Colete','pt','G',0,200.00),(20,56,'JA3','Colete','vd','M',0,180.00),(21,57,'JA3','Colete','vd','G',0,180.00),(22,105,'JA3','Colete','tan','P',0,180.00),(23,106,'JA3','Colete','tan','M',0,180.00),(24,107,'JA3','Colete','tan','G',0,180.00),(25,5,'JA3','Colete','pt','P',0,200.00),(26,501,'P. Camelback','Peça_mod','pt','ST',0,40.00),(27,502,'Bolsa Pequena','Peça_mod','pt','ST',0,20.00),(28,503,'Bolsa Média','Peça_mod','pt','ST',0,20.00),(29,504,'Bolsa Grande','Peça_mod','pt','ST',0,35.00),(30,505,'P.C. Fuzil Velc','Peça_mod','pt','ST',0,20.00),(31,506,'P.C. Fuzil TT','Peça_mod','pt','ST',0,20.00),(32,507,'P.C. Fuzil Elás','Peça_mod','pt','ST',0,20.00),(33,508,'P.C.Pistola Dup','Peça_mod','pt','ST',0,20.00),(34,509,'P.C. SMT/UMP','Peça_mod','pt','ST',0,20.00),(35,510,'P.C. Calibre 12','Peça_mod','pt','ST',0,20.00),(36,511,'Coldre Unive. D','Peça_mod','pt','ST',0,15.00),(37,512,'Coldre Unive. C','Peça_mod','pt','ST',0,15.00),(38,513,'P. Rádio / HT','Peça_mod','pt','ST',0,15.00),(39,551,'P. Camelback','Peça_mod','vd','ST',0,40.00),(40,552,'Bolsa Pequena','Peça_mod','vd','ST',0,20.00),(41,553,'Bolsa Média','Peça_mod','vd','ST',0,20.00),(42,554,'Bolsa Grande','Peça_mod','vd','ST',0,30.00),(43,555,'P.C. Fuzil Velc','Peça_mod','vd','ST',0,20.00),(44,556,'P.C. Fuzil TT','Peça_mod','vd','ST',0,20.00),(45,557,'P.C. Fuzil Elás','Peça_mod','vd','ST',0,20.00),(46,558,'P.C.Pistola Dup','Peça_mod','vd','ST',0,20.00),(47,559,'P.C. SMT/UMP','Peça_mod','vd','ST',0,20.00),(48,560,'P.C. Calibre 12','Peça_mod','vd','ST',0,20.00),(49,561,'Coldre Unive. D','Peça_mod','vd','ST',0,15.00),(50,562,'Coldre Unive. C','Peça_mod','vd','ST',0,15.00),(51,563,'P. Rádio / HT','Peça_mod','vd','ST',0,15.00),(52,601,'P. Camelback','Peça_mod','tan','ST',0,40.00),(53,602,'Bolsa Pequena','Peça_mod','tan','ST',0,20.00),(54,603,'Bolsa Média','Peça_mod','tan','ST',0,20.00),(55,604,'Bolsa Grande','Peça_mod','tan','ST',0,30.00),(56,605,'P.C. Fuzil Velc','Peça_mod','tan','ST',0,20.00),(57,606,'P.C. Fuzil TT','Peça_mod','tan','ST',0,20.00),(58,607,'P.C. Fuzil Elás','Peça_mod','tan','ST',0,20.00),(59,608,'P.C.Pistola Dup','Peça_mod','tan','ST',0,20.00),(60,609,'P.C. SMT/UMP','Peça_mod','tan','ST',0,20.00),(61,610,'P.C. Calibre 12','Peça_mod','tan','ST',0,20.00),(62,611,'Coldre Unive. D','Peça_mod','tan','ST',0,15.00),(63,612,'Coldre Unive. C','Peça_mod','tan','ST',0,15.00),(64,613,'P. Rádio / HT','Peça_mod','tan','ST',0,15.00),(65,1001,'Universal Per D','Coldre','pt','ST',0,35.00),(66,1002,'Universal Per C','Coldre','pt','ST',0,35.00),(67,1051,'Universal Per D','Coldre','vd','ST',0,35.00),(68,1052,'Universal Per C','Coldre','vd','ST',0,35.00),(69,1101,'Universal Per D','Coldre','tan','ST',0,35.00),(70,1102,'Universal Per C','Coldre','tan','ST',0,35.00),(71,1501,'Tático Fiv Plas','Cinto','pt','ST',0,35.00),(72,1502,'NA','Cinto','pt','ST',0,35.00),(73,1551,'Tático Fiv Plas','Cinto','vd','ST',0,35.00),(74,1552,'NA','Cinto','vd','ST',0,35.00),(75,1601,'Tático Fiv Plas','Cinto','tan','ST',0,35.00),(76,1602,'NA','Cinto','tan','ST',0,35.00),(77,2001,'Tático','Bornal','pt','ST',0,55.00),(78,2002,'3 PST','Bornal','pt','ST',0,55.00),(79,2051,'Tático','Bornal','vd','ST',0,55.00),(80,2052,'3 PST','Bornal','vd','ST',0,55.00),(81,2101,'Tático','Bornal','tan','ST',0,55.00),(82,2102,'3 PST','Bornal','tan','ST',0,55.00),(83,2501,'Tática 1 ponto','Bandolei','pt','ST',0,55.00),(84,2551,'Tática 1 ponto','Bandolei','vd','ST',0,55.00),(85,2601,'Tática 1 ponto','Bandolei','tan','ST',0,55.00),(86,514,'P. Algemas','Peça_mod','pt','ST',0,15.00),(87,564,'P. Algemas','Peça_mod','vd','ST',0,15.00),(88,614,'P. Algemas','Peça_mod','tan','ST',0,15.00),(92,5401,'Shemagh simples','Shemagh','S/C','ST',0,45.00),(93,3001,'Mochila pequena','Mochila','S/C','ST',0,110.00),(94,3002,'Mochila média','Mochila','S/C','ST',0,120.00),(95,3003,'Mochila Grande','Mochila','S/C','ST',0,200.00),(96,5801,'Sup. Cel braço ','Sup. Cel','S/C','ST',0,15.00),(97,5701,'Kit cantil ','Cantil','S/C','ST',0,75.00),(98,3701,'Ref camel 2.5L','Ref. Cam','S/C','ST',0,45.00),(99,3901,'Farda exército','Farda','cvd','P',0,210.00),(100,3902,'Farda Exército','Farda','cvd','M',0,210.00),(101,3903,'Farda Exército ','Farda','cvd','G',0,210.00),(102,3904,'Farda Exército','Farda','cvd','GG',0,210.00),(103,4701,'Gorro','Gorro','S/C','ST',0,20.00),(104,4001,'Faca Tática','Faca','S/C','ST',0,80.00),(105,4101,'Canivete Pequen','Canivete','S/C','ST',0,0.00),(106,4102,'Canivete médio','Canivete','S/C','ST',0,35.00),(107,4103,'Canivete Grande','Canivete','S/C','ST',0,55.00),(108,4104,'Multiuso talher','Canivete','S/C','ST',0,35.00),(109,4901,'Bússola simples','Bússola','S/C','ST',0,35.00),(110,4201,'Mini lanterna','Lanterna','S/C','ST',0,10.00),(111,4202,'Lanterna Pequen','Lanterna','S/C','ST',0,20.00),(112,4203,'Lanterna Choque','Lanterna','S/C','ST',0,55.00),(113,4204,'Lanterna Tática','Lanterna','S/C','ST',0,65.00),(114,5001,'Par de Bombacho','Bombacho','S/C','ST',0,5.00),(115,5101,'Cadeado pequeno','Cadeado','S/C','ST',0,20.00),(116,4401,'Pul c/ Bússola','Pulseira','S/C','ST',0,35.00),(117,4801,'Capacete Básico','Capacete','S/C','ST',0,220.00),(118,5301,'Másc. Tática','Máscara','S/C','ST',0,45.00),(119,4501,'Boné simples','Boné','S/C','ST',0,40.00),(120,3801,'Fiel Aspiral','Fiel','S/C','ST',0,25.00),(121,5501,'Gandoleta','Gandolet','S/C','ST',0,135.00),(122,4301,'Moch. Camelback','Camelbac','S/C','ST',0,105.00),(123,5601,'Bolsa Velame','Bolsa','S/C','ST',0,35.00),(124,4601,'Chapéu caçador','Chapéu','S/C','ST',0,35.00),(125,3601,'Kit cot. e joel','Cot/joel','pt','ST',0,60.00),(126,3602,'Kit Cot. e Joel','Cot/joel','vd','ST',0,60.00),(127,3603,'Kit Cot. e Joel','Cot/joel','tan','ST',0,60.00),(128,1503,'Black Hawk','Cinto','pt','ST',0,60.00),(129,1553,'Black Hawk','Cinto','vd','ST',0,60.00),(130,1603,'Black Hawk','Cinto','tan','ST',0,60.00),(131,1003,'Mini Coldre','Coldre','pt','ST',0,20.00),(132,1053,'Mini Coldre','Coldre','vd','ST',0,20.00),(133,1103,'Mini Coldre','Coldre','tan','ST',0,20.00),(134,1504,'Prot. Acolchoad','Cinto','pt','ST',0,15.00),(135,1554,'Prot. Acolchoad','Cinto','vd','ST',0,15.00),(136,1604,'Prot. Acolchoad','Cinto','tan','ST',0,15.00),(137,5901,'Corta Vento','Casaco','S/C','ST',0,0.00),(138,5902,'Casaco tático','Casaco','S/C','ST',0,220.00),(139,5903,'Malvinão','Casaco','S/C','ST',0,150.00);
/*!40000 ALTER TABLE `database` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `image`
--

DROP TABLE IF EXISTS `image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `image` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL,
  `url` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `product_image_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=125 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `image`
--

LOCK TABLES `image` WRITE;
/*!40000 ALTER TABLE `image` DISABLE KEYS */;
INSERT INTO `image` VALUES (3,8,'https://http2.mlstatic.com/capa-de-colete-modular-plate-carrier-ja-rio-militar-specas-D_NQ_NP_989494-MLB31419522802_072019-F.webp'),(4,8,'https://http2.mlstatic.com/capa-de-colete-modular-plate-carrier-ja-rio-militar-specas-D_NQ_NP_741013-MLB31419518358_072019-F.webp'),(5,8,'https://http2.mlstatic.com/capa-de-colete-modular-plate-carrier-ja-rio-militar-specas-D_NQ_NP_618461-MLB31419537673_072019-F.webp'),(6,8,'https://http2.mlstatic.com/capa-de-colete-modular-plate-carrier-ja-rio-militar-specas-D_NQ_NP_992269-MLB31419519870_072019-F.webp'),(7,9,'https://http2.mlstatic.com/capa-de-colete-modular-plate-carrier-ja-rio-militar-specas-D_NQ_NP_923651-MLB31419550329_072019-F.webp'),(8,9,'https://http2.mlstatic.com/capa-de-colete-modular-plate-carrier-ja-rio-militar-specas-D_NQ_NP_711585-MLB31419546367_072019-F.webp'),(9,9,'https://http2.mlstatic.com/capa-de-colete-modular-plate-carrier-ja-rio-militar-specas-D_NQ_NP_683165-MLB31419550311_072019-F.webp'),(10,9,'https://http2.mlstatic.com/capa-de-colete-modular-plate-carrier-ja-rio-militar-specas-D_NQ_NP_670846-MLB31419546375_072019-F.webp'),(11,10,'https://http2.mlstatic.com/capa-de-colete-modular-plate-carrier-ja-rio-militar-specas-D_NQ_NP_961971-MLB31419521997_072019-F.webp'),(12,10,'https://http2.mlstatic.com/capa-de-colete-modular-plate-carrier-ja-rio-militar-specas-D_NQ_NP_689825-MLB31419547689_072019-F.webp'),(13,10,'https://http2.mlstatic.com/capa-de-colete-modular-plate-carrier-ja-rio-militar-specas-D_NQ_NP_715038-MLB31419548664_072019-F.webp'),(14,10,'https://http2.mlstatic.com/capa-de-colete-modular-plate-carrier-ja-rio-militar-specas-D_NQ_NP_871004-MLB31419550144_072019-F.webp'),(15,3,'https://http2.mlstatic.com/capa-de-colete-modular-close-ja-rio-militar-s-pecas-D_NQ_NP_772843-MLB31190580458_062019-F.webp'),(16,6,'https://http2.mlstatic.com/capa-de-colete-modular-close-ja-rio-militar-s-pecas-D_NQ_NP_772843-MLB31190580458_062019-F.webp'),(17,7,'https://http2.mlstatic.com/capa-de-colete-modular-close-ja-rio-militar-s-pecas-D_NQ_NP_772843-MLB31190580458_062019-F.webp'),(18,3,'https://http2.mlstatic.com/capa-de-colete-modular-close-ja-rio-militar-s-pecas-D_NQ_NP_996366-MLB31190577905_062019-F.webp'),(19,6,'https://http2.mlstatic.com/capa-de-colete-modular-close-ja-rio-militar-s-pecas-D_NQ_NP_996366-MLB31190577905_062019-F.webp'),(20,7,'https://http2.mlstatic.com/capa-de-colete-modular-close-ja-rio-militar-s-pecas-D_NQ_NP_996366-MLB31190577905_062019-F.webp'),(21,3,'https://http2.mlstatic.com/capa-de-colete-modular-close-ja-rio-militar-s-pecas-D_NQ_NP_988520-MLB31190580180_062019-F.webp'),(22,6,'https://http2.mlstatic.com/capa-de-colete-modular-close-ja-rio-militar-s-pecas-D_NQ_NP_988520-MLB31190580180_062019-F.webp'),(23,7,'https://http2.mlstatic.com/capa-de-colete-modular-close-ja-rio-militar-s-pecas-D_NQ_NP_988520-MLB31190580180_062019-F.webp'),(24,3,'https://http2.mlstatic.com/capa-de-colete-modular-close-ja-rio-militar-s-pecas-D_NQ_NP_928722-MLB31190589109_062019-F.webp'),(25,6,'https://http2.mlstatic.com/capa-de-colete-modular-close-ja-rio-militar-s-pecas-D_NQ_NP_928722-MLB31190589109_062019-F.webp'),(26,7,'https://http2.mlstatic.com/capa-de-colete-modular-close-ja-rio-militar-s-pecas-D_NQ_NP_928722-MLB31190589109_062019-F.webp'),(27,26,'https://http2.mlstatic.com/porta-camelback-modular-ja-rio-militar-D_NQ_NP_818244-MLB31498972733_072019-F.webp'),(28,26,'https://http2.mlstatic.com/porta-camelback-modular-ja-rio-militar-D_NQ_NP_986789-MLB31498988535_072019-F.webp'),(29,39,'https://http2.mlstatic.com/porta-camelback-modular-ja-rio-militar-D_NQ_NP_994834-MLB31637343115_072019-F.webp'),(30,39,'https://http2.mlstatic.com/porta-camelback-modular-ja-rio-militar-D_NQ_NP_880382-MLB31637343617_072019-F.webp'),(31,52,'https://http2.mlstatic.com/porta-camelback-modular-ja-rio-militar-D_NQ_NP_968416-MLB31498980211_072019-F.webp'),(32,52,'https://http2.mlstatic.com/porta-camelback-modular-ja-rio-militar-D_NQ_NP_676363-MLB31498978737_072019-F.webp'),(36,27,'https://http2.mlstatic.com/bolsa-pequena-modular-ja-rio-militar-D_NQ_NP_914251-MLB31499264300_072019-F.webp'),(37,27,'https://http2.mlstatic.com/bolsa-pequena-modular-ja-rio-militar-D_NQ_NP_893776-MLB31499243475_072019-F.webp'),(38,27,'https://http2.mlstatic.com/bolsa-pequena-modular-ja-rio-militar-D_NQ_NP_944210-MLB31499259856_072019-F.webp'),(39,40,'https://http2.mlstatic.com/bolsa-pequena-modular-ja-rio-militar-D_NQ_NP_647582-MLB31637418984_072019-O.webp'),(40,40,'https://http2.mlstatic.com/bolsa-pequena-modular-ja-rio-militar-D_NQ_NP_922406-MLB31637438834_072019-F.webp'),(41,53,'https://http2.mlstatic.com/bolsa-pequena-modular-ja-rio-militar-D_NQ_NP_844052-MLB31499287530_072019-O.webp'),(42,53,'https://http2.mlstatic.com/bolsa-pequena-modular-ja-rio-militar-D_NQ_NP_920649-MLB31499267855_072019-F.webp'),(43,53,'https://http2.mlstatic.com/bolsa-pequena-modular-ja-rio-militar-D_NQ_NP_626313-MLB31499290505_072019-F.webp'),(46,28,'https://http2.mlstatic.com/bolsa-media-modular-ja-rio-militar-D_NQ_NP_686256-MLB31499295947_072019-F.webp'),(47,28,'https://http2.mlstatic.com/bolsa-media-modular-ja-rio-militar-D_NQ_NP_929677-MLB31499325059_072019-F.webp'),(48,28,'https://http2.mlstatic.com/bolsa-media-modular-ja-rio-militar-D_NQ_NP_725307-MLB31499330511_072019-F.webp'),(49,41,'https://http2.mlstatic.com/bolsa-media-modular-ja-rio-militar-D_NQ_NP_638411-MLB31637475175_072019-F.webp'),(50,41,'https://http2.mlstatic.com/bolsa-media-modular-ja-rio-militar-D_NQ_NP_827291-MLB31637491050_072019-F.webp'),(51,54,'https://http2.mlstatic.com/bolsa-media-modular-ja-rio-militar-D_NQ_NP_913216-MLB31499309648_072019-F.webp'),(52,54,'https://http2.mlstatic.com/bolsa-media-modular-ja-rio-militar-D_NQ_NP_664313-MLB31499300808_072019-F.webp'),(53,54,'https://http2.mlstatic.com/bolsa-media-modular-ja-rio-militar-D_NQ_NP_949365-MLB31499307181_072019-O.webp'),(54,30,'https://http2.mlstatic.com/porta-carregadormagazine-de-fuzil-modular-ja-rio-militar-D_NQ_NP_757661-MLB31489198431_072019-F.webp'),(55,30,'https://http2.mlstatic.com/porta-carregadormagazine-de-fuzil-modular-ja-rio-militar-D_NQ_NP_635423-MLB31489210626_072019-F.webp'),(56,30,'https://http2.mlstatic.com/porta-carregadormagazine-de-fuzil-modular-ja-rio-militar-D_NQ_NP_968130-MLB31489209645_072019-F.webp'),(57,30,'https://http2.mlstatic.com/porta-carregadormagazine-de-fuzil-modular-ja-rio-militar-D_NQ_NP_946645-MLB31489194828_072019-F.webp'),(58,56,'https://http2.mlstatic.com/porta-carregadormagazine-de-fuzil-modular-ja-rio-militar-D_NQ_NP_992259-MLB31489216682_072019-F.webp'),(59,56,'https://http2.mlstatic.com/porta-carregadormagazine-de-fuzil-modular-ja-rio-militar-D_NQ_NP_867231-MLB31489228091_072019-F.webp'),(60,56,'https://http2.mlstatic.com/porta-carregadormagazine-de-fuzil-modular-ja-rio-militar-D_NQ_NP_956261-MLB31489198491_072019-F.webp'),(61,43,'https://http2.mlstatic.com/porta-carregadormagazine-de-fuzil-modular-ja-rio-militar-D_NQ_NP_944890-MLB31489198379_072019-F.webp'),(65,59,'https://http2.mlstatic.com/porta-carregador-de-pistola-duplo-modular-ja-rio-militar-D_NQ_NP_938060-MLB31498783777_072019-F.webp'),(66,59,'https://http2.mlstatic.com/porta-carregador-de-pistola-duplo-modular-ja-rio-militar-D_NQ_NP_887875-MLB31498792678_072019-F.webp'),(67,59,'https://http2.mlstatic.com/porta-carregador-de-pistola-duplo-modular-ja-rio-militar-D_NQ_NP_712652-MLB31498763885_072019-F.webp'),(68,33,'https://http2.mlstatic.com/porta-carregador-de-pistola-duplo-modular-ja-rio-militar-D_NQ_NP_991989-MLB31498767755_072019-F.webp'),(69,33,'https://http2.mlstatic.com/porta-carregador-de-pistola-duplo-modular-ja-rio-militar-D_NQ_NP_606526-MLB31498763787_072019-F.webp'),(70,33,'https://http2.mlstatic.com/porta-carregador-de-pistola-duplo-modular-ja-rio-militar-D_NQ_NP_961302-MLB31498789118_072019-F.webp'),(71,46,'https://http2.mlstatic.com/porta-carregador-de-pistola-duplo-modular-ja-rio-militar-D_NQ_NP_855674-MLB31637386042_072019-O.webp'),(72,36,'https://http2.mlstatic.com/coldre-universal-modular-preto-ja-rio-militar-D_NQ_NP_614333-MLB31188151337_062019-F.webp'),(73,37,'https://http2.mlstatic.com/coldre-universal-modular-preto-ja-rio-militar-D_NQ_NP_614333-MLB31188151337_062019-F.webp'),(74,36,'https://http2.mlstatic.com/coldre-universal-modular-preto-ja-rio-militar-D_NQ_NP_637125-MLB31188157169_062019-F.webp'),(75,37,'https://http2.mlstatic.com/coldre-universal-modular-preto-ja-rio-militar-D_NQ_NP_637125-MLB31188157169_062019-F.webp'),(76,36,'https://http2.mlstatic.com/coldre-universal-modular-preto-ja-rio-militar-D_NQ_NP_630382-MLB31188161413_062019-F.webp'),(77,37,'https://http2.mlstatic.com/coldre-universal-modular-preto-ja-rio-militar-D_NQ_NP_630382-MLB31188161413_062019-F.webp'),(78,62,'https://http2.mlstatic.com/coldre-universal-modular-tan-ja-rio-militar-D_NQ_NP_740157-MLB31116893591_062019-O.webp'),(83,63,'https://http2.mlstatic.com/coldre-universal-modular-tan-ja-rio-militar-D_NQ_NP_740157-MLB31116893591_062019-F.webp'),(84,62,'https://http2.mlstatic.com/coldre-universal-modular-tan-ja-rio-militar-D_NQ_NP_699296-MLB31116881470_062019-F.webp'),(85,63,'https://http2.mlstatic.com/coldre-universal-modular-tan-ja-rio-militar-D_NQ_NP_699296-MLB31116881470_062019-F.webp'),(86,62,'https://http2.mlstatic.com/coldre-universal-modular-tan-ja-rio-militar-D_NQ_NP_938859-MLB31116882843_062019-F.webp'),(87,63,'https://http2.mlstatic.com/coldre-universal-modular-tan-ja-rio-militar-D_NQ_NP_938859-MLB31116882843_062019-F.webp'),(88,49,'https://http2.mlstatic.com/coldre-universal-modular-verde-ja-rio-militar-D_NQ_NP_891206-MLB31637493260_072019-F.webp'),(89,50,'https://http2.mlstatic.com/coldre-universal-modular-verde-ja-rio-militar-D_NQ_NP_891206-MLB31637493260_072019-F.webp'),(90,49,'https://http2.mlstatic.com/coldre-universal-modular-verde-ja-rio-militar-D_NQ_NP_910947-MLB31637511578_072019-F.webp'),(91,50,'https://http2.mlstatic.com/coldre-universal-modular-verde-ja-rio-militar-D_NQ_NP_910947-MLB31637511578_072019-F.webp'),(92,38,'https://http2.mlstatic.com/porta-ht-radio-modular-ja-rio-militar-D_NQ_NP_656091-MLB31498880362_072019-F.webp'),(93,38,'https://http2.mlstatic.com/porta-ht-radio-modular-ja-rio-militar-D_NQ_NP_699347-MLB31498880360_072019-F.webp'),(95,64,'https://http2.mlstatic.com/porta-ht-radio-modular-ja-rio-militar-D_NQ_NP_812664-MLB31498880408_072019-F.webp'),(96,64,'https://http2.mlstatic.com/porta-ht-radio-modular-ja-rio-militar-D_NQ_NP_911695-MLB31498887753_072019-F.webp'),(97,51,'https://http2.mlstatic.com/porta-ht-radio-modular-ja-rio-militar-D_NQ_NP_753711-MLB31637402319_072019-F.webp'),(99,83,'https://http2.mlstatic.com/bandoleira-operacional-1-ponto-ja-rio-militar-D_NQ_NP_784857-MLB31117454275_062019-F.webp'),(100,65,'https://i.imgur.com/PElazsL.jpg'),(101,66,'https://i.imgur.com/PElazsL.jpg'),(102,67,'https://i.imgur.com/L6aF3oN.jpg'),(103,68,'https://i.imgur.com/L6aF3oN.jpg'),(104,69,'https://i.imgur.com/1khKOSI.jpg'),(105,70,'https://i.imgur.com/1khKOSI.jpg'),(107,77,'https://i.imgur.com/ggH6qMa.jpg'),(108,77,'https://i.imgur.com/cRSdJ3E.jpg'),(110,17,'https://http2.mlstatic.com/capa-de-colete-modular-ja3-ja-rio-militar-D_NQ_NP_860142-MLB31552975657_072019-O.webp'),(111,18,'https://http2.mlstatic.com/capa-de-colete-modular-ja3-ja-rio-militar-D_NQ_NP_860142-MLB31552975657_072019-O.webp'),(113,25,'https://http2.mlstatic.com/capa-de-colete-modular-ja3-ja-rio-militar-D_NQ_NP_860142-MLB31552975657_072019-O.webp'),(114,25,'https://http2.mlstatic.com/capa-de-colete-modular-ja3-ja-rio-militar-D_NQ_NP_667436-MLB31552963755_072019-F.webp'),(115,25,'https://http2.mlstatic.com/capa-de-colete-modular-ja3-ja-rio-militar-D_NQ_NP_891795-MLB31552950470_072019-O.webp'),(117,25,'https://http2.mlstatic.com/capa-de-colete-modular-ja3-ja-rio-militar-D_NQ_NP_679317-MLB31552953402_072019-F.webp'),(119,17,'https://http2.mlstatic.com/capa-de-colete-modular-ja3-ja-rio-militar-D_NQ_NP_667436-MLB31552963755_072019-F.webp'),(120,18,'https://http2.mlstatic.com/capa-de-colete-modular-ja3-ja-rio-militar-D_NQ_NP_667436-MLB31552963755_072019-F.webp'),(121,17,'https://http2.mlstatic.com/capa-de-colete-modular-ja3-ja-rio-militar-D_NQ_NP_891795-MLB31552950470_072019-O.webp'),(122,18,'https://http2.mlstatic.com/capa-de-colete-modular-ja3-ja-rio-militar-D_NQ_NP_891795-MLB31552950470_072019-O.webp'),(123,17,'https://http2.mlstatic.com/capa-de-colete-modular-ja3-ja-rio-militar-D_NQ_NP_679317-MLB31552953402_072019-F.webp'),(124,18,'https://http2.mlstatic.com/capa-de-colete-modular-ja3-ja-rio-militar-D_NQ_NP_679317-MLB31552953402_072019-F.webp');
/*!40000 ALTER TABLE `image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Current Database: `admin`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `admin` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `admin`;

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

--
-- Current Database: `store`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `store` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `store`;

--
-- Table structure for table `sale`
--

DROP TABLE IF EXISTS `sale`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sale` (
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
-- Dumping data for table `sale`
--

LOCK TABLES `sale` WRITE;
/*!40000 ALTER TABLE `sale` DISABLE KEYS */;
/*!40000 ALTER TABLE `sale` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sale_product`
--

DROP TABLE IF EXISTS `sale_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sale_product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sale_id` varchar(45) NOT NULL,
  `product_id` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `value` decimal(8,2) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sale_product`
--

LOCK TABLES `sale_product` WRITE;
/*!40000 ALTER TABLE `sale_product` DISABLE KEYS */;
/*!40000 ALTER TABLE `sale_product` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-09-03 22:58:16
