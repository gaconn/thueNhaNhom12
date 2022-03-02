-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1:3306
-- Thời gian đã tạo: Th2 27, 2022 lúc 08:12 AM
-- Phiên bản máy phục vụ: 5.7.31
-- Phiên bản PHP: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `dbthuenha`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `chunha`
--

DROP TABLE IF EXISTS `chunha`;
CREATE TABLE IF NOT EXISTS `chunha` (
  `tencn` varchar(100) CHARACTER SET utf8 NOT NULL,
  `tuoi` int(3) NOT NULL,
  `macn` varchar(12) CHARACTER SET latin1 COLLATE latin1_general_ci NOT NULL,
  `sdt` varchar(12) CHARACTER SET latin1 COLLATE latin1_general_ci NOT NULL,
  PRIMARY KEY (`macn`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `chunha`
--

INSERT INTO `chunha` (`tencn`, `tuoi`, `macn`, `sdt`) VALUES
('chunha1', 33, '100000000000', '000000000000'),
('chunha2', 33, '200000000000', '000000000000'),
('chunha3', 33, '300000000000', '000000000000'),
('chunha4', 33, '400000000000', '000000000000'),
('chunha5', 33, '500000000000', '000000000000'),
('chunha6', 33, '600000000000', '000000000000'),
('chunha7', 33, '700000000000', '000000000000'),
('chunha8', 33, '800000000000', '000000000000'),
('chunha9', 33, '900000000000', '000000000000');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `khachhang`
--

DROP TABLE IF EXISTS `khachhang`;
CREATE TABLE IF NOT EXISTS `khachhang` (
  `tenkh` varchar(100) CHARACTER SET utf8 NOT NULL,
  `tuoi` int(3) NOT NULL,
  `makh` varchar(12) NOT NULL,
  `sdt` varchar(12) NOT NULL,
  `taikhoan` varchar(100) CHARACTER SET latin1 COLLATE latin1_general_ci NOT NULL,
  `matkhau` varchar(12) CHARACTER SET latin1 COLLATE latin1_general_ci NOT NULL,
  PRIMARY KEY (`makh`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `khachhang`
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
-- Cấu trúc bảng cho bảng `lichsuthue`
--

DROP TABLE IF EXISTS `lichsuthue`;
CREATE TABLE IF NOT EXISTS `lichsuthue` (
  `magd` varchar(12) NOT NULL,
  `makh` varchar(12) NOT NULL,
  `macn` varchar(12) NOT NULL,
  `mant` varchar(12) NOT NULL,
  `ngaythue` varchar(12) NOT NULL,
  `ngaytra` varchar(12) NOT NULL,
  `tongtien` int(12) NOT NULL,
  `ghichu` text CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`magd`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `lichsuthue`
--

INSERT INTO `lichsuthue` (`magd`, `makh`, `macn`, `mant`, `ngaythue`, `ngaytra`, `tongtien`, `ghichu`) VALUES
('dgtn01', '000000000001', '100000000000', 'nt01', '21/2/2022', '21/3/2022', 20000000, 'Đây là ghi chú...'),
('dgtn02', '000000000002', '200000000000', 'nt02', '21/2/2022', '21/3/2022', 15000000, 'Đây là ghi chú...'),
('dgtn03', '000000000003', '300000000000', 'nt03', '21/2/2022', '21/3/2022', 20000000, 'Đây là ghi chú...'),
('dgtn04', '000000000004', '400000000000', 'nt04', '21/2/2022', '21/3/2022', 18000000, 'Đây là ghi chú...'),
('dgtn05', '000000000005', '500000000000', 'nt05', '31/2/2022', '31/3/2022', 50000000, 'Đây là ghi chú...');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `nhathue`
--

DROP TABLE IF EXISTS `nhathue`;
CREATE TABLE IF NOT EXISTS `nhathue` (
  `tieude` varchar(100) CHARACTER SET utf8 NOT NULL,
  `macn` varchar(12) NOT NULL,
  `diachi` varchar(100) CHARACTER SET utf8 NOT NULL,
  `giathue` int(12) NOT NULL,
  `mota` text CHARACTER SET utf8 NOT NULL,
  `mant` varchar(12) NOT NULL,
  PRIMARY KEY (`mant`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `nhathue`
--

INSERT INTO `nhathue` (`tieude`, `macn`, `diachi`, `giathue`, `mota`, `mant`) VALUES
('Cho thuê căn hộ tại chung cư ABC', '100000000000', '1 cao lỗ/ phương 4/ quận 8/ TP.HCM', 20000000, 'Đây là mô tả...', 'nt01'),
('Cho thuê căn hộ tại chung cư XYZ', '200000000000', '2 cao lỗ/ phương 4/ quận 8/ TP.HCM', 15000000, 'Đây là mô tả...', 'nt02'),
('Cho thuê căn hộ tại chung cư HHH', '300000000000', '3 cao lỗ/ phương 4/ quận 8/ TP.HCM', 20000000, 'Đây là mô tả...', 'nt03'),
('Cho thuê căn hộ tại chung cư PGT', '400000000000', '4 cao lỗ/ phương 4/ quận 8/ TP.HCM', 18000000, 'Đây là mô tả...', 'nt04'),
('Cho thuê căn hộ tại chung cư STU', '500000000000', '180 cao lỗ/ phương 4/ quận 8/ TP.HCM', 50000000, 'Đây là mô tả...', 'nt05');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
