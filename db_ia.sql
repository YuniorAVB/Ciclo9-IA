-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 24-04-2021 a las 04:51:09
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
  `postulant_dni` char(8) NOT NULL,
  `postulant_name` varchar(100) NOT NULL,
  `postulant_last_name` varchar(200) NOT NULL,
  `postulant_email` varchar(100) NOT NULL,
  `postulant_url_cv` longtext NOT NULL,
  `postulant_qualified` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `postulant`
--

INSERT INTO `postulant` (`postulant_id`, `postulant_dni`, `postulant_name`, `postulant_last_name`, `postulant_email`, `postulant_url_cv`, `postulant_qualified`) VALUES
('06272cd6-4f56-4980-ba95-cec8a0ea6cf0', '12345678', 'Yunior', 'Vergara', 'yavb.code@gmail.com', 'c9ba3315-4415-4b11-ae71-e494ee66632d.pdf', 0),
('37a7f89c-ec27-4519-abc3-5a1d11a06eba', '12345678', 'PROGRAMADOR', 'FULL-STACK', 'yavb.code@gmail.com', '80edc3ae-e845-49cc-b21e-545a215fee55.pdf', 0),
('4cbc5cec-84eb-44af-a2e9-b43995ea201f', '12312323', 'MARIA', 'HERNANDEZ', 'victoria.maria15h.j@gmail.com', 'fbc24618-653b-44c6-9f93-d17b63c5e8a1.pdf', 0),
('548502bf-e8e7-43be-8694-68d10f69501d', '23456789', 'DISEÑADOR', 'GRAFICO', 'operation7x2@gmail.com', '619ca547-8941-48c2-b5ba-69a96a14bf2e.pdf', 0),
('59f1d216-a85e-49cb-b123-cc7cdb976742', '56565656', 'Yunior', 'asdasd', 'asdasd', 'cea3f36c-eb5f-4b19-8ffd-61b2aa36fc8a.pdf', 0),
('79148a7c-7eb7-473e-948a-c10d7a31e909', '12345678', 'Yunior', 'YuniorVer', 'yavb.code@gmail.com', '144e814d-095e-4956-8901-99e33ea0b880.pdf', 0),
('79331b4c-2736-43ba-89dc-b77aa312d390', '12341234', 'Yunior', 'Vergara', 'operation7x2@gmail.com', '8c85763d-2de6-4a5f-8c6c-4ceab03417a5.pdf', 0),
('797bb632-1f22-4a81-9e20-5b92f887d174', '90909090', 'Nombre de Prueba', 'apellidos', 'yavb.code@gmail.com', 'fdb87e6a-834e-455e-a211-bf04edabeebd.pdf', 0),
('b580cf0e-693e-4134-a308-5bb8b1d2a0da', '12121212', 'maria', 'cargosa', 'yavb.code@gmail.com', 'c04de730-96c6-4810-8bdc-7e08ea30be9e.pdf', 0),
('ea55cd71-9901-4d3c-8b8b-002c83fcfb00', '0', 'Junior ALONSO', 'hOMERO', 'yavb.code@gmail.com', '641234f5-3d5a-47f1-91ed-158c81c97370.pdf', 0),
('f59c34ca-f4b9-4009-935c-29d79bf91408', '34343434', 'Yunior', 'asd', 'yavb.code@gmail.com', '2720b6e8-ae58-4b1d-9fa2-0e8a20e46125.pdf', 0);

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
