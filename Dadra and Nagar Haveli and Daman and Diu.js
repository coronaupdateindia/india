var rawData=[[new Date(2020,02,15,12,0),[ 0, 0,0,0]],[new Date(2020,02,15,17,0),[ 0, 0,0,0]],[new Date(2020,02,15,23,30),[ 0, 0,0,0]],[new Date(2020,02,16,16,0),[ 0, 0,0,0]],[new Date(2020,02,17,9,15),[ 0, 0,0,0]],[new Date(2020,02,17,17,15),[ 0, 0,0,0]],[new Date(2020,02,24,20,15),[0, 0, 0, 0]],[new Date(2020,02,25,9,15),[0, 0, 0, 0]],[new Date(2020,02,25,18,45),[0, 0, 0, 0]],[new Date(2020,02,26,10,15),[0, 0, 0, 0]],[new Date(2020,02,26,20,00),[0, 0, 0, 0]],[new Date(2020,02,27,9,15),[0, 0, 0, 0]],[new Date(2020,02,28,9,30),[0, 0, 0, 0]],[new Date(2020,02,28,17,45),[0, 0, 0, 0]],[new Date(2020,02,29,10,00),[0, 0, 0, 0]],[new Date(2020,02,29,19,30),[0, 0, 0, 0]],[new Date(2020,02,30,10,30),[0, 0, 0, 0]],[new Date(2020,02,30,21,30),[0, 0, 0, 0]],[new Date(2020,02,31,20,30),[0, 0, 0, 0]],[new Date('01 April 2020, 09:00 GMT+5:30'),[0, 0, 0, 0]],[new Date('01 April 2020, 19:30 GMT+5:30'),[0, 0, 0, 0]],[new Date('05 May 2020, 08:00  GMT+5:30'),[0, 0, 0, 0]],[new Date('05 May 2020, 17:00  GMT+5:30'),[0, 0, 0, 0]],[new Date('06 May 2020, 08:00  GMT+5:30'),[1, 0, 0, 0]],[new Date('07 May 2020, 08:00  GMT+5:30'),[1, 0, 0, 0]],[new Date('08 May 2020, 08:00  GMT+5:30'),[1, 0, 0, 0]],[new Date('09 May 2020, 08:00  GMT+5:30'),[1, 0, 0, 0]],[new Date('10 May 2020, 08:00  GMT+5:30'),[1, 0, 0, 0]],[new Date('11 May 2020, 08:00  GMT+5:30'),[1, 0, 0, 0]],[new Date('12 May 2020, 08:00  GMT+5:30'),[1, 0, 0, 0]],[new Date('13 May 2020, 08:00  GMT+5:30'),[1, 0, 0, 0]],[new Date('14 May 2020, 08:00  GMT+5:30'),[1, 0, 0, 0]],[new Date('15 May 2020, 08:00  GMT+5:30'),[1, 0, 0, 0]],[new Date('16 May 2020, 08:00  GMT+5:30'),[1, 0, 0, 0]],[new Date('17 May 2020, 08:00  GMT+5:30'),[1, 0, 0, 0]],[new Date('18 May 2020, 08:00  GMT+5:30'),[1, 0, 0, 0]],[new Date('19 May 2020, 08:00  GMT+5:30'),[1, 0, 0, 0]],[new Date('20 May 2020, 08:00  GMT+5:30'),[1, 0, 0, 0]],[new Date('21 May 2020, 08:00  GMT+5:30'),[1, 0, 0, 0]],[new Date('22 May 2020, 08:00  GMT+5:30'),[1, 0, 0, 0]],[new Date('23 May 2020, 08:00  GMT+5:30'),[1, 0, 0, 0]],[new Date('24 May 2020, 08:00  GMT+5:30'),[2, 0, 0, 0]],[new Date('25 May 2020, 08:00  GMT+5:30'),[2, 0, 0, 0]],[new Date('26 May 2020, 08:00  GMT+5:30'),[2, 0, 0, 0]],[new Date('27 May 2020, 08:00  GMT+5:30'),[2, 0, 0, 0]],[new Date('28 May 2020, 08:00  GMT+5:30'),[2, 0, 0, 0]],[new Date('29 May 2020, 08:00  GMT+5:30'),[2, 0, 0, 0]],[new Date('30 May 2020, 08:00  GMT+5:30'),[2, 0, 0, 0]],[new Date('31 May 2020, 08:00  GMT+5:30'),[2, 0, 0, 0]],[new Date('01 June 2020, 08:00  GMT+5:30'),[2, 0, 0, 0]],[new Date('02 June 2020, 08:00  GMT+5:30'),[3, 0, 1, 0]],[new Date('03 June 2020, 08:00  GMT+5:30'),[4, 0, 1, 0]],[new Date('04 June 2020, 08:00  GMT+5:30'),[8, 0, 1, 0]],[new Date('05 June 2020, 08:00  GMT+5:30'),[12, 0, 1, 0]],[new Date('06 June 2020, 08:00  GMT+5:30'),[14, 0, 1, 0]],[new Date('07 June 2020, 08:00  GMT+5:30'),[19, 0, 1, 0]],[new Date('08 June 2020, 08:00 GMT+5:30'),[20, 0, 2, 0]],[new Date('09 June 2020, 08:00  GMT+5:30'),[22, 0, 2, 0]],[new Date('10 June 2020, 08:00  GMT+5:30'),[22, 0, 2, 0]],[new Date('11 June 2020, 08:00  GMT+5:30'),[26, 0, 2, 0]],[new Date('12 June 2020, 08:00  GMT+5:30'),[30, 0, 2, 0]],[new Date('13 June 2020, 08:00  GMT+5:30'),[30, 0, 2, 0]],[new Date('14 June 2020, 08:00  GMT+5:30'),[35, 0, 2, 0]],[new Date('15 June 2020, 08:00  GMT+5:30'),[36, 0, 2, 0]],[new Date('16 June 2020, 08:00  GMT+5:30'),[36, 0, 5, 0]],[new Date('17 June 2020, 08:00  GMT+5:30'),[45, 0, 9, 0]],[new Date('18 June 2020, 08:00  GMT+5:30'),[57, 0, 12, 0]],[new Date('19 June 2020, 08:00  GMT+5:30'),[58, 0, 13, 0]],[new Date('20 June 2020, 08:00  GMT+5:30'),[62, 0, 14, 0]],[new Date('21 June 2020, 08:00  GMT+5:30'),[68, 0, 26, 0]],[new Date('22 June 2020, 08:00  GMT+5:30'),[88, 0, 26, 0]],[new Date('23 June 2020, 08:00  GMT+5:30'),[91, 0, 27, 0]],[new Date('24	June 2020, 08:00  GMT+5:30'),[120, 0, 29, 0]],[new Date('25	June 2020, 08:00  GMT+5:30'),[120, 0, 30, 0]],[new Date('26	June 2020, 08:00  GMT+5:30'),[155, 0, 32, 0]]];