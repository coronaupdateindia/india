var rawData=[[new Date(2020,02,15,12,0),[ 0, 0,0,0]],[new Date(2020,02,15,17,0),[ 0, 0,0,0]],[new Date(2020,02,15,23,30),[ 0, 0,0,0]],[new Date(2020,02,16,16,0),[ 0, 0,0,0]],[new Date(2020,02,17,9,15),[ 0, 0,0,0]],[new Date(2020,02,17,17,15),[ 0, 0,0,0]],[new Date('07 April 2020, 09:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('07 April 2020, 18:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('08 April 2020, 08:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('08 April 2020, 17:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('09 April 2020, 08:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('09 April 2020, 17:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('10 April 2020, 08:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('10 April 2020, 17:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('11 April 2020, 08:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('11 April 2020, 17:00 GMT+5:30'),[2, 0, 0, 0]],[new Date('12 April 2020, 08:00 GMT+5:30'),[2, 0, 0, 0]],[new Date('12 April 2020, 17:00 GMT+5:30'),[2, 0, 0, 0]],[new Date('13 April 2020, 08:00 GMT+5:30'),[2, 0, 0, 0]],[new Date('13 April 2020, 17:00 GMT+5:30'),[2, 0, 0, 0]],[new Date('14 April 2020, 08:00 GMT+5:30'),[2, 0, 0, 0]],[new Date('14 April 2020, 17:00 GMT+5:30'),[2, 0, 0, 0]],[new Date('15 April 2020, 08:00 GMT+5:30'),[2, 0, 0, 0]],[new Date('15 April 2020, 17:00 GMT+5:30'),[2, 0, 0, 0]],[new Date('16 April 2020, 08:00 GMT+5:30'),[2, 0, 1, 0]],[new Date('16 April 2020, 17:00 GMT+5:30'),[2, 0, 1, 0]],[new Date('17 April 2020, 08:00 GMT+5:30'),[2, 0, 1, 0]],[new Date('17 April 2020, 17:00 GMT+5:30'),[2, 0, 1, 0]],[new Date('18 April 2020, 08:00 GMT+5:30'),[2, 0, 1, 0]],[new Date('18 April 2020, 17:00 GMT+5:30'),[2, 0, 1, 0]],[new Date('19 April 2020, 08:00 GMT+5:30'),[2, 0, 1, 0]],[new Date('19 April 2020, 17:00 GMT+5:30'),[2, 0, 1, 0]],[new Date('20 April 2020, 08:00 GMT+5:30'),[2, 0, 1, 0]],[new Date('20 April 2020, 17:00 GMT+5:30'),[2, 0, 1, 0]],[new Date('21 April 2020, 08:00 GMT+5:30'),[2, 0, 1, 0]],[new Date('21 April 2020, 17:00 GMT+5:30'),[2, 0, 1, 0]],[new Date('22 April 2020, 08:00 GMT+5:30'),[2, 0, 1, 0]],[new Date('22 April 2020, 17:00 GMT+5:30'),[2, 0, 1, 0]],[new Date('23 April 2020, 08:00 GMT+5:30'),[2, 0, 1, 0]],[new Date('23 April 2020, 17:00 GMT+5:30'),[2, 0, 1, 0]],[new Date('24 April 2020, 08:00 GMT+5:30'),[2, 0, 1, 0]],[new Date('24 April 2020, 17:00 GMT+5:30'),[2, 0, 1, 0]],[new Date('25 April 2020, 08:00 GMT+5:30'),[2, 0, 1, 0]],[new Date('25 April 2020, 17:00 GMT+5:30'),[2, 0, 1, 0]],[new Date('26 April 2020, 08:00 GMT+5:30'),[2, 0, 2, 0]],[new Date('26 April 2020, 17:00 GMT+5:30'),[2, 0, 2, 0]],[new Date('27 April 2020, 08:00 GMT+5:30'),[2, 0, 2, 0]],[new Date('27 April 2020, 17:00 GMT+5:30'),[2, 0, 2, 0]],[new Date('28 April 2020, 08:00 GMT+5:30'),[2, 0, 2, 0]],[new Date('28 April 2020, 17:00 GMT+5:30'),[2, 0, 2, 0]],[new Date('29 April 2020, 08:00 GMT+5:30'),[2, 0, 2, 0]],[new Date('29 April 2020, 17:00 GMT+5:30'),[2, 0, 2, 0]],[new Date('30 April 2020, 08:00 GMT+5:30'),[2, 0, 2, 0]],[new Date('30 April 2020, 17:00 GMT+5:30'),[2, 0, 2, 0]],[new Date('01 May 2020, 08:00 GMT+5:30'),[2, 0, 2, 0]],[new Date('01 May 2020, 17:00 GMT+5:30'),[2, 0, 2, 0]],[new Date('02 May 2020, 08:00 GMT+5:30'),[2, 0, 2, 0]],[new Date('02 May 2020, 17:00 GMT+5:30'),[2, 0, 2, 0]],[new Date('03 May 2020, 08:00 GMT+5:30'),[4, 0, 2, 0]],[new Date('03 May 2020, 17:00 GMT+5:30'),[4, 0, 2, 0]],[new Date('04 May 2020, 08:00 GMT+5:30'),[16, 0, 2, 0]],[new Date('04 May 2020, 17:00  GMT+5:30'),[16, 0, 2, 0]],[new Date('05 May 2020, 08:00  GMT+5:30'),[29, 0, 2, 0]],[new Date('05 May 2020, 17:00  GMT+5:30'),[29, 0, 2, 0]],[new Date('06 May 2020, 08:00  GMT+5:30'),[43, 0, 2, 0]],[new Date('07 May 2020, 08:00  GMT+5:30'),[43, 0, 2, 0]],[new Date('08 May 2020, 08:00  GMT+5:30'),[65, 0, 2, 0]],[new Date('09 May 2020, 08:00  GMT+5:30'),[118, 0, 2, 0]],[new Date('10 May 2020, 08:00  GMT+5:30'),[134, 0, 2, 0]],[new Date('11 May 2020, 08:00  GMT+5:30'),[150, 0, 2, 0]],[new Date('12 May 2020, 08:00  GMT+5:30'),[152, 0, 2, 0]],[new Date('13 May 2020, 08:00  GMT+5:30'),[154, 0, 2, 0]],[new Date('14 May 2020, 08:00  GMT+5:30'),[155, 0, 16, 0]],[new Date('15 May 2020, 08:00  GMT+5:30'),[156, 0, 29, 0]],[new Date('16 May 2020, 08:00  GMT+5:30'),[156, 0, 42, 0]],[new Date('17 May 2020, 08:00  GMT+5:30'),[167, 0, 64, 0]],[new Date('18 May 2020, 08:00  GMT+5:30'),[167, 0, 85, 0]],[new Date('19 May 2020, 08:00  GMT+5:30'),[167, 0, 85, 0]],[new Date('20 May 2020, 08:00  GMT+5:30'),[173, 0, 116, 0]],[new Date('21 May 2020, 08:00  GMT+5:30'),[173, 0, 133, 0]],[new Date('22 May 2020, 08:00  GMT+5:30'),[173, 0, 148, 0]],[new Date('23 May 2020, 08:00  GMT+5:30'),[175, 0, 152, 0]],[new Date('24 May 2020, 08:00  GMT+5:30'),[189, 0, 153, 0]],[new Date('25 May 2020, 08:00  GMT+5:30'),[191, 0, 165, 0]],[new Date('26 May 2020, 08:00  GMT+5:30'),[194, 0, 165, 0]],[new Date('27 May 2020, 08:00  GMT+5:30'),[207, 0, 165, 0]],[new Date('28 May 2020, 08:00  GMT+5:30'),[230, 0, 165, 0]],[new Date('29 May 2020, 08:00  GMT+5:30'),[242, 0, 167, 0]],[new Date('30 May 2020, 08:00  GMT+5:30'),[251, 0, 171, 0]],[new Date('31 May 2020, 08:00  GMT+5:30'),[268, 0, 172, 0]],[new Date('01 June 2020, 08:00  GMT+5:30'),[313, 0, 173, 0]],[new Date('02 June 2020, 08:00  GMT+5:30'),[420, 0, 173, 0]],[new Date('03 June 2020, 08:00  GMT+5:30'),[468, 0, 173, 0]],[new Date('04 June 2020, 08:00  GMT+5:30'),[468, 0, 173, 0]],[new Date('05 June 2020, 08:00  GMT+5:30'),[644, 0, 173, 0]],[new Date('06 June 2020, 08:00  GMT+5:30'),[692, 0, 173, 0]],[new Date('07 June 2020, 08:00  GMT+5:30'),[747, 0, 173, 0]],[new Date('08 June 2020, 08:00 GMT+5:30'),[800, 0, 192, 0]],[new Date('09 June 2020, 08:00  GMT+5:30'),[838, 0, 192, 0]],[new Date('10 June 2020, 08:00  GMT+5:30'),[864, 0, 192, 1]],[new Date('11 June 2020, 08:00  GMT+5:30'),[895, 0, 239, 1]],[new Date('12 June 2020, 08:00  GMT+5:30'),[913, 0, 278, 1]],[new Date('13 June 2020, 08:00  GMT+5:30'),[961, 0, 278, 1]],[new Date('14 June 2020, 08:00  GMT+5:30'),[1046, 0, 315, 1]],[new Date('15 June 2020, 08:00  GMT+5:30'),[1076, 0, 315, 1]],[new Date('16 June 2020, 08:00  GMT+5:30'),[1086, 0, 433, 1]],[new Date('17 June 2020, 08:00  GMT+5:30'),[1092, 0, 433, 1]],[new Date('18 June 2020, 08:00  GMT+5:30'),[1135, 0, 556, 1]],[new Date('19 June 2020, 08:00  GMT+5:30'),[1155, 0, 639, 1]],[new Date('20 June 2020, 08:00  GMT+5:30'),[1178, 0, 657, 1]],[new Date('21 June 2020, 08:00  GMT+5:30'),[1186, 0, 680, 1]],[new Date('22 June 2020, 08:00  GMT+5:30'),[1221, 0, 759, 1]],[new Date('23 June 2020, 08:00  GMT+5:30'),[1237, 0, 782, 1]],[new Date('24	June 2020, 08:00  GMT+5:30'),[1259, 0, 807, 1]],[new Date('25	June 2020, 08:00  GMT+5:30'),[1259, 0, 897, 1]],[new Date('26	June 2020, 08:00  GMT+5:30'),[1290, 0, 1019, 1]],[new Date('27	June 2020, 08:00  GMT+5:30'),[1325, 0, 1055, 1]],[new Date('28	June 2020, 08:00  GMT+5:30'),[1334, 0, 1071, 1]],[new Date('29	June 2020, 08:00  GMT+5:30'),[1346, 0, 1079, 1]],[new Date('30	June 2020, 08:00  GMT+5:30'),[1380, 0, 1085, 1]],[new Date('01	July 2020, 08:00  GMT+5:30'),[1388, 0, 1086, 1]],[new Date('02	July 2020, 08:00  GMT+5:30'),[1396, 0, 1093, 1]],[new Date('03	July 2020, 08:00  GMT+5:30'),[1435, 0, 1146, 1]],[new Date('04	July 2020, 08:00  GMT+5:30'),[1525, 0, 1199, 1]],[new Date('05	July 2020, 08:00  GMT+5:30'),[1546, 0, 1202, 1]],[new Date('06	July 2020, 08:00  GMT+5:30'),[1568, 0, 1202, 1]],[new Date('07	July 2020, 08:00  GMT+5:30'),[1680, 0, 1219, 1]],[new Date('08	July 2020, 08:00  GMT+5:30'),[1704, 0, 1248, 1]],[new Date('09	July 2020, 08:00  GMT+5:30'),[1761, 0, 1324, 1]],[new Date('10	July 2020, 08:00  GMT+5:30'),[1776, 0, 1338, 1]],[new Date('11	July 2020, 08:00  GMT+5:30'),[1918, 0, 1372, 1]],[new Date('12	July 2020, 08:00  GMT+5:30'),[1949, 0, 1375, 2]],[new Date('13	July 2020, 08:00  GMT+5:30'),[2054, 0, 1421, 2]],[new Date('14	July 2020, 08:00  GMT+5:30'),[2080, 0, 1475, 2]],[new Date('15	July 2020, 08:00  GMT+5:30'),[2170, 0, 1538, 2]],[new Date('16	July 2020, 08:00  GMT+5:30'),[2268, 0, 1604, 3]],[new Date('17	July 2020, 08:00  GMT+5:30'),[2283, 0, 1604, 3]],[new Date('18	July 2020, 08:00  GMT+5:30'),[2366, 0, 1684, 3]],[new Date('19	July 2020, 08:00  GMT+5:30'),[2654, 0, 1735, 5]],[new Date('20	July 2020, 08:00  GMT+5:30'),[2878, 0, 1759, 5]],[new Date('21	July 2020, 08:00  GMT+5:30'),[3079, 0, 1845, 7]]];