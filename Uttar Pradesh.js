var rawData=[[new Date(2020,02,15,12,0),[11, 1,3,0]],[new Date(2020,02,15,17,0),[11, 1,4,0]],[new Date(2020,02,15,23,30),[12, 1,4,0]],[new Date(2020,02,16,16,0),[12, 1,4,0]],[new Date(2020,02,17,9,15),[12, 1,4,0]],[new Date(2020,02,17,17,15),[14, 1,5,0]],[new Date(2020,02,24,20,15),[32, 1, 11, 0]],[new Date(2020,02,25,9,15),[34, 1, 11, 0]],[new Date(2020,02,25,18,45),[36, 1, 11, 0]],[new Date(2020,02,26,10,15),[36, 1, 11, 0]],[new Date(2020,02,26,20,00),[40, 1, 11, 0]],[new Date(2020,02,27,9,15),[40, 1, 11, 0]],[new Date(2020,02,28,9,30),[44, 1, 11, 0]],[new Date(2020,02,28,17,45),[54, 1, 11, 0]],[new Date(2020,02,29,10,00),[54, 1, 11, 0]],[new Date(2020,02,29,19,30),[65, 0, 11, 0]],[new Date(2020,02,30,10,30),[75, 0, 11, 0]],[new Date(2020,02,30,21,30),[82, 0, 11, 0]],[new Date(2020,02,31,20,30),[101, 0, 14, 0]],[new Date('01 April 2020, 09:00 GMT+5:30'),[103, 0, 14, 0]],[new Date('01 April 2020, 19:30 GMT+5:30'),[103, 0, 14, 2]],[new Date('02 April 2020, 09:00 GMT+5:30'),[113, 0, 14, 2]],[new Date('02 April 2020, 18:00 GMT+5:30'),[113, 0, 14, 2]],[new Date('03 April 2020, 09:00 GMT+5:30'),[113, 0, 14, 2]],[new Date('03 April 2020, 18:00 GMT+5:30'),[172, 0, 14, 2]],[new Date('04 April 2020, 09:00 GMT+5:30'),[174, 0, 19, 2]],[new Date('04 April 2020, 18:00 GMT+5:30'),[174, 0, 19, 2]],[new Date('05 April 2020, 09:00 GMT+5:30'),[227, 0, 19, 2]],[new Date('05 April 2020, 18:00 GMT+5:30'),[227, 0, 19, 2]],[new Date('06 April 2020, 09:00 GMT+5:30'),[227, 0, 19, 2]],[new Date('06 April 2020, 18:00 GMT+5:30'),[305, 0, 21, 3]],[new Date('07 April 2020, 09:00 GMT+5:30'),[305, 0, 21, 3]],[new Date('07 April 2020, 18:00 GMT+5:30'),[305, 0, 21, 3]],[new Date('08 April 2020, 08:00 GMT+5:30'),[326, 0, 21, 3]],[new Date('08 April 2020, 17:00 GMT+5:30'),[343, 0, 26, 3]],[new Date('09 April 2020, 08:00 GMT+5:30'),[361, 0, 27, 4]],[new Date('09 April 2020, 17:00 GMT+5:30'),[410, 0, 31, 4]],[new Date('10 April 2020, 08:00 GMT+5:30'),[410, 0, 31, 4]],[new Date('10 April 2020, 17:00 GMT+5:30'),[431, 0, 32, 4]],[new Date('11 April 2020, 08:00 GMT+5:30'),[431, 0, 32, 4]],[new Date('11 April 2020, 17:00 GMT+5:30'),[433, 0, 32, 4]],[new Date('12 April 2020, 08:00 GMT+5:30'),[452, 0, 45, 5]],[new Date('12 April 2020, 17:00 GMT+5:30'),[452, 0, 45, 5]],[new Date('13 April 2020, 08:00 GMT+5:30'),[483, 0, 46, 5]],[new Date('13 April 2020, 17:00 GMT+5:30'),[483, 0, 47, 5]],[new Date('14 April 2020, 08:00 GMT+5:30'),[558, 0, 49, 5]],[new Date('14 April 2020, 17:00 GMT+5:30'),[657, 0, 49, 5]],[new Date('15 April 2020, 08:00 GMT+5:30'),[660, 0, 50, 5]],[new Date('15 April 2020, 17:00 GMT+5:30'),[735, 0, 51, 11]],[new Date('16 April 2020, 08:00 GMT+5:30'),[735, 0, 51, 11]],[new Date('16 April 2020, 17:00 GMT+5:30'),[773, 0, 68, 13]],[new Date('17 April 2020, 08:00 GMT+5:30'),[805, 0, 74, 13]],[new Date('17 April 2020, 17:00 GMT+5:30'),[846, 0, 74, 14]],[new Date('18 April 2020, 08:00 GMT+5:30'),[849, 0, 82, 14]],[new Date('18 April 2020, 17:00 GMT+5:30'),[969, 0, 86, 14]],[new Date('19 April 2020, 08:00 GMT+5:30'),[969, 0, 86, 14]],[new Date('19 April 2020, 17:00 GMT+5:30'),[1084, 0, 108, 17]],[new Date('20 April 2020, 08:00 GMT+5:30'),[1084, 0, 108, 17]],[new Date('20 April 2020, 17:00 GMT+5:30'),[1176, 0, 129, 17]],[new Date('21 April 2020, 08:00 GMT+5:30'),[1184, 0, 140, 18]],[new Date('21 April 2020, 17:00 GMT+5:30'),[1294, 0, 140, 20]],[new Date('22 April 2020, 08:00 GMT+5:30'),[1294, 0, 140, 20]],[new Date('22 April 2020, 17:00 GMT+5:30'),[1412, 0, 165, 21]],[new Date('23 April 2020, 08:00 GMT+5:30'),[1449, 0, 173, 21]],[new Date('23 April 2020, 17:00 GMT+5:30'),[1509, 0, 187, 21]],[new Date('24 April 2020, 08:00 GMT+5:30'),[1510, 0, 206, 24]],[new Date('24 April 2020, 17:00 GMT+5:30'),[1604, 0, 206, 24]],[new Date('25 April 2020, 08:00 GMT+5:30'),[1621, 0, 247, 25]],[new Date('25 April 2020, 17:00 GMT+5:30'),[1778, 0, 248, 26]],[new Date('26 April 2020, 08:00 GMT+5:30'),[1793, 0, 261, 27]],[new Date('26 April 2020, 17:00 GMT+5:30'),[1843, 0, 289, 29]],[new Date('27 April 2020, 08:00 GMT+5:30'),[1868, 0, 289, 29]],[new Date('27 April 2020, 17:00 GMT+5:30'),[1955, 0, 335, 31]],[new Date('28 April 2020, 08:00 GMT+5:30'),[1955, 0, 335, 31]],[new Date('28 April 2020, 17:00 GMT+5:30'),[2043, 0, 400, 31]],[new Date('29 April 2020, 08:00 GMT+5:30'),[2053, 0, 462, 34]],[new Date('29 April 2020, 17:00 GMT+5:30'),[2115, 0, 477, 36]],[new Date('30 April 2020, 08:00 GMT+5:30'),[2134, 0, 510, 39]],[new Date('30 April 2020, 17:00 GMT+5:30'),[2203, 0, 513, 39]],[new Date('01 May 2020, 08:00 GMT+5:30'),[2203, 0, 513, 39]],[new Date('01 May 2020, 17:00 GMT+5:30'),[2281, 0, 555, 41]],[new Date('02 May 2020, 08:00 GMT+5:30'),[2328, 0, 654, 42]],[new Date('02 May 2020, 17:00 GMT+5:30'),[2455, 0, 656, 43]],[new Date('03 May 2020, 08:00 GMT+5:30'),[2487, 0, 689, 43]],[new Date('03 May 2020, 17:00 GMT+5:30'),[2626, 0, 698, 43]],[new Date('04 May 2020, 08:00 GMT+5:30'),[2645, 0, 754, 43]],[new Date('04 May 2020, 17:00  GMT+5:30'),[2742, 0, 758, 45]],[new Date('05 May 2020, 08:00  GMT+5:30'),[2766, 0, 802, 50]],[new Date('05 May 2020, 17:00  GMT+5:30'),[2859, 0, 944, 53]],[new Date('06 May 2020, 08:00  GMT+5:30'),[2880, 0, 987, 56]],[new Date('07 May 2020, 08:00  GMT+5:30'),[2998, 0, 1130, 60]],[new Date('08 May 2020, 08:00  GMT+5:30'),[3071, 0, 1250, 62]],[new Date('09 May 2020, 08:00  GMT+5:30'),[3214, 0, 1387, 66]],[new Date('10 May 2020, 08:00  GMT+5:30'),[3373, 0, 1499, 74]],[new Date('11 May 2020, 08:00  GMT+5:30'),[3467, 0, 1653, 74]],[new Date('12 May 2020, 08:00  GMT+5:30'),[3573, 0, 1758, 80]],[new Date('13 May 2020, 08:00  GMT+5:30'),[3664, 0, 1873, 82]],[new Date('14 May 2020, 08:00  GMT+5:30'),[3729, 0, 1902, 83]],[new Date('15 May 2020, 08:00  GMT+5:30'),[3902, 0, 2072, 88]],[new Date('16 May 2020, 08:00  GMT+5:30'),[4057, 0, 2165, 95]],[new Date('17 May 2020, 08:00  GMT+5:30'),[4258, 0, 2441, 104]],[new Date('18 May 2020, 08:00  GMT+5:30'),[4259, 0, 2441, 104]],[new Date('19 May 2020, 08:00  GMT+5:30'),[4605, 0, 2783, 118]],[new Date('20 May 2020, 08:00  GMT+5:30'),[4926, 0, 2918, 123]],[new Date('21 May 2020, 08:00  GMT+5:30'),[5175, 0, 3066, 127]],[new Date('22 May 2020, 08:00  GMT+5:30'),[5515, 0, 3204, 138]],[new Date('23 May 2020, 08:00  GMT+5:30'),[5735, 0, 3238, 152]],[new Date('24 May 2020, 08:00  GMT+5:30'),[6017, 0, 3406, 155]],[new Date('25 May 2020, 08:00  GMT+5:30'),[6268, 0, 3538, 161]],[new Date('26 May 2020, 08:00  GMT+5:30'),[6532, 0, 3581, 165]],[new Date('27 May 2020, 08:00  GMT+5:30'),[6548, 0, 3698, 170]],[new Date('28 May 2020, 08:00  GMT+5:30'),[6991, 0, 3991, 182]],[new Date('29 May 2020, 08:00  GMT+5:30'),[7170, 0, 4215, 197]],[new Date('30 May 2020, 08:00  GMT+5:30'),[7284, 0, 4244, 198]],[new Date('31 May 2020, 08:00  GMT+5:30'),[7445, 0, 4410, 201]],[new Date('01 June 2020, 08:00  GMT+5:30'),[7823, 0, 4709, 213]],[new Date('02 June 2020, 08:00  GMT+5:30'),[8075, 0, 4843, 217]],[new Date('03 June 2020, 08:00  GMT+5:30'),[8361, 0, 5030, 222]],[new Date('04 June 2020, 08:00  GMT+5:30'),[8729, 0, 5176, 229]],[new Date('05 June 2020, 08:00  GMT+5:30'),[9237, 0, 5439, 245]],[new Date('06 June 2020, 08:00  GMT+5:30'),[9733, 0, 5648, 257]],[new Date('07 June 2020, 08:00  GMT+5:30'),[9733, 0, 5648, 257]],[new Date('08 June 2020, 08:00  GMT+5:30'),[10536, 0, 6185, 275]],[new Date('09 June 2020, 08:00  GMT+5:30'),[10947, 0, 6344, 283]],[new Date('10 June 2020, 08:00  GMT+5:30'),[11335, 0, 6669, 301]],[new Date('11 June 2020, 08:00  GMT+5:30'),[11610, 0, 6871, 321]],[new Date('12 June 2020, 08:00  GMT+5:30'),[12088, 0, 7292, 345]],[new Date('13 June 2020, 08:00  GMT+5:30'),[12616, 0, 7609, 365]],[new Date('14 June 2020, 08:00  GMT+5:30'),[13118, 0, 7875, 385]],[new Date('15 June 2020, 08:00  GMT+5:30'),[13615, 0, 8268, 399]],[new Date('16 June 2020, 08:00  GMT+5:30'),[13615, 0, 8268, 399]],[new Date('17 June 2020, 08:00  GMT+5:30'),[14091, 0, 8610, 417]],[new Date('18 June 2020, 08:00  GMT+5:30'),[14598, 0, 8904, 435]],[new Date('19 June 2020, 08:00  GMT+5:30'),[15181, 0, 9239, 465]],[new Date('20 June 2020, 08:00  GMT+5:30'),[15785, 0, 9638, 488]],[new Date('21 June 2020, 08:00  GMT+5:30'),[16594, 0, 9995, 507]],[new Date('22 June 2020, 08:00  GMT+5:30'),[17731, 0, 10995, 550]],[new Date('23 June 2020, 08:00  GMT+5:30'),[18322, 0, 11601, 569]],[new Date('24	June 2020, 08:00  GMT+5:30'),[18893, 0, 12116, 588]],[new Date('25	June 2020, 08:00  GMT+5:30'),[19557, 0, 12586, 596]],[new Date('26	June 2020, 08:00  GMT+5:30'),[20193, 0, 13119, 611]],[new Date('27	June 2020, 08:00  GMT+5:30'),[20943, 0, 13583, 630]],[new Date('28	June 2020, 08:00  GMT+5:30'),[21549, 0, 14215, 649]],[new Date('29	June 2020, 08:00  GMT+5:30'),[22147, 0, 14808, 660]],[new Date('30	June 2020, 08:00  GMT+5:30'),[22828, 0, 15506, 672]],[new Date('01	July 2020, 08:00  GMT+5:30'),[23492, 0, 16084, 697]],[new Date('02	July 2020, 08:00  GMT+5:30'),[24056, 0, 16629, 718]],[new Date('03	July 2020, 08:00  GMT+5:30'),[24825, 0, 17221, 735]],[new Date('04	July 2020, 08:00  GMT+5:30'),[25797, 0, 17597, 749]],[new Date('05	July 2020, 08:00  GMT+5:30'),[26554, 0, 18154, 773]],[new Date('06	July 2020, 08:00  GMT+5:30'),[27707, 0, 18761, 785]],[new Date('07	July 2020, 08:00  GMT+5:30'),[28636, 0, 19109, 809]],[new Date('08	July 2020, 08:00  GMT+5:30'),[29968, 0, 19627, 827]],[new Date('09	July 2020, 08:00  GMT+5:30'),[31156, 0, 20331, 845]],[new Date('10	July 2020, 08:00  GMT+5:30'),[32362, 0, 21127, 862]],[new Date('11	July 2020, 08:00  GMT+5:30'),[33700, 0, 21787, 889]]];