var rawData=[[new Date(2020,02,15,12,0),[ 7, 0,2,1]],[new Date(2020,02,15,17,0),[ 7, 0,2,1]],[new Date(2020,02,15,23,30),[ 7, 0,2,1]],[new Date(2020,02,16,16,0),[ 7, 0,2,1]],[new Date(2020,02,17,9,15),[ 7, 0,2,1]],[new Date(2020,02,17,17,15),[ 8, 0,2,1]],[new Date(2020,02,24,20,15),[29, 1, 6, 2]],[new Date(2020,02,25,9,15),[30, 1, 6, 1]],[new Date(2020,02,25,18,45),[30, 1, 6, 1]],[new Date(2020,02,26,10,15),[34, 1, 6, 1]],[new Date(2020,02,26,20,00),[35, 1, 6, 1]],[new Date(2020,02,27,9,15),[35, 1, 6, 1]],[new Date(2020,02,28,9,30),[38, 1, 6, 1]],[new Date(2020,02,28,17,45),[38, 1, 6, 1]],[new Date(2020,02,29,10,00),[38, 1, 6, 2]],[new Date(2020,02,29,19,30),[49, 0, 6, 2]],[new Date(2020,02,30,10,30),[53, 0, 6, 2]],[new Date(2020,02,30,21,30),[87, 0, 6, 2]],[new Date(2020,02,31,20,30),[97, 0, 6, 2]],[new Date('01 April 2020, 09:00 GMT+5:30'),[120, 0, 6, 2]],[new Date('01 April 2020, 19:30 GMT+5:30'),[152, 0, 6, 2]],[new Date('02 April 2020, 09:00 GMT+5:30'),[152, 0, 6, 2]],[new Date('02 April 2020, 18:00 GMT+5:30'),[219, 0, 8, 4]],[new Date('03 April 2020, 09:00 GMT+5:30'),[219, 0, 8, 4]],[new Date('03 April 2020, 18:00 GMT+5:30'),[219, 0, 8, 4]],[new Date('04 April 2020, 09:00 GMT+5:30'),[386, 0, 8, 6]],[new Date('04 April 2020, 18:00 GMT+5:30'),[445, 0, 15, 6]],[new Date('05 April 2020, 09:00 GMT+5:30'),[445, 0, 15, 6]],[new Date('05 April 2020, 18:00 GMT+5:30'),[503, 0, 18, 7]],[new Date('06 April 2020, 09:00 GMT+5:30'),[503, 0, 18, 7]],[new Date('06 April 2020, 18:00 GMT+5:30'),[523, 0, 19, 7]],[new Date('07 April 2020, 09:00 GMT+5:30'),[523, 0, 19, 7]],[new Date('07 April 2020, 18:00 GMT+5:30'),[576, 0, 21, 7]],[new Date('08 April 2020, 08:00 GMT+5:30'),[576, 0, 21, 9]],[new Date('08 April 2020, 17:00 GMT+5:30'),[576, 0, 21, 9]],[new Date('09 April 2020, 08:00 GMT+5:30'),[669, 0, 21, 9]],[new Date('09 April 2020, 17:00 GMT+5:30'),[669, 0, 21, 9]],[new Date('10 April 2020, 08:00 GMT+5:30'),[720, 0, 25, 12]],[new Date('10 April 2020, 17:00 GMT+5:30'),[898, 0, 25, 13]],[new Date('11 April 2020, 08:00 GMT+5:30'),[903, 0, 25, 13]],[new Date('11 April 2020, 17:00 GMT+5:30'),[903, 0, 25, 14]],[new Date('12 April 2020, 08:00 GMT+5:30'),[1069, 0, 25, 19]],[new Date('12 April 2020, 17:00 GMT+5:30'),[1069, 0, 25, 19]],[new Date('13 April 2020, 08:00 GMT+5:30'),[1154, 0, 27, 24]],[new Date('13 April 2020, 17:00 GMT+5:30'),[1154, 0, 27, 24]],[new Date('14 April 2020, 08:00 GMT+5:30'),[1510, 0, 30, 28]],[new Date('14 April 2020, 17:00 GMT+5:30'),[1510, 0, 30, 28]],[new Date('15 April 2020, 08:00 GMT+5:30'),[1561, 0, 30, 30]],[new Date('15 April 2020, 17:00 GMT+5:30'),[1561, 0, 30, 30]],[new Date('16 April 2020, 08:00 GMT+5:30'),[1578, 0, 40, 32]],[new Date('16 April 2020, 17:00 GMT+5:30'),[1578, 0, 42, 32]],[new Date('17 April 2020, 08:00 GMT+5:30'),[1640, 0, 51, 38]],[new Date('17 April 2020, 17:00 GMT+5:30'),[1640, 0, 51, 38]],[new Date('18 April 2020, 08:00 GMT+5:30'),[1707, 0, 72, 42]],[new Date('18 April 2020, 17:00 GMT+5:30'),[1707, 0, 72, 42]],[new Date('19 April 2020, 08:00 GMT+5:30'),[1893, 0, 72, 42]],[new Date('19 April 2020, 17:00 GMT+5:30'),[1893, 0, 72, 43]],[new Date('20 April 2020, 08:00 GMT+5:30'),[2003, 0, 72, 45]],[new Date('20 April 2020, 17:00 GMT+5:30'),[2003, 0, 290, 45]],[new Date('21 April 2020, 08:00 GMT+5:30'),[2081, 0, 431, 47]],[new Date('21 April 2020, 17:00 GMT+5:30'),[2081, 0, 431, 47]],[new Date('22 April 2020, 08:00 GMT+5:30'),[2156, 0, 611, 47]],[new Date('22 April 2020, 17:00 GMT+5:30'),[2156, 0, 611, 47]],[new Date('23 April 2020, 08:00 GMT+5:30'),[2248, 0, 724, 48]],[new Date('23 April 2020, 17:00 GMT+5:30'),[2248, 0, 724, 48]],[new Date('24 April 2020, 08:00 GMT+5:30'),[2376, 0, 808, 50]],[new Date('24 April 2020, 17:00 GMT+5:30'),[2376, 0, 808, 50]],[new Date('25 April 2020, 08:00 GMT+5:30'),[2514, 0, 857, 53]],[new Date('25 April 2020, 17:00 GMT+5:30'),[2514, 0, 857, 53]],[new Date('26 April 2020, 08:00 GMT+5:30'),[2625, 0, 869, 54]],[new Date('26 April 2020, 17:00 GMT+5:30'),[2625, 0, 869, 54]],[new Date('27 April 2020, 08:00 GMT+5:30'),[2918, 0, 877, 54]],[new Date('27 April 2020, 17:00 GMT+5:30'),[2918, 0, 877, 54]],[new Date('28 April 2020, 08:00 GMT+5:30'),[3108, 0, 877, 54]],[new Date('28 April 2020, 17:00 GMT+5:30'),[3108, 0, 877, 54]],[new Date('29 April 2020, 08:00 GMT+5:30'),[3314, 0, 1078, 54]],[new Date('29 April 2020, 17:00 GMT+5:30'),[3314, 0, 1078, 54]],[new Date('30 April 2020, 08:00 GMT+5:30'),[3439, 0, 1092, 56]],[new Date('30 April 2020, 17:00 GMT+5:30'),[3439, 0, 1092, 56]],[new Date('01 May 2020, 08:00 GMT+5:30'),[3515, 0, 1094, 59]],[new Date('01 May 2020, 17:00 GMT+5:30'),[3515, 0, 1094, 59]],[new Date('02 May 2020, 08:00 GMT+5:30'),[3738, 0, 1167, 61]],[new Date('02 May 2020, 17:00 GMT+5:30'),[3738, 0, 1167, 61]],[new Date('03 May 2020, 08:00 GMT+5:30'),[4122, 0, 1256, 64]],[new Date('03 May 2020, 17:00 GMT+5:30'),[4122, 0, 1256, 64]],[new Date('04 May 2020, 08:00 GMT+5:30'),[4549, 0, 1362, 64]],[new Date('04 May 2020, 17:00  GMT+5:30'),[4549, 0, 1362, 64]],[new Date('05 May 2020, 08:00  GMT+5:30'),[4898, 0, 1431, 64]],[new Date('05 May 2020, 17:00  GMT+5:30'),[4898, 0, 1431, 64]],[new Date('06 May 2020, 08:00  GMT+5:30'),[5104, 0, 1468, 64]],[new Date('07 May 2020, 08:00  GMT+5:30'),[5532, 0, 1542, 65]],[new Date('08 May 2020, 08:00  GMT+5:30'),[5980, 0, 1931, 66]],[new Date('09 May 2020, 08:00  GMT+5:30'),[6318, 0, 2020, 68]],[new Date('10 May 2020, 08:00  GMT+5:30'),[6542, 0, 2020, 73]],[new Date('11 May 2020, 08:00  GMT+5:30'),[6923, 0, 2069, 73]],[new Date('12 May 2020, 08:00  GMT+5:30'),[7233, 0, 2129, 73]],[new Date('13 May 2020, 08:00  GMT+5:30'),[7639, 0, 2512, 86]],[new Date('14 May 2020, 08:00  GMT+5:30'),[7998, 0, 2858, 106]],[new Date('15 May 2020, 08:00  GMT+5:30'),[8470, 0, 3045, 115]],[new Date('16 May 2020, 08:00  GMT+5:30'),[8895, 0, 3518, 123]],[new Date('17 May 2020, 08:00  GMT+5:30'),[9333, 0, 3926, 129]],[new Date('18 May 2020, 08:00  GMT+5:30'),[10054, 0, 4485, 160]]];