var rawData=[[new Date(2020,02,15,12,0),[ 1, 0,0,0]],[new Date(2020,02,15,17,0),[ 1, 0,0,0]],[new Date(2020,02,15,23,30),[ 1, 0,0,0]],[new Date(2020,02,16,16,0),[ 1, 0,0,0]],[new Date(2020,02,17,9,15),[ 1, 0,0,0]],[new Date(2020,02,17,17,15),[ 1, 0,0,0]],[new Date(2020,02,24,8,45),[7, 0, 0, 0]],[new Date(2020,02,24,20,15),[8, 0, 0, 0]],[new Date(2020,02,24,20,15),[8, 0, 0, 0]],[new Date(2020,02,25,9,15),[9, 0, 0, 0]],[new Date(2020,02,25,18,45),[9, 0, 1, 0]],[new Date(2020,02,26,10,15),[11, 0, 1, 0]],[new Date(2020,02,26,20,00),[11, 0, 1, 0]],[new Date(2020,02,27,9,15),[12, 0, 1, 0]],[new Date(2020,02,28,9,30),[14, 0, 1, 0]],[new Date(2020,02,28,17,45),[14, 0, 1, 0]],[new Date(2020,02,29,10,00),[14, 0, 1, 0]],[new Date(2020,02,29,19,30),[19, 0, 1, 0]],[new Date(2020,02,30,10,30),[19, 0, 1, 0]],[new Date(2020,02,30,21,30),[23, 0, 1, 0]],[new Date(2020,02,31,20,30),[40, 0, 1, 0]],[new Date('01 April 2020, 09:00 GMT+5:30'),[83, 0, 1, 0]],[new Date('01 April 2020, 19:30 GMT+5:30'),[83, 0, 0, 0]],[new Date('02 April 2020, 09:00 GMT+5:30'),[86, 0, 1, 1]],[new Date('02 April 2020, 18:00 GMT+5:30'),[86, 0, 1, 1]],[new Date('03 April 2020, 09:00 GMT+5:30'),[132, 0, 1, 1]],[new Date('03 April 2020, 18:00 GMT+5:30'),[132, 0, 1, 1]],[new Date('04 April 2020, 09:00 GMT+5:30'),[161, 0, 1, 1]],[new Date('04 April 2020, 18:00 GMT+5:30'),[161, 0, 1, 1]],[new Date('05 April 2020, 09:00 GMT+5:30'),[161, 0, 1, 1]],[new Date('05 April 2020, 18:00 GMT+5:30'),[190, 0, 1, 1]],[new Date('06 April 2020, 09:00 GMT+5:30'),[226, 0, 1, 3]],[new Date('06 April 2020, 18:00 GMT+5:30'),[226, 0, 1, 3]],[new Date('07 April 2020, 09:00 GMT+5:30'),[266, 0, 1, 3]],[new Date('07 April 2020, 18:00 GMT+5:30'),[266, 0, 1, 3]],[new Date('08 April 2020, 08:00 GMT+5:30'),[305, 0, 1, 4]],[new Date('08 April 2020, 17:00 GMT+5:30'),[305, 0, 5, 4]],[new Date('09 April 2020, 08:00 GMT+5:30'),[348, 0, 6, 4]],[new Date('09 April 2020, 17:00 GMT+5:30'),[348, 0, 6, 4]],[new Date('10 April 2020, 08:00 GMT+5:30'),[348, 0, 6, 4]],[new Date('10 April 2020, 17:00 GMT+5:30'),[363, 0, 7, 6]],[new Date('11 April 2020, 08:00 GMT+5:30'),[363, 0, 7, 6]],[new Date('11 April 2020, 17:00 GMT+5:30'),[381, 0, 11, 6]],[new Date('12 April 2020, 08:00 GMT+5:30'),[381, 0, 11, 6]],[new Date('12 April 2020, 17:00 GMT+5:30'),[381, 0, 11, 6]],[new Date('13 April 2020, 08:00 GMT+5:30'),[427, 0, 11, 7]],[new Date('13 April 2020, 17:00 GMT+5:30'),[432, 0, 11, 7]],[new Date('14 April 2020, 08:00 GMT+5:30'),[432, 0, 11, 7]],[new Date('14 April 2020, 17:00 GMT+5:30'),[473, 0, 14, 9]],[new Date('15 April 2020, 08:00 GMT+5:30'),[483, 0, 16, 9]],[new Date('15 April 2020, 17:00 GMT+5:30'),[503, 0, 16, 9]],[new Date('16 April 2020, 08:00 GMT+5:30'),[525, 0, 20, 14]],[new Date('16 April 2020, 17:00 GMT+5:30'),[534, 0, 20, 14]],[new Date('17 April 2020, 08:00 GMT+5:30'),[534, 0, 20, 14]],[new Date('17 April 2020, 17:00 GMT+5:30'),[572, 0, 36, 14]],[new Date('18 April 2020, 08:00 GMT+5:30'),[572, 0, 36, 14]],[new Date('18 April 2020, 17:00 GMT+5:30'),[603, 0, 42, 15]],[new Date('19 April 2020, 08:00 GMT+5:30'),[603, 0, 42, 15]],[new Date('19 April 2020, 17:00 GMT+5:30'),[603, 0, 42, 15]],[new Date('20 April 2020, 08:00 GMT+5:30'),[646, 0, 42, 15]],[new Date('20 April 2020, 17:00 GMT+5:30'),[722, 0, 92, 20]],[new Date('21 April 2020, 08:00 GMT+5:30'),[722, 0, 92, 20]],[new Date('21 April 2020, 17:00 GMT+5:30'),[757, 0, 96, 22]],[new Date('22 April 2020, 08:00 GMT+5:30'),[757, 0, 96, 22]],[new Date('22 April 2020, 17:00 GMT+5:30'),[813, 0, 120, 24]],[new Date('23 April 2020, 08:00 GMT+5:30'),[813, 0, 120, 24]],[new Date('23 April 2020, 17:00 GMT+5:30'),[895, 0, 141, 27]],[new Date('24 April 2020, 08:00 GMT+5:30'),[895, 0, 141, 27]],[new Date('24 April 2020, 17:00 GMT+5:30'),[955, 0, 145, 29]],[new Date('25 April 2020, 08:00 GMT+5:30'),[955, 0, 145, 29]],[new Date('25 April 2020, 17:00 GMT+5:30'),[1061, 0, 171, 31]],[new Date('26 April 2020, 08:00 GMT+5:30'),[1061, 0, 171, 31]],[new Date('26 April 2020, 17:00 GMT+5:30'),[1097, 0, 231, 31]],[new Date('27 April 2020, 08:00 GMT+5:30'),[1097, 0, 231, 31]],[new Date('27 April 2020, 17:00 GMT+5:30'),[1177, 0, 235, 31]],[new Date('28 April 2020, 08:00 GMT+5:30'),[1183, 0, 235, 31]],[new Date('28 April 2020, 17:00 GMT+5:30'),[1259, 0, 258, 31]],[new Date('29 April 2020, 08:00 GMT+5:30'),[1259, 0, 258, 31]],[new Date('29 April 2020, 17:00 GMT+5:30'),[1332, 0, 287, 31]],[new Date('30 April 2020, 08:00 GMT+5:30'),[1332, 0, 287, 31]],[new Date('30 April 2020, 17:00 GMT+5:30'),[1403, 0, 321, 31]],[new Date('01 May 2020, 08:00 GMT+5:30'),[1403, 0, 321, 31]],[new Date('01 May 2020, 17:00 GMT+5:30'),[1463, 0, 403, 33]],[new Date('02 May 2020, 08:00 GMT+5:30'),[1463, 0, 403, 33]],[new Date('02 May 2020, 17:00 GMT+5:30'),[1525, 0, 441, 33]],[new Date('03 May 2020, 08:00 GMT+5:30'),[1525, 0, 441, 33]],[new Date('03 May 2020, 17:00 GMT+5:30'),[1583, 0, 488, 33]],[new Date('04 May 2020, 08:00 GMT+5:30'),[1583, 0, 488, 33]],[new Date('04 May 2020, 17:00  GMT+5:30'),[1650, 0, 524, 36]],[new Date('05 May 2020, 08:00  GMT+5:30'),[1650, 0, 524, 36]],[new Date('05 May 2020, 17:00  GMT+5:30'),[1717, 0, 589, 36]],[new Date('06 May 2020, 08:00  GMT+5:30'),[1717, 0, 589, 36]],[new Date('07 May 2020, 08:00  GMT+5:30'),[1777, 0, 729, 36]],[new Date('08 May 2020, 08:00  GMT+5:30'),[1847, 0, 780, 38]],[new Date('09 May 2020, 08:00  GMT+5:30'),[1887, 0, 842, 41]],[new Date('10 May 2020, 08:00  GMT+5:30'),[1930, 0, 887, 44]],[new Date('11 May 2020, 08:00  GMT+5:30'),[1980, 0, 925, 45]],[new Date('12 May 2020, 08:00  GMT+5:30'),[2018, 0, 975, 45]],[new Date('13 May 2020, 08:00  GMT+5:30'),[2090, 0, 1056, 46]],[new Date('14 May 2020, 08:00  GMT+5:30'),[2137, 0, 1142, 47]],[new Date('15 May 2020, 08:00  GMT+5:30'),[2205, 0, 1192, 48]],[new Date('16 May 2020, 08:00  GMT+5:30'),[2307, 0, 1252, 48]],[new Date('17 May 2020, 08:00  GMT+5:30'),[2355, 0, 1353, 49]],[new Date('18 May 2020, 08:00  GMT+5:30'),[2407, 0, 1456, 50]],[new Date('19 May 2020, 08:00  GMT+5:30'),[2474, 0, 1552, 50]],[new Date('20 May 2020, 08:00  GMT+5:30'),[2532, 0, 1621, 52]],[new Date('21 May 2020, 08:00  GMT+5:30'),[2602, 0, 1640, 53]],[new Date('22 May 2020, 08:00  GMT+5:30'),[2647, 0, 1709, 53]],[new Date('23 May 2020, 08:00  GMT+5:30'),[2709, 0, 1763, 55]],[new Date('24 May 2020, 08:00  GMT+5:30'),[2757, 0, 1809, 56]],[new Date('25 May 2020, 08:00  GMT+5:30'),[2823, 0, 1856, 56]],[new Date('26 May 2020, 08:00  GMT+5:30'),[3110, 0, 1896, 56]],[new Date('27 May 2020, 08:00  GMT+5:30'),[3171, 0, 2009, 57]],[new Date('28 May 2020, 08:00  GMT+5:30'),[3171, 0, 2057, 58]],[new Date('29 May 2020, 08:00  GMT+5:30'),[3251, 0, 2125, 59]],[new Date('30 May 2020, 08:00  GMT+5:30'),[3436, 0, 2226, 60]],[new Date('31 May 2020, 08:00  GMT+5:30'),[3569, 0, 2289, 60]],[new Date('01 June 2020, 08:00  GMT+5:30'),[3679, 0, 2349, 62]],[new Date('02 June 2020, 08:00  GMT+5:30'),[3783, 0, 2378, 64]],[new Date('03 June 2020, 08:00  GMT+5:30'),[3898, 0, 2421, 64]],[new Date('04 June 2020, 08:00  GMT+5:30'),[4080, 0, 2466, 68]],[new Date('05 June 2020, 08:00  GMT+5:30'),[4223, 0, 2539, 71]],[new Date('06 June 2020, 08:00  GMT+5:30'),[4303, 0, 2576, 73]],[new Date('07 June 2020, 08:00  GMT+5:30'),[4510, 0, 2620, 73]],[new Date('08 June 2020, 08:00  GMT+5:30'),[4708, 0, 2682, 75]],[new Date('09 June 2020, 08:00  GMT+5:30'),[4851, 0, 2745, 75]],[new Date('10 June 2020, 08:00  GMT+5:30'),[5070, 0, 2802, 77]],[new Date('11 June 2020, 08:00  GMT+5:30'),[5269, 0, 2899, 78]],[new Date('12 June 2020, 08:00  GMT+5:30'),[5429, 0, 3048, 80]],[new Date('13 June 2020, 08:00  GMT+5:30'),[5680, 0, 3105, 80]],[new Date('14 June 2020, 08:00  GMT+5:30'),[5965, 0, 3195, 82]],[new Date('15 June 2020, 08:00  GMT+5:30'),[6163, 0, 3314, 84]],[new Date('16 June 2020, 08:00  GMT+5:30'),[6456, 0, 3316, 88]],[new Date('17 June 2020, 08:00  GMT+5:30'),[6841, 0, 3509, 88]],[new Date('18 June 2020, 08:00  GMT+5:30'),[7071, 0, 3641, 90]],[new Date('19 June 2020, 08:00  GMT+5:30'),[7518, 0, 3789, 92]],[new Date('20 June 2020, 08:00  GMT+5:30'),[7961, 0, 3917, 96]],[new Date('21 June 2020, 08:00  GMT+5:30'),[8452, 0, 4111, 101]],[new Date('22 June 2020, 08:00  GMT+5:30'),[8999, 0, 4331, 106]],[new Date('23 June 2020, 08:00  GMT+5:30'),[9372, 0, 4495, 111]],[new Date('24	June 2020, 08:00  GMT+5:30'),[10002, 0, 4599, 119]],[new Date('25	June 2020, 08:00  GMT+5:30'),[10331, 0, 4779, 124]],[new Date('26	June 2020, 08:00  GMT+5:30'),[10884, 0, 4988, 136]],[new Date('27	June 2020, 08:00  GMT+5:30'),[11489, 0, 5196, 148]],[new Date('28	June 2020, 08:00  GMT+5:30'),[12285, 0, 5480, 157]],[new Date('29	June 2020, 08:00  GMT+5:30'),[13241, 0, 5908, 169]],[new Date('30	June 2020, 08:00  GMT+5:30'),[13891, 0, 6232, 180]],[new Date('01	July 2020, 08:00  GMT+5:30'),[14595, 0, 6511, 187]],[new Date('02	July 2020, 08:00  GMT+5:30'),[15252, 0, 6988, 193]],[new Date('03	July 2020, 08:00  GMT+5:30'),[16097, 0, 7313, 198]],[new Date('04	July 2020, 08:00  GMT+5:30'),[16934, 0, 7632, 206]],[new Date('05	July 2020, 08:00  GMT+5:30'),[17699, 0, 8008, 218]],[new Date('06	July 2020, 08:00  GMT+5:30'),[18697, 0, 8422, 232]],[new Date('07	July 2020, 08:00  GMT+5:30'),[20019, 0, 8920, 239]],[new Date('08	July 2020, 08:00  GMT+5:30'),[21197, 0, 9745, 252]],[new Date('09	July 2020, 08:00  GMT+5:30'),[22259, 0, 11101, 264]],[new Date('10	July 2020, 08:00  GMT+5:30'),[23814, 0, 12154, 277]],[new Date('11	July 2020, 08:00  GMT+5:30'),[25422, 0, 13194, 292]],[new Date('12	July 2020, 08:00  GMT+5:30'),[27235, 0, 14393, 309]]];