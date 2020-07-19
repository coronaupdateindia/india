var rawData=[[new Date(2020,02,15,12,0),[ 0, 0,0,0]],[new Date(2020,02,15,17,0),[ 0, 0,0,0]],[new Date(2020,02,15,23,30),[ 0, 0,0,0]],[new Date(2020,02,16,16,0),[ 0, 0,0,0]],[new Date(2020,02,17,9,15),[ 0, 0,0,0]],[new Date(2020,02,17,17,15),[ 0, 0,0,0]],[new Date(2020,02,24,20,15),[32, 1, 0, 1]],[new Date(2020,02,25,9,15),[32, 1, 0, 1]],[new Date(2020,02,25,18,45),[37, 1, 0, 1]],[new Date(2020,02,26,10,15),[37, 1, 0, 2]],[new Date(2020,02,26,20,00),[42, 1, 0, 3]],[new Date(2020,02,27,9,15),[42, 1, 0, 3]],[new Date(2020,02,28,9,30),[44, 1, 0, 3]],[new Date(2020,02,28,17,45),[44, 1, 0, 3]],[new Date(2020,02,29,10,00),[52, 1, 0, 4]],[new Date(2020,02,29,19,30),[58, 0, 1, 5]],[new Date(2020,02,30,10,30),[58, 0, 1, 5]],[new Date(2020,02,30,21,30),[69, 0, 1, 6]],[new Date(2020,02,31,20,30),[73, 0, 3, 6]],[new Date('01 April 2020, 09:00 GMT+5:30'),[74, 0, 5, 6]],[new Date('01 April 2020, 19:30 GMT+5:30'),[82, 0, 5, 6]],[new Date('02 April 2020, 09:00 GMT+5:30'),[82, 0, 5, 6]],[new Date('02 April 2020, 18:00 GMT+5:30'),[87, 0, 8, 7]],[new Date('03 April 2020, 09:00 GMT+5:30'),[87, 0, 8, 7]],[new Date('03 April 2020, 18:00 GMT+5:30'),[95, 0, 10, 8]],[new Date('04 April 2020, 09:00 GMT+5:30'),[95, 0, 10, 9]],[new Date('04 April 2020, 18:00 GMT+5:30'),[105, 0, 14, 10]],[new Date('05 April 2020, 09:00 GMT+5:30'),[105, 0, 14, 10]],[new Date('05 April 2020, 18:00 GMT+5:30'),[122, 0, 18, 11]],[new Date('06 April 2020, 09:00 GMT+5:30'),[122, 0, 18, 11]],[new Date('06 April 2020, 18:00 GMT+5:30'),[144, 0, 22, 12]],[new Date('07 April 2020, 09:00 GMT+5:30'),[144, 0, 22, 12]],[new Date('07 April 2020, 18:00 GMT+5:30'),[165, 0, 25, 13]],[new Date('08 April 2020, 08:00 GMT+5:30'),[165, 0, 25, 13]],[new Date('08 April 2020, 17:00 GMT+5:30'),[165, 0, 25, 13]],[new Date('09 April 2020, 08:00 GMT+5:30'),[179, 0, 25, 16]],[new Date('09 April 2020, 17:00 GMT+5:30'),[179, 0, 25, 16]],[new Date('10 April 2020, 08:00 GMT+5:30'),[241, 0, 26, 17]],[new Date('10 April 2020, 17:00 GMT+5:30'),[241, 0, 26, 17]],[new Date('11 April 2020, 08:00 GMT+5:30'),[308, 0, 31, 19]],[new Date('11 April 2020, 17:00 GMT+5:30'),[308, 0, 31, 19]],[new Date('12 April 2020, 08:00 GMT+5:30'),[432, 0, 44, 22]],[new Date('12 April 2020, 17:00 GMT+5:30'),[432, 0, 44, 22]],[new Date('13 April 2020, 08:00 GMT+5:30'),[516, 0, 44, 25]],[new Date('13 April 2020, 17:00 GMT+5:30'),[539, 0, 47, 26]],[new Date('14 April 2020, 08:00 GMT+5:30'),[539, 0, 54, 26]],[new Date('14 April 2020, 17:00 GMT+5:30'),[617, 0, 55, 26]],[new Date('15 April 2020, 08:00 GMT+5:30'),[650, 0, 59, 28]],[new Date('15 April 2020, 17:00 GMT+5:30'),[695, 0, 59, 30]],[new Date('16 April 2020, 08:00 GMT+5:30'),[766, 0, 64, 33]],[new Date('16 April 2020, 17:00 GMT+5:30'),[871, 0, 64, 36]],[new Date('17 April 2020, 08:00 GMT+5:30'),[930, 0, 73, 36]],[new Date('17 April 2020, 17:00 GMT+5:30'),[1021, 0, 74, 38]],[new Date('18 April 2020, 08:00 GMT+5:30'),[1099, 0, 86, 41]],[new Date('18 April 2020, 17:00 GMT+5:30'),[1272, 0, 88, 48]],[new Date('19 April 2020, 08:00 GMT+5:30'),[1376, 0, 93, 53]],[new Date('19 April 2020, 17:00 GMT+5:30'),[1604, 0, 94, 58]],[new Date('20 April 2020, 08:00 GMT+5:30'),[1743, 0, 105, 63]],[new Date('20 April 2020, 17:00 GMT+5:30'),[1851, 0, 106, 67]],[new Date('21 April 2020, 08:00 GMT+5:30'),[1939, 0, 131, 71]],[new Date('21 April 2020, 17:00 GMT+5:30'),[2066, 0, 131, 77]],[new Date('22 April 2020, 08:00 GMT+5:30'),[2178, 0, 139, 90]],[new Date('22 April 2020, 17:00 GMT+5:30'),[2272, 0, 144, 95]],[new Date('23 April 2020, 08:00 GMT+5:30'),[2407, 0, 179, 103]],[new Date('23 April 2020, 17:00 GMT+5:30'),[2407, 0, 179, 103]],[new Date('24 April 2020, 08:00 GMT+5:30'),[2624, 0, 258, 112]],[new Date('24 April 2020, 17:00 GMT+5:30'),[2624, 0, 258, 112]],[new Date('25 April 2020, 08:00 GMT+5:30'),[2815, 0, 265, 127]],[new Date('25 April 2020, 17:00 GMT+5:30'),[2815, 0, 265, 127]],[new Date('26 April 2020, 08:00 GMT+5:30'),[3071, 0, 282, 133]],[new Date('26 April 2020, 17:00 GMT+5:30'),[3071, 0, 282, 133]],[new Date('27 April 2020, 08:00 GMT+5:30'),[3301, 0, 313, 151]],[new Date('27 April 2020, 17:00 GMT+5:30'),[3301, 0, 313, 151]],[new Date('28 April 2020, 08:00 GMT+5:30'),[3548, 0, 394, 162]],[new Date('28 April 2020, 17:00 GMT+5:30'),[3548, 0, 394, 162]],[new Date('29 April 2020, 08:00 GMT+5:30'),[3744, 0, 434, 181]],[new Date('29 April 2020, 17:00 GMT+5:30'),[3774, 0, 434, 181]],[new Date('30 April 2020, 08:00 GMT+5:30'),[4082, 0, 527, 197]],[new Date('30 April 2020, 17:00 GMT+5:30'),[4082, 0, 527, 197]],[new Date('01 May 2020, 08:00 GMT+5:30'),[4395, 0, 613, 214]],[new Date('01 May 2020, 17:00 GMT+5:30'),[4395, 0, 613, 214]],[new Date('02 May 2020, 08:00 GMT+5:30'),[4721, 0, 735, 236]],[new Date('02 May 2020, 17:00 GMT+5:30'),[4721, 0, 735, 236]],[new Date('03 May 2020, 08:00 GMT+5:30'),[5054, 0, 896, 262]],[new Date('03 May 2020, 17:00 GMT+5:30'),[5055, 0, 896, 262]],[new Date('04 May 2020, 08:00 GMT+5:30'),[5428, 0, 1042, 290]],[new Date('04 May 2020, 17:00  GMT+5:30'),[5428, 0, 1042, 290]],[new Date('05 May 2020, 08:00  GMT+5:30'),[5804, 0, 1195, 319]],[new Date('05 May 2020, 17:00  GMT+5:30'),[5804, 0, 1195, 319]],[new Date('06 May 2020, 08:00  GMT+5:30'),[6245, 0, 1381, 368]],[new Date('07 May 2020, 08:00  GMT+5:30'),[6625, 0, 1500, 396]],[new Date('08 May 2020, 08:00  GMT+5:30'),[7012, 0, 1709, 425]],[new Date('09 May 2020, 08:00  GMT+5:30'),[7402, 0, 1872, 449]],[new Date('10 May 2020, 08:00  GMT+5:30'),[7796, 0, 2091, 472]],[new Date('11 May 2020, 08:00  GMT+5:30'),[8194, 0, 2545, 493]],[new Date('12 May 2020, 08:00  GMT+5:30'),[8541, 0, 2780, 513]],[new Date('13 May 2020, 08:00  GMT+5:30'),[8903, 0, 3246, 537]],[new Date('14 May 2020, 08:00  GMT+5:30'),[9267, 0, 3562, 566]],[new Date('15 May 2020, 08:00  GMT+5:30'),[9591, 0, 3753, 586]],[new Date('16 May 2020, 08:00  GMT+5:30'),[9931, 0, 4035, 606]],[new Date('17 May 2020, 08:00  GMT+5:30'),[10988, 0, 4308, 625]],[new Date('18 May 2020, 08:00  GMT+5:30'),[11379, 0, 4499, 659]],[new Date('19 May 2020, 08:00  GMT+5:30'),[11745, 0, 4804, 694]],[new Date('20 May 2020, 08:00  GMT+5:30'),[12140, 0, 5043, 719]],[new Date('21 May 2020, 08:00  GMT+5:30'),[12537, 0, 5219, 749]],[new Date('22 May 2020, 08:00  GMT+5:30'),[12905, 0, 5488, 773]],[new Date('23 May 2020, 08:00  GMT+5:30'),[13268, 0, 5880, 802]],[new Date('24 May 2020, 08:00  GMT+5:30'),[13664, 0, 6169, 829]],[new Date('25 May 2020, 08:00  GMT+5:30'),[14056, 0, 6412, 858]],[new Date('26 May 2020, 08:00  GMT+5:30'),[14460, 0, 6636, 888]],[new Date('27 May 2020, 08:00  GMT+5:30'),[14821, 0, 7139, 915]],[new Date('28 May 2020, 08:00  GMT+5:30'),[15195, 0, 7549, 938]],[new Date('29 May 2020, 08:00  GMT+5:30'),[15562, 0, 8003, 960]],[new Date('30 May 2020, 08:00  GMT+5:30'),[15934, 0, 8611, 980]],[new Date('31 May 2020, 08:00  GMT+5:30'),[16343, 0, 9230, 1007]],[new Date('01 June 2020, 08:00  GMT+5:30'),[16779, 0, 9919, 1038]],[new Date('02 June 2020, 08:00  GMT+5:30'),[17200, 0, 10780, 1063]],[new Date('03 June 2020, 08:00  GMT+5:30'),[17617, 0, 11894, 1092]],[new Date('04 June 2020, 08:00  GMT+5:30'),[18100, 0, 12212, 1122]],[new Date('05 June 2020, 08:00  GMT+5:30'),[18584, 0, 12667, 1155]],[new Date('06 June 2020, 08:00  GMT+5:30'),[19094, 0, 13003, 1190]],[new Date('07 June 2020, 08:00  GMT+5:30'),[19592, 0, 13316, 1219]],[new Date('08 June 2020, 08:00 GMT+5:30'),[20070, 0, 13635, 1249]],[new Date('09 June 2020, 08:00  GMT+5:30'),[20545, 0, 13956, 1280]],[new Date('10 June 2020, 08:00  GMT+5:30'),[21014, 0, 14365, 1313]],[new Date('11 June 2020, 08:00  GMT+5:30'),[21521, 0, 14735, 1347]],[new Date('12 June 2020, 08:00  GMT+5:30'),[22032, 0, 15101, 1385]],[new Date('13 June 2020, 08:00  GMT+5:30'),[22527, 0, 15493, 1415]],[new Date('14 June 2020, 08:00  GMT+5:30'),[23038, 0, 15883, 1448]],[new Date('15 June 2020, 08:00  GMT+5:30'),[23544, 0, 16325, 1477]],[new Date('16 June 2020, 08:00  GMT+5:30'),[24055, 0, 16664, 1505]],[new Date('17 June 2020, 08:00  GMT+5:30'),[24577, 0, 17082, 1533]],[new Date('18 June 2020, 08:00  GMT+5:30'),[25093, 0, 17430, 1560]],[new Date('19 June 2020, 08:00  GMT+5:30'),[25601, 0, 17819, 1591]],[new Date('20 June 2020, 08:00  GMT+5:30'),[26141, 0, 18159, 1618]],[new Date('21 June 2020, 08:00  GMT+5:30'),[26680, 0, 18694, 1638]],[new Date('22 June 2020, 08:00  GMT+5:30'),[27260, 0, 19349, 1663]],[new Date('23 June 2020, 08:00  GMT+5:30'),[27825, 0, 19909, 1684]],[new Date('24	June 2020, 08:00  GMT+5:30'),[28371, 0, 20513, 1710]],[new Date('25	June 2020, 08:00  GMT+5:30'),[28943, 0, 21088, 1735]],[new Date('26	June 2020, 08:00  GMT+5:30'),[29520, 0, 21498, 1753]],[new Date('27	June 2020, 08:00  GMT+5:30'),[30095, 0, 22030, 1771]],[new Date('28	June 2020, 08:00  GMT+5:30'),[30709, 0, 22409, 1789]],[new Date('29	June 2020, 08:00  GMT+5:30'),[31320, 0, 22800, 1808]],[new Date('30	June 2020, 08:00  GMT+5:30'),[31938, 0, 23240, 1827]],[new Date('01	July 2020, 08:00  GMT+5:30'),[32557, 0, 23662, 1846]],[new Date('02	July 2020, 08:00  GMT+5:30'),[33232, 0, 24030, 1867]],[new Date('03	July 2020, 08:00  GMT+5:30'),[33913, 0, 24593, 1886]],[new Date('04	July 2020, 08:00  GMT+5:30'),[34600, 0, 24933, 1904]],[new Date('05	July 2020, 08:00  GMT+5:30'),[35312, 0, 25406, 1925]],[new Date('06	July 2020, 08:00  GMT+5:30'),[36037, 0, 25892, 1943]],[new Date('07	July 2020, 08:00  GMT+5:30'),[36772, 0, 26315, 1960]],[new Date('08	July 2020, 08:00  GMT+5:30'),[37550, 0, 26720, 1977]],[new Date('09	July 2020, 08:00  GMT+5:30'),[38333, 0, 27289, 1993]],[new Date('10	July 2020, 08:00  GMT+5:30'),[39194, 0, 27718, 2008]],[new Date('11	July 2020, 08:00  GMT+5:30'),[40069, 0, 28147, 2022]],[new Date('12	July 2020, 08:00  GMT+5:30'),[40941, 0, 28649, 2032]],[new Date('13	July 2020, 08:00  GMT+5:30'),[41820, 0, 29162, 2045]],[new Date('14	July 2020, 08:00  GMT+5:30'),[42722, 0, 29770, 2055]],[new Date('15	July 2020, 08:00  GMT+5:30'),[43637, 0, 30503, 2069]],[new Date('16	July 2020, 08:00  GMT+5:30'),[44552, 0, 31286, 2079]],[new Date('17	July 2020, 08:00  GMT+5:30'),[45481, 0, 32103, 2089]],[new Date('18	July 2020, 08:00  GMT+5:30'),[46430, 0, 32973, 2106]],[new Date('19	July 2020, 08:00  GMT+5:30'),[47390, 0, 34035, 2122]]];