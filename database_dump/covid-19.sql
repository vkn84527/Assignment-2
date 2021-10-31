-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 31, 2021 at 08:51 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `covid-19`
--

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(1) NOT NULL,
  `user_name` varchar(25) NOT NULL,
  `user_phone` varchar(25) NOT NULL,
  `user_email` varchar(25) NOT NULL,
  `user_password` varchar(100) NOT NULL,
  `Adhar_number` varchar(200) NOT NULL,
  `state` varchar(20) NOT NULL,
  `ip_address` varchar(200) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `user_name`, `user_phone`, `user_email`, `user_password`, `Adhar_number`, `state`, `ip_address`, `created_at`) VALUES
(1, 'user1', '1234567890', 'user1@gmail.com', '$2a$10$07qS5067NuXlGOPYMNUVK.fkDJTlYCvpHLnYQufP43b8DaPEO21zG', '845613212345', 'bihar', '::1', '2021-10-31 18:44:28'),
(2, 'user1', '1234567890', 'user2@gmail.com', '$2a$10$mS/C8tIJiAliGuLoj2klSeDVB.7JF6RUJZT7J/pICRs6yXF0t.7QC', '845613212345', 'bihar', '::1', '2021-10-31 18:46:41');

-- --------------------------------------------------------

--
-- Table structure for table `vaccinated`
--

CREATE TABLE `vaccinated` (
  `vaccinated_id` int(1) NOT NULL,
  `user_id` int(2) NOT NULL,
  `adhar_number` varchar(200) NOT NULL,
  `state` varchar(100) NOT NULL,
  `ip_address` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `vaccinated`
--

INSERT INTO `vaccinated` (`vaccinated_id`, `user_id`, `adhar_number`, `state`, `ip_address`, `created_at`) VALUES
(4, 2, '845613212345', 'bihar', '::1', '2021-10-31 19:32:54'),
(5, 2, '845613212345', 'bihar', '::1', '2021-11-06 19:33:41');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `vaccinated`
--
ALTER TABLE `vaccinated`
  ADD PRIMARY KEY (`vaccinated_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `vaccinated`
--
ALTER TABLE `vaccinated`
  MODIFY `vaccinated_id` int(1) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
