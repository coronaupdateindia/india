var rawData=[[new Date(2020,02,15,12,0),[ 0, 0,0,0]],[new Date(2020,02,15,17,0),[ 0, 0,0,0]],[new Date(2020,02,15,23,30),[ 0, 0,0,0]],[new Date(2020,02,16,16,0),[ 0, 0,0,0]],[new Date(2020,02,17,9,15),[ 0, 0,0,0]],[new Date(2020,02,17,17,15),[ 0, 0,0,0]],[new Date(2020,02,24,20,15),[1, 0, 0, 0]],[new Date(2020,02,25,9,15),[1, 0, 0, 0]],[new Date(2020,02,25,18,45),[1, 0, 0, 0]],[new Date(2020,02,26,10,15),[1, 0, 0, 0]],[new Date(2020,02,26,20,00),[1, 0, 0, 0]],[new Date(2020,02,27,9,15),[1, 0, 0, 0]],[new Date(2020,02,28,9,30),[1, 0, 0, 0]],[new Date(2020,02,28,17,45),[1, 0, 0, 0]],[new Date(2020,02,29,10,00),[1, 0, 0, 0]],[new Date(2020,02,29,19,30),[1, 0, 0, 0]],[new Date(2020,02,30,10,30),[1, 0, 0, 0]],[new Date(2020,02,30,21,30),[1, 0, 0, 0]],[new Date(2020,02,31,20,30),[1, 0, 0, 0]],[new Date('01 April 2020, 09:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('01 April 2020, 19:30 GMT+5:30'),[1, 0, 0, 0]],[new Date('02 April 2020, 09:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('02 April 2020, 18:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('03 April 2020, 09:00 GMT+5:30'),[2, 0, 0, 0]],[new Date('03 April 2020, 18:00 GMT+5:30'),[2, 0, 0, 0]],[new Date('04 April 2020, 09:00 GMT+5:30'),[2, 0, 0, 0]],[new Date('04 April 2020, 18:00 GMT+5:30'),[2, 0, 0, 0]],[new Date('05 April 2020, 09:00 GMT+5:30'),[2, 0, 0, 0]],[new Date('05 April 2020, 18:00 GMT+5:30'),[2, 0, 0, 0]],[new Date('06 April 2020, 09:00 GMT+5:30'),[2, 0, 0, 0]],[new Date('06 April 2020, 18:00 GMT+5:30'),[2, 0, 0, 0]],[new Date('07 April 2020, 09:00 GMT+5:30'),[2, 0, 0, 0]],[new Date('07 April 2020, 18:00 GMT+5:30'),[2, 0, 0, 0]],[new Date('08 April 2020, 08:00 GMT+5:30'),[2, 0, 0, 0]],[new Date('08 April 2020, 17:00 GMT+5:30'),[2, 0, 0, 0]],[new Date('09 April 2020, 08:00 GMT+5:30'),[1, 0, 1, 0]],[new Date('09 April 2020, 17:00 GMT+5:30'),[2, 0, 1, 0]],[new Date('10 April 2020, 08:00 GMT+5:30'),[2, 0, 1, 0]],[new Date('10 April 2020, 17:00 GMT+5:30'),[2, 0, 1, 0]],[new Date('11 April 2020, 08:00 GMT+5:30'),[2, 0, 1, 0]],[new Date('11 April 2020, 17:00 GMT+5:30'),[2, 0, 1, 0]],[new Date('12 April 2020, 08:00 GMT+5:30'),[2, 0, 1, 0]],[new Date('12 April 2020, 17:00 GMT+5:30'),[2, 0, 1, 0]],[new Date('13 April 2020, 08:00 GMT+5:30'),[2, 0, 1, 0]],[new Date('13 April 2020, 17:00 GMT+5:30'),[2, 0, 1, 0]],[new Date('14 April 2020, 08:00 GMT+5:30'),[2, 0, 1, 0]],[new Date('14 April 2020, 17:00 GMT+5:30'),[2, 0, 1, 0]],[new Date('15 April 2020, 08:00 GMT+5:30'),[2, 0, 1, 0]],[new Date('15 April 2020, 17:00 GMT+5:30'),[2, 0, 1, 0]],[new Date('16 April 2020, 08:00 GMT+5:30'),[2, 0, 1, 0]],[new Date('16 April 2020, 17:00 GMT+5:30'),[2, 0, 1, 0]],[new Date('17 April 2020, 08:00 GMT+5:30'),[2, 0, 1, 0]],[new Date('17 April 2020, 17:00 GMT+5:30'),[2, 0, 1, 0]],[new Date('18 April 2020, 08:00 GMT+5:30'),[2, 0, 1, 0]],[new Date('18 April 2020, 17:00 GMT+5:30'),[2, 0, 1, 0]],[new Date('19 April 2020, 08:00 GMT+5:30'),[2, 0, 1, 0]],[new Date('19 April 2020, 17:00 GMT+5:30'),[2, 0, 1, 0]],[new Date('20 April 2020, 08:00 GMT+5:30'),[2, 0, 1, 0]],[new Date('20 April 2020, 17:00 GMT+5:30'),[2, 0, 2, 0]],[new Date('21 April 2020, 08:00 GMT+5:30'),[2, 0, 2, 0]],[new Date('21 April 2020, 17:00 GMT+5:30'),[2, 0, 2, 0]],[new Date('22 April 2020, 08:00 GMT+5:30'),[2, 0, 2, 0]],[new Date('22 April 2020, 17:00 GMT+5:30'),[2, 0, 2, 0]],[new Date('23 April 2020, 08:00 GMT+5:30'),[2, 0, 2, 0]],[new Date('23 April 2020, 17:00 GMT+5:30'),[2, 0, 2, 0]],[new Date('24 April 2020, 08:00 GMT+5:30'),[2, 0, 2, 0]],[new Date('24 April 2020, 17:00 GMT+5:30'),[2, 0, 2, 0]],[new Date('25 April 2020, 08:00 GMT+5:30'),[2, 0, 2, 0]],[new Date('25 April 2020, 17:00 GMT+5:30'),[2, 0, 2, 0]],[new Date('26 April 2020, 08:00 GMT+5:30'),[2, 0, 2, 0]],[new Date('26 April 2020, 17:00 GMT+5:30'),[2, 0, 2, 0]],[new Date('27 April 2020, 08:00 GMT+5:30'),[2, 0, 2, 0]],[new Date('27 April 2020, 17:00 GMT+5:30'),[2, 0, 2, 0]],[new Date('28 April 2020, 08:00 GMT+5:30'),[2, 0, 2, 0]],[new Date('28 April 2020, 17:00 GMT+5:30'),[2, 0, 2, 0]],[new Date('29 April 2020, 08:00 GMT+5:30'),[2, 0, 2, 0]],[new Date('29 April 2020, 17:00 GMT+5:30'),[2, 0, 2, 0]],[new Date('30 April 2020, 08:00 GMT+5:30'),[2, 0, 2, 0]],[new Date('30 April 2020, 17:00 GMT+5:30'),[2, 0, 2, 0]],[new Date('01 May 2020, 08:00 GMT+5:30'),[2, 0, 2, 0]],[new Date('01 May 2020, 17:00 GMT+5:30'),[2, 0, 2, 0]],[new Date('02 May 2020, 08:00 GMT+5:30'),[2, 0, 2, 0]],[new Date('02 May 2020, 17:00 GMT+5:30'),[2, 0, 2, 0]],[new Date('03 May 2020, 08:00 GMT+5:30'),[2, 0, 2, 0]],[new Date('03 May 2020, 17:00 GMT+5:30'),[2, 0, 2, 0]],[new Date('04 May 2020, 08:00 GMT+5:30'),[2, 0, 2, 0]],[new Date('04 May 2020, 17:00  GMT+5:30'),[2, 0, 2, 0]],[new Date('05 May 2020, 08:00  GMT+5:30'),[2, 0, 2, 0]],[new Date('05 May 2020, 17:00  GMT+5:30'),[2, 0, 2, 0]],[new Date('06 May 2020, 08:00  GMT+5:30'),[2, 0, 2, 0]],[new Date('07 May 2020, 08:00  GMT+5:30'),[2, 0, 2, 0]],[new Date('08 May 2020, 08:00  GMT+5:30'),[2, 0, 2, 0]],[new Date('09 May 2020, 08:00  GMT+5:30'),[2, 0, 2, 0]],[new Date('10 May 2020, 08:00  GMT+5:30'),[2, 0, 2, 0]],[new Date('11 May 2020, 08:00  GMT+5:30'),[2, 0, 2, 0]],[new Date('12 May 2020, 08:00  GMT+5:30'),[2, 0, 2, 0]],[new Date('13 May 2020, 08:00  GMT+5:30'),[2, 0, 2, 0]],[new Date('14 May 2020, 08:00  GMT+5:30'),[2, 0, 2, 0]],[new Date('15 May 2020, 08:00  GMT+5:30'),[3, 0, 2, 0]],[new Date('16 May 2020, 08:00  GMT+5:30'),[3, 0, 2, 0]],[new Date('17 May 2020, 08:00  GMT+5:30'),[7, 0, 2, 0]],[new Date('18 May 2020, 08:00  GMT+5:30'),[7, 0, 2, 0]],[new Date('19 May 2020, 08:00  GMT+5:30'),[7, 0, 2, 0]],[new Date('20 May 2020, 08:00  GMT+5:30'),[9, 0, 2, 0]],[new Date('21 May 2020, 08:00  GMT+5:30'),[25, 0, 2, 0]],[new Date('22 May 2020, 08:00  GMT+5:30'),[25, 0, 2, 0]],[new Date('23 May 2020, 08:00  GMT+5:30'),[26, 0, 2, 0]],[new Date('24 May 2020, 08:00  GMT+5:30'),[29, 0, 4, 0]],[new Date('25 May 2020, 08:00  GMT+5:30'),[32, 0, 4, 0]],[new Date('26 May 2020, 08:00  GMT+5:30'),[39, 0, 4, 0]],[new Date('27 May 2020, 08:00  GMT+5:30'),[39, 0, 4, 0]],[new Date('28 May 2020, 08:00  GMT+5:30'),[44, 0, 4, 0]],[new Date('29 May 2020, 08:00  GMT+5:30'),[55, 0, 5, 0]],[new Date('30 May 2020, 08:00  GMT+5:30'),[59, 0, 8, 0]],[new Date('31 May 2020, 08:00  GMT+5:30'),[62, 0, 8, 0]],[new Date('01 June 2020, 08:00  GMT+5:30'),[71, 0, 11, 0]],[new Date('02 June 2020, 08:00  GMT+5:30'),[83, 0, 11, 0]],[new Date('03 June 2020, 08:00  GMT+5:30'),[89, 0, 14, 0]],[new Date('04 June 2020, 08:00  GMT+5:30'),[118, 0, 38, 0]],[new Date('05 June 2020, 08:00  GMT+5:30'),[124, 0, 38, 0]],[new Date('06 June 2020, 08:00  GMT+5:30'),[132, 0, 41, 0]],[new Date('07 June 2020, 08:00  GMT+5:30'),[157, 0, 52, 0]],[new Date('08 June 2020, 08:00 GMT+5:30'),[172, 0, 52, 0]],[new Date('09 June 2020, 08:00  GMT+5:30'),[272, 0, 58, 0]],[new Date('10 June 2020, 08:00  GMT+5:30'),[304, 0, 61, 0]],[new Date('11 June 2020, 08:00  GMT+5:30'),[311, 0, 63, 0]],[new Date('12 June 2020, 08:00  GMT+5:30'),[366, 0, 73, 0]],[new Date('13 June 2020, 08:00  GMT+5:30'),[385, 0, 77, 0]],[new Date('14 June 2020, 08:00  GMT+5:30'),[449, 0, 91, 0]],[new Date('15 June 2020, 08:00  GMT+5:30'),[458, 0, 91, 0]],[new Date('16 June 2020, 08:00  GMT+5:30'),[490, 0, 151, 0]],[new Date('17 June 2020, 08:00  GMT+5:30'),[500, 0, 159, 0]],[new Date('18 June 2020, 08:00  GMT+5:30'),[552, 0, 192, 0]],[new Date('19 June 2020, 08:00  GMT+5:30'),[606, 0, 199, 0]],[new Date('20 June 2020, 08:00  GMT+5:30'),[681, 0, 218, 0]],[new Date('21 June 2020, 08:00  GMT+5:30'),[777, 0, 232, 0]]];