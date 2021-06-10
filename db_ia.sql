-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 10-06-2021 a las 06:39:48
-- Versión del servidor: 10.4.18-MariaDB
-- Versión de PHP: 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_ia`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `postulant`
--

CREATE TABLE `postulant` (
  `postulant_id` varchar(300) NOT NULL,
  `postulant_dni` varchar(100) NOT NULL,
  `postulant_name` varchar(100) NOT NULL,
  `postulant_last_name` varchar(200) NOT NULL,
  `postulant_email` varchar(100) NOT NULL,
  `postulant_url_cv` longtext NOT NULL,
  `postulant_qualified` int(11) NOT NULL DEFAULT 0,
  `postulant_url_video` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `postulant`
--

INSERT INTO `postulant` (`postulant_id`, `postulant_dni`, `postulant_name`, `postulant_last_name`, `postulant_email`, `postulant_url_cv`, `postulant_qualified`, `postulant_url_video`) VALUES
('25b56e73-b095-44d8-a511-b9e61426e50a', '13131322', 'yavbaaaa', 'vergara blas', 'yavb.code@gmail.com', 'a673b05f-b78e-43fa-94bf-4e02e426ecd7.pdf', 0, '5b043361-bc14-4490-bb3a-81d449bbd8e6.webm'),
('3a8f77a6-6ded-4d41-a495-529db5c2b79d', '45567898', 'yunior aaa', 'vergara', 'yavb.code@gmail.com', 'd7da3aec-466c-4727-9945-bf85175063e7.pdf', 0, '894699ed-b9a5-463d-abc5-80270e9ffaa3.webm');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `stall`
--

CREATE TABLE `stall` (
  `stall_id` varchar(300) NOT NULL,
  `stall_name` varchar(200) NOT NULL,
  `stall_vacant` int(11) NOT NULL,
  `stall_skill` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `stall`
--

INSERT INTO `stall` (`stall_id`, `stall_name`, `stall_vacant`, `stall_skill`) VALUES
('3e9f0a05-2a6c-4e2f-8854-4d8e33dc756c', 'OBRERO', 2, '{\"data\":[{\"name\":\"GAFITERIA\"},{\"name\":\"SOLDADOR\"}]}'),
('6caa18e7-4af4-412a-b26c-d36b93397b0e', 'DISEÑADOR', 4, '{\"data\":[{\"name\":\"PHOTOSHOP\"},{\"name\":\"PREMIERE\"},{\"name\":\"ILUSTRATOR\"},{\"name\":\"AUDACITY\"}]}'),
('9f06c521-57cf-413a-8439-94ba1f5286f7', 'PROGRAMADOR', 1, '{\"data\":[{\"name\":\"JAVA\"},{\"name\":\"NODEJS\"},{\"name\":\"DART\"},{\"name\":\"GO\"}]}'),
('a3ef5614-06a7-495d-86de-51aadb22b491', 'Soldador', 3, '{\"data\":[{\"name\":\"fierro\"}]}'),
('aceb9c5f-c0c6-4df0-9969-ee3f1e2c0488', 'CONTADOR', 2, '{\"data\":[{\"name\":\"OFFICE\"}]}');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `postulant`
--
ALTER TABLE `postulant`
  ADD PRIMARY KEY (`postulant_id`);

--
-- Indices de la tabla `stall`
--
ALTER TABLE `stall`
  ADD PRIMARY KEY (`stall_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
