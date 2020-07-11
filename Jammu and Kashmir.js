var rawData=[[new Date(2020,02,15,12,0),[ 2, 0,0,0]],[new Date(2020,02,15,17,0),[ 2, 0,0,0]],[new Date(2020,02,15,23,30),[ 2, 0,0,0]],[new Date(2020,02,16,16,0),[ 3, 0,0,0]],[new Date(2020,02,17,9,15),[ 3, 0,0,0]],[new Date(2020,02,17,17,15),[ 3, 0,0,0]],[new Date(2020,02,24,20,15),[4, 0, 0, 0]],[new Date(2020,02,25,9,15),[7, 0, 1, 0]],[new Date(2020,02,25,18,45),[7, 0, 1, 0]],[new Date(2020,02,26,10,15),[11, 0, 1, 0]],[new Date(2020,02,26,20,00),[13, 0, 1, 1]],[new Date(2020,02,27,9,15),[13, 0, 1, 1]],[new Date(2020,02,28,9,30),[18, 0, 1, 1]],[new Date(2020,02,28,17,45),[20, 0, 1, 1]],[new Date(2020,02,29,10,00),[31, 0, 1, 1]],[new Date(2020,02,29,19,30),[31, 0, 1, 2]],[new Date(2020,02,30,10,30),[31, 0, 1, 2]],[new Date(2020,02,30,21,30),[48, 0, 2, 2]],[new Date(2020,02,31,20,30),[54, 0, 2, 2]],[new Date('01 April 2020, 09:00 GMT+5:30'),[55, 0, 2, 2]],[new Date('01 April 2020, 19:30 GMT+5:30'),[62, 0, 2, 2]],[new Date('02 April 2020, 09:00 GMT+5:30'),[62, 0, 2, 2]],[new Date('02 April 2020, 18:00 GMT+5:30'),[62, 0, 2, 2]],[new Date('03 April 2020, 09:00 GMT+5:30'),[70, 0, 3, 2]],[new Date('03 April 2020, 18:00 GMT+5:30'),[75, 0, 3, 2]],[new Date('04 April 2020, 09:00 GMT+5:30'),[75, 0, 3, 2]],[new Date('04 April 2020, 18:00 GMT+5:30'),[75, 0, 3, 2]],[new Date('05 April 2020, 09:00 GMT+5:30'),[92, 0, 4, 2]],[new Date('05 April 2020, 18:00 GMT+5:30'),[106, 0, 4, 2]],[new Date('06 April 2020, 09:00 GMT+5:30'),[106, 0, 4, 2]],[new Date('06 April 2020, 18:00 GMT+5:30'),[109, 0, 4, 2]],[new Date('07 April 2020, 09:00 GMT+5:30'),[109, 0, 4, 2]],[new Date('07 April 2020, 18:00 GMT+5:30'),[116, 0, 4, 2]],[new Date('08 April 2020, 08:00 GMT+5:30'),[116, 0, 4, 2]],[new Date('08 April 2020, 17:00 GMT+5:30'),[116, 0, 4, 2]],[new Date('09 April 2020, 08:00 GMT+5:30'),[158, 0, 4, 4]],[new Date('09 April 2020, 17:00 GMT+5:30'),[158, 0, 4, 4]],[new Date('10 April 2020, 08:00 GMT+5:30'),[158, 0, 4, 4]],[new Date('10 April 2020, 17:00 GMT+5:30'),[184, 0, 6, 4]],[new Date('11 April 2020, 08:00 GMT+5:30'),[207, 0, 6, 4]],[new Date('11 April 2020, 17:00 GMT+5:30'),[207, 0, 6, 4]],[new Date('12 April 2020, 08:00 GMT+5:30'),[207, 0, 6, 4]],[new Date('12 April 2020, 17:00 GMT+5:30'),[224, 0, 6, 4]],[new Date('13 April 2020, 08:00 GMT+5:30'),[245, 0, 6, 4]],[new Date('13 April 2020, 17:00 GMT+5:30'),[245, 0, 6, 4]],[new Date('14 April 2020, 08:00 GMT+5:30'),[270, 0, 16, 4]],[new Date('14 April 2020, 17:00 GMT+5:30'),[270, 0, 16, 4]],[new Date('15 April 2020, 08:00 GMT+5:30'),[278, 0, 30, 4]],[new Date('15 April 2020, 17:00 GMT+5:30'),[278, 0, 30, 4]],[new Date('16 April 2020, 08:00 GMT+5:30'),[300, 0, 36, 4]],[new Date('16 April 2020, 17:00 GMT+5:30'),[300, 0, 36, 4]],[new Date('17 April 2020, 08:00 GMT+5:30'),[314, 0, 38, 4]],[new Date('17 April 2020, 17:00 GMT+5:30'),[314, 0, 38, 4]],[new Date('18 April 2020, 08:00 GMT+5:30'),[328, 0, 42, 5]],[new Date('18 April 2020, 17:00 GMT+5:30'),[328, 0, 42, 5]],[new Date('19 April 2020, 08:00 GMT+5:30'),[341, 0, 51, 5]],[new Date('19 April 2020, 17:00 GMT+5:30'),[341, 0, 51, 5]],[new Date('20 April 2020, 08:00 GMT+5:30'),[350, 0, 56, 5]],[new Date('20 April 2020, 17:00 GMT+5:30'),[350, 0, 56, 5]],[new Date('21 April 2020, 08:00 GMT+5:30'),[368, 0, 71, 5]],[new Date('21 April 2020, 17:00 GMT+5:30'),[368, 0, 71, 5]],[new Date('22 April 2020, 08:00 GMT+5:30'),[380, 0, 81, 5]],[new Date('22 April 2020, 17:00 GMT+5:30'),[380, 0, 81, 5]],[new Date('23 April 2020, 08:00 GMT+5:30'),[407, 0, 92, 5]],[new Date('23 April 2020, 17:00 GMT+5:30'),[407, 0, 92, 5]],[new Date('24 April 2020, 08:00 GMT+5:30'),[427, 0, 92, 5]],[new Date('24 April 2020, 17:00 GMT+5:30'),[427, 0, 92, 5]],[new Date('25 April 2020, 08:00 GMT+5:30'),[454, 0, 109, 5]],[new Date('25 April 2020, 17:00 GMT+5:30'),[454, 0, 109, 5]],[new Date('26 April 2020, 08:00 GMT+5:30'),[494, 0, 112, 6]],[new Date('26 April 2020, 17:00 GMT+5:30'),[494, 0, 112, 6]],[new Date('27 April 2020, 08:00 GMT+5:30'),[523, 0, 137, 6]],[new Date('27 April 2020, 17:00 GMT+5:30'),[523, 0, 137, 6]],[new Date('28 April 2020, 08:00 GMT+5:30'),[546, 0, 164, 7]],[new Date('28 April 2020, 17:00 GMT+5:30'),[546, 0, 164, 7]],[new Date('29 April 2020, 08:00 GMT+5:30'),[565, 0, 176, 8]],[new Date('29 April 2020, 17:00 GMT+5:30'),[565, 0, 176, 8]],[new Date('30 April 2020, 08:00 GMT+5:30'),[581, 0, 192, 8]],[new Date('30 April 2020, 17:00 GMT+5:30'),[581, 0, 192, 8]],[new Date('01 May 2020, 08:00 GMT+5:30'),[614, 0, 216, 8]],[new Date('01 May 2020, 17:00 GMT+5:30'),[614, 0, 216, 8]],[new Date('02 May 2020, 08:00 GMT+5:30'),[639, 0, 247, 8]],[new Date('02 May 2020, 17:00 GMT+5:30'),[639, 0, 247, 8]],[new Date('03 May 2020, 08:00 GMT+5:30'),[666, 0, 254, 8]],[new Date('03 May 2020, 17:00 GMT+5:30'),[666, 0, 254, 8]],[new Date('04 May 2020, 08:00 GMT+5:30'),[701, 0, 287, 8]],[new Date('04 May 2020, 17:00  GMT+5:30'),[701, 0, 287, 8]],[new Date('05 May 2020, 08:00  GMT+5:30'),[726, 0, 303, 8]],[new Date('05 May 2020, 17:00  GMT+5:30'),[726, 0, 303, 8]],[new Date('06 May 2020, 08:00  GMT+5:30'),[741, 0, 320, 8]],[new Date('07 May 2020, 08:00  GMT+5:30'),[775, 0, 322, 8]],[new Date('08 May 2020, 08:00  GMT+5:30'),[793, 0, 335, 9]],[new Date('09 May 2020, 08:00  GMT+5:30'),[823, 0, 364, 9]],[new Date('10 May 2020, 08:00  GMT+5:30'),[836, 0, 368, 9]],[new Date('11 May 2020, 08:00  GMT+5:30'),[861, 0, 383, 9]],[new Date('12 May 2020, 08:00  GMT+5:30'),[879, 0, 427, 10]],[new Date('13 May 2020, 08:00  GMT+5:30'),[934, 0, 455, 10]],[new Date('14 May 2020, 08:00  GMT+5:30'),[971, 0, 466, 11]],[new Date('15 May 2020, 08:00  GMT+5:30'),[983, 0, 485, 11]],[new Date('16 May 2020, 08:00  GMT+5:30'),[1013, 0, 513, 11]],[new Date('17 May 2020, 08:00  GMT+5:30'),[1121, 0, 542, 12]],[new Date('18 May 2020, 08:00  GMT+5:30'),[1183, 0, 575, 13]],[new Date('19 May 2020, 08:00  GMT+5:30'),[1289, 0, 609, 15]],[new Date('20 May 2020, 08:00  GMT+5:30'),[1317, 0, 653, 17]],[new Date('21 May 2020, 08:00  GMT+5:30'),[1390, 0, 678, 18]],[new Date('22 May 2020, 08:00  GMT+5:30'),[1449, 0, 684, 20]],[new Date('23 May 2020, 08:00  GMT+5:30'),[1489, 0, 720, 20]],[new Date('24 May 2020, 08:00  GMT+5:30'),[1569, 0, 774, 21]],[new Date('25 May 2020, 08:00  GMT+5:30'),[1621, 0, 809, 21]],[new Date('26 May 2020, 08:00  GMT+5:30'),[1668, 0, 809, 23]],[new Date('27 May 2020, 08:00  GMT+5:30'),[1759, 0, 833, 24]],[new Date('28 May 2020, 08:00  GMT+5:30'),[1921, 0, 854, 26]],[new Date('29 May 2020, 08:00  GMT+5:30'),[2036, 0, 859, 27]],[new Date('30 May 2020, 08:00  GMT+5:30'),[2164, 0, 875, 28]],[new Date('31 May 2020, 08:00  GMT+5:30'),[2341, 0, 908, 28]],[new Date('01 June 2020, 08:00  GMT+5:30'),[2446, 0, 927, 28]],[new Date('02 June 2020, 08:00  GMT+5:30'),[2601, 0, 946, 31]],[new Date('03 June 2020, 08:00  GMT+5:30'),[2718, 0, 953, 33]],[new Date('04 June 2020, 08:00  GMT+5:30'),[2857, 0, 1007, 34]],[new Date('05 June 2020, 08:00  GMT+5:30'),[3142, 0, 1048, 35]],[new Date('06 June 2020, 08:00  GMT+5:30'),[3324, 0, 1086, 36]],[new Date('07 June 2020, 08:00  GMT+5:30'),[3467, 0, 1126, 39]],[new Date('08 June 2020, 08:00 GMT+5:30'),[4087, 0, 1216, 41]],[new Date('09 June 2020, 08:00  GMT+5:30'),[4285, 0, 1324, 45]],[new Date('10 June 2020, 08:00  GMT+5:30'),[4346, 0, 1506, 48]],[new Date('11 June 2020, 08:00  GMT+5:30'),[4507, 0, 1671, 51]],[new Date('12 June 2020, 08:00  GMT+5:30'),[4574, 0, 1820, 52]],[new Date('13 June 2020, 08:00  GMT+5:30'),[4730, 0, 2086, 53]],[new Date('14 June 2020, 08:00  GMT+5:30'),[4878, 0, 2269, 55]],[new Date('15 June 2020, 08:00  GMT+5:30'),[5041, 0, 2389, 59]],[new Date('16 June 2020, 08:00  GMT+5:30'),[5220, 0, 2604, 62]],[new Date('17 June 2020, 08:00  GMT+5:30'),[5298, 0, 2781, 63]],[new Date('18 June 2020, 08:00  GMT+5:30'),[5406, 0, 2914, 65]],[new Date('19 June 2020, 08:00  GMT+5:30'),[5555, 0, 3144, 71]],[new Date('20 June 2020, 08:00  GMT+5:30'),[5680, 0, 3194, 75]],[new Date('21 June 2020, 08:00  GMT+5:30'),[5834, 0, 3336, 81]],[new Date('22 June 2020, 08:00  GMT+5:30'),[5956, 0, 3382, 82]],[new Date('23 June 2020, 08:00  GMT+5:30'),[6088, 0, 3531, 85]],[new Date('24	June 2020, 08:00  GMT+5:30'),[6236, 0, 3642, 87]],[new Date('25	June 2020, 08:00  GMT+5:30'),[6422, 0, 3818, 88]],[new Date('26	June 2020, 08:00  GMT+5:30'),[6549, 0, 3967, 90]],[new Date('27	June 2020, 08:00  GMT+5:30'),[6762, 0, 4080, 91]],[new Date('28	June 2020, 08:00  GMT+5:30'),[6966, 0, 4225, 93]],[new Date('29	June 2020, 08:00  GMT+5:30'),[7093, 0, 4316, 94]],[new Date('30	June 2020, 08:00  GMT+5:30'),[7237, 0, 4585, 95]],[new Date('01	July 2020, 08:00  GMT+5:30'),[7497, 0, 4722, 101]],[new Date('02	July 2020, 08:00  GMT+5:30'),[7695, 0, 4856, 105]],[new Date('03	July 2020, 08:00  GMT+5:30'),[7849, 0, 4974, 115]],[new Date('04	July 2020, 08:00  GMT+5:30'),[8019, 0, 5075, 119]],[new Date('05	July 2020, 08:00  GMT+5:30'),[8246, 0, 5143, 127]],[new Date('06	July 2020, 08:00  GMT+5:30'),[8429, 0, 5255, 132]],[new Date('07	July 2020, 08:00  GMT+5:30'),[8675, 0, 5318, 138]],[new Date('08	July 2020, 08:00  GMT+5:30'),[8931, 0, 5399, 143]],[new Date('09	July 2020, 08:00  GMT+5:30'),[9261, 0, 5567, 149]],[new Date('10	July 2020, 08:00  GMT+5:30'),[9501, 0, 5695, 154]],[new Date('11	July 2020, 08:00  GMT+5:30'),[9888, 0, 5786, 159]]];