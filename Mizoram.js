var rawData=[[new Date(2020,02,15,12,0),[ 0, 0,0,0]],[new Date(2020,02,15,17,0),[ 0, 0,0,0]],[new Date(2020,02,15,23,30),[ 0, 0,0,0]],[new Date(2020,02,16,16,0),[ 0, 0,0,0]],[new Date(2020,02,17,9,15),[ 0, 0,0,0]],[new Date(2020,02,17,17,15),[ 0, 0,0,0]],[new Date(2020,02,25,9,15),[1, 0, 0, 0]],[new Date(2020,02,25,18,45),[1, 0, 0, 0]],[new Date(2020,02,26,10,15),[1, 0, 0, 0]],[new Date(2020,02,26,20,00),[1, 0, 0, 0]],[new Date(2020,02,27,9,15),[1, 0, 0, 0]],[new Date(2020,02,28,9,30),[1, 0, 0, 0]],[new Date(2020,02,28,17,45),[1, 0, 0, 0]],[new Date(2020,02,29,10,00),[1, 0, 0, 0]],[new Date(2020,02,29,19,30),[1, 0, 0, 0]],[new Date(2020,02,30,10,30),[1, 0, 0, 0]],[new Date(2020,02,30,21,30),[1, 0, 0, 0]],[new Date(2020,02,31,20,30),[1, 0, 0, 0]],[new Date('01 April 2020, 09:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('01 April 2020, 19:30 GMT+5:30'),[1, 0, 0, 0]],[new Date('02 April 2020, 09:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('02 April 2020, 18:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('03 April 2020, 09:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('03 April 2020, 18:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('04 April 2020, 09:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('04 April 2020, 18:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('05 April 2020, 09:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('05 April 2020, 18:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('06 April 2020, 09:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('06 April 2020, 18:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('07 April 2020, 09:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('07 April 2020, 18:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('08 April 2020, 08:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('08 April 2020, 17:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('09 April 2020, 08:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('09 April 2020, 17:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('10 April 2020, 08:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('10 April 2020, 17:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('11 April 2020, 08:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('11 April 2020, 17:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('12 April 2020, 08:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('12 April 2020, 17:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('13 April 2020, 08:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('13 April 2020, 17:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('14 April 2020, 08:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('14 April 2020, 17:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('15 April 2020, 08:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('15 April 2020, 17:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('16 April 2020, 08:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('16 April 2020, 17:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('17 April 2020, 08:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('17 April 2020, 17:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('18 April 2020, 08:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('18 April 2020, 17:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('19 April 2020, 08:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('19 April 2020, 17:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('20 April 2020, 08:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('20 April 2020, 17:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('21 April 2020, 08:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('21 April 2020, 17:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('22 April 2020, 08:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('22 April 2020, 17:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('23 April 2020, 08:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('23 April 2020, 17:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('24 April 2020, 08:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('24 April 2020, 17:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('25 April 2020, 08:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('25 April 2020, 17:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('26 April 2020, 08:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('26 April 2020, 17:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('27 April 2020, 08:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('27 April 2020, 17:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('28 April 2020, 08:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('28 April 2020, 17:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('29 April 2020, 08:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('29 April 2020, 17:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('30 April 2020, 08:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('30 April 2020, 17:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('01 May 2020, 08:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('01 May 2020, 17:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('02 May 2020, 08:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('02 May 2020, 17:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('03 May 2020, 08:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('03 May 2020, 17:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('04 May 2020, 08:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('04 May 2020, 17:00  GMT+5:30'),[1, 0, 0, 0]],[new Date('05 May 2020, 08:00  GMT+5:30'),[1, 0, 0, 0]],[new Date('05 May 2020, 17:00  GMT+5:30'),[1, 0, 0, 0]],[new Date('06 May 2020, 08:00  GMT+5:30'),[1, 0, 0, 0]],[new Date('07 May 2020, 08:00  GMT+5:30'),[1, 0, 0, 0]],[new Date('08 May 2020, 08:00  GMT+5:30'),[1, 0, 0, 0]],[new Date('09 May 2020, 08:00  GMT+5:30'),[1, 0, 0, 0]],[new Date('10 May 2020, 08:00  GMT+5:30'),[1, 0, 1, 0]],[new Date('11 May 2020, 08:00  GMT+5:30'),[1, 0, 1, 0]],[new Date('12 May 2020, 08:00  GMT+5:30'),[1, 0, 1, 0]],[new Date('13 May 2020, 08:00  GMT+5:30'),[1, 0, 1, 0]],[new Date('14 May 2020, 08:00  GMT+5:30'),[1, 0, 1, 0]],[new Date('15 May 2020, 08:00  GMT+5:30'),[1, 0, 1, 0]],[new Date('16 May 2020, 08:00  GMT+5:30'),[1, 0, 1, 0]],[new Date('17 May 2020, 08:00  GMT+5:30'),[1, 0, 1, 0]],[new Date('18 May 2020, 08:00  GMT+5:30'),[1, 0, 1, 0]],[new Date('19 May 2020, 08:00  GMT+5:30'),[1, 0, 1, 0]],[new Date('20 May 2020, 08:00  GMT+5:30'),[1, 0, 1, 0]],[new Date('21 May 2020, 08:00  GMT+5:30'),[1, 0, 1, 0]],[new Date('22 May 2020, 08:00  GMT+5:30'),[1, 0, 1, 0]],[new Date('23 May 2020, 08:00  GMT+5:30'),[1, 0, 1, 0]],[new Date('24 May 2020, 08:00  GMT+5:30'),[1, 0, 1, 0]],[new Date('25 May 2020, 08:00  GMT+5:30'),[1, 0, 1, 0]],[new Date('26 May 2020, 08:00  GMT+5:30'),[1, 0, 1, 0]],[new Date('27 May 2020, 08:00  GMT+5:30'),[1, 0, 1, 0]],[new Date('28 May 2020, 08:00  GMT+5:30'),[1, 0, 1, 0]],[new Date('29 May 2020, 08:00  GMT+5:30'),[1, 0, 1, 0]],[new Date('30 May 2020, 08:00  GMT+5:30'),[1, 0, 1, 0]],[new Date('31 May 2020, 08:00  GMT+5:30'),[1, 0, 1, 0]],[new Date('01 June 2020, 08:00  GMT+5:30'),[1, 0, 1, 0]],[new Date('02 June 2020, 08:00  GMT+5:30'),[1, 0, 1, 0]],[new Date('03 June 2020, 08:00  GMT+5:30'),[13, 0, 1, 0]],[new Date('04 June 2020, 08:00  GMT+5:30'),[14, 0, 1, 0]],[new Date('05 June 2020, 08:00  GMT+5:30'),[17, 0, 1, 0]],[new Date('06 June 2020, 08:00  GMT+5:30'),[22, 0, 1, 0]],[new Date('07 June 2020, 08:00  GMT+5:30'),[24, 0, 1, 0]],[new Date('08 June 2020, 08:00 GMT+5:30'),[34, 0, 1, 0]],[new Date('09 June 2020, 08:00  GMT+5:30'),[42, 0, 1, 0]],[new Date('10 June 2020, 08:00  GMT+5:30'),[88, 0, 1, 0]],[new Date('11 June 2020, 08:00  GMT+5:30'),[93, 0, 1, 0]],[new Date('12 June 2020, 08:00  GMT+5:30'),[102, 0, 1, 0]],[new Date('13 June 2020, 08:00  GMT+5:30'),[104, 0, 1, 0]],[new Date('14 June 2020, 08:00  GMT+5:30'),[107, 0, 1, 0]],[new Date('15 June 2020, 08:00  GMT+5:30'),[112, 0, 1, 0]],[new Date('16 June 2020, 08:00  GMT+5:30'),[117, 0, 1, 0]],[new Date('17 June 2020, 08:00  GMT+5:30'),[121, 0, 1, 0]],[new Date('18 June 2020, 08:00  GMT+5:30'),[121, 0, 1, 0]],[new Date('19 June 2020, 08:00  GMT+5:30'),[130, 0, 1, 0]],[new Date('20 June 2020, 08:00  GMT+5:30'),[130, 0, 1, 0]],[new Date('21 June 2020, 08:00  GMT+5:30'),[140, 0, 9, 0]],[new Date('22 June 2020, 08:00  GMT+5:30'),[141, 0, 9, 0]],[new Date('23 June 2020, 08:00  GMT+5:30'),[141, 0, 9, 0]],[new Date('24	June 2020, 08:00  GMT+5:30'),[142, 0, 9, 0]],[new Date('25	June 2020, 08:00  GMT+5:30'),[142, 0, 19, 0]],[new Date('26	June 2020, 08:00  GMT+5:30'),[145, 0, 30, 0]],[new Date('27	June 2020, 08:00  GMT+5:30'),[145, 0, 30, 0]],[new Date('28	June 2020, 08:00  GMT+5:30'),[148, 0, 55, 0]],[new Date('29	June 2020, 08:00  GMT+5:30'),[148, 0, 55, 0]],[new Date('30	June 2020, 08:00  GMT+5:30'),[148, 0, 55, 0]],[new Date('01	July 2020, 08:00  GMT+5:30'),[160, 0, 122, 0]],[new Date('02	July 2020, 08:00  GMT+5:30'),[160, 0, 123, 0]],[new Date('03	July 2020, 08:00  GMT+5:30'),[162, 0, 126, 0]],[new Date('04	July 2020, 08:00  GMT+5:30'),[162, 0, 126, 0]],[new Date('05	July 2020, 08:00  GMT+5:30'),[164, 0, 130, 0]]];