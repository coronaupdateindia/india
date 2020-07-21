var rawData=[[new Date(2020,02,15,12,0),[ 2, 2,0,0]],[new Date(2020,02,15,17,0),[ 2, 2,0,0]],[new Date(2020,02,15,23,30),[ 2, 2,3,0]],[new Date(2020,02,16,16,0),[ 2, 2,3,0]],[new Date(2020,02,17,9,15),[ 2, 2,3,0]],[new Date(2020,02,17,17,15),[ 2, 2,3,0]],[new Date(2020,02,24,20,15),[30, 2, 3, 0]],[new Date(2020,02,25,9,15),[30, 2, 3, 0]],[new Date(2020,02,25,18,45),[34, 2, 3, 0]],[new Date(2020,02,26,10,15),[36, 2, 3, 0]],[new Date(2020,02,26,20,00),[39, 2, 3, 0]],[new Date(2020,02,27,9,15),[39, 2, 3, 0]],[new Date(2020,02,28,9,30),[46, 2, 3, 0]],[new Date(2020,02,28,17,45),[52, 2, 3, 0]],[new Date(2020,02,29,10,00),[52, 2, 3, 0]],[new Date(2020,02,29,19,30),[55, 0, 3, 0]],[new Date(2020,02,30,10,30),[57, 0, 3, 0]],[new Date(2020,02,30,21,30),[59, 0, 3, 0]],[new Date(2020,02,31,20,30),[74, 0, 3, 0]],[new Date('01 April 2020, 09:00 GMT+5:30'),[93, 0, 3, 0]],[new Date('01 April 2020, 19:30 GMT+5:30'),[93, 0, 3, 0]],[new Date('02 April 2020, 09:00 GMT+5:30'),[108, 0, 3, 0]],[new Date('02 April 2020, 18:00 GMT+5:30'),[108, 0, 3, 0]],[new Date('03 April 2020, 09:00 GMT+5:30'),[133, 0, 3, 0]],[new Date('03 April 2020, 18:00 GMT+5:30'),[167, 0, 3, 0]],[new Date('04 April 2020, 09:00 GMT+5:30'),[179, 0, 3, 0]],[new Date('04 April 2020, 18:00 GMT+5:30'),[200, 0, 21, 0]],[new Date('05 April 2020, 09:00 GMT+5:30'),[200, 0, 21, 0]],[new Date('05 April 2020, 18:00 GMT+5:30'),[200, 0, 21, 0]],[new Date('06 April 2020, 09:00 GMT+5:30'),[253, 0, 21, 0]],[new Date('06 April 2020, 18:00 GMT+5:30'),[274, 0, 21, 0]],[new Date('07 April 2020, 09:00 GMT+5:30'),[288, 0, 21, 3]],[new Date('07 April 2020, 18:00 GMT+5:30'),[288, 0, 21, 3]],[new Date('08 April 2020, 08:00 GMT+5:30'),[328, 0, 21, 3]],[new Date('08 April 2020, 17:00 GMT+5:30'),[328, 0, 21, 3]],[new Date('09 April 2020, 08:00 GMT+5:30'),[381, 0, 21, 3]],[new Date('09 April 2020, 17:00 GMT+5:30'),[383, 0, 21, 3]],[new Date('10 April 2020, 08:00 GMT+5:30'),[463, 0, 21, 3]],[new Date('10 April 2020, 17:00 GMT+5:30'),[463, 0, 21, 3]],[new Date('11 April 2020, 08:00 GMT+5:30'),[553, 0, 21, 3]],[new Date('11 April 2020, 17:00 GMT+5:30'),[553, 0, 21, 3]],[new Date('12 April 2020, 08:00 GMT+5:30'),[700, 0, 21, 3]],[new Date('12 April 2020, 17:00 GMT+5:30'),[700, 0, 21, 3]],[new Date('13 April 2020, 08:00 GMT+5:30'),[804, 0, 21, 3]],[new Date('13 April 2020, 17:00 GMT+5:30'),[812, 0, 21, 3]],[new Date('14 April 2020, 08:00 GMT+5:30'),[873, 0, 21, 3]],[new Date('14 April 2020, 17:00 GMT+5:30'),[879, 0, 133, 3]],[new Date('15 April 2020, 08:00 GMT+5:30'),[969, 0, 147, 3]],[new Date('15 April 2020, 17:00 GMT+5:30'),[1005, 0, 147, 3]],[new Date('16 April 2020, 08:00 GMT+5:30'),[1023, 0, 147, 3]],[new Date('16 April 2020, 17:00 GMT+5:30'),[1023, 0, 147, 3]],[new Date('17 April 2020, 08:00 GMT+5:30'),[1131, 0, 164, 3]],[new Date('17 April 2020, 17:00 GMT+5:30'),[1131, 0, 164, 11]],[new Date('18 April 2020, 08:00 GMT+5:30'),[1229, 0, 183, 11]],[new Date('18 April 2020, 17:00 GMT+5:30'),[1229, 0, 183, 11]],[new Date('19 April 2020, 08:00 GMT+5:30'),[1351, 0, 183, 11]],[new Date('19 April 2020, 17:00 GMT+5:30'),[1351, 0, 183, 11]],[new Date('20 April 2020, 08:00 GMT+5:30'),[1478, 0, 183, 14]],[new Date('20 April 2020, 17:00 GMT+5:30'),[1478, 0, 183, 14]],[new Date('21 April 2020, 08:00 GMT+5:30'),[1576, 0, 205, 25]],[new Date('21 April 2020, 17:00 GMT+5:30'),[1576, 0, 205, 25]],[new Date('22 April 2020, 08:00 GMT+5:30'),[1659, 0, 230, 25]],[new Date('22 April 2020, 17:00 GMT+5:30'),[1801, 0, 230, 25]],[new Date('23 April 2020, 08:00 GMT+5:30'),[1890, 0, 230, 27]],[new Date('23 April 2020, 17:00 GMT+5:30'),[1890, 0, 230, 27]],[new Date('24 April 2020, 08:00 GMT+5:30'),[1964, 0, 230, 27]],[new Date('24 April 2020, 17:00 GMT+5:30'),[1964, 0, 230, 27]],[new Date('25 April 2020, 08:00 GMT+5:30'),[2034, 0, 230, 27]],[new Date('25 April 2020, 17:00 GMT+5:30'),[2034, 0, 230, 27]],[new Date('26 April 2020, 08:00 GMT+5:30'),[2083, 0, 493, 33]],[new Date('26 April 2020, 17:00 GMT+5:30'),[2083, 0, 493, 33]],[new Date('27 April 2020, 08:00 GMT+5:30'),[2185, 0, 518, 33]],[new Date('27 April 2020, 17:00 GMT+5:30'),[2185, 0, 518, 41]],[new Date('28 April 2020, 08:00 GMT+5:30'),[2262, 0, 669, 46]],[new Date('28 April 2020, 17:00 GMT+5:30'),[2262, 0, 669, 46]],[new Date('29 April 2020, 08:00 GMT+5:30'),[2364, 0, 768, 51]],[new Date('29 April 2020, 17:00 GMT+5:30'),[2364, 0, 768, 51]],[new Date('30 April 2020, 08:00 GMT+5:30'),[2438, 0, 768, 51]],[new Date('30 April 2020, 17:00 GMT+5:30'),[2438, 0, 768, 51]],[new Date('01 May 2020, 08:00 GMT+5:30'),[2584, 0, 836, 58]],[new Date('01 May 2020, 17:00 GMT+5:30'),[2584, 0, 836, 58]],[new Date('02 May 2020, 08:00 GMT+5:30'),[2666, 0, 1116, 62]],[new Date('02 May 2020, 17:00 GMT+5:30'),[2666, 0, 1116, 62]],[new Date('03 May 2020, 08:00 GMT+5:30'),[2770, 0, 1121, 65]],[new Date('03 May 2020, 17:00 GMT+5:30'),[2772, 0, 1121, 65]],[new Date('04 May 2020, 08:00 GMT+5:30'),[2886, 0, 1356, 71]],[new Date('04 May 2020, 17:00  GMT+5:30'),[2886, 0, 1356, 71]],[new Date('05 May 2020, 08:00  GMT+5:30'),[3061, 0, 1394, 77]],[new Date('05 May 2020, 17:00  GMT+5:30'),[3061, 0, 1394, 77]],[new Date('06 May 2020, 08:00  GMT+5:30'),[3158, 0, 1525, 89]],[new Date('07 May 2020, 08:00  GMT+5:30'),[3317, 0, 1596, 92]],[new Date('08 May 2020, 08:00  GMT+5:30'),[3427, 0, 1596, 97]],[new Date('09 May 2020, 08:00  GMT+5:30'),[3579, 0, 1916, 101]],[new Date('10 May 2020, 08:00  GMT+5:30'),[3708, 0, 2026, 106]],[new Date('11 May 2020, 08:00  GMT+5:30'),[3814, 0, 2176, 107]],[new Date('12 May 2020, 08:00  GMT+5:30'),[3988, 0, 2264, 113]],[new Date('13 May 2020, 08:00  GMT+5:30'),[4126, 0, 2378, 117]],[new Date('14 May 2020, 08:00  GMT+5:30'),[4328, 0, 2459, 121]],[new Date('15 May 2020, 08:00  GMT+5:30'),[4534, 0, 2580, 125]],[new Date('16 May 2020, 08:00  GMT+5:30'),[4727, 0, 2677, 125]],[new Date('17 May 2020, 08:00  GMT+5:30'),[4960, 0, 2839, 126]],[new Date('18 May 2020, 08:00  GMT+5:30'),[5202, 0, 2992, 131]],[new Date('19 May 2020, 08:00  GMT+5:30'),[5507, 0, 3218, 138]],[new Date('20 May 2020, 08:00  GMT+5:30'),[5845, 0, 3337, 143]],[new Date('21 May 2020, 08:00  GMT+5:30'),[6015, 0, 3404, 147]],[new Date('22 May 2020, 08:00  GMT+5:30'),[6227, 0, 3485, 151]],[new Date('23 May 2020, 08:00  GMT+5:30'),[6494, 0, 3680, 153]],[new Date('24 May 2020, 08:00  GMT+5:30'),[6742, 0, 3786, 160]],[new Date('25 May 2020, 08:00  GMT+5:30'),[7028, 0, 3848, 163]],[new Date('26 May 2020, 08:00  GMT+5:30'),[7300, 0, 3951, 167]],[new Date('27 May 2020, 08:00  GMT+5:30'),[7536, 0, 4171, 170]],[new Date('28 May 2020, 08:00  GMT+5:30'),[7703, 0, 4457, 173]],[new Date('29 May 2020, 08:00  GMT+5:30'),[8067, 0, 4817, 180]],[new Date('30 May 2020, 08:00  GMT+5:30'),[8365, 0, 5244, 184]],[new Date('31 May 2020, 08:00  GMT+5:30'),[8617, 0, 5739, 193]],[new Date('01 June 2020, 08:00  GMT+5:30'),[8831, 0, 5927, 194]],[new Date('02 June 2020, 08:00  GMT+5:30'),[8980, 0, 6040, 198]],[new Date('03 June 2020, 08:00  GMT+5:30'),[9373, 0, 6435, 203]],[new Date('04 June 2020, 08:00  GMT+5:30'),[9652, 0, 6744, 209]],[new Date('05 June 2020, 08:00  GMT+5:30'),[9862, 0, 7104, 213]],[new Date('06 June 2020, 08:00  GMT+5:30'),[10084, 0, 7359, 218]],[new Date('07 June 2020, 08:00  GMT+5:30'),[10331, 0, 7501, 231]],[new Date('08 June 2020, 08:00 GMT+5:30'),[10599, 0, 7641, 240]],[new Date('09 June 2020, 08:00  GMT+5:30'),[10763, 0, 8004, 246]],[new Date('10 June 2020, 08:00  GMT+5:30'),[11245, 0, 8328, 255]],[new Date('11 June 2020, 08:00  GMT+5:30'),[11600, 0, 8569, 259]],[new Date('12 June 2020, 08:00  GMT+5:30'),[11838, 0, 8775, 265]],[new Date('13 June 2020, 08:00  GMT+5:30'),[12068, 0, 8898, 272]],[new Date('14 June 2020, 08:00  GMT+5:30'),[12401, 0, 9337, 282]],[new Date('15 June 2020, 08:00  GMT+5:30'),[12694, 0, 9566, 292]],[new Date('16 June 2020, 08:00  GMT+5:30'),[12981, 0, 9785, 301]],[new Date('17 June 2020, 08:00  GMT+5:30'),[13216, 0, 9849, 308]],[new Date('18 June 2020, 08:00  GMT+5:30'),[13542, 0, 10467, 313]],[new Date('19 June 2020, 08:00  GMT+5:30'),[13857, 0, 10742, 323]],[new Date('20 June 2020, 08:00  GMT+5:30'),[14156, 0, 10997, 333]],[new Date('21 June 2020, 08:00  GMT+5:30'),[14536, 0, 11274, 337]],[new Date('22 June 2020, 08:00  GMT+5:30'),[14930, 0, 11597, 349]],[new Date('23 June 2020, 08:00  GMT+5:30'),[15232, 0, 11910, 356]],[new Date('24	June 2020, 08:00  GMT+5:30'),[15627, 0, 12213, 365]],[new Date('25	June 2020, 08:00  GMT+5:30'),[16009, 0, 12611, 375]],[new Date('26	June 2020, 08:00  GMT+5:30'),[16296, 0, 12840, 379]],[new Date('27	June 2020, 08:00  GMT+5:30'),[16660, 0, 13062, 380]],[new Date('28	June 2020, 08:00  GMT+5:30'),[16944, 0, 13367, 391]],[new Date('29	June 2020, 08:00  GMT+5:30'),[17271, 0, 13611, 399]],[new Date('30	June 2020, 08:00  GMT+5:30'),[17660, 0, 13618, 405]],[new Date('01	July 2020, 08:00  GMT+5:30'),[18014, 0, 14220, 413]],[new Date('02	July 2020, 08:00  GMT+5:30'),[18312, 0, 14574, 421]],[new Date('03	July 2020, 08:00  GMT+5:30'),[18662, 0, 14948, 430]],[new Date('04	July 2020, 08:00  GMT+5:30'),[19052, 0, 15281, 440]],[new Date('05	July 2020, 08:00  GMT+5:30'),[19532, 0, 15640, 447]],[new Date('06	July 2020, 08:00  GMT+5:30'),[20164, 0, 15928, 456]],[new Date('07	July 2020, 08:00  GMT+5:30'),[20688, 0, 16278, 461]],[new Date('08	July 2020, 08:00  GMT+5:30'),[21404, 0, 16575, 472]],[new Date('09	July 2020, 08:00  GMT+5:30'),[22063, 0, 16866, 482]],[new Date('10	July 2020, 08:00  GMT+5:30'),[22563, 0, 17070, 491]],[new Date('11	July 2020, 08:00  GMT+5:30'),[23174, 0, 17620, 497]],[new Date('12	July 2020, 08:00  GMT+5:30'),[23748, 0, 17869, 503]],[new Date('13	July 2020, 08:00  GMT+5:30'),[24392, 0, 18103, 510]],[new Date('14	July 2020, 08:00  GMT+5:30'),[24936, 0, 18630, 525]],[new Date('15	July 2020, 08:00  GMT+5:30'),[25571, 0, 19161, 525]],[new Date('16	July 2020, 08:00  GMT+5:30'),[26437, 0, 19502, 530]],[new Date('17	July 2020, 08:00  GMT+5:30'),[27174, 0, 19970, 538]],[new Date('18	July 2020, 08:00  GMT+5:30'),[27789, 0, 20626, 546]],[new Date('19	July 2020, 08:00  GMT+5:30'),[28500, 0, 21144, 553]],[new Date('20	July 2020, 08:00  GMT+5:30'),[29434, 0, 21730, 559]]];