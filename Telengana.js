var rawData=[[new Date(2020,02,15,12,0),[ 3, 0,1,0]],[new Date(2020,02,15,17,0),[ 3, 0,1,0]],[new Date(2020,02,15,23,30),[ 3, 0,1,0]],[new Date(2020,02,16,16,0),[ 3, 0,1,0]],[new Date(2020,02,17,9,15),[ 4, 0,1,0]],[new Date(2020,02,17,17,15),[ 3, 2,1,0]],[new Date(2020,02,24,20,15),[25, 10, 1, 0]],[new Date(2020,02,25,9,15),[25, 10, 1, 0]],[new Date(2020,02,25,18,45),[25, 10, 1, 0]],[new Date(2020,02,26,10,15),[31, 10, 1, 0]],[new Date(2020,02,26,20,00),[34, 10, 1, 0]],[new Date(2020,02,27,9,15),[35, 10, 1, 0]],[new Date(2020,02,28,9,30),[38, 10, 1, 0]],[new Date(2020,02,28,17,45),[46, 10, 1, 0]],[new Date(2020,02,29,10,00),[56, 10, 1, 1]],[new Date(2020,02,29,19,30),[66, 0, 1, 1]],[new Date(2020,02,30,10,30),[69, 0, 1, 1]],[new Date(2020,02,30,21,30),[71, 0, 1, 1]],[new Date(2020,02,31,20,30),[79, 0, 1, 1]],[new Date('01 April 2020, 09:00 GMT+5:30'),[94, 0, 1, 3]],[new Date('01 April 2020, 19:30 GMT+5:30'),[96, 0, 1, 3]],[new Date('02 April 2020, 09:00 GMT+5:30'),[96, 0, 1, 3]],[new Date('02 April 2020, 18:00 GMT+5:30'),[107, 0, 1, 3]],[new Date('03 April 2020, 09:00 GMT+5:30'),[107, 0, 1, 3]],[new Date('03 April 2020, 18:00 GMT+5:30'),[158, 0, 1, 7]],[new Date('04 April 2020, 09:00 GMT+5:30'),[158, 0, 1, 7]],[new Date('04 April 2020, 18:00 GMT+5:30'),[159, 0, 1, 7]],[new Date('05 April 2020, 09:00 GMT+5:30'),[269, 0, 32, 7]],[new Date('05 April 2020, 18:00 GMT+5:30'),[269, 0, 32, 7]],[new Date('06 April 2020, 09:00 GMT+5:30'),[321, 0, 34, 7]],[new Date('06 April 2020, 18:00 GMT+5:30'),[321, 0, 34, 7]],[new Date('07 April 2020, 09:00 GMT+5:30'),[321, 0, 34, 7]],[new Date('07 April 2020, 18:00 GMT+5:30'),[364, 0, 35, 7]],[new Date('08 April 2020, 08:00 GMT+5:30'),[364, 0, 35, 7]],[new Date('08 April 2020, 17:00 GMT+5:30'),[427, 0, 35, 7]],[new Date('09 April 2020, 08:00 GMT+5:30'),[427, 0, 35, 7]],[new Date('09 April 2020, 17:00 GMT+5:30'),[442, 0, 35, 7]],[new Date('10 April 2020, 08:00 GMT+5:30'),[442, 0, 35, 7]],[new Date('10 April 2020, 17:00 GMT+5:30'),[473, 0, 35, 7]],[new Date('11 April 2020, 08:00 GMT+5:30'),[473, 0, 43, 7]],[new Date('11 April 2020, 17:00 GMT+5:30'),[504, 0, 43, 9]],[new Date('12 April 2020, 08:00 GMT+5:30'),[504, 0, 43, 9]],[new Date('12 April 2020, 17:00 GMT+5:30'),[504, 0, 43, 9]],[new Date('13 April 2020, 08:00 GMT+5:30'),[504, 0, 43, 9]],[new Date('13 April 2020, 17:00 GMT+5:30'),[562, 0, 100, 16]],[new Date('14 April 2020, 08:00 GMT+5:30'),[562, 0, 100, 16]],[new Date('14 April 2020, 17:00 GMT+5:30'),[624, 0, 100, 17]],[new Date('15 April 2020, 08:00 GMT+5:30'),[624, 0, 100, 17]],[new Date('15 April 2020, 17:00 GMT+5:30'),[647, 0, 120, 18]],[new Date('16 April 2020, 08:00 GMT+5:30'),[647, 0, 120, 18]],[new Date('16 April 2020, 17:00 GMT+5:30'),[698, 0, 120, 18]],[new Date('17 April 2020, 08:00 GMT+5:30'),[700, 0, 186, 18]],[new Date('17 April 2020, 17:00 GMT+5:30'),[743, 0, 186, 18]],[new Date('18 April 2020, 08:00 GMT+5:30'),[766, 0, 186, 18]],[new Date('18 April 2020, 17:00 GMT+5:30'),[791, 0, 186, 18]],[new Date('19 April 2020, 08:00 GMT+5:30'),[809, 0, 186, 18]],[new Date('19 April 2020, 17:00 GMT+5:30'),[844, 0, 186, 18]],[new Date('20 April 2020, 08:00 GMT+5:30'),[844, 0, 186, 18]],[new Date('20 April 2020, 17:00 GMT+5:30'),[873, 0, 190, 21]],[new Date('21 April 2020, 08:00 GMT+5:30'),[873, 0, 190, 23]],[new Date('21 April 2020, 17:00 GMT+5:30'),[919, 0, 190, 23]],[new Date('22 April 2020, 08:00 GMT+5:30'),[928, 0, 194, 23]],[new Date('22 April 2020, 17:00 GMT+5:30'),[945, 0, 194, 23]],[new Date('23 April 2020, 08:00 GMT+5:30'),[945, 0, 194, 23]],[new Date('23 April 2020, 17:00 GMT+5:30'),[960, 0, 197, 24]],[new Date('24 April 2020, 08:00 GMT+5:30'),[960, 0, 197, 24]],[new Date('24 April 2020, 17:00 GMT+5:30'),[984, 0, 253, 26]],[new Date('25 April 2020, 08:00 GMT+5:30'),[984, 0, 253, 26]],[new Date('25 April 2020, 17:00 GMT+5:30'),[984, 0, 253, 26]],[new Date('26 April 2020, 08:00 GMT+5:30'),[991, 0, 280, 26]],[new Date('26 April 2020, 17:00 GMT+5:30'),[991, 0, 280, 26]],[new Date('27 April 2020, 08:00 GMT+5:30'),[1002, 0, 280, 26]],[new Date('27 April 2020, 17:00 GMT+5:30'),[1002, 0, 280, 26]],[new Date('28 April 2020, 08:00 GMT+5:30'),[1004, 0, 321, 26]],[new Date('28 April 2020, 17:00 GMT+5:30'),[1004, 0, 321, 26]],[new Date('29 April 2020, 08:00 GMT+5:30'),[1004, 0, 321, 26]],[new Date('29 April 2020, 17:00 GMT+5:30'),[1012, 0, 367, 26]],[new Date('30 April 2020, 08:00 GMT+5:30'),[1012, 0, 367, 26]],[new Date('30 April 2020, 17:00 GMT+5:30'),[1012, 0, 367, 26]],[new Date('01 May 2020, 08:00 GMT+5:30'),[1038, 0, 397, 26]],[new Date('01 May 2020, 17:00 GMT+5:30'),[1039, 0, 441, 26]],[new Date('02 May 2020, 08:00 GMT+5:30'),[1039, 0, 441, 26]],[new Date('02 May 2020, 17:00 GMT+5:30'),[1057, 0, 441, 26]],[new Date('03 May 2020, 08:00 GMT+5:30'),[1063, 0, 458, 28]],[new Date('03 May 2020, 17:00 GMT+5:30'),[1063, 0, 458, 28]],[new Date('04 May 2020, 08:00 GMT+5:30'),[1082, 0, 490, 29]],[new Date('04 May 2020, 17:00  GMT+5:30'),[1082, 0, 490, 29]],[new Date('05 May 2020, 08:00  GMT+5:30'),[1085, 0, 585, 29]],[new Date('05 May 2020, 17:00  GMT+5:30'),[1085, 0, 585, 29]],[new Date('06 May 2020, 08:00  GMT+5:30'),[1096, 0, 585, 29]],[new Date('07 May 2020, 08:00  GMT+5:30'),[1107, 0, 628, 29]],[new Date('08 May 2020, 08:00  GMT+5:30'),[1123, 0, 650, 29]],[new Date('09 May 2020, 08:00  GMT+5:30'),[1133, 0, 700, 29]],[new Date('10 May 2020, 08:00  GMT+5:30'),[1163, 0, 750, 30]]];