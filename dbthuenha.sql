-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 19, 2022 at 10:17 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.3.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dbthuenha`
--

-- --------------------------------------------------------

--
-- Table structure for table `chunha`
--

CREATE TABLE `chunha` (
  `tencn` varchar(100) CHARACTER SET utf8 NOT NULL,
  `tuoi` int(3) NOT NULL,
  `macn` varchar(12) CHARACTER SET latin1 COLLATE latin1_general_ci NOT NULL,
  `sdt` varchar(12) CHARACTER SET latin1 COLLATE latin1_general_ci NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `chunha`
--

INSERT INTO `chunha` (`tencn`, `tuoi`, `macn`, `sdt`, `username`, `password`) VALUES
('Đồng Đình Quân', 0, 'CctnhzMPTjGh', '0327881340', 'admin', '1234');

-- --------------------------------------------------------

--
-- Table structure for table `khachhang`
--

CREATE TABLE `khachhang` (
  `tenkh` varchar(100) CHARACTER SET utf8 NOT NULL,
  `tuoi` int(3) NOT NULL,
  `makh` varchar(12) NOT NULL,
  `sdt` varchar(12) NOT NULL,
  `taikhoan` varchar(100) CHARACTER SET latin1 COLLATE latin1_general_ci NOT NULL,
  `matkhau` varchar(12) CHARACTER SET latin1 COLLATE latin1_general_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `khachhang`
--

INSERT INTO `khachhang` (`tenkh`, `tuoi`, `makh`, `sdt`, `taikhoan`, `matkhau`) VALUES
('test1', 22, '000000000001', '000000000001', 'test', 'test'),
('test2', 22, '000000000002', '000000000002', 'test', 'test'),
('test3', 22, '000000000003', '000000000003', 'test', 'test'),
('test4', 22, '000000000004', '000000000004', 'test', 'test'),
('test5', 22, '000000000005', '000000000005', 'test', 'test'),
('test6', 22, '000000000006', '000000000006', 'test', 'test'),
('test7', 22, '000000000007', '000000000007', 'test', 'test'),
('test8', 22, '000000000008', '000000000008', 'test', 'test'),
('test9', 22, '000000000009', '000000000009', 'test', 'test');

-- --------------------------------------------------------

--
-- Table structure for table `lichsuthue`
--

CREATE TABLE `lichsuthue` (
  `magd` varchar(12) NOT NULL,
  `makh` varchar(12) NOT NULL,
  `macn` varchar(12) NOT NULL,
  `mant` varchar(12) NOT NULL,
  `ngaythue` varchar(12) NOT NULL,
  `ngaytra` varchar(12) NOT NULL,
  `tongtien` int(12) NOT NULL,
  `ghichu` text CHARACTER SET utf8 NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `lichsuthue`
--

INSERT INTO `lichsuthue` (`magd`, `makh`, `macn`, `mant`, `ngaythue`, `ngaytra`, `tongtien`, `ghichu`) VALUES
('dgtn01', '000000000001', '100000000000', 'nt01', '21/2/2022', '21/3/2022', 20000000, 'Đây là ghi chú...'),
('dgtn02', '000000000002', '200000000000', 'nt02', '21/2/2022', '21/3/2022', 15000000, 'Đây là ghi chú...'),
('dgtn03', '000000000003', '300000000000', 'nt03', '21/2/2022', '21/3/2022', 20000000, 'Đây là ghi chú...'),
('dgtn04', '000000000004', '400000000000', 'nt04', '21/2/2022', '21/3/2022', 18000000, 'Đây là ghi chú...'),
('dgtn05', '000000000005', '500000000000', 'nt05', '31/2/2022', '31/3/2022', 50000000, 'Đây là ghi chú...');

-- --------------------------------------------------------

--
-- Table structure for table `nhathue`
--

CREATE TABLE `nhathue` (
  `tieude` varchar(100) CHARACTER SET utf8 NOT NULL,
  `macn` varchar(12) NOT NULL,
  `diachi` varchar(100) CHARACTER SET utf8 NOT NULL,
  `giathue` int(12) NOT NULL,
  `mota` text CHARACTER SET utf8 NOT NULL,
  `mant` varchar(12) NOT NULL,
  `images` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`images`)),
  `dientich` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `nhathue`
--

INSERT INTO `nhathue` (`tieude`, `macn`, `diachi`, `giathue`, `mota`, `mant`, `images`, `dientich`) VALUES
('Nhà trọ quận 9', '0001', '1A Đ. Số 385, Thành phố, Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam', 5000000, 'abcd', 'ceSvoEundefi', '{\"images\":[\"uploads\\\\images\\\\1646808460499-download (2).jfif\",\"uploads\\\\images\\\\1646808460500-download.jfif\",\"uploads\\\\images\\\\1646808460501-images (1).jfif\",\"uploads\\\\images\\\\1646808460502-images (2).jfif\",\"uploads\\\\images\\\\1646808460503-images.jfif\",\"uploads\\\\images\\\\1646808460504-luu-y-ve-phong-thuy-trong-nha-o.webp\"]}', 40),
('Nhà trọ quận 9', '0001', '68 Đ3, Trường Thạnh, Quận 9, Thành phố Hồ Chí Minh, Việt Nam', 4000000, 'abcd', 'K5D8VCTdgs', '{\"images\":[\"uploads\\\\images\\\\1646808419636-images (2).jfif\",\"uploads\\\\images\\\\1646808419638-nha-cap-2.jpg\"]}', 30),
('Nhà ở quận 10', '0001', '8 võ liêm sơn, phường 4, quận 8, TP.HCM', 2000000, 'rộng rãi thoáng mát', 'LEG0gJjLWa', '{\"images\":[\"uploads\\\\images\\\\1646808310251-nha-cap-2.jpg\",\"uploads\\\\images\\\\1646808310255-quy-dinh-ve-hoan-cong-khi-xay-dung-xong-nha-o--57022.jpg\",\"uploads\\\\images\\\\1646808310256-tim-hieu-ve-cac-loai-nha-o-viet-nam.jpg\"]}', 25),
('Nhà ở quận 8', '0001', '180 cao lỗ, phường 4, quận 8, TP.HCM', 3000000, 'rộng rãi thoáng mát', 'M7yPOundefin', '{\"images\":[\"uploads\\\\images\\\\1646808266526-download (1).jfif\",\"uploads\\\\images\\\\1646808266527-download (2).jfif\"]}', 20),
('Nhà ở quận 8', '0001', '180 cao lỗ, phường 4, quận 8, TP.HCM', 3000000, 'rộng rãi thoáng mát', 'dh2TnzxkWd', '{\"images\":[\"uploads\\\\images\\\\1646808263881-download (1).jfif\",\"uploads\\\\images\\\\1646808263882-download (2).jfif\"]}', 20),
('Nhà ở quận 8', '0001', '180 cao lỗ, phường 4, quận 8, TP.HCM', 3000000, 'rộng rãi thoáng mát', 'PROzBHuZOo', '{\"images\":[\"uploads\\\\images\\\\1646808258063-download (1).jfif\",\"uploads\\\\images\\\\1646808258065-download (2).jfif\"]}', 20),
('Nhà ở quận 8', '0001', '68 Đ3, Trường Thạnh, Quận 9, Thành phố Hồ Chí Minh, Việt Nam', 0, 'yyjlkk;', 'iNsefVX6Gb', '{\"images\":[\"uploads\\\\images\\\\1646816046628-download (1).jfif\",\"uploads\\\\images\\\\1646816046629-download (2).jfif\",\"uploads\\\\images\\\\1646816046630-download.jfif\",\"uploads\\\\images\\\\1646816046632-images (1).jfif\",\"uploads\\\\images\\\\1646816046633-images (2).jfif\",\"uploads\\\\images\\\\1646816046635-images.jfif\",\"uploads\\\\images\\\\1646816046638-luu-y-ve-phong-thuy-trong-nha-o.webp\",\"uploads\\\\images\\\\1646816046645-mau-nh-o-viet-nam-4.jpg\",\"uploads\\\\images\\\\1646816046651-nha-cap-2.jpg\",\"uploads\\\\images\\\\1646816046655-quy-dinh-ve-hoan-cong-khi-xay-dung-xong-nha-o--57022.jpg\",\"uploads\\\\images\\\\1646816046661-tim-hieu-ve-cac-loai-nha-o-viet-nam.jpg\"]}', 0),
('Nhà ở quận 8', 'CctnhzMPTjGh', '180 cao lỗ, phường 4, quận 8, TP.HCM', 10000000, '', 'cO56UH1oLQ', '{\"images\":[\"\",\"uploads\\\\images\\\\1647593810318-Capture.PNG\",\"uploads\\\\images\\\\1647593810330-dfadfa.PNG\"]}', 50),
('nhieu hinh', 'CctnhzMPTjGh', '180 cao lỗ', 3000000, '', 'onPuUnb2ER', '{\"images\":[\"uploads\\\\images\\\\1647594712986-download.jfif\",\"uploads\\\\images\\\\1647594712987-images (1).jfif\",\"uploads\\\\images\\\\1647594712989-images (2).jfif\"]}', 20),
('bán nhà abc', 'CctnhzMPTjGh', '180 cao lỗ, phường 4, quận 8, TP.HCM', 2000000, '', 'Z6aBwl1Xmz', '{\"images\":[\"uploads\\\\images\\\\1647594661377-images (2).jfif\",\"uploads\\\\images\\\\1647594661377-nha-cap-2.jpg\",\"uploads\\\\images\\\\1647594661383-quy-dinh-ve-hoan-cong-khi-xay-dung-xong-nha-o--57022.jpg\"]}', 20),
('Nhà ở quận 9', 'CctnhzMPTjGh', '68 Đ3, Trường Thạnh, Quận 9, Thành phố Hồ Chí Minh, Việt Nam', 3000000, '', 'OC6lerpBeV', '{\"images\":[\"uploads\\\\images\\\\1647594602330-images.jfif\",\"uploads\\\\images\\\\1647594602331-luu-y-ve-phong-thuy-trong-nha-o.webp\",\"uploads\\\\images\\\\1647594602332-mau-nh-o-viet-nam-4.jpg\"]}', 40),
('Nhà ở quận 9', 'CctnhzMPTjGh', '68 Đ3, Trường Thạnh, Quận 9, Thành phố Hồ Chí Minh, Việt Nam', 3000000, '', 'UsdB5bHD6p', '{\"images\":[\"uploads\\\\images\\\\1647594512201-images.jfif\",\"uploads\\\\images\\\\1647594512203-luu-y-ve-phong-thuy-trong-nha-o.webp\",\"uploads\\\\images\\\\1647594512206-mau-nh-o-viet-nam-4.jpg\"]}', 40);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chunha`
--
ALTER TABLE `chunha`
  ADD PRIMARY KEY (`macn`,`username`);

--
-- Indexes for table `khachhang`
--
ALTER TABLE `khachhang`
  ADD PRIMARY KEY (`makh`);

--
-- Indexes for table `lichsuthue`
--
ALTER TABLE `lichsuthue`
  ADD PRIMARY KEY (`magd`);

--
-- Indexes for table `nhathue`
--
ALTER TABLE `nhathue`
  ADD PRIMARY KEY (`mant`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
