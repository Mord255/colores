-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: mysql-jfps.alwaysdata.net
-- Generation Time: Dec 04, 2021 at 10:20 PM
-- Server version: 10.5.11-MariaDB
-- PHP Version: 7.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jfps_colores`
--

-- --------------------------------------------------------

--
-- Table structure for table `colores`
--
CREATE DATABASE jfps_colores;

USE jfps_colores;

CREATE TABLE `colores` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `year` int(4) NOT NULL,
  `color` varchar(100) NOT NULL,
  `pantone_value` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `colores`
--

INSERT INTO `colores` (`id`, `name`, `year`, `color`, `pantone_value`) VALUES
(1, 'cerulean', 2000, '#98B2D1', '15-4020'),
(2, 'fuchsia rose', 2010, '#C74375', '15-4020'),
(3, 'true red', 2021, '#BF1932', '15-4020');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `colores`
--
ALTER TABLE `colores`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `colores`
--
ALTER TABLE `colores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
