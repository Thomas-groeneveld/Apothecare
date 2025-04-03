-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Gegenereerd op: 03 apr 2025 om 12:58
-- Serverversie: 5.7.24
-- PHP-versie: 8.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `apothecare____v1`
--

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `gebruikers`
--

CREATE TABLE `gebruikers` (
  `id` int(11) NOT NULL,
  `voornaam` varchar(50) NOT NULL,
  `achternaam` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `gebruikersnaam` varchar(50) NOT NULL,
  `wachtwoord` varchar(255) NOT NULL,
  `rol_id` int(11) NOT NULL,
  `aangemaakt_op` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `rollen`
--

CREATE TABLE `rollen` (
  `id` int(11) NOT NULL,
  `naam` enum('user','personnel','admin') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Gegevens worden geëxporteerd voor tabel `rollen`
--

INSERT INTO `rollen` (`id`, `naam`) VALUES
(1, 'user'),
(2, 'personnel'),
(3, 'admin');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `wachtwoord_resetten`
--

CREATE TABLE `wachtwoord_resetten` (
  `id` int(11) NOT NULL,
  `gebruikers_id` int(11) NOT NULL,
  `token` varchar(255) NOT NULL,
  `verlopen_op` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexen voor geëxporteerde tabellen
--

--
-- Indexen voor tabel `gebruikers`
--
ALTER TABLE `gebruikers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `gebruikersnaam` (`gebruikersnaam`),
  ADD KEY `rol_id` (`rol_id`);

--
-- Indexen voor tabel `rollen`
--
ALTER TABLE `rollen`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `naam` (`naam`);

--
-- Indexen voor tabel `wachtwoord_resetten`
--
ALTER TABLE `wachtwoord_resetten`
  ADD PRIMARY KEY (`id`),
  ADD KEY `gebruikers_id` (`gebruikers_id`);

--
-- AUTO_INCREMENT voor geëxporteerde tabellen
--

--
-- AUTO_INCREMENT voor een tabel `gebruikers`
--
ALTER TABLE `gebruikers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT voor een tabel `rollen`
--
ALTER TABLE `rollen`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT voor een tabel `wachtwoord_resetten`
--
ALTER TABLE `wachtwoord_resetten`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Beperkingen voor geëxporteerde tabellen
--

--
-- Beperkingen voor tabel `gebruikers`
--
ALTER TABLE `gebruikers`
  ADD CONSTRAINT `gebruikers_ibfk_1` FOREIGN KEY (`rol_id`) REFERENCES `rollen` (`id`) ON DELETE CASCADE;

--
-- Beperkingen voor tabel `wachtwoord_resetten`
--
ALTER TABLE `wachtwoord_resetten`
  ADD CONSTRAINT `wachtwoord_resetten_ibfk_1` FOREIGN KEY (`gebruikers_id`) REFERENCES `gebruikers` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
