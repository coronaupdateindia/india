var rawData=[[new Date(2020,02,15,12,0),[ 0, 0,0,0]],[new Date(2020,02,15,17,0),[ 0, 0,0,0]],[new Date(2020,02,15,23,30),[ 0, 0,0,0]],[new Date(2020,02,16,16,0),[ 0, 0,0,0]],[new Date(2020,02,17,9,15),[ 0, 0,0,0]],[new Date(2020,02,17,17,15),[ 0, 0,0,0]],[new Date(2020,02,24,20,15),[7, 0, 0, 0]],[new Date(2020,02,25,9,15),[7, 0, 0, 0]],[new Date(2020,02,25,18,45),[7, 0, 0, 0]],[new Date(2020,02,26,10,15),[7, 0, 0, 0]],[new Date(2020,02,26,20,00),[7, 0, 0, 0]],[new Date(2020,02,27,9,15),[7, 0, 0, 0]],[new Date(2020,02,28,9,30),[7, 0, 0, 0]],[new Date(2020,02,28,17,45),[8, 0, 0, 0]],[new Date(2020,02,29,10,00),[8, 0, 0, 0]],[new Date(2020,02,29,19,30),[8, 0, 0, 0]],[new Date(2020,02,30,10,30),[8, 0, 0, 0]],[new Date(2020,02,30,21,30),[8, 0, 0, 0]],[new Date(2020,02,31,20,30),[13, 0, 0, 0]],[new Date('01 April 2020, 09:00 GMT+5:30'),[13, 0, 0, 0]],[new Date('01 April 2020, 19:30 GMT+5:30'),[16, 0, 0, 0]],[new Date('02 April 2020, 09:00 GMT+5:30'),[16, 0, 0, 0]],[new Date('02 April 2020, 18:00 GMT+5:30'),[16, 0, 0, 0]],[new Date('03 April 2020, 09:00 GMT+5:30'),[18, 0, 0, 0]],[new Date('03 April 2020, 18:00 GMT+5:30'),[18, 0, 0, 0]],[new Date('04 April 2020, 09:00 GMT+5:30'),[18, 0, 0, 0]],[new Date('04 April 2020, 18:00 GMT+5:30'),[18, 0, 0, 0]],[new Date('05 April 2020, 09:00 GMT+5:30'),[18, 0, 0, 0]],[new Date('05 April 2020, 18:00 GMT+5:30'),[18, 0, 0, 0]],[new Date('06 April 2020, 09:00 GMT+5:30'),[18, 0, 0, 0]],[new Date('06 April 2020, 18:00 GMT+5:30'),[18, 0, 0, 0]],[new Date('07 April 2020, 09:00 GMT+5:30'),[18, 0, 0, 0]],[new Date('07 April 2020, 18:00 GMT+5:30'),[18, 0, 7, 0]],[new Date('08 April 2020, 08:00 GMT+5:30'),[18, 0, 7, 0]],[new Date('08 April 2020, 17:00 GMT+5:30'),[18, 0, 7, 0]],[new Date('09 April 2020, 08:00 GMT+5:30'),[18, 0, 7, 0]],[new Date('09 April 2020, 17:00 GMT+5:30'),[18, 0, 7, 0]],[new Date('10 April 2020, 08:00 GMT+5:30'),[18, 0, 7, 0]],[new Date('10 April 2020, 17:00 GMT+5:30'),[18, 0, 7, 0]],[new Date('11 April 2020, 08:00 GMT+5:30'),[18, 0, 7, 0]],[new Date('11 April 2020, 17:00 GMT+5:30'),[18, 0, 7, 0]],[new Date('12 April 2020, 08:00 GMT+5:30'),[19, 0, 7, 0]],[new Date('12 April 2020, 17:00 GMT+5:30'),[19, 0, 7, 0]],[new Date('13 April 2020, 08:00 GMT+5:30'),[21, 0, 7, 0]],[new Date('13 April 2020, 17:00 GMT+5:30'),[21, 0, 7, 0]],[new Date('14 April 2020, 08:00 GMT+5:30'),[21, 0, 7, 0]],[new Date('14 April 2020, 17:00 GMT+5:30'),[21, 0, 7, 0]],[new Date('15 April 2020, 08:00 GMT+5:30'),[21, 0, 7, 0]],[new Date('15 April 2020, 17:00 GMT+5:30'),[21, 0, 7, 0]],[new Date('16 April 2020, 08:00 GMT+5:30'),[21, 0, 7, 0]],[new Date('16 April 2020, 17:00 GMT+5:30'),[21, 0, 7, 0]],[new Date('17 April 2020, 08:00 GMT+5:30'),[21, 0, 9, 0]],[new Date('17 April 2020, 17:00 GMT+5:30'),[21, 0, 9, 0]],[new Date('18 April 2020, 08:00 GMT+5:30'),[21, 0, 9, 0]],[new Date('18 April 2020, 17:00 GMT+5:30'),[21, 0, 9, 0]],[new Date('19 April 2020, 08:00 GMT+5:30'),[23, 0, 10, 0]],[new Date('19 April 2020, 17:00 GMT+5:30'),[23, 0, 10, 0]],[new Date('20 April 2020, 08:00 GMT+5:30'),[26, 0, 13, 0]],[new Date('20 April 2020, 17:00 GMT+5:30'),[26, 0, 13, 0]],[new Date('21 April 2020, 08:00 GMT+5:30'),[26, 0, 13, 0]],[new Date('21 April 2020, 17:00 GMT+5:30'),[26, 0, 13, 0]],[new Date('22 April 2020, 08:00 GMT+5:30'),[27, 0, 14, 0]],[new Date('22 April 2020, 17:00 GMT+5:30'),[27, 0, 14, 0]],[new Date('23 April 2020, 08:00 GMT+5:30'),[27, 0, 14, 0]],[new Date('23 April 2020, 17:00 GMT+5:30'),[27, 0, 14, 0]],[new Date('24 April 2020, 08:00 GMT+5:30'),[27, 0, 14, 0]],[new Date('24 April 2020, 17:00 GMT+5:30'),[27, 0, 14, 0]],[new Date('25 April 2020, 08:00 GMT+5:30'),[27, 0, 14, 0]],[new Date('25 April 2020, 17:00 GMT+5:30'),[28, 0, 15, 0]],[new Date('26 April 2020, 08:00 GMT+5:30'),[28, 0, 15, 0]],[new Date('26 April 2020, 17:00 GMT+5:30'),[30, 0, 17, 0]],[new Date('27 April 2020, 08:00 GMT+5:30'),[30, 0, 17, 0]],[new Date('27 April 2020, 17:00 GMT+5:30'),[30, 0, 17, 0]],[new Date('28 April 2020, 08:00 GMT+5:30'),[40, 0, 17, 0]],[new Date('28 April 2020, 17:00 GMT+5:30'),[40, 0, 17, 0]],[new Date('29 April 2020, 08:00 GMT+5:30'),[56, 0, 17, 0]],[new Date('29 April 2020, 17:00 GMT+5:30'),[56, 0, 17, 0]],[new Date('30 April 2020, 08:00 GMT+5:30'),[56, 0, 17, 0]],[new Date('30 April 2020, 17:00 GMT+5:30'),[56, 0, 17, 0]],[new Date('01 May 2020, 08:00 GMT+5:30'),[56, 0, 17, 0]],[new Date('01 May 2020, 17:00 GMT+5:30'),[56, 0, 17, 0]],[new Date('02 May 2020, 08:00 GMT+5:30'),[88, 0, 17, 0]],[new Date('02 May 2020, 17:00 GMT+5:30'),[88, 0, 17, 0]],[new Date('03 May 2020, 08:00 GMT+5:30'),[88, 0, 17, 0]],[new Date('03 May 2020, 17:00 GMT+5:30'),[94, 0, 19, 0]],[new Date('04 May 2020, 08:00 GMT+5:30'),[94, 0, 19, 0]],[new Date('04 May 2020, 17:00  GMT+5:30'),[94, 0, 19, 0]],[new Date('05 May 2020, 08:00  GMT+5:30'),[102, 0, 21, 1]],[new Date('05 May 2020, 17:00  GMT+5:30'),[102, 0, 21, 1]],[new Date('06 May 2020, 08:00  GMT+5:30'),[111, 0, 21, 1]],[new Date('07 May 2020, 08:00  GMT+5:30'),[120, 0, 21, 1]],[new Date('08 May 2020, 08:00  GMT+5:30'),[135, 0, 21, 1]],[new Date('09 May 2020, 08:00  GMT+5:30'),[150, 0, 21, 1]],[new Date('10 May 2020, 08:00  GMT+5:30'),[169, 0, 24, 2]],[new Date('11 May 2020, 08:00  GMT+5:30'),[169, 0, 24, 2]],[new Date('12 May 2020, 08:00  GMT+5:30'),[174, 0, 24, 2]],[new Date('13 May 2020, 08:00  GMT+5:30'),[187, 0, 28, 3]],[new Date('14 May 2020, 08:00  GMT+5:30'),[187, 0, 28, 3]],[new Date('15 May 2020, 08:00  GMT+5:30'),[191, 0, 37, 3]],[new Date('16 May 2020, 08:00  GMT+5:30'),[191, 0, 37, 3]],[new Date('17 May 2020, 08:00  GMT+5:30'),[191, 0, 51, 3]],[new Date('18 May 2020, 08:00  GMT+5:30'),[191, 0, 51, 3]],[new Date('19 May 2020, 08:00  GMT+5:30'),[196, 0, 54, 3]],[new Date('20 May 2020, 08:00  GMT+5:30'),[200, 0, 57, 3]],[new Date('21 May 2020, 08:00  GMT+5:30'),[202, 0, 57, 3]],[new Date('22 May 2020, 08:00  GMT+5:30'),[217, 0, 139, 3]],[new Date('23 May 2020, 08:00  GMT+5:30'),[218, 0, 178, 3]]];