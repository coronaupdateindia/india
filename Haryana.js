var rawData=[[new Date(2020,02,15,12,0),[ 0,14,0,0]],[new Date(2020,02,15,17,0),[ 0,14,0,0]],[new Date(2020,02,15,23,30),[ 0,14,0,0]],[new Date(2020,02,16,16,0),[ 0,14,0,0]],[new Date(2020,02,17,9,15),[ 0,14,0,0]],[new Date(2020,02,17,17,15),[ 1,14,0,0]],[new Date(2020,02,24,20,15),[14, 14, 11, 0]],[new Date(2020,02,25,9,15),[14, 14, 11, 0]],[new Date(2020,02,25,18,45),[14, 14, 11, 0]],[new Date(2020,02,26,10,15),[16, 14, 11, 0]],[new Date(2020,02,26,20,00),[16, 14, 11, 0]],[new Date(2020,02,27,9,15),[16, 14, 11, 0]],[new Date(2020,02,28,9,30),[19, 14, 11, 0]],[new Date(2020,02,28,17,45),[19, 14, 12, 0]],[new Date(2020,02,29,10,00),[19, 14, 12, 0]],[new Date(2020,02,29,19,30),[33, 0, 17, 0]],[new Date(2020,02,30,10,30),[33, 0, 17, 0]],[new Date(2020,02,30,21,30),[36, 0, 18, 0]],[new Date(2020,02,31,20,30),[40, 0, 21, 0]],[new Date('01 April 2020, 09:00 GMT+5:30'),[43, 0, 21, 0]],[new Date('01 April 2020, 19:30 GMT+5:30'),[43, 0, 21, 0]],[new Date('02 April 2020, 09:00 GMT+5:30'),[43, 0, 21, 0]],[new Date('02 April 2020, 18:00 GMT+5:30'),[43, 0, 21, 0]],[new Date('03 April 2020, 09:00 GMT+5:30'),[43, 0, 21, 0]],[new Date('03 April 2020, 18:00 GMT+5:30'),[49, 0, 24, 0]],[new Date('04 April 2020, 09:00 GMT+5:30'),[49, 0, 24, 0]],[new Date('04 April 2020, 18:00 GMT+5:30'),[49, 0, 24, 0]],[new Date('05 April 2020, 09:00 GMT+5:30'),[49, 0, 24, 0]],[new Date('05 April 2020, 18:00 GMT+5:30'),[59, 0, 25, 1]],[new Date('06 April 2020, 09:00 GMT+5:30'),[84, 0, 25, 1]],[new Date('06 April 2020, 18:00 GMT+5:30'),[84, 0, 25, 1]],[new Date('07 April 2020, 09:00 GMT+5:30'),[90, 0, 25, 1]],[new Date('07 April 2020, 18:00 GMT+5:30'),[90, 0, 25, 1]],[new Date('08 April 2020, 08:00 GMT+5:30'),[147, 0, 28, 3]],[new Date('08 April 2020, 17:00 GMT+5:30'),[147, 0, 28, 3]],[new Date('09 April 2020, 08:00 GMT+5:30'),[147, 0, 28, 3]],[new Date('09 April 2020, 17:00 GMT+5:30'),[169, 0, 29, 3]],[new Date('10 April 2020, 08:00 GMT+5:30'),[169, 0, 29, 3]],[new Date('10 April 2020, 17:00 GMT+5:30'),[169, 0, 29, 3]],[new Date('11 April 2020, 08:00 GMT+5:30'),[177, 0, 29, 3]],[new Date('11 April 2020, 17:00 GMT+5:30'),[177, 0, 29, 3]],[new Date('12 April 2020, 08:00 GMT+5:30'),[177, 0, 29, 3]],[new Date('12 April 2020, 17:00 GMT+5:30'),[185, 0, 29, 3]],[new Date('13 April 2020, 08:00 GMT+5:30'),[185, 0, 29, 3]],[new Date('13 April 2020, 17:00 GMT+5:30'),[185, 0, 29, 3]],[new Date('14 April 2020, 08:00 GMT+5:30'),[185, 0, 29, 3]],[new Date('14 April 2020, 17:00 GMT+5:30'),[199, 0, 34, 3]],[new Date('15 April 2020, 08:00 GMT+5:30'),[199, 0, 34, 3]],[new Date('15 April 2020, 17:00 GMT+5:30'),[199, 0, 34, 3]],[new Date('16 April 2020, 08:00 GMT+5:30'),[205, 0, 43, 3]],[new Date('16 April 2020, 17:00 GMT+5:30'),[205, 0, 43, 3]],[new Date('17 April 2020, 08:00 GMT+5:30'),[205, 0, 43, 3]],[new Date('17 April 2020, 17:00 GMT+5:30'),[205, 0, 43, 3]],[new Date('18 April 2020, 08:00 GMT+5:30'),[225, 0, 43, 3]],[new Date('18 April 2020, 17:00 GMT+5:30'),[225, 0, 43, 3]],[new Date('19 April 2020, 08:00 GMT+5:30'),[225, 0, 43, 3]],[new Date('19 April 2020, 17:00 GMT+5:30'),[233, 0, 87, 3]],[new Date('20 April 2020, 08:00 GMT+5:30'),[233, 0, 87, 3]],[new Date('20 April 2020, 17:00 GMT+5:30'),[233, 0, 87, 3]],[new Date('21 April 2020, 08:00 GMT+5:30'),[254, 0, 127, 3]],[new Date('21 April 2020, 17:00 GMT+5:30'),[254, 0, 127, 3]],[new Date('22 April 2020, 08:00 GMT+5:30'),[254, 0, 127, 3]],[new Date('22 April 2020, 17:00 GMT+5:30'),[254, 0, 127, 3]],[new Date('23 April 2020, 08:00 GMT+5:30'),[262, 0, 140, 3]],[new Date('23 April 2020, 17:00 GMT+5:30'),[262, 0, 140, 3]],[new Date('24 April 2020, 08:00 GMT+5:30'),[272, 0, 156, 3]],[new Date('24 April 2020, 17:00 GMT+5:30'),[272, 0, 156, 3]],[new Date('25 April 2020, 08:00 GMT+5:30'),[272, 0, 156, 3]],[new Date('25 April 2020, 17:00 GMT+5:30'),[272, 0, 156, 3]],[new Date('26 April 2020, 08:00 GMT+5:30'),[289, 0, 176, 3]],[new Date('26 April 2020, 17:00 GMT+5:30'),[289, 0, 176, 3]],[new Date('27 April 2020, 08:00 GMT+5:30'),[289, 0, 176, 3]],[new Date('27 April 2020, 17:00 GMT+5:30'),[289, 0, 176, 3]],[new Date('28 April 2020, 08:00 GMT+5:30'),[296, 0, 183, 3]],[new Date('28 April 2020, 17:00 GMT+5:30'),[296, 0, 183, 3]],[new Date('29 April 2020, 08:00 GMT+5:30'),[310, 0, 209, 3]],[new Date('29 April 2020, 17:00 GMT+5:30'),[310, 0, 209, 3]],[new Date('30 April 2020, 08:00 GMT+5:30'),[310, 0, 209, 3]],[new Date('30 April 2020, 17:00 GMT+5:30'),[310, 0, 209, 3]],[new Date('01 May 2020, 08:00 GMT+5:30'),[313, 0, 209, 3]],[new Date('01 May 2020, 17:00 GMT+5:30'),[313, 0, 209, 3]],[new Date('02 May 2020, 08:00 GMT+5:30'),[360, 0, 227, 4]],[new Date('02 May 2020, 17:00 GMT+5:30'),[360, 0, 227, 4]],[new Date('03 May 2020, 08:00 GMT+5:30'),[360, 0, 227, 4]],[new Date('03 May 2020, 17:00 GMT+5:30'),[394, 0, 227, 4]],[new Date('04 May 2020, 08:00 GMT+5:30'),[442, 0, 245, 5]],[new Date('04 May 2020, 17:00  GMT+5:30'),[442, 0, 245, 5]],[new Date('05 May 2020, 08:00  GMT+5:30'),[517, 0, 254, 6]],[new Date('05 May 2020, 17:00  GMT+5:30'),[517, 0, 254, 6]],[new Date('06 May 2020, 08:00  GMT+5:30'),[548, 0, 256, 6]],[new Date('07 May 2020, 08:00  GMT+5:30'),[594, 0, 260, 7]],[new Date('08 May 2020, 08:00  GMT+5:30'),[625, 0, 260, 7]],[new Date('09 May 2020, 08:00  GMT+5:30'),[647, 0, 279, 8]],[new Date('10 May 2020, 08:00  GMT+5:30'),[675, 0, 290, 9]],[new Date('11 May 2020, 08:00  GMT+5:30'),[703, 0, 300, 10]],[new Date('12 May 2020, 08:00  GMT+5:30'),[730, 0, 337, 11]],[new Date('13 May 2020, 08:00  GMT+5:30'),[780, 0, 342, 11]],[new Date('14 May 2020, 08:00  GMT+5:30'),[793, 0, 418, 11]],[new Date('15 May 2020, 08:00  GMT+5:30'),[818, 0, 439, 11]],[new Date('16 May 2020, 08:00  GMT+5:30'),[818, 0, 439, 11]],[new Date('17 May 2020, 08:00  GMT+5:30'),[887, 0, 514, 13]],[new Date('18 May 2020, 08:00  GMT+5:30'),[910, 0, 562, 14]],[new Date('19 May 2020, 08:00  GMT+5:30'),[928, 0, 598, 14]],[new Date('20 May 2020, 08:00  GMT+5:30'),[964, 0, 627, 14]],[new Date('21 May 2020, 08:00  GMT+5:30'),[993, 0, 648, 14]],[new Date('22 May 2020, 08:00  GMT+5:30'),[1031, 0, 681, 15]],[new Date('23 May 2020, 08:00  GMT+5:30'),[1067, 0, 706, 16]],[new Date('24 May 2020, 08:00  GMT+5:30'),[1131, 0, 750, 16]],[new Date('25 May 2020, 08:00  GMT+5:30'),[1184, 0, 765, 16]],[new Date('26 May 2020, 08:00  GMT+5:30'),[1184, 0, 765, 16]],[new Date('27 May 2020, 08:00  GMT+5:30'),[1305, 0, 824, 17]],[new Date('28 May 2020, 08:00  GMT+5:30'),[1381, 0, 838, 18]],[new Date('29 May 2020, 08:00  GMT+5:30'),[1504, 0, 881, 19]],[new Date('30 May 2020, 08:00  GMT+5:30'),[1721, 0, 940, 19]],[new Date('31 May 2020, 08:00  GMT+5:30'),[1923, 0, 971, 20]],[new Date('01 June 2020, 08:00  GMT+5:30'),[2091, 0, 1048, 20]],[new Date('02 June 2020, 08:00  GMT+5:30'),[2356, 0, 1055, 21]],[new Date('03 June 2020, 08:00  GMT+5:30'),[2652, 0, 1069, 23]],[new Date('04 June 2020, 08:00  GMT+5:30'),[2954, 0, 1089, 23]],[new Date('05 June 2020, 08:00  GMT+5:30'),[3281, 0, 2134, 24]],[new Date('06 June 2020, 08:00  GMT+5:30'),[3597, 0, 2134, 24]],[new Date('07 June 2020, 08:00  GMT+5:30'),[3952, 0, 2134, 24]],[new Date('08 June 2020, 08:00 GMT+5:30'),[4448, 0, 2134, 28]],[new Date('09 June 2020, 08:00  GMT+5:30'),[4854, 0, 2134, 39]],[new Date('10 June 2020, 08:00  GMT+5:30'),[5209, 0, 2134, 45]],[new Date('11 June 2020, 08:00  GMT+5:30'),[5579, 0, 2188, 52]],[new Date('12 June 2020, 08:00  GMT+5:30'),[5968, 0, 2260, 64]],[new Date('13 June 2020, 08:00  GMT+5:30'),[6334, 0, 2475, 70]],[new Date('14 June 2020, 08:00  GMT+5:30'),[6749, 0, 2803, 78]],[new Date('15 June 2020, 08:00  GMT+5:30'),[7208, 0, 3003, 88]],[new Date('16 June 2020, 08:00  GMT+5:30'),[7722, 0, 3565, 100]],[new Date('17 June 2020, 08:00  GMT+5:30'),[8272, 0, 3748, 118]],[new Date('18 June 2020, 08:00  GMT+5:30'),[8832, 0, 3952, 130]],[new Date('19 June 2020, 08:00  GMT+5:30'),[9218, 0, 4556, 134]],[new Date('20 June 2020, 08:00  GMT+5:30'),[9743, 0, 4889, 144]],[new Date('21 June 2020, 08:00  GMT+5:30'),[10223, 0, 5128, 149]],[new Date('22 June 2020, 08:00  GMT+5:30'),[10635, 0, 5557, 160]],[new Date('23 June 2020, 08:00  GMT+5:30'),[11025, 0, 5916, 169]],[new Date('24	June 2020, 08:00  GMT+5:30'),[11520, 0, 6498, 178]],[new Date('25	June 2020, 08:00  GMT+5:30'),[12010, 0, 6925, 188]],[new Date('26	June 2020, 08:00  GMT+5:30'),[12463, 0, 7380, 198]],[new Date('27	June 2020, 08:00  GMT+5:30'),[12884, 0, 8016, 211]],[new Date('28	June 2020, 08:00  GMT+5:30'),[13427, 0, 8472, 218]],[new Date('29	June 2020, 08:00  GMT+5:30'),[13829, 0, 8917, 223]],[new Date('30	June 2020, 08:00  GMT+5:30'),[14210, 0, 9502, 232]],[new Date('01	July 2020, 08:00  GMT+5:30'),[14548, 0, 9972, 236]],[new Date('02	July 2020, 08:00  GMT+5:30'),[14941, 0, 10499, 240]],[new Date('03	July 2020, 08:00  GMT+5:30'),[15509, 0, 11019, 251]],[new Date('04	July 2020, 08:00  GMT+5:30'),[16003, 0, 11691, 255]],[new Date('05	July 2020, 08:00  GMT+5:30'),[16548, 0, 12257, 260]],[new Date('06	July 2020, 08:00  GMT+5:30'),[17005, 0, 12944, 265]],[new Date('07	July 2020, 08:00  GMT+5:30'),[17504, 0, 13335, 276]],[new Date('08	July 2020, 08:00  GMT+5:30'),[17999, 0, 13645, 279]],[new Date('09	July 2020, 08:00  GMT+5:30'),[18690, 0, 14106, 282]],[new Date('10	July 2020, 08:00  GMT+5:30'),[19369, 0, 14510, 287]],[new Date('11	July 2020, 08:00  GMT+5:30'),[19934, 0, 14904, 290]],[new Date('12	July 2020, 08:00  GMT+5:30'),[20582, 0, 15394, 297]],[new Date('13	July 2020, 08:00  GMT+5:30'),[21240, 0, 15983, 301]],[new Date('14	July 2020, 08:00  GMT+5:30'),[21894, 0, 16602, 308]],[new Date('15	July 2020, 08:00  GMT+5:30'),[22628, 0, 17090, 312]],[new Date('16	July 2020, 08:00  GMT+5:30'),[23306, 0, 17667, 319]],[new Date('17	July 2020, 08:00  GMT+5:30'),[24002, 0, 18185, 322]],[new Date('18	July 2020, 08:00  GMT+5:30'),[24797, 0, 18718, 327]]];