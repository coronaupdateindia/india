var rawData=[[new Date(2020,02,15,12,0),[ 0,14,0,0]],[new Date(2020,02,15,17,0),[ 0,14,0,0]],[new Date(2020,02,15,23,30),[ 0,14,0,0]],[new Date(2020,02,16,16,0),[ 0,14,0,0]],[new Date(2020,02,17,9,15),[ 0,14,0,0]],[new Date(2020,02,17,17,15),[ 1,14,0,0]],[new Date(2020,02,24,20,15),[14, 14, 11, 0]],[new Date(2020,02,25,9,15),[14, 14, 11, 0]],[new Date(2020,02,25,18,45),[14, 14, 11, 0]],[new Date(2020,02,26,10,15),[16, 14, 11, 0]],[new Date(2020,02,26,20,00),[16, 14, 11, 0]],[new Date(2020,02,27,9,15),[16, 14, 11, 0]],[new Date(2020,02,28,9,30),[19, 14, 11, 0]],[new Date(2020,02,28,17,45),[19, 14, 12, 0]],[new Date(2020,02,29,10,00),[19, 14, 12, 0]],[new Date(2020,02,29,19,30),[33, 0, 17, 0]],[new Date(2020,02,30,10,30),[33, 0, 17, 0]],[new Date(2020,02,30,21,30),[36, 0, 18, 0]],[new Date(2020,02,31,20,30),[40, 0, 21, 0]],[new Date('01 April 2020, 09:00 GMT+5:30'),[43, 0, 21, 0]],[new Date('01 April 2020, 19:30 GMT+5:30'),[43, 0, 21, 0]],[new Date('02 April 2020, 09:00 GMT+5:30'),[43, 0, 21, 0]],[new Date('02 April 2020, 18:00 GMT+5:30'),[43, 0, 21, 0]],[new Date('03 April 2020, 09:00 GMT+5:30'),[43, 0, 21, 0]],[new Date('03 April 2020, 18:00 GMT+5:30'),[49, 0, 24, 0]],[new Date('04 April 2020, 09:00 GMT+5:30'),[49, 0, 24, 0]],[new Date('04 April 2020, 18:00 GMT+5:30'),[49, 0, 24, 0]],[new Date('05 April 2020, 09:00 GMT+5:30'),[49, 0, 24, 0]],[new Date('05 April 2020, 18:00 GMT+5:30'),[59, 0, 25, 1]],[new Date('06 April 2020, 09:00 GMT+5:30'),[84, 0, 25, 1]],[new Date('06 April 2020, 18:00 GMT+5:30'),[84, 0, 25, 1]],[new Date('07 April 2020, 09:00 GMT+5:30'),[90, 0, 25, 1]],[new Date('07 April 2020, 18:00 GMT+5:30'),[90, 0, 25, 1]],[new Date('08 April 2020, 08:00 GMT+5:30'),[147, 0, 28, 3]],[new Date('08 April 2020, 17:00 GMT+5:30'),[147, 0, 28, 3]],[new Date('09 April 2020, 08:00 GMT+5:30'),[147, 0, 28, 3]],[new Date('09 April 2020, 17:00 GMT+5:30'),[169, 0, 29, 3]],[new Date('10 April 2020, 08:00 GMT+5:30'),[169, 0, 29, 3]],[new Date('10 April 2020, 17:00 GMT+5:30'),[169, 0, 29, 3]],[new Date('11 April 2020, 08:00 GMT+5:30'),[177, 0, 29, 3]],[new Date('11 April 2020, 17:00 GMT+5:30'),[177, 0, 29, 3]],[new Date('12 April 2020, 08:00 GMT+5:30'),[177, 0, 29, 3]],[new Date('12 April 2020, 17:00 GMT+5:30'),[185, 0, 29, 3]],[new Date('13 April 2020, 08:00 GMT+5:30'),[185, 0, 29, 3]],[new Date('13 April 2020, 17:00 GMT+5:30'),[185, 0, 29, 3]],[new Date('14 April 2020, 08:00 GMT+5:30'),[185, 0, 29, 3]],[new Date('14 April 2020, 17:00 GMT+5:30'),[199, 0, 34, 3]],[new Date('15 April 2020, 08:00 GMT+5:30'),[199, 0, 34, 3]],[new Date('15 April 2020, 17:00 GMT+5:30'),[199, 0, 34, 3]],[new Date('16 April 2020, 08:00 GMT+5:30'),[205, 0, 43, 3]],[new Date('16 April 2020, 17:00 GMT+5:30'),[205, 0, 43, 3]],[new Date('17 April 2020, 08:00 GMT+5:30'),[205, 0, 43, 3]],[new Date('17 April 2020, 17:00 GMT+5:30'),[205, 0, 43, 3]],[new Date('18 April 2020, 08:00 GMT+5:30'),[225, 0, 43, 3]],[new Date('18 April 2020, 17:00 GMT+5:30'),[225, 0, 43, 3]],[new Date('19 April 2020, 08:00 GMT+5:30'),[225, 0, 43, 3]],[new Date('19 April 2020, 17:00 GMT+5:30'),[233, 0, 87, 3]],[new Date('20 April 2020, 08:00 GMT+5:30'),[233, 0, 87, 3]],[new Date('20 April 2020, 17:00 GMT+5:30'),[233, 0, 87, 3]],[new Date('21 April 2020, 08:00 GMT+5:30'),[254, 0, 127, 3]],[new Date('21 April 2020, 17:00 GMT+5:30'),[254, 0, 127, 3]],[new Date('22 April 2020, 08:00 GMT+5:30'),[254, 0, 127, 3]],[new Date('22 April 2020, 17:00 GMT+5:30'),[254, 0, 127, 3]],[new Date('23 April 2020, 08:00 GMT+5:30'),[262, 0, 140, 3]],[new Date('23 April 2020, 17:00 GMT+5:30'),[262, 0, 140, 3]],[new Date('24 April 2020, 08:00 GMT+5:30'),[272, 0, 156, 3]],[new Date('24 April 2020, 17:00 GMT+5:30'),[272, 0, 156, 3]],[new Date('25 April 2020, 08:00 GMT+5:30'),[272, 0, 156, 3]],[new Date('25 April 2020, 17:00 GMT+5:30'),[272, 0, 156, 3]],[new Date('26 April 2020, 08:00 GMT+5:30'),[289, 0, 176, 3]],[new Date('26 April 2020, 17:00 GMT+5:30'),[289, 0, 176, 3]],[new Date('27 April 2020, 08:00 GMT+5:30'),[289, 0, 176, 3]],[new Date('27 April 2020, 17:00 GMT+5:30'),[289, 0, 176, 3]],[new Date('28 April 2020, 08:00 GMT+5:30'),[296, 0, 183, 3]],[new Date('28 April 2020, 17:00 GMT+5:30'),[296, 0, 183, 3]],[new Date('29 April 2020, 08:00 GMT+5:30'),[310, 0, 209, 3]],[new Date('29 April 2020, 17:00 GMT+5:30'),[310, 0, 209, 3]],[new Date('30 April 2020, 08:00 GMT+5:30'),[310, 0, 209, 3]],[new Date('30 April 2020, 17:00 GMT+5:30'),[310, 0, 209, 3]],[new Date('01 May 2020, 08:00 GMT+5:30'),[313, 0, 209, 3]],[new Date('01 May 2020, 17:00 GMT+5:30'),[313, 0, 209, 3]],[new Date('02 May 2020, 08:00 GMT+5:30'),[360, 0, 227, 4]],[new Date('02 May 2020, 17:00 GMT+5:30'),[360, 0, 227, 4]],[new Date('03 May 2020, 08:00 GMT+5:30'),[360, 0, 227, 4]],[new Date('03 May 2020, 17:00 GMT+5:30'),[394, 0, 227, 4]],[new Date('04 May 2020, 08:00 GMT+5:30'),[442, 0, 245, 5]],[new Date('04 May 2020, 17:00  GMT+5:30'),[442, 0, 245, 5]],[new Date('05 May 2020, 08:00  GMT+5:30'),[517, 0, 254, 6]],[new Date('05 May 2020, 17:00  GMT+5:30'),[517, 0, 254, 6]],[new Date('06 May 2020, 08:00  GMT+5:30'),[548, 0, 256, 6]],[new Date('07 May 2020, 08:00  GMT+5:30'),[594, 0, 260, 7]],[new Date('08 May 2020, 08:00  GMT+5:30'),[625, 0, 260, 7]],[new Date('09 May 2020, 08:00  GMT+5:30'),[647, 0, 279, 8]],[new Date('10 May 2020, 08:00  GMT+5:30'),[675, 0, 290, 9]],[new Date('11 May 2020, 08:00  GMT+5:30'),[703, 0, 300, 10]],[new Date('12 May 2020, 08:00  GMT+5:30'),[730, 0, 337, 11]],[new Date('13 May 2020, 08:00  GMT+5:30'),[780, 0, 342, 11]],[new Date('14 May 2020, 08:00  GMT+5:30'),[793, 0, 418, 11]],[new Date('15 May 2020, 08:00  GMT+5:30'),[818, 0, 439, 11]],[new Date('16 May 2020, 08:00  GMT+5:30'),[818, 0, 439, 11]],[new Date('17 May 2020, 08:00  GMT+5:30'),[887, 0, 514, 13]],[new Date('18 May 2020, 08:00  GMT+5:30'),[910, 0, 562, 14]],[new Date('19 May 2020, 08:00  GMT+5:30'),[928, 0, 598, 14]],[new Date('20 May 2020, 08:00  GMT+5:30'),[964, 0, 627, 14]],[new Date('21 May 2020, 08:00  GMT+5:30'),[993, 0, 648, 14]],[new Date('22 May 2020, 08:00  GMT+5:30'),[1031, 0, 681, 15]],[new Date('23 May 2020, 08:00  GMT+5:30'),[1067, 0, 706, 16]],[new Date('24 May 2020, 08:00  GMT+5:30'),[1131, 0, 750, 16]],[new Date('25 May 2020, 08:00  GMT+5:30'),[1184, 0, 765, 16]],[new Date('26 May 2020, 08:00  GMT+5:30'),[1184, 0, 765, 16]],[new Date('27 May 2020, 08:00  GMT+5:30'),[1305, 0, 824, 17]],[new Date('28 May 2020, 08:00  GMT+5:30'),[1381, 0, 838, 18]],[new Date('29 May 2020, 08:00  GMT+5:30'),[1504, 0, 881, 19]],[new Date('30 May 2020, 08:00  GMT+5:30'),[1721, 0, 940, 19]],[new Date('31 May 2020, 08:00  GMT+5:30'),[1923, 0, 971, 20]],[new Date('01 June 2020, 08:00  GMT+5:30'),[2091, 0, 1048, 20]],[new Date('02 June 2020, 08:00  GMT+5:30'),[2356, 0, 1055, 21]],[new Date('03 June 2020, 08:00  GMT+5:30'),[2652, 0, 1069, 23]],[new Date('04 June 2020, 08:00  GMT+5:30'),[2954, 0, 1089, 23]],[new Date('05 June 2020, 08:00  GMT+5:30'),[3281, 0, 2134, 24]],[new Date('06 June 2020, 08:00  GMT+5:30'),[3597, 0, 2134, 24]],[new Date('07 June 2020, 08:00  GMT+5:30'),[3952, 0, 2134, 24]],[new Date('08 June 2020, 08:00 GMT+5:30'),[4448, 0, 2134, 28]],[new Date('09 June 2020, 08:00  GMT+5:30'),[4854, 0, 2134, 39]],[new Date('10 June 2020, 08:00  GMT+5:30'),[5209, 0, 2134, 45]],[new Date('11 June 2020, 08:00  GMT+5:30'),[5579, 0, 2188, 52]],[new Date('12 June 2020, 08:00  GMT+5:30'),[5968, 0, 2260, 64]],[new Date('13 June 2020, 08:00  GMT+5:30'),[6334, 0, 2475, 70]],[new Date('14 June 2020, 08:00  GMT+5:30'),[6749, 0, 2803, 78]],[new Date('15 June 2020, 08:00  GMT+5:30'),[7208, 0, 3003, 88]],[new Date('16 June 2020, 08:00  GMT+5:30'),[7722, 0, 3565, 100]],[new Date('17 June 2020, 08:00  GMT+5:30'),[8272, 0, 3748, 118]]];