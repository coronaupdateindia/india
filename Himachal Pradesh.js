var rawData=[[new Date(2020,02,15,12,0),[ 0, 0,0,0]],[new Date(2020,02,15,17,0),[ 0, 0,0,0]],[new Date(2020,02,15,23,30),[ 0, 0,0,0]],[new Date(2020,02,16,16,0),[ 0, 0,0,0]],[new Date(2020,02,17,9,15),[ 0, 0,0,0]],[new Date(2020,02,17,17,15),[ 0, 0,0,0]],[new Date(2020,02,24,20,15),[3, 0, 0, 1]],[new Date(2020,02,25,9,15),[3, 0, 0, 1]],[new Date(2020,02,25,18,45),[3, 0, 0, 1]],[new Date(2020,02,26,10,15),[3, 0, 0, 1]],[new Date(2020,02,26,20,00),[3, 0, 0, 1]],[new Date(2020,02,27,9,15),[3, 0, 0, 1]],[new Date(2020,02,28,9,30),[3, 0, 0, 1]],[new Date(2020,02,28,17,45),[3, 0, 0, 1]],[new Date(2020,02,29,10,00),[3, 0, 0, 1]],[new Date(2020,02,29,19,30),[3, 0, 0, 1]],[new Date(2020,02,30,10,30),[3, 0, 0, 1]],[new Date(2020,02,30,21,30),[3, 0, 0, 1]],[new Date(2020,02,31,20,30),[3, 0, 0, 1]],[new Date('01 April 2020, 09:00 GMT+5:30'),[3, 0, 0, 1]],[new Date('01 April 2020, 19:30 GMT+5:30'),[3, 0, 0, 1]],[new Date('02 April 2020, 09:00 GMT+5:30'),[3, 0, 1, 1]],[new Date('02 April 2020, 18:00 GMT+5:30'),[3, 0, 1, 1]],[new Date('03 April 2020, 09:00 GMT+5:30'),[6, 0, 1, 1]],[new Date('03 April 2020, 18:00 GMT+5:30'),[6, 0, 1, 1]],[new Date('04 April 2020, 09:00 GMT+5:30'),[6, 0, 1, 1]],[new Date('04 April 2020, 18:00 GMT+5:30'),[6, 0, 1, 1]],[new Date('05 April 2020, 09:00 GMT+5:30'),[6, 0, 1, 1]],[new Date('05 April 2020, 18:00 GMT+5:30'),[6, 0, 1, 1]],[new Date('06 April 2020, 09:00 GMT+5:30'),[13, 0, 1, 1]],[new Date('06 April 2020, 18:00 GMT+5:30'),[13, 0, 2, 1]],[new Date('07 April 2020, 09:00 GMT+5:30'),[13, 0, 2, 1]],[new Date('07 April 2020, 18:00 GMT+5:30'),[13, 0, 2, 1]],[new Date('08 April 2020, 08:00 GMT+5:30'),[18, 0, 2, 1]],[new Date('08 April 2020, 17:00 GMT+5:30'),[18, 0, 2, 1]],[new Date('09 April 2020, 08:00 GMT+5:30'),[18, 0, 2, 1]],[new Date('09 April 2020, 17:00 GMT+5:30'),[18, 0, 2, 1]],[new Date('10 April 2020, 08:00 GMT+5:30'),[18, 0, 2, 1]],[new Date('10 April 2020, 17:00 GMT+5:30'),[28, 0, 6, 1]],[new Date('11 April 2020, 08:00 GMT+5:30'),[28, 0, 6, 1]],[new Date('11 April 2020, 17:00 GMT+5:30'),[28, 0, 6, 1]],[new Date('12 April 2020, 08:00 GMT+5:30'),[32, 0, 6, 1]],[new Date('12 April 2020, 17:00 GMT+5:30'),[32, 0, 6, 1]],[new Date('13 April 2020, 08:00 GMT+5:30'),[32, 0, 13, 1]],[new Date('13 April 2020, 17:00 GMT+5:30'),[32, 0, 13, 1]],[new Date('14 April 2020, 08:00 GMT+5:30'),[32, 0, 13, 1]],[new Date('14 April 2020, 17:00 GMT+5:30'),[32, 0, 13, 1]],[new Date('15 April 2020, 08:00 GMT+5:30'),[33, 0, 13, 1]],[new Date('15 April 2020, 17:00 GMT+5:30'),[33, 0, 13, 1]],[new Date('16 April 2020, 08:00 GMT+5:30'),[35, 0, 16, 1]],[new Date('16 April 2020, 17:00 GMT+5:30'),[35, 0, 16, 1]],[new Date('17 April 2020, 08:00 GMT+5:30'),[35, 0, 16, 1]],[new Date('17 April 2020, 17:00 GMT+5:30'),[35, 0, 16, 1]],[new Date('18 April 2020, 08:00 GMT+5:30'),[36, 0, 16, 1]],[new Date('18 April 2020, 17:00 GMT+5:30'),[38, 0, 16, 1]],[new Date('19 April 2020, 08:00 GMT+5:30'),[39, 0, 16, 1]],[new Date('19 April 2020, 17:00 GMT+5:30'),[39, 0, 16, 1]],[new Date('20 April 2020, 08:00 GMT+5:30'),[39, 0, 16, 1]],[new Date('20 April 2020, 17:00 GMT+5:30'),[39, 0, 16, 1]],[new Date('21 April 2020, 08:00 GMT+5:30'),[39, 0, 16, 1]],[new Date('21 April 2020, 17:00 GMT+5:30'),[39, 0, 16, 1]],[new Date('22 April 2020, 08:00 GMT+5:30'),[39, 0, 16, 1]],[new Date('22 April 2020, 17:00 GMT+5:30'),[39, 0, 16, 1]],[new Date('23 April 2020, 08:00 GMT+5:30'),[40, 0, 18, 1]],[new Date('23 April 2020, 17:00 GMT+5:30'),[40, 0, 18, 1]],[new Date('24 April 2020, 08:00 GMT+5:30'),[40, 0, 18, 1]],[new Date('24 April 2020, 17:00 GMT+5:30'),[40, 0, 18, 1]],[new Date('25 April 2020, 08:00 GMT+5:30'),[40, 0, 18, 1]],[new Date('25 April 2020, 17:00 GMT+5:30'),[40, 0, 18, 1]],[new Date('26 April 2020, 08:00 GMT+5:30'),[40, 0, 22, 1]],[new Date('26 April 2020, 17:00 GMT+5:30'),[40, 0, 22, 1]],[new Date('27 April 2020, 08:00 GMT+5:30'),[40, 0, 22, 1]],[new Date('27 April 2020, 17:00 GMT+5:30'),[40, 0, 22, 1]],[new Date('28 April 2020, 08:00 GMT+5:30'),[40, 0, 22, 1]],[new Date('28 April 2020, 17:00 GMT+5:30'),[40, 0, 22, 1]],[new Date('29 April 2020, 08:00 GMT+5:30'),[40, 0, 25, 1]],[new Date('29 April 2020, 17:00 GMT+5:30'),[40, 0, 25, 1]],[new Date('30 April 2020, 08:00 GMT+5:30'),[40, 0, 25, 1]],[new Date('30 April 2020, 17:00 GMT+5:30'),[40, 0, 25, 1]],[new Date('01 May 2020, 08:00 GMT+5:30'),[40, 0, 28, 1]],[new Date('01 May 2020, 17:00 GMT+5:30'),[40, 0, 28, 1]],[new Date('02 May 2020, 08:00 GMT+5:30'),[40, 0, 30, 1]],[new Date('02 May 2020, 17:00 GMT+5:30'),[40, 0, 30, 1]],[new Date('03 May 2020, 08:00 GMT+5:30'),[40, 0, 33, 1]],[new Date('03 May 2020, 17:00 GMT+5:30'),[40, 0, 33, 1]],[new Date('04 May 2020, 08:00 GMT+5:30'),[40, 0, 34, 1]],[new Date('04 May 2020, 17:00  GMT+5:30'),[40, 0, 34, 1]],[new Date('05 May 2020, 08:00  GMT+5:30'),[41, 0, 34, 1]],[new Date('05 May 2020, 17:00  GMT+5:30'),[41, 0, 38, 1]],[new Date('06 May 2020, 08:00  GMT+5:30'),[42, 0, 38, 2]],[new Date('07 May 2020, 08:00  GMT+5:30'),[45, 0, 38, 2]],[new Date('08 May 2020, 08:00  GMT+5:30'),[46, 0, 38, 2]],[new Date('09 May 2020, 08:00  GMT+5:30'),[50, 0, 38, 2]],[new Date('10 May 2020, 08:00  GMT+5:30'),[50, 0, 38, 2]]];