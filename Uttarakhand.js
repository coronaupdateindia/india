var rawData=[[new Date(2020,02,15,12,0),[ 0, 0,0,0]],[new Date(2020,02,15,17,0),[ 0, 0,0,0]],[new Date(2020,02,15,23,30),[ 1, 0,0,0]],[new Date(2020,02,16,16,0),[ 1, 0,0,0]],[new Date(2020,02,17,9,15),[ 1, 0,0,0]],[new Date(2020,02,17,17,15),[ 1, 0,0,0]],[new Date(2020,02,24,20,15),[3, 1, 0, 0]],[new Date(2020,02,25,9,15),[3, 1, 0, 0]],[new Date(2020,02,25,18,45),[3, 1, 0, 0]],[new Date(2020,02,26,10,15),[4, 1, 0, 0]],[new Date(2020,02,26,20,00),[4, 1, 0, 0]],[new Date(2020,02,27,9,15),[4, 1, 0, 0]],[new Date(2020,02,28,9,30),[4, 1, 0, 0]],[new Date(2020,02,28,17,45),[4, 1, 0, 0]],[new Date(2020,02,29,10,00),[5, 1, 1, 0]],[new Date(2020,02,29,19,30),[7, 0, 2, 0]],[new Date(2020,02,30,10,30),[7, 0, 2, 0]],[new Date(2020,02,30,21,30),[7, 0, 2, 0]],[new Date(2020,02,31,20,30),[7, 0, 2, 0]],[new Date('01 April 2020, 09:00 GMT+5:30'),[7, 0, 2, 0]],[new Date('01 April 2020, 19:30 GMT+5:30'),[7, 0, 2, 0]],[new Date('02 April 2020, 09:00 GMT+5:30'),[7, 0, 2, 0]],[new Date('02 April 2020, 18:00 GMT+5:30'),[7, 0, 2, 0]],[new Date('03 April 2020, 09:00 GMT+5:30'),[10, 0, 2, 0]],[new Date('03 April 2020, 18:00 GMT+5:30'),[10, 0, 2, 0]],[new Date('04 April 2020, 09:00 GMT+5:30'),[16, 0, 2, 0]],[new Date('04 April 2020, 18:00 GMT+5:30'),[16, 0, 2, 0]],[new Date('05 April 2020, 09:00 GMT+5:30'),[22, 0, 2, 0]],[new Date('05 April 2020, 18:00 GMT+5:30'),[22, 0, 2, 0]],[new Date('06 April 2020, 09:00 GMT+5:30'),[26, 0, 4, 0]],[new Date('06 April 2020, 18:00 GMT+5:30'),[26, 0, 4, 0]],[new Date('07 April 2020, 09:00 GMT+5:30'),[31, 0, 5, 0]],[new Date('07 April 2020, 18:00 GMT+5:30'),[31, 0, 5, 0]],[new Date('08 April 2020, 08:00 GMT+5:30'),[31, 0, 5, 0]],[new Date('08 April 2020, 17:00 GMT+5:30'),[31, 0, 5, 0]],[new Date('09 April 2020, 08:00 GMT+5:30'),[33, 0, 5, 0]],[new Date('09 April 2020, 17:00 GMT+5:30'),[35, 0, 5, 0]],[new Date('10 April 2020, 08:00 GMT+5:30'),[35, 0, 5, 0]],[new Date('10 April 2020, 17:00 GMT+5:30'),[35, 0, 5, 0]],[new Date('11 April 2020, 08:00 GMT+5:30'),[35, 0, 5, 0]],[new Date('11 April 2020, 17:00 GMT+5:30'),[35, 0, 5, 0]],[new Date('12 April 2020, 08:00 GMT+5:30'),[35, 0, 5, 0]],[new Date('12 April 2020, 17:00 GMT+5:30'),[35, 0, 5, 0]],[new Date('13 April 2020, 08:00 GMT+5:30'),[35, 0, 5, 0]],[new Date('13 April 2020, 17:00 GMT+5:30'),[35, 0, 5, 0]],[new Date('14 April 2020, 08:00 GMT+5:30'),[35, 0, 5, 0]],[new Date('14 April 2020, 17:00 GMT+5:30'),[35, 0, 7, 0]],[new Date('15 April 2020, 08:00 GMT+5:30'),[37, 0, 9, 0]],[new Date('15 April 2020, 17:00 GMT+5:30'),[37, 0, 9, 0]],[new Date('16 April 2020, 08:00 GMT+5:30'),[37, 0, 9, 0]],[new Date('16 April 2020, 17:00 GMT+5:30'),[37, 0, 9, 0]],[new Date('17 April 2020, 08:00 GMT+5:30'),[37, 0, 9, 0]],[new Date('17 April 2020, 17:00 GMT+5:30'),[37, 0, 9, 0]],[new Date('18 April 2020, 08:00 GMT+5:30'),[40, 0, 9, 0]],[new Date('18 April 2020, 17:00 GMT+5:30'),[42, 0, 9, 0]],[new Date('19 April 2020, 08:00 GMT+5:30'),[42, 0, 9, 0]],[new Date('19 April 2020, 17:00 GMT+5:30'),[42, 0, 9, 0]],[new Date('20 April 2020, 08:00 GMT+5:30'),[44, 0, 11, 0]],[new Date('20 April 2020, 17:00 GMT+5:30'),[44, 0, 11, 0]],[new Date('21 April 2020, 08:00 GMT+5:30'),[46, 0, 18, 0]],[new Date('21 April 2020, 17:00 GMT+5:30'),[46, 0, 18, 0]],[new Date('22 April 2020, 08:00 GMT+5:30'),[46, 0, 19, 0]],[new Date('22 April 2020, 17:00 GMT+5:30'),[46, 0, 19, 0]],[new Date('23 April 2020, 08:00 GMT+5:30'),[46, 0, 23, 0]],[new Date('23 April 2020, 17:00 GMT+5:30'),[46, 0, 23, 0]],[new Date('24 April 2020, 08:00 GMT+5:30'),[47, 0, 24, 0]],[new Date('24 April 2020, 17:00 GMT+5:30'),[47, 0, 24, 0]],[new Date('25 April 2020, 08:00 GMT+5:30'),[48, 0, 25, 0]],[new Date('25 April 2020, 17:00 GMT+5:30'),[48, 0, 25, 0]],[new Date('26 April 2020, 08:00 GMT+5:30'),[48, 0, 26, 0]],[new Date('26 April 2020, 17:00 GMT+5:30'),[50, 0, 26, 0]],[new Date('27 April 2020, 08:00 GMT+5:30'),[50, 0, 28, 0]],[new Date('27 April 2020, 17:00 GMT+5:30'),[51, 0, 33, 0]],[new Date('28 April 2020, 08:00 GMT+5:30'),[51, 0, 33, 0]],[new Date('28 April 2020, 17:00 GMT+5:30'),[51, 0, 33, 0]],[new Date('29 April 2020, 08:00 GMT+5:30'),[54, 0, 33, 0]],[new Date('29 April 2020, 17:00 GMT+5:30'),[54, 0, 34, 0]],[new Date('30 April 2020, 08:00 GMT+5:30'),[55, 0, 36, 0]],[new Date('30 April 2020, 17:00 GMT+5:30'),[55, 0, 36, 0]],[new Date('01 May 2020, 08:00 GMT+5:30'),[57, 0, 36, 0]],[new Date('01 May 2020, 17:00 GMT+5:30'),[57, 0, 36, 0]],[new Date('02 May 2020, 08:00 GMT+5:30'),[58, 0, 36, 0]],[new Date('02 May 2020, 17:00 GMT+5:30'),[58, 0, 37, 0]],[new Date('03 May 2020, 08:00 GMT+5:30'),[59, 0, 39, 0]],[new Date('03 May 2020, 17:00 GMT+5:30'),[59, 0, 39, 0]],[new Date('04 May 2020, 08:00 GMT+5:30'),[60, 0, 39, 0]],[new Date('04 May 2020, 17:00  GMT+5:30'),[60, 0, 39, 1]],[new Date('05 May 2020, 08:00  GMT+5:30'),[60, 0, 39, 1]],[new Date('05 May 2020, 17:00  GMT+5:30'),[60, 0, 39, 1]],[new Date('06 May 2020, 08:00  GMT+5:30'),[61, 0, 39, 1]],[new Date('07 May 2020, 08:00  GMT+5:30'),[61, 0, 39, 1]],[new Date('08 May 2020, 08:00  GMT+5:30'),[61, 0, 39, 1]],[new Date('09 May 2020, 08:00  GMT+5:30'),[63, 0, 46, 1]],[new Date('10 May 2020, 08:00  GMT+5:30'),[67, 0, 46, 1]],[new Date('11 May 2020, 08:00  GMT+5:30'),[68, 0, 46, 1]],[new Date('12 May 2020, 08:00  GMT+5:30'),[68, 0, 46, 1]],[new Date('13 May 2020, 08:00  GMT+5:30'),[69, 0, 46, 1]],[new Date('14 May 2020, 08:00  GMT+5:30'),[72, 0, 46, 1]],[new Date('15 May 2020, 08:00  GMT+5:30'),[78, 0, 50, 1]],[new Date('16 May 2020, 08:00  GMT+5:30'),[82, 0, 51, 1]],[new Date('17 May 2020, 08:00  GMT+5:30'),[88, 0, 51, 1]],[new Date('18 May 2020, 08:00  GMT+5:30'),[92, 0, 52, 1]],[new Date('19 May 2020, 08:00  GMT+5:30'),[93, 0, 52, 1]],[new Date('20 May 2020, 08:00  GMT+5:30'),[111, 0, 52, 1]],[new Date('21 May 2020, 08:00  GMT+5:30'),[122, 0, 53, 1]],[new Date('22 May 2020, 08:00  GMT+5:30'),[146, 0, 54, 1]],[new Date('23 May 2020, 08:00  GMT+5:30'),[153, 0, 56, 1]],[new Date('24 May 2020, 08:00  GMT+5:30'),[244, 0, 56, 2]],[new Date('25 May 2020, 08:00  GMT+5:30'),[317, 0, 58, 3]],[new Date('26 May 2020, 08:00  GMT+5:30'),[349, 0, 58, 3]],[new Date('27 May 2020, 08:00  GMT+5:30'),[401, 0, 64, 4]],[new Date('28 May 2020, 08:00  GMT+5:30'),[469, 0, 79, 4]],[new Date('29 May 2020, 08:00  GMT+5:30'),[500, 0, 79, 4]],[new Date('30 May 2020, 08:00  GMT+5:30'),[716, 0, 102, 5]],[new Date('31 May 2020, 08:00  GMT+5:30'),[749, 0, 102, 5]],[new Date('01 June 2020, 08:00  GMT+5:30'),[907, 0, 102, 5]],[new Date('02 June 2020, 08:00  GMT+5:30'),[958, 0, 222, 6]],[new Date('03 June 2020, 08:00  GMT+5:30'),[1043, 0, 252, 7]],[new Date('04 June 2020, 08:00  GMT+5:30'),[1085, 0, 282, 8]],[new Date('05 June 2020, 08:00  GMT+5:30'),[1153, 0, 297, 10]],[new Date('06 June 2020, 08:00  GMT+5:30'),[1215, 0, 344, 11]],[new Date('07 June 2020, 08:00  GMT+5:30'),[1303, 0, 423, 11]],[new Date('08 June 2020, 08:00 GMT+5:30'),[1355, 0, 528, 13]],[new Date('09 June 2020, 08:00  GMT+5:30'),[1411, 0, 714, 13]],[new Date('10 June 2020, 08:00  GMT+5:30'),[1537, 0, 755, 13]],[new Date('11 June 2020, 08:00  GMT+5:30'),[1562, 0, 831, 15]],[new Date('12 June 2020, 08:00  GMT+5:30'),[1643, 0, 842, 15]],[new Date('13 June 2020, 08:00  GMT+5:30'),[1724, 0, 947, 21]],[new Date('14 June 2020, 08:00  GMT+5:30'),[1785, 0, 1077, 23]],[new Date('15 June 2020, 08:00  GMT+5:30'),[1819, 0, 1111, 24]],[new Date('16 June 2020, 08:00  GMT+5:30'),[1845, 0, 1189, 24]],[new Date('17 June 2020, 08:00  GMT+5:30'),[1942, 0, 1216, 25]],[new Date('18 June 2020, 08:00  GMT+5:30'),[2023, 0, 1254, 26]],[new Date('19 June 2020, 08:00  GMT+5:30'),[2102, 0, 1386, 26]],[new Date('20 June 2020, 08:00  GMT+5:30'),[2177, 0, 1433, 26]],[new Date('21 June 2020, 08:00  GMT+5:30'),[2301, 0, 1450, 27]],[new Date('22 June 2020, 08:00  GMT+5:30'),[2344, 0, 1500, 27]],[new Date('23 June 2020, 08:00  GMT+5:30'),[2402, 0, 1521, 28]],[new Date('24	June 2020, 08:00  GMT+5:30'),[2535, 0, 1602, 30]],[new Date('25	June 2020, 08:00  GMT+5:30'),[2623, 0, 1721, 35]],[new Date('26	June 2020, 08:00  GMT+5:30'),[2691, 0, 1758, 36]],[new Date('27	June 2020, 08:00  GMT+5:30'),[2725, 0, 1822, 37]],[new Date('28	June 2020, 08:00  GMT+5:30'),[2791, 0, 1912, 37]],[new Date('29	June 2020, 08:00  GMT+5:30'),[2823, 0, 2018, 38]],[new Date('30	June 2020, 08:00  GMT+5:30'),[2831, 0, 2111, 39]],[new Date('01	July 2020, 08:00  GMT+5:30'),[2881, 0, 2231, 41]],[new Date('02	July 2020, 08:00  GMT+5:30'),[2947, 0, 2317, 41]],[new Date('03	July 2020, 08:00  GMT+5:30'),[2984, 0, 2405, 42]],[new Date('04	July 2020, 08:00  GMT+5:30'),[3048, 0, 2481, 42]],[new Date('05	July 2020, 08:00  GMT+5:30'),[3093, 0, 2502, 42]],[new Date('06	July 2020, 08:00  GMT+5:30'),[3124, 0, 2524, 42]],[new Date('07	July 2020, 08:00  GMT+5:30'),[3161, 0, 2586, 42]]];