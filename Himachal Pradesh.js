var rawData=[[new Date(2020,02,15,12,0),[ 0, 0,0,0]],[new Date(2020,02,15,17,0),[ 0, 0,0,0]],[new Date(2020,02,15,23,30),[ 0, 0,0,0]],[new Date(2020,02,16,16,0),[ 0, 0,0,0]],[new Date(2020,02,17,9,15),[ 0, 0,0,0]],[new Date(2020,02,17,17,15),[ 0, 0,0,0]],[new Date(2020,02,24,20,15),[3, 0, 0, 1]],[new Date(2020,02,25,9,15),[3, 0, 0, 1]],[new Date(2020,02,25,18,45),[3, 0, 0, 1]],[new Date(2020,02,26,10,15),[3, 0, 0, 1]],[new Date(2020,02,26,20,00),[3, 0, 0, 1]],[new Date(2020,02,27,9,15),[3, 0, 0, 1]],[new Date(2020,02,28,9,30),[3, 0, 0, 1]],[new Date(2020,02,28,17,45),[3, 0, 0, 1]],[new Date(2020,02,29,10,00),[3, 0, 0, 1]],[new Date(2020,02,29,19,30),[3, 0, 0, 1]],[new Date(2020,02,30,10,30),[3, 0, 0, 1]],[new Date(2020,02,30,21,30),[3, 0, 0, 1]],[new Date(2020,02,31,20,30),[3, 0, 0, 1]],[new Date('01 April 2020, 09:00 GMT+5:30'),[3, 0, 0, 1]],[new Date('01 April 2020, 19:30 GMT+5:30'),[3, 0, 0, 1]],[new Date('02 April 2020, 09:00 GMT+5:30'),[3, 0, 1, 1]],[new Date('02 April 2020, 18:00 GMT+5:30'),[3, 0, 1, 1]],[new Date('03 April 2020, 09:00 GMT+5:30'),[6, 0, 1, 1]],[new Date('03 April 2020, 18:00 GMT+5:30'),[6, 0, 1, 1]],[new Date('04 April 2020, 09:00 GMT+5:30'),[6, 0, 1, 1]],[new Date('04 April 2020, 18:00 GMT+5:30'),[6, 0, 1, 1]],[new Date('05 April 2020, 09:00 GMT+5:30'),[6, 0, 1, 1]],[new Date('05 April 2020, 18:00 GMT+5:30'),[6, 0, 1, 1]],[new Date('06 April 2020, 09:00 GMT+5:30'),[13, 0, 1, 1]],[new Date('06 April 2020, 18:00 GMT+5:30'),[13, 0, 2, 1]],[new Date('07 April 2020, 09:00 GMT+5:30'),[13, 0, 2, 1]],[new Date('07 April 2020, 18:00 GMT+5:30'),[13, 0, 2, 1]],[new Date('08 April 2020, 08:00 GMT+5:30'),[18, 0, 2, 1]],[new Date('08 April 2020, 17:00 GMT+5:30'),[18, 0, 2, 1]],[new Date('09 April 2020, 08:00 GMT+5:30'),[18, 0, 2, 1]],[new Date('09 April 2020, 17:00 GMT+5:30'),[18, 0, 2, 1]],[new Date('10 April 2020, 08:00 GMT+5:30'),[18, 0, 2, 1]],[new Date('10 April 2020, 17:00 GMT+5:30'),[28, 0, 6, 1]],[new Date('11 April 2020, 08:00 GMT+5:30'),[28, 0, 6, 1]],[new Date('11 April 2020, 17:00 GMT+5:30'),[28, 0, 6, 1]],[new Date('12 April 2020, 08:00 GMT+5:30'),[32, 0, 6, 1]],[new Date('12 April 2020, 17:00 GMT+5:30'),[32, 0, 6, 1]],[new Date('13 April 2020, 08:00 GMT+5:30'),[32, 0, 13, 1]],[new Date('13 April 2020, 17:00 GMT+5:30'),[32, 0, 13, 1]],[new Date('14 April 2020, 08:00 GMT+5:30'),[32, 0, 13, 1]],[new Date('14 April 2020, 17:00 GMT+5:30'),[32, 0, 13, 1]],[new Date('15 April 2020, 08:00 GMT+5:30'),[33, 0, 13, 1]],[new Date('15 April 2020, 17:00 GMT+5:30'),[33, 0, 13, 1]],[new Date('16 April 2020, 08:00 GMT+5:30'),[35, 0, 16, 1]],[new Date('16 April 2020, 17:00 GMT+5:30'),[35, 0, 16, 1]],[new Date('17 April 2020, 08:00 GMT+5:30'),[35, 0, 16, 1]],[new Date('17 April 2020, 17:00 GMT+5:30'),[35, 0, 16, 1]],[new Date('18 April 2020, 08:00 GMT+5:30'),[36, 0, 16, 1]],[new Date('18 April 2020, 17:00 GMT+5:30'),[38, 0, 16, 1]],[new Date('19 April 2020, 08:00 GMT+5:30'),[39, 0, 16, 1]],[new Date('19 April 2020, 17:00 GMT+5:30'),[39, 0, 16, 1]],[new Date('20 April 2020, 08:00 GMT+5:30'),[39, 0, 16, 1]],[new Date('20 April 2020, 17:00 GMT+5:30'),[39, 0, 16, 1]],[new Date('21 April 2020, 08:00 GMT+5:30'),[39, 0, 16, 1]],[new Date('21 April 2020, 17:00 GMT+5:30'),[39, 0, 16, 1]],[new Date('22 April 2020, 08:00 GMT+5:30'),[39, 0, 16, 1]],[new Date('22 April 2020, 17:00 GMT+5:30'),[39, 0, 16, 1]],[new Date('23 April 2020, 08:00 GMT+5:30'),[40, 0, 18, 1]],[new Date('23 April 2020, 17:00 GMT+5:30'),[40, 0, 18, 1]],[new Date('24 April 2020, 08:00 GMT+5:30'),[40, 0, 18, 1]],[new Date('24 April 2020, 17:00 GMT+5:30'),[40, 0, 18, 1]],[new Date('25 April 2020, 08:00 GMT+5:30'),[40, 0, 18, 1]],[new Date('25 April 2020, 17:00 GMT+5:30'),[40, 0, 18, 1]],[new Date('26 April 2020, 08:00 GMT+5:30'),[40, 0, 22, 1]],[new Date('26 April 2020, 17:00 GMT+5:30'),[40, 0, 22, 1]],[new Date('27 April 2020, 08:00 GMT+5:30'),[40, 0, 22, 1]],[new Date('27 April 2020, 17:00 GMT+5:30'),[40, 0, 22, 1]],[new Date('28 April 2020, 08:00 GMT+5:30'),[40, 0, 22, 1]],[new Date('28 April 2020, 17:00 GMT+5:30'),[40, 0, 22, 1]],[new Date('29 April 2020, 08:00 GMT+5:30'),[40, 0, 25, 1]],[new Date('29 April 2020, 17:00 GMT+5:30'),[40, 0, 25, 1]],[new Date('30 April 2020, 08:00 GMT+5:30'),[40, 0, 25, 1]],[new Date('30 April 2020, 17:00 GMT+5:30'),[40, 0, 25, 1]],[new Date('01 May 2020, 08:00 GMT+5:30'),[40, 0, 28, 1]],[new Date('01 May 2020, 17:00 GMT+5:30'),[40, 0, 28, 1]],[new Date('02 May 2020, 08:00 GMT+5:30'),[40, 0, 30, 1]],[new Date('02 May 2020, 17:00 GMT+5:30'),[40, 0, 30, 1]],[new Date('03 May 2020, 08:00 GMT+5:30'),[40, 0, 33, 1]],[new Date('03 May 2020, 17:00 GMT+5:30'),[40, 0, 33, 1]],[new Date('04 May 2020, 08:00 GMT+5:30'),[40, 0, 34, 1]],[new Date('04 May 2020, 17:00  GMT+5:30'),[40, 0, 34, 1]],[new Date('05 May 2020, 08:00  GMT+5:30'),[41, 0, 34, 1]],[new Date('05 May 2020, 17:00  GMT+5:30'),[41, 0, 38, 1]],[new Date('06 May 2020, 08:00  GMT+5:30'),[42, 0, 38, 2]],[new Date('07 May 2020, 08:00  GMT+5:30'),[45, 0, 38, 2]],[new Date('08 May 2020, 08:00  GMT+5:30'),[46, 0, 38, 2]],[new Date('09 May 2020, 08:00  GMT+5:30'),[50, 0, 38, 2]],[new Date('10 May 2020, 08:00  GMT+5:30'),[50, 0, 38, 2]],[new Date('11 May 2020, 08:00  GMT+5:30'),[55, 0, 39, 2]],[new Date('12 May 2020, 08:00  GMT+5:30'),[59, 0, 39, 2]],[new Date('13 May 2020, 08:00  GMT+5:30'),[65, 0, 39, 2]],[new Date('14 May 2020, 08:00  GMT+5:30'),[66, 0, 39, 2]],[new Date('15 May 2020, 08:00  GMT+5:30'),[74, 0, 39, 2]],[new Date('16 May 2020, 08:00  GMT+5:30'),[76, 0, 39, 3]],[new Date('17 May 2020, 08:00  GMT+5:30'),[78, 0, 43, 3]],[new Date('18 May 2020, 08:00  GMT+5:30'),[80, 0, 44, 3]],[new Date('19 May 2020, 08:00  GMT+5:30'),[90, 0, 44, 3]],[new Date('20 May 2020, 08:00  GMT+5:30'),[92, 0, 47, 3]],[new Date('21 May 2020, 08:00  GMT+5:30'),[110, 0, 54, 3]],[new Date('22 May 2020, 08:00  GMT+5:30'),[152, 0, 59, 3]],[new Date('23 May 2020, 08:00  GMT+5:30'),[168, 0, 59, 3]],[new Date('24 May 2020, 08:00  GMT+5:30'),[185, 0, 61, 3]],[new Date('25 May 2020, 08:00  GMT+5:30'),[203, 0, 63, 3]],[new Date('26 May 2020, 08:00  GMT+5:30'),[223, 0, 67, 5]],[new Date('27 May 2020, 08:00  GMT+5:30'),[247, 0, 67, 5]],[new Date('28 May 2020, 08:00  GMT+5:30'),[273, 0, 70, 5]],[new Date('29 May 2020, 08:00  GMT+5:30'),[276, 0, 70, 5]],[new Date('30 May 2020, 08:00  GMT+5:30'),[295, 0, 87, 5]],[new Date('31 May 2020, 08:00  GMT+5:30'),[313, 0, 111, 5]],[new Date('01 June 2020, 08:00  GMT+5:30'),[331, 0, 120, 5]],[new Date('02 June 2020, 08:00  GMT+5:30'),[340, 0, 122, 5]],[new Date('03 June 2020, 08:00  GMT+5:30'),[345, 0, 140, 5]],[new Date('04 June 2020, 08:00  GMT+5:30'),[359, 0, 150, 5]],[new Date('05 June 2020, 08:00  GMT+5:30'),[383, 0, 179, 5]],[new Date('06 June 2020, 08:00  GMT+5:30'),[393, 0, 189, 5]],[new Date('07 June 2020, 08:00  GMT+5:30'),[400, 0, 194, 5]],[new Date('08 June 2020, 08:00 GMT+5:30'),[413, 0, 224, 5]],[new Date('09 June 2020, 08:00  GMT+5:30'),[421, 0, 227, 5]],[new Date('10 June 2020, 08:00  GMT+5:30'),[445, 0, 249, 5]],[new Date('11 June 2020, 08:00  GMT+5:30'),[451, 0, 254, 6]],[new Date('12 June 2020, 08:00  GMT+5:30'),[470, 0, 280, 6]],[new Date('13 June 2020, 08:00  GMT+5:30'),[486, 0, 297, 6]],[new Date('14 June 2020, 08:00  GMT+5:30'),[502, 0, 313, 6]],[new Date('15 June 2020, 08:00  GMT+5:30'),[518, 0, 337, 7]],[new Date('16 June 2020, 08:00  GMT+5:30'),[556, 0, 353, 8]],[new Date('17 June 2020, 08:00  GMT+5:30'),[560, 0, 372, 8]],[new Date('18 June 2020, 08:00  GMT+5:30'),[569, 0, 372, 8]],[new Date('19 June 2020, 08:00  GMT+5:30'),[595, 0, 382, 8]],[new Date('20 June 2020, 08:00  GMT+5:30'),[619, 0, 388, 8]],[new Date('21 June 2020, 08:00  GMT+5:30'),[656, 0, 413, 8]],[new Date('22 June 2020, 08:00  GMT+5:30'),[673, 0, 425, 8]],[new Date('23 June 2020, 08:00  GMT+5:30'),[727, 0, 437, 8]],[new Date('24	June 2020, 08:00  GMT+5:30'),[775, 0, 443, 8]],[new Date('25	June 2020, 08:00  GMT+5:30'),[806, 0, 466, 8]],[new Date('26	June 2020, 08:00  GMT+5:30'),[839, 0, 477, 9]],[new Date('27	June 2020, 08:00  GMT+5:30'),[864, 0, 502, 9]],[new Date('28	June 2020, 08:00  GMT+5:30'),[894, 0, 509, 9]],[new Date('29	June 2020, 08:00  GMT+5:30'),[916, 0, 529, 9]],[new Date('30	June 2020, 08:00  GMT+5:30'),[942, 0, 556, 9]],[new Date('01	July 2020, 08:00  GMT+5:30'),[953, 0, 580, 10]],[new Date('02	July 2020, 08:00  GMT+5:30'),[979, 0, 614, 10]],[new Date('03	July 2020, 08:00  GMT+5:30'),[1014, 0, 628, 10]],[new Date('04	July 2020, 08:00  GMT+5:30'),[1033, 0, 667, 10]],[new Date('05	July 2020, 08:00  GMT+5:30'),[1046, 0, 704, 11]],[new Date('06	July 2020, 08:00  GMT+5:30'),[1063, 0, 737, 11]],[new Date('07	July 2020, 08:00  GMT+5:30'),[1077, 0, 763, 11]],[new Date('08	July 2020, 08:00  GMT+5:30'),[1083, 0, 790, 11]],[new Date('09	July 2020, 08:00  GMT+5:30'),[1101, 0, 833, 11]],[new Date('10	July 2020, 08:00  GMT+5:30'),[1140, 0, 846, 11]],[new Date('11	July 2020, 08:00  GMT+5:30'),[1171, 0, 883, 11]],[new Date('12	July 2020, 08:00  GMT+5:30'),[1182, 0, 908, 11]],[new Date('13	July 2020, 08:00  GMT+5:30'),[1213, 0, 929, 11]],[new Date('14	July 2020, 08:00  GMT+5:30'),[1243, 0, 940, 11]],[new Date('15	July 2020, 08:00  GMT+5:30'),[1309, 0, 951, 11]],[new Date('16	July 2020, 08:00  GMT+5:30'),[1341, 0, 979, 11]],[new Date('17	July 2020, 08:00  GMT+5:30'),[1377, 0, 984, 11]],[new Date('18	July 2020, 08:00  GMT+5:30'),[1417, 0, 1024, 11]],[new Date('19	July 2020, 08:00  GMT+5:30'),[1457, 0, 1036, 11]],[new Date('20	July 2020, 08:00  GMT+5:30'),[1483, 0, 1059, 11]],[new Date('21	July 2020, 08:00  GMT+5:30'),[1631, 0, 1067, 11]],[new Date('22	July 2020, 08:00  GMT+5:30'),[1664, 0, 1077, 11]],[new Date('23	July 2020, 08:00  GMT+5:30'),[1725, 0, 1105, 11]],[new Date('24	July 2020, 08:00  GMT+5:30'),[1834, 0, 1136, 11]],[new Date('25	July 2020, 08:00  GMT+5:30'),[1954, 0, 1145, 11]]];