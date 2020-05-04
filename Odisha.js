var rawData=[[new Date(2020,02,15,12,0),[ 0, 0,0,0]],[new Date(2020,02,15,17,0),[ 0, 0,0,0]],[new Date(2020,02,15,23,30),[ 0, 0,0,0]],[new Date(2020,02,16,16,0),[ 1, 0,0,0]],[new Date(2020,02,17,9,15),[ 1, 0,0,0]],[new Date(2020,02,17,17,15),[ 1, 0,0,0]],[new Date(2020,02,24,20,15),[2, 0, 0, 0]],[new Date(2020,02,25,9,15),[2, 0, 0, 0]],[new Date(2020,02,25,18,45),[2, 0, 0, 0]],[new Date(2020,02,26,10,15),[2, 0, 0, 0]],[new Date(2020,02,26,20,00),[2, 0, 0, 0]],[new Date(2020,02,27,9,15),[2, 0, 0, 0]],[new Date(2020,02,28,9,30),[3, 0, 0, 0]],[new Date(2020,02,28,17,45),[3, 0, 0, 0]],[new Date(2020,02,29,10,00),[3, 0, 0, 0]],[new Date(2020,02,29,19,30),[3, 0, 0, 0]],[new Date(2020,02,30,10,30),[3, 0, 0, 0]],[new Date(2020,02,30,21,30),[3, 0, 0, 0]],[new Date(2020,02,31,20,30),[3, 0, 0, 0]],[new Date('01 April 2020, 09:00 GMT+5:30'),[4, 0, 0, 0]],[new Date('01 April 2020, 19:30 GMT+5:30'),[4, 0, 0, 0]],[new Date('02 April 2020, 09:00 GMT+5:30'),[4, 0, 0, 0]],[new Date('02 April 2020, 18:00 GMT+5:30'),[4, 0, 0, 0]],[new Date('03 April 2020, 09:00 GMT+5:30'),[5, 0, 0, 0]],[new Date('03 April 2020, 18:00 GMT+5:30'),[5, 0, 0, 0]],[new Date('04 April 2020, 09:00 GMT+5:30'),[5, 0, 0, 0]],[new Date('04 April 2020, 18:00 GMT+5:30'),[5, 0, 0, 0]],[new Date('05 April 2020, 09:00 GMT+5:30'),[20, 0, 0, 0]],[new Date('05 April 2020, 18:00 GMT+5:30'),[20, 0, 0, 0]],[new Date('06 April 2020, 09:00 GMT+5:30'),[21, 0, 2, 0]],[new Date('06 April 2020, 18:00 GMT+5:30'),[21, 0, 2, 0]],[new Date('07 April 2020, 09:00 GMT+5:30'),[21, 0, 2, 0]],[new Date('07 April 2020, 18:00 GMT+5:30'),[42, 0, 2, 1]],[new Date('08 April 2020, 08:00 GMT+5:30'),[42, 0, 2, 1]],[new Date('08 April 2020, 17:00 GMT+5:30'),[42, 0, 2, 1]],[new Date('09 April 2020, 08:00 GMT+5:30'),[42, 0, 2, 1]],[new Date('09 April 2020, 17:00 GMT+5:30'),[42, 0, 2, 1]],[new Date('10 April 2020, 08:00 GMT+5:30'),[44, 0, 2, 1]],[new Date('10 April 2020, 17:00 GMT+5:30'),[44, 0, 2, 1]],[new Date('11 April 2020, 08:00 GMT+5:30'),[48, 0, 2, 1]],[new Date('11 April 2020, 17:00 GMT+5:30'),[48, 0, 2, 1]],[new Date('12 April 2020, 08:00 GMT+5:30'),[50, 0, 2, 1]],[new Date('12 April 2020, 17:00 GMT+5:30'),[54, 0, 12, 1]],[new Date('13 April 2020, 08:00 GMT+5:30'),[54, 0, 12, 1]],[new Date('13 April 2020, 17:00 GMT+5:30'),[54, 0, 12, 1]],[new Date('14 April 2020, 08:00 GMT+5:30'),[54, 0, 12, 1]],[new Date('14 April 2020, 17:00 GMT+5:30'),[55, 0, 18, 1]],[new Date('15 April 2020, 08:00 GMT+5:30'),[60, 0, 18, 1]],[new Date('15 April 2020, 17:00 GMT+5:30'),[60, 0, 18, 1]],[new Date('16 April 2020, 08:00 GMT+5:30'),[60, 0, 18, 1]],[new Date('16 April 2020, 17:00 GMT+5:30'),[60, 0, 18, 1]],[new Date('17 April 2020, 08:00 GMT+5:30'),[60, 0, 19, 1]],[new Date('17 April 2020, 17:00 GMT+5:30'),[60, 0, 19, 1]],[new Date('18 April 2020, 08:00 GMT+5:30'),[60, 0, 19, 1]],[new Date('18 April 2020, 17:00 GMT+5:30'),[60, 0, 21, 1]],[new Date('19 April 2020, 08:00 GMT+5:30'),[61, 0, 24, 1]],[new Date('19 April 2020, 17:00 GMT+5:30'),[61, 0, 24, 1]],[new Date('20 April 2020, 08:00 GMT+5:30'),[68, 0, 24, 1]],[new Date('20 April 2020, 17:00 GMT+5:30'),[68, 0, 24, 1]],[new Date('21 April 2020, 08:00 GMT+5:30'),[74, 0, 24, 1]],[new Date('21 April 2020, 17:00 GMT+5:30'),[74, 0, 24, 1]],[new Date('22 April 2020, 08:00 GMT+5:30'),[79, 0, 24, 1]],[new Date('22 April 2020, 17:00 GMT+5:30'),[82, 0, 30, 1]],[new Date('23 April 2020, 08:00 GMT+5:30'),[83, 0, 32, 1]],[new Date('23 April 2020, 17:00 GMT+5:30'),[83, 0, 32, 1]],[new Date('24 April 2020, 08:00 GMT+5:30'),[90, 0, 33, 1]],[new Date('24 April 2020, 17:00 GMT+5:30'),[90, 0, 33, 1]],[new Date('25 April 2020, 08:00 GMT+5:30'),[94, 0, 33, 1]],[new Date('25 April 2020, 17:00 GMT+5:30'),[94, 0, 33, 1]],[new Date('26 April 2020, 08:00 GMT+5:30'),[94, 0, 33, 1]],[new Date('26 April 2020, 17:00 GMT+5:30'),[103, 0, 34, 1]],[new Date('27 April 2020, 08:00 GMT+5:30'),[103, 0, 35, 1]],[new Date('27 April 2020, 17:00 GMT+5:30'),[108, 0, 35, 1]],[new Date('28 April 2020, 08:00 GMT+5:30'),[118, 0, 37, 1]],[new Date('28 April 2020, 17:00 GMT+5:30'),[118, 0, 37, 1]],[new Date('29 April 2020, 08:00 GMT+5:30'),[118, 0, 38, 1]],[new Date('29 April 2020, 17:00 GMT+5:30'),[119, 0, 38, 1]],[new Date('30 April 2020, 08:00 GMT+5:30'),[125, 0, 39, 1]],[new Date('30 April 2020, 17:00 GMT+5:30'),[128, 0, 39, 1]],[new Date('01 May 2020, 08:00 GMT+5:30'),[142, 0, 39, 1]],[new Date('01 May 2020, 17:00 GMT+5:30'),[143, 0, 41, 1]],[new Date('02 May 2020, 08:00 GMT+5:30'),[149, 0, 55, 1]],[new Date('02 May 2020, 17:00 GMT+5:30'),[154, 0, 55, 1]],[new Date('03 May 2020, 08:00 GMT+5:30'),[157, 0, 56, 1]],[new Date('03 May 2020, 17:00 GMT+5:30'),[160, 0, 56, 1]],[new Date('04 May 2020, 08:00 GMT+5:30'),[162, 0, 56, 1]]];